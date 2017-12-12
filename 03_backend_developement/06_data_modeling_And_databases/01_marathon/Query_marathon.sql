--	•	Find all runners for the "New York City Marathon - Women" edition 2017
SELECT * from marathon where race='New York City Marathon - Women' and year=2017;

--	•	Find the name of the top 3 runners of the "New York City Marathon - Men" edition 2017
SELECT * from marathon where race='New York City Marathon - Men' and year=2017 and position in (1,2,3);

--	•	Find runners who ran the race in less than 2:30:00 and didn't start in the 100 first runners
SELECT * from marathon where time < '02:30:00' and bib>100;

--	•	Find runners who ran the course in:
--	◦	less than 2:15:00 and didn't start in the 100 first runners or;
--	◦	less than 2:30:00 if they started after the 100 firsts. We would like to have the data sorted first by runners who started in the first 100, followed by the others. We would also like to have them sorted by overlap time.

SELECT * from marathon where (time < '02:15:00' and bib>100) or (time < '02:30:00' and bib>100);

--	•	BONUS: Find runners (bib, name, and position) who made a better time than "Koen Naert". We would like to have the fastest first
SELECT * from marathon where time < (select time from marathon where name ='Koen Naert');

