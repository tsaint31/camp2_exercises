# Sorting And Filtering

1.

--	1	Write a query in SQL to display the full name (first and last name), and salary for those employees who earn below 6000.
select employees.first_name,employees.last_name,salary from employees
where employees.salary<6000;

--	2	Write a query in SQL to display the first and last_name, department number and salary for those employees who earn more than 8000.
select employees.first_name,employees.last_name,employees.salary,employees.department_id from employees
where employees.salary>8000;

--	3	Write a query in SQL to display the first and last name, and department number for all employees whose last name is "McEwen".
select employees.first_name,employees.last_name,employees.department_id from employees
where employees.last_name='McEwen';

--	4	Write a query in SQL to display all the information for all employees without any department number.
select
p.id,
p.first_name,
p.last_name,
p.email,
p.phone_number,
p.hire_date,
p.job_id,
p.salary,
p.commission_pct,
p.manager_id

 from employees as p


--	5	Write a query in SQL to display all the information about the department Marketing.
select * from departments as d
where d.name='Marketing'

--	6	Write a query in SQL to display the full name (first and last), hire date, salary, and department number for those employees whose first name does not containing the letter M and make the result set in ascending order by department number.
select
p.id,
p.first_name,
p.last_name,
p.hire_date,
p.salary,
p.department_id
from employees as p
where p.first_name not like '%M%'

--	7	Write a query in SQL to display all the information of employees whose salary is in the range of 8000 and 12000 and commission is not null or department number is except the number 4, 12 and 7 and they have been hired before June 5th, 1987.
select
p.id,
p.first_name,
p.last_name,
p.hire_date,
p.salary,
p.department_id,
p.commission_pct
from employees as p
where salary > 8000 and salary <12000 and commission_pct is not null and p.department_id not in (4,12,7)
and hire_date>'1987-06-05'


--	8	Write a query in SQL to display the full name (first and last name), and salary for all employees who does not earn any commission.
select
p.id,
p.first_name,
p.last_name,
p.hire_date,
p.salary,
p.department_id,
p.commission_pct
from employees as p
where commission_pct=0
--	9	Write a query in SQL to display the full name (first and last), the phone number and email separated by hyphen, and salary, for those employees whose salary is within the range of 9000 and 17000. The column headings assign with Full_Name, Contact_Details and Remuneration respectively.
select
p.first_name || ' ' || p.last_name as Full_Name,
p.phone_number || '-' || p.email as Contact_Details,
p.salary as Remuneration
from employees as p
where salary > 9000 and salary <17000

--	10	Write a query in SQL to display the first and last name, and salary for those employees whose first name is ending with the letter m.
select
p.id,
p.first_name,
p.last_name,
p.hire_date,
p.salary,
p.department_id
from employees as p
where p.first_name like '%m'

--	11	Write a query in SQL to display the full name (first and last) name, and salary, for all employees whose salary is out of the range 7000 and 15000 and make the result set in ascending order by the full name.
select
p.id,
p.first_name || ' ' || p.last_name as Full_Name,
p.hire_date,
p.salary,
p.department_id,
p.commission_pct
from employees as p
where (salary > 15000 or salary <7000)
Order by Full_name ASC

--	12	Write a query in SQL to display the full name (first and last), job id and date of hire for those employees who was hired during November 5th, 2007 and July 5th, 2009.
select
p.id,
p.first_name || ' ' || p.last_name as Full_Name,
p.hire_date,
p.salary,
p.job_id,
p.commission_pct
from employees as p
where hire_date>'2007-11-05' and hire_date<'2009-07-05'

--	13	Write a query in SQL to display the the full name (first and last name), and department number for those employees who works either in department 7 or 9.
select
p.first_name || ' ' || p.last_name as Full_Name,
p.department_id
from employees as p
where p.department_id in (7,9)


--	14	Write a query in SQL to display the full name (first and last name), salary, and manager number for those employees who is working under a manager.
select
p.first_name || ' ' || p.last_name as Full_Name,
p.manager_id,
p.salary
from employees as p
where p.manager_id is not null


--	15	Write a query in SQL to display all the information from Employees table for those employees who was hired before June 21st, 2002.
select
p.id,
p.first_name,
p.last_name,
p.hire_date,
p.salary,
p.department_id,
p.commission_pct
from employees as p
where  hire_date<'2002-06-21'

--	16	Write a query in SQL to display the first and last name, email, salary and manager ID, for those employees whose managers are hold the ID 21, 4 or 46.
select
p.first_name || ' ' || p.last_name as Full_Name,
p.manager_id,
p.salary,
p.email
from employees as p
where p.manager_id in (21,4,46)

--	17	Write a query in SQL to display all the information for all employees who have the letters D, S, or N in their first name and also arrange the result in descending order by salary.
select
p.id,
p.first_name,
p.last_name,
p.hire_date,
p.salary,
p.department_id
from employees as p
where p.first_name like '%D%' or p.first_name like '%S%' or p.first_name like '%N%'
ORDER BY p.salary DESC

