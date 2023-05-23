CREATE DATABASE deliveryapp;

-- CREATE TABLE shops(shop_id SERIAL PRIMARY KEYdescription VARCHAR(255),);

-- CREATE TABLE public.shops
-- (
--     id "char"[] NOT NULL,
--     name "char"[] NOT NULL,
--     address "char"[] NOT NULL,
--     PRIMARY KEY (id)
-- )

-- TABLESPACE pg_default;

-- ALTER TABLE IF EXISTS public.shops
--     OWNER to postgres;

CREATE TABLE shops (
	id serial primary key,
	name character varying(200) NOT NULL,
	shopAddress character varying(200) NOT NULL
);