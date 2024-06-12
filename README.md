# Invoices
This application creates and manages Invoices for an account.
## General Information
- Create, update and delete invoices.
- Easily create and manage invices for your Clients, download the invoice as pdf onto your computer, or direct it to the printer.
- User is able to filter invoices by Client name or desciption of invoice.

This is the front end. Here is the link to the back end https://github.com/iamme24cl/invoices-backend

Demo Video hosted [_here_](https://www.loom.com/share/4c4f5df831e14e61827c769807e2b9e4?sharedAppSource=personal_library).

## ScreenShots :sunny:
##### Login Page
![login page](demo-images/login-page.png)
--
##### Home Page
![home page](demo-images/home-page.png)
--
##### Filter Invoices
![search1 page](demo-images/search-1.png)
--
##### Filter Invoices
![search2 page](demo-images/search-2.png)
--
##### Invoice Form with dynamically generated and removed form fields for items
![form page](demo-images/invoice-form.png)
--
##### Invoice Page
![invoice page](demo-images/invoice.png)
--
##### Download as PDF
![pdf page](demo-images/pdf-page.png)
--
##### Print Page
![print page](demo-images/print-page.png)
--

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Usage](#usage)
* [Contact](#contact)


## Technologies Used
### Frontend
* React
* Redux
* BootStrap
### Backend 
* Ruby on Rails
* PostgreSQL


## Usage
* Clone this backend repository to your machine  https://github.com/iamme24cl/invoices-backend
* Run `bundle` to install all gems listed in the gemfile
* Run `rails db:create && db:migrate` to create and migrate the database (If you are on a windows machine, you will need to make sure your PostgreSQL server is running. You can easily manage this in the PGAdmin desktop application.)
* Run `rails s` to run the server
* On Your front-end folder run `npm install && npm start` to install all dependecies listed in the package.json file and start the server and run the application in the browser.

## Contact
Created by [@iamme24cl](https://github.com/iamme24cl) - feel free to contact me!