--	18	Write a query in SQL to display the full name (first name and last name), hire date, commission percentage, email and telephone separated by '-', and salary for those employees who earn the salary above 11000 or the seventh digit in their phone number equals 3 and make the result set in a descending order by the first name.
select
p.first_name,
p.last_name,
p.hire_date,
p.commission_pct,
p.salary,
p.phone_number || '-' || p.email as Contact_Details,
substring(p.phone_number from 7 for 1)
from employees as p
where p.salary>11000 and substring(p.phone_number from 7 for 1)='3'
ORDER BY p.first_name DESC

--	19	Write a query in SQL to display the first and last name, and department number for those employees who holds a letter s as a 3rd character in their first name.
select
p.first_name,
p.last_name,
p.hire_date,
p.commission_pct,
p.salary,
p.phone_number || '-' || p.email as Contact_Details,
substring(p.phone_number from 7 for 1)
from employees as p
where substring(p.first_name from 3 for 1)='s'



--	20	Write a query in SQL to display the employee ID, first name, job id, and department number for those employees who is working except the departments 5, 3 and 8.
select
p.id,
p.first_name || ' ' || p.last_name as Full_Name,
p.job_id,
p.department_id
from employees as p
where p.department_id  not in (5,3,8)

--	21	Write a query in SQL to display the employee Id, first name, job id, and department number for those employees whose department number equals 3, 4 or 9.
select
p.id,
p.first_name || ' ' || p.last_name as Full_Name,
p.job_id,
p.department_id
from employees as p
where p.department_id   in (3,4,9)

--	22	Write a query in SQL to display the ID for those employees who did two or more jobs in the past.

SELECT   COUNT(h.employee_id), h.employee_id
FROM     job_history as h
GROUP BY h.employee_id
HAVING   COUNT(h.employee_id) > 1


--	23	Write a query in SQL to display job ID, number of employees, sum of salary, and difference between highest salary and lowest salary for a job.

select job_id, COUNT(e.id),SUM(e.salary), MAX(e.salary)-MIN(e.salary)as diff from employees e
GROUP by job_id
ORDER BY job_id

--	24	Write a query in SQL to display job ID for those jobs that were done by two or more for more than 300 days.

select job_id, COUNT(e.id) as diff from employees e
where e.hire_date<current_date-300
GROUP BY job_id
HAVING   COUNT(e.id) > 1


--	25	Write a query in SQL to display the country ID and number of cities in that country we have.

select l.country_id,COUNT(l.id) from locations l
GROUP BY l.country_id

--	26	Write a query in SQL to display the manager ID and number of employees managed by the manager.

select e.id,count(em.id) from employees e
where e.id=e.manager_id
GROUP BY e.id

--	27	Write a query in SQL to display the details of jobs in descending sequence on job title.
select * from jobs
order by title DESC

--	28	Write a query in SQL to display the first and last name and date of joining of the employees who is either Sales Representative or Sales Man.
select e.first_name,e.last_name,e.hire_date from employees e
inner join jobs as j on j.id=e.job_id and j.title in ('Sales Representative','Sales Man')

select e.first_name,e.last_name,e.hire_date from employees e
where e.job_id=16

--	29	Write a query in SQL to display the average salary of employees for each department who gets a commission percentage.
select e.department_id, AVG(e.salary) from employees as e
where e.commission_pct is not null
GROUP BY e.department_id

--	30	Write a query in SQL to display those departments where any manager is managing 4 or more employees.
select e.department_id,count(manager_id) from employees e
GROUP BY e.department_id
HAVING   COUNT(manager_id) > 3

--	31	Write a query in SQL to display those departments where more than ten employees work who got a commission percentage.
select e.department_id,count(e.id) from employees e
where e.commission_pct is not null
GROUP BY e.department_id
HAVING   COUNT(e.department_id) > 10

--	32	Write a query in SQL to display the employee ID and the date on which he ended his previous job.
select j.employee_id, MIN(j.end_date) from job_history as j
GROUP BY j.employee_id

--	33	Write a query in SQL to display the details of the employees who have no commission percentage and salary within the range 7000 to 12000 and works in that department which number is 5.
select
p.id,
p.first_name || ' ' || p.last_name as Full_Name,
p.job_id,
p.department_id
from employees as p
where p.department_id   in (5) and p.salary >7000 and p.salary<12000 and p.commission_pct=0

--	34	Write a query in SQL to display the job ID for those jobs which average salary is above 8000.
select job_id, AVG(e.salary) from employees as e
GROUP BY job_id
HAVING AVG(e.salary)>8000

--	35	Write a query in SQL to display job Title, the difference between minimum and maximum salaries for those jobs which select j.title, max_salary-min_salary as diff from jobs j
where j.max_salary<18000 and j.max_salary>12000

--	36	Write a query in SQL to display all those employees whose first name or last name starts with the letter D.
select
p.id,
p.first_name,
p.last_name,
p.hire_date,
p.salary,
p.department_id
from employees as p
where p.first_name like 'D%' or  p.last_name like 'D%'

--	37	Write a query in SQL to display the details of jobs which minimum salary is greater than 9000.


select e.job_id, Min(e.salary) from employees as e
GROUP BY e.job_id
HAVING Min(e.salary)>9000



--	38	Write a query in SQL to display those employees who joined after 7th September, 1987.
select
p.id,
p.first_name,
p.last_name,
p.hire_date,
p.salary,
p.department_id,
p.commission_pct
from employees as p
where hire_date>'1987-09-07'
