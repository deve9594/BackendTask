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
                            pool.query("select employee.empid,ename,job from employee,sales where employee.empid=sales.empid;", function (err, result) {
                            if (err) throw err;
                            var i = 0;
                            // res.writeHead(200,{"content-type":"text/html"});    
                            // res.write("<table border='1'><tr><th>Name</th><th>Job</th><th>Eid</th><th>check Details</th></tr></table>");
                            res.writeHead(200,{"content-type":"text/html"});
                            while(i<result.rows.length){
                                if(i==0){
                                    res.write("<table border='1'><tr><th>Name</th><th>Job</th><th>Eid</th><th>check Employee Order Details</th></tr>")
                                    res.write("<tr>\
                                    <td>"+result.rows[i].ename+"</td>\
                                    <td>"+result.rows[i].job+"</td>\
                                    <td>"+result.rows[i].empid+"</td>\
                                    <td><a href='/emp_details?e_id="+result.rows[i].empid+"'>Details</a></td>\
                                    </tr><br>")
                                }
                                else if(i==result.rows.length-1){
                                    res.write("<tr>\
                                    <td>"+result.rows[i].ename+"</td>\
                                    <td>"+result.rows[i].job+"</td>\
                                    <td>"+result.rows[i].empid+"</td>\
                                    <td><a href='/emp_details?e_id="+result.rows[i].empid+"'>Details</a></td>\
                                    </tr><br>")
                                    res.write("</table>")
                                }
                                else{
                                    res.write("<tr>\
                                    <td>"+result.rows[i].ename+"</td>\
                                    <td>"+result.rows[i].job+"</td>\
                                    <td>"+result.rows[i].empid+"</td>\
                                    <td><a href='/emp_details?e_id="+result.rows[i].empid+"'>Details</a></td>\
                                    </tr><br>")
                                }
                                i++;
                            }
                            console.log(err);
                            res.end();
                            });
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
<<<<<<< HEAD
                        if (err) {
				console.log("error",err);
				throw err;
			}
=======
>>>>>>> d0fd4c44aa5aa45142296c9c4900f9543e5e21ba
                        res.writeHead(200,{"content-type":"text/html"},result.rows);
                        if (err) {
                            res.write("<h2>No data found</h2>")
                        }
                        else{
                            res.write("<label for='eid'>Employee Id:</label><br><br><input type='text' id='eid' name='e_id' value='"+result.rows[0].empid+"'><br><br><label for='eame'>Employee Name:</label><br><br><input type='text' id='ename' name='e_name' value='"+result.rows[0].ename+"'><br><br><label for='pid'>Product ID:</label><br><br><input type='text' id='pid' name='p_id' value='"+result.rows[0].productid+"'><br><br><label for='oid'>Order ID:</label><br><br><input type='text' id='oid' name='o_id' value='"+result.rows[0].orderid+"'><br><br><label for='amt'>Amount:</label><br><br><input type='text' id='amt' name='amt' value='"+result.rows[0].amount+"'><br><br>");
                        }
                        //console.log(result.rows[0].ename);
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
