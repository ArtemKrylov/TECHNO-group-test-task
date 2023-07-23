-- CREATE DATABASE technoapp;

CREATE TABLE CLIENT_T (
    ID_DEP_CLIENT varchar(100),
    NAME_CLIENT varchar(100)
);

INSERT INTO CLIENT_T (ID_DEP_CLIENT, NAME_CLIENT)
VALUES
    ('1-NOK', 'Шевченко А.В.'),
    ('2-DOK', 'Гончаров Б.В.'),    
    ('3-POK', 'Бобров К.П.')

CREATE TABLE PROJECT_NUM_T (
    id serial primary key,
    ID_DEP_CLIENT varchar(100),
    ID_PROJECT varchar(100)
);

INSERT INTO PROJECT_NUM_T (ID, ID_DEP_CLIENT, ID_PROJECT)
VALUES
    (1, '1-NOK', '1-NOK-31012022'),
    (2, '2-DOK', '2-DOK-31012022'),    
    (3, '3-POK', '3-POK-31012022')