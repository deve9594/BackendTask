var url = require('url');
var fs = require('fs')
var conn = require('./connection.js')
var pool = conn.getPool();


module.exports = {
    handleRequest: function(req,res){
        res.writeHead(200,{'Content-Type': 'text/html'});
        var path = url.parse(req.url).pathname;
        switch(path){
            case '/':
                fs.readFile("./index.html","utf8",function(err,data){
                        if (err) throw err;
                        res.write(data);
                        res.end();
                  });
                break;
            case '/emp_details':
                userurl = req.url
                urlinfo = url.parse(userurl,true)
                fs.readFile("./details.html","utf8",function(err,data){
                        if(err) throw err;
                        q = urlinfo.query
                        eid = q.e_id;
                        
                        pool.query("select employee.empid,ename,productid,orderid,total*quantity Amount from employee,sales where employee.empid='"+eid+"' and employee.empid=sales.empid;", function (err, result) {
                        if (err) {
				console.log("error",err);
				throw err;
			}
                        res.writeHead(200,{"content-type":"text/html"},result.rows);
                        res.write("<label for='eid'>Employee Id:</label><br><br><input type='text' id='eid' name='e_id' value='"+result.rows[0].empid+"'><br><br><label for='eame'>Employee Name:</label><br><br><input type='text' id='ename' name='e_name' value='"+result.rows[0].ename+"'><br><br><label for='pid'>Product ID:</label><br><br><input type='text' id='pid' name='p_id' value='"+result.rows[0].productid+"'><br><br><label for='oid'>Order ID:</label><br><br><input type='text' id='oid' name='o_id' value='"+result.rows[0].orderid+"'><br><br><label for='amt'>Amount:</label><br><br><input type='text' id='amt' name='amt' value='"+result.rows[0].amount+"'><br><br>");
                        console.log(result.rows[0].ename);
                        res.end();
                        });
                    });
                break;
            default :
                res.writeHead(404)
                res.write('no route define');
                res.end();
        }
    }
}
