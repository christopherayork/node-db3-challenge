# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT p.ProductName, c.CategoryName 
from Products as p 
join Categories as c 
on p.CategoryID = c.CategoryID
#### Actually shows 77


### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT o.OrderID, s.ShipperName 
from Orders as o 
join Shippers as s 
on o.ShipperID = s.ShipperID
where o.OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT p.ProductName, od.Quantity  
FROM OrderDetails as od
join Products as p
on od.ProductID = p.ProductID
where od.OrderID = 10251
order by p.ProductName


### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT o.OrderID, c.CustomerName, e.LastName as 'Employee Last Name'
FROM Orders as o
join Customers as c
on o.CustomerID = c.CustomerID
join Employees as e
on o.EmployeeID = e.EmployeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
SELECT c.CategoryName, COUNT(p.CategoryID) as 'Count'
FROM Categories as c
join Products as p
on c.CategoryID = p.CategoryID
group by p.CategoryID
### There are only 8 categories

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 