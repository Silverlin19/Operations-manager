
CREATE TABLE departments (
    dep_id INTEGER PRIMARY KEY,
    dep_name VARCHAR(30) NOT NULL
    
);


CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_titles VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    salaries INTEGER NOT NULL,
    manager VARCHAR(30) NOT NULL
);



CREATE TABLE roles (
    id INTEGER PRIMARY KEY,
    job_titles VARCHAR(50) NOT NULL,
    role TEXT,
    department VARCHAR(30) NOT NULL,
    salaries INTEGER NOT NULL
);