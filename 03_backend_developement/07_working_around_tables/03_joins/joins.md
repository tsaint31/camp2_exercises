# Joins

1.
--	1	Write a query in SQL to display the first name, last name, department number, and department name for each employee.

select e.first_name,e.last_name,e.department_id, d.name from employees as e
inner join departments as d on d.id=e.department_id

--	2	Write a query in SQL to display the first and last name, department, city, and state province for each employee.
select e.first_name,e.last_name,e.department_id, d.name,l.city,l.state_province from employees as e
inner join departments as d on d.id=e.department_id
inner join locations as l on l.id=d.location_id

--	3	Write a query in SQL to display the first name, last name, salary, and job grade for all employees.
select e.first_name,e.last_name,e.salary,g.level  from employees as e
inner join job_grades g on g.lowest_salary<e.salary and g.highest_salary>e.salary

--	4	Write a query in SQL to display the first name, last name, department number and department name, for all employees for departments 8 or 4.
select e.first_name,e.last_name,e.department_id, d.name from employees as e
inner join departments as d on d.id=e.department_id and d.id in(8,4)

--	5	Write a query in SQL to display those employees who contain a letter z to their first name and also display their last name, department, city, and state province.
select e.first_name,e.last_name,e.department_id, d.name,l.city,l.state_province from employees as e
inner join departments as d on d.id=e.department_id
inner join locations as l on l.id=d.location_id
where e.first_name like '%z%'

--	6	Write a query in SQL to display all departments including those where does not have any employee.
select * from departments

--	7	Write a query in SQL to display the first and last name and salary for those employees who earn less than the employee earn whose number is 83.
select e.first_name,e.last_name, e.salary from employees as e
inner join employees as em on em.id=83 and e.salary<em.salary

--	8	Write a query in SQL to display the first name of all employees including the first name of their manager.
select e.first_name,em.first_name from employees as e
inner join employees as em on em.id=e.manager_id

--	9	Write a query in SQL to display the department name, city, and state province for each department.
select d.name,l.city,l.state_province from departments as d
inner join locations as l on l.id=d.location_id

--	10	Write a query in SQL to display the first name, last name, department number and name, for all employees who have or have not any department.
select e.first_name,e.last_name,e.department_id, d.name from employees as e
left join departments as d on d.id=e.department_id

--	11	Write a query in SQL to display the first name of all employees and the first name of their manager including those who does not working under any manager.
select e.first_name,em.first_name from employees as e
left join employees as em on em.id=e.manager_id

--	12	Write a query in SQL to display the first name, last name, and department number for those employees who work in the same department as the employee who hold the last name as Taylor.
select e.first_name,e.last_name, e.department_id from employees as e
inner join employees as em on em.last_name='Taylor' and e.department_id=em.department_id

--	13	Write a query in SQL to display the job title, department name, full name (first and last name ) of employee, and starting date for all the jobs which started on or after 1st January, 1993 and ending with on or before 31 August, 1997.

select
j.title,
p.first_name || ' ' || p.last_name as Full_Name, d.name,p.hire_date
from employees as p
inner join departments as d on d.id=p.department_id
inner join jobs as j on j.id=p.job_id
inner join job_history as h on h.employee_id=h.id and h.start_date>'1993-01-01' and h.end_date<'1997-08-31'

--	14	Write a query in SQL to display job title, full name (first and last name ) of employee, and the difference between maximum salary for the job and salary of the employee.
select p.id, p.first_name,p.last_name ,j.title, p.salary , MAX (em.salary)-p.salary as diff from employees as p
inner join employees as em on em.job_id=p.job_id
inner join jobs as j on j.id=p.job_id
Group by p.id,j.title

--	15	Write a query in SQL to display the name of the department, average salary and number of employees working in that department who got commission.
select d.name, AVG(e.salary), count(e.id) from departments as d
inner join employees as e on e.department_id=d.id and e.commission_pct is not null
GROUP BY d.name

--	16	Write a query in SQL to display the full name (first and last name ) of employee, and job title of those employees who is working in the department which ID is 8.
select
j.title,
p.first_name || ' ' || p.last_name as Full_Name, d.name
from employees as p
inner join departments as d on d.id=p.department_id and d.id=8
inner join jobs as j on j.id=p.job_id

--	17	Write a query in SQL to display the name of the country, city, and the departments which are running there.
select c.name,l.city,d.name from country c
inner join locations as l on c.id=l.country_id
inner join departments as d on d.location_id=l.id

--	18	Write a query in SQL to display department name and the full name (first and last name) of the manager.
select d.name,e.first_name,e.last_name from departments d
inner join employees e on e.id=d.manager_id

--	19	Write a query in SQL to display job title and average salary of employees.
select j.title, AVG(e.salary) from jobs as j
inner join employees as e on e.job_id=j.id
GROUP BY j.title

--	20	Write a query in SQL to display the details of jobs which was done by any of the employees who is presently earning a salary on and above 12000.
select * from employees as e
inner join job_history h on h.employee_id=e.id
where e.salary>12000

--	21	Write a query in SQL to display the department name, full name (first and last name) of manager, and their city.
select d.name,e.first_name,e.last_name,l.city from departments d
inner join employees e on e.id=d.manager_id
inner join locations as l on l.id=d.location_id

--	22	Write a query in SQL to display the employee ID, job name, number of days worked in for all those jobs in department 8.
select
j.title,
p.id, d.name,(current_date - p.hire_date)
from employees as p
inner join departments as d on d.id=p.department_id and d.id=8
inner join jobs as j on j.id=p.job_id

--	23	Write a query in SQL to display the full name (first and last name), and salary of those employees who working in any department located in London.
select
p.first_name || ' ' || p.last_name as Full_Name, p.salary,l.city
from employees as p
inner join departments as d on d.id=p.department_id
inner join locations as l on l.id=d.location_id and l.city='London'


--	24	Write a query in SQL to display full name(first and last name), job title, starting and ending date of last jobs for those employees with worked without a commission percentage.
select e.last_name,e.first_name,j.title,h.start_date,h.end_date from employees e
inner join jobs as j on j.id=e.job_id
inner join job_history as h on h.employee_id=e.id
where e.commission_pct=0

--	25	Write a query in SQL to display the department name and number of employees in each of the department.
select d.name, count(e.id) from departments as d
inner join employees as e on e.department_id=d.id
GROUP BY d.name

--	26	Write a query in SQL to display the full name (fisrt and last name ) of employee with ID and name of the country presently where (s)he is working.
select e.first_name,e.last_name,l.country_id,c.name from employees e
inner join departments as d on d.id=e.department_id
inner join locations as l on l.id=d.location_id
inner join country as c on c.id=l.country_id
