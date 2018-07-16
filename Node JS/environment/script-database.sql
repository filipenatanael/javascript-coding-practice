create database node_js_pratice;

create table news(
  id_news int not null primary key auto_increment,
  title varchar(100),
  nwes text,
  create_on timestamp default current_timestamp
);
