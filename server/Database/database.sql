create database if not exists basDB;
use basDB;
drop table if exists events;
drop table if exists bookings;
drop table if exists building;
drop table if exists admin;
drop table if exists user;


create table if not exists building(
	building_name varchar(255),
	building_id varchar(255) primary key
);

create table if not exists admin(
	admin_id varchar(255) primary key,
    admin_name varchar(255),
    admin_password LONGTEXT
);

create table if not exists user(
	user_id varchar(255) primary key,
    user_name varchar(255),
    user_password LONGTEXT
); 

create table if not exists bookings(
	booking_id varchar(255) not null,
    user_id varchar(255) not null,
    building_id varchar(255) not null,
    booking_status set("APPROVED","DENIED","COMPLETED","REQUESTED"),
    admin_id varchar(255)	,
    primary key(booking_id),
    foreign key(user_id) references user(user_id),
    foreign key(building_id) references building(building_id),
    foreign key(admin_id) references admin(admin_id)
);

create table if not exists events(
	event_id varchar(255),
    event_day varchar(255),
    start_time varchar(255),
    end_time varchar(255),
    room_no varchar(255),
    desc_Heading varchar(255),
    desc_body longtext,
    booking_id varchar(255),
    primary key(event_id),
    foreign key (booking_id) references bookings(booking_id)
);

show tables;

insert into admin values("75@iiita.ac.in","Admin","$2b$12$iMWMxM9bKIWrN93j5QmGVeV6LCw8plkvoZo0c7PgNrCvZN80BBBEy");
insert into building values
("CC3","1"),("CC2","2"),("CC3","3"),
("Auditorium","4"), ("Pavillion","12"),
("SAC","5"), ("ClockTower","6"),
("Basketball_Court","7"), ("AAA","8"),
("Lecture Threatur","9"), ("Dormitory","10"),
("Cafeteria","11"),("Main_Ground","13");

