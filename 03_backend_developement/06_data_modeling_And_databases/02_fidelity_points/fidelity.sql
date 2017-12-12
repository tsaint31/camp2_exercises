--CREATE TABLE purchases (
--id uuid CONSTRAINT id_constraint PRIMARY KEY,
--client_name varchar(255),
--euros_spent integer,
--fidelity_points_earned integer,
--purchase_date timestamp,
--number_of_items integer);

--	•	Find the three oldest client's name
select 	purchase_date,client_name from purchases  
ORDER BY purchase_date ASC 
LIMIT 3

--	•	Find all clients that have not made a purchase in the last two months
select 	purchase_date,client_name from purchases  where purchase_date > (current_date-60)
ORDER BY purchase_date,client_name ASC 


--	•	Find all clients that have not made a purchase in the last month but are big customer (have purchased more than 3 items in one purchase previously)
select 	purchase_date,client_name,number_of_items from purchases  where purchase_date > (current_date-30) and number_of_items > 3
ORDER BY purchase_date,client_name ASC 

--	•	Find the best client (the one who spent the most money in one purchase)
select 	euros_spent, purchase_date,client_name,number_of_items from purchases  
ORDER BY euros_spent DESC 

--	•	BONUS, find how much money our store made in the summer

select 	SUM (euros_spent) from purchases  
where (purchase_date > '30/06/2017') and (purchase_date < '01/09/2017')


