PGDMP     3    1                x            test    12.3    12.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16393    test    DATABASE     �   CREATE DATABASE test WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_India.1252' LC_CTYPE = 'English_India.1252';
    DROP DATABASE test;
                postgres    false            �            1259    16396    employee    TABLE       CREATE TABLE public.employee (
    empid integer NOT NULL,
    ename character varying(50) NOT NULL,
    job character varying(50) NOT NULL,
    mgr integer,
    hiredate date DEFAULT CURRENT_DATE NOT NULL,
    sal integer NOT NULL,
    comm integer,
    deptno integer NOT NULL
);
    DROP TABLE public.employee;
       public         heap    postgres    false            �            1259    16394    employee_empid_seq    SEQUENCE     �   CREATE SEQUENCE public.employee_empid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.employee_empid_seq;
       public          postgres    false    203                       0    0    employee_empid_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.employee_empid_seq OWNED BY public.employee.empid;
          public          postgres    false    202            �            1259    16405    sales    TABLE     �   CREATE TABLE public.sales (
    productid integer NOT NULL,
    orderid integer NOT NULL,
    custid integer NOT NULL,
    empid integer NOT NULL,
    total integer NOT NULL,
    quantity integer NOT NULL,
    discount integer
);
    DROP TABLE public.sales;
       public         heap    postgres    false            �            1259    16403    sales_productid_seq    SEQUENCE     �   CREATE SEQUENCE public.sales_productid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.sales_productid_seq;
       public          postgres    false    205                       0    0    sales_productid_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.sales_productid_seq OWNED BY public.sales.productid;
          public          postgres    false    204            �
           2604    16399    employee empid    DEFAULT     p   ALTER TABLE ONLY public.employee ALTER COLUMN empid SET DEFAULT nextval('public.employee_empid_seq'::regclass);
 =   ALTER TABLE public.employee ALTER COLUMN empid DROP DEFAULT;
       public          postgres    false    202    203    203            �
           2604    16408    sales productid    DEFAULT     r   ALTER TABLE ONLY public.sales ALTER COLUMN productid SET DEFAULT nextval('public.sales_productid_seq'::regclass);
 >   ALTER TABLE public.sales ALTER COLUMN productid DROP DEFAULT;
       public          postgres    false    204    205    205                      0    16396    employee 
   TABLE DATA           W   COPY public.employee (empid, ename, job, mgr, hiredate, sal, comm, deptno) FROM stdin;
    public          postgres    false    203   �                 0    16405    sales 
   TABLE DATA           ]   COPY public.sales (productid, orderid, custid, empid, total, quantity, discount) FROM stdin;
    public          postgres    false    205   f                  0    0    employee_empid_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.employee_empid_seq', 1, false);
          public          postgres    false    202                       0    0    sales_productid_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.sales_productid_seq', 1, false);
          public          postgres    false    204            �
           2606    16402    employee employee_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (empid);
 @   ALTER TABLE ONLY public.employee DROP CONSTRAINT employee_pkey;
       public            postgres    false    203            �
           2606    16410    sales sales_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_pkey PRIMARY KEY (productid);
 :   ALTER TABLE ONLY public.sales DROP CONSTRAINT sales_pkey;
       public            postgres    false    205            �
           2606    16411    sales sales_emp_id_fkey    FK CONSTRAINT     z   ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_emp_id_fkey FOREIGN KEY (empid) REFERENCES public.employee(empid);
 A   ALTER TABLE ONLY public.sales DROP CONSTRAINT sales_emp_id_fkey;
       public          postgres    false    203    2697    205               �   x�e�1�0���D�.I������]�-(�V���]n��{�8�/���qCH���f�\�ňC[CH	����`�~�;�"��h!pA3�2�U���3�#�n��C��c7�қ��f��~ᰮ�.��Ujr�W�q��3.,��f&ծ�Ro/�/u         .   x�3�42��4�4300�46�44�2�44�AC��!q��qqq ��6     