/* Create database */
create database node_js_pratice;

/* Create tables */
create table news(
  id_news int not null primary key auto_increment,
  title varchar(100),
  content text,
  create_on timestamp default current_timestamp
);

/* Create registres */
insert into news(title, content) values('What is Climate Change?','Climate change, also called global warming...');
