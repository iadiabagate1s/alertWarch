-- Active: 1649533258290@@127.0.0.1@5432@alertwatch@public


-- Path: backend/db/dbintialize.sql
-- Active: 1649533258290@@


SELECT 'CREATE DATABASE alertwatch' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'alertwatch')

-- Path: backend/db/dbintialize.sql
-- Active: 1649533258290@@



DROP TABLE IF EXISTS alertwatch.users;
DROP TABLE IF EXISTS alertwatch.client_sites;
DROP TABLE IF EXISTS alertwatch.user_sites;
/* create table users with columns username, password, display_name, and privilege */
CREATE TABLE  IF NOT EXISTS users (
    username VARCHAR(254) PRIMARY KEY,
    password VARCHAR(254) NOT NULL,
    display_name VARCHAR(254) NOT NULL,
    privilege BIGINT NOT NULL
);

/* Create table client_sites with columns site and display_name */
CREATE TABLE IF NOT EXISTS client_sites (
    site VARCHAR(500) PRIMARY KEY,
    display_name VARCHAR(254) NOT NULL
);

/* create table user_sites with columns id primary key autoincrement, user_usernmae FK from users, and client_sites_site FK from client_sites */
CREATE TABLE IF NOT EXISTS user_sites (
    id SERIAL PRIMARY KEY,
    user_username VARCHAR(254) NOT NULL,
    client_sites_site VARCHAR(500) NOT NULL,
    FOREIGN KEY (user_username) REFERENCES users (username),
    FOREIGN KEY (client_sites_site) REFERENCES client_sites (site)
);



/* populate table users with username, password, display_name, and privilege */
INSERT INTO users (username, password, display_name, privilege) VALUES ('admin@gmail.com', 'admin', 'Administrator', 1);
INSERT INTO users (username, password, display_name, privilege) VALUES ('user@gmail.com', 'user', 'User', 2);
INSERT INTO users (username, password, display_name, privilege) VALUES ('guest@gmail.com', 'guest', 'Guest', 3);
INSERT INTO users (username, password, display_name, privilege) VALUES ('visitor@gmail.com', 'visitor', 'Visitor', 3);

/* populate table client_sites with site and display_name */
INSERT INTO client_sites (site, display_name) VALUES ('www.google.com', 'Google');
INSERT INTO client_sites (site, display_name) VALUES ('www.yahoo.com', 'Yahoo');
INSERT INTO client_sites (site, display_name) VALUES ('www.bing.com', 'Bing');
INSERT INTO client_sites (site, display_name) VALUES ('www.cnn.com', 'CNN');
INSERT INTO client_sites (site, display_name) VALUES ('www.foxnews.com', 'Fox News');
INSERT INTO client_sites (site, display_name) VALUES ('www.cbsnews.com', 'CBS News');
INSERT INTO client_sites (site, display_name) VALUES ('www.nbcnews.com', 'NBC News');

/* populate table user_sites with user_username FK from users, and client_sites_site FK from client_sites */
INSERT INTO user_sites (user_username, client_site) VALUES ('admin@gmail.com', 'www.google.com');
INSERT INTO user_sites (user_username, client_site) VALUES ('admin@gmail.com', 'www.yahoo.com');
INSERT INTO user_sites (user_username, client_site) VALUES ('admin@gmail.com', 'www.bing.com');
INSERT INTO user_sites (user_username, client_site) VALUES ('admin@gmail.com', 'www.cnn.com');



INSERT INTO user_sites (user_username, client_site) VALUES ('user@gmail.com', 'www.cnn.com');
INSERT INTO user_sites (user_username, client_site) VALUES ('user@gmail.com', 'www.foxnews.com');
INSERT INTO user_sites (user_username, client_sitE) VALUES ('user@gmail.com', 'www.google.com');



INSERT INTO user_sites (user_username, client_site) VALUES ('guest@gmail.com', 'www.google.com');
INSERT INTO user_sites (user_username, client_site) VALUES ('guest@gmail.com', 'www.foxnews.com');
INSERT INTO user_sites (user_username, client_site) VALUES ('guest@gmail.com', 'www.nbcnews.com');










