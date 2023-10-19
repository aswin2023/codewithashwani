CREATE TABLE employees;

CREATE TABLE deparments(
     dep_id INT NOT NULL AUTO_INCREMENT,
    dep_name VARCHAR(20),
    dep_location VARCHAR(15)
    PRIMARY KEY(dep_id)
)

CREATE TABLE salary_grade(
    grade INT NOT NULL AUTO_INCREMENT,
    min_salary INTEGER,
    max_salary INTEGER,
    PRIMARY KEY(grade)
)

CREATE TABLE employees(
    emp_id INT NOT NULL AUTO_INCREMENT,
    emp_name VARCHAR(15),
    job_name VARCHAR(10),
    manager_id INTEGER,
    hire_date DATE,
    salary DECIMAL(10,2),
    commision DECIMAL(7,2),
    dep_id INTEGER
    PRIMARY KEY(emp_id),
    FOREIGN KEY(dep_id) REFERENCES employee(dep_id)
)
DROP TABLE employees;