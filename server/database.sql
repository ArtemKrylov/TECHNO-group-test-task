-- CREATE DATABASE deliveryapp;

-- CREATE TABLE shops (
-- 	id serial primary key,
-- 	name character varying(200) NOT NULL,
-- 	shopAddress character varying(200) NOT NULL
-- );

-- CREATE TABLE products (
-- 	id serial primary key,
-- 	shop_Id integer references shops(id),
-- 	product_Name character varying(200) NOT NULL,
-- 	price integer NOT NULL,
-- 	number integer NOT NULL,
-- 	image character varying(200)
-- );

-- CREATE TABLE orders (
-- 	id serial primary key,
-- 	name character varying(200) NOT NULL,
-- 	email character varying(200) NOT NULL,
-- 	phone character varying(20) NOT NULL,
-- 	customer_address character varying(200) NOT NULL,
-- 	shop_Id integer references shops(id),
-- 	total_price integer NOT NULL,
-- 	order_items character varying(2000)
-- );


