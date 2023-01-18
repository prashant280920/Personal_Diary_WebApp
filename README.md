# Personal_Diary_WebApp

My Personal_Diary_WebApp is a thought/idea of keeping memories on this webapp which allows you to write, store and view your ideas/thoughts and memories.

A place to store your content of diary live and safe.

My attempt at making a decent interactive diary.

**Note**:- This WebApp is only for laptop users. We are trying to make this fesible for Android users also. 

# Glimps of UI
![2023-01-18 (1)](https://user-images.githubusercontent.com/60234231/213196143-689803b3-ef0b-425f-b830-7b5e9e5960cc.png)
![2023-01-18 (6)](https://user-images.githubusercontent.com/60234231/213196326-091d441e-8f0d-495c-b700-6197d7134d3b.png)

[comment]: <> (### App is live at)
[comment]: <> (1. Deploy on GitHub - https://prashant280920.github.io/Personal_Diary_WebApp/)


### Objective
Want to make project using 
* React.js
* Node.js
* Express.js framework
* MySQL/PostgreSQL

### Required Features
1. Users can signUp and signIn
2. Users can create diary entry
3. Users can update diary entry
4. Users can view all diary entry made by them.
5. Users can change avatar, diary name and textcolor.
6. Users can bookmark there favourite diary entry. 

### Upcoming Features
1. Change Theme Option
2. Animated opening of diary textarea
These feature will come soon.

### Technologies Used
1. Frontend
    * [Reactjs](https://reactjs.org/) - A JavaScript library for building user interfaces.
2. Backend
    * [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
    * [Express.js framework](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
3. Database
    * [PostgreSQL](https://www.postgresql.org/) - PostgreSQL is a powerful, open source object-relational database system.
    
### Plug-ins/Add-ons used
* [Sublime Text](https://www.sublimetext.com/) - A sophisticated text editor for code, markup and prose.
* [Tachyons](https://www.npmjs.com/package/tachyons) - Quickly build and design new UI without writing CSS.
* [React-icons](https://www.npmjs.com/package/react-icons) - Include popular icons in your React projects easily with react-icons.
* [Font-Awesome](https://fonts.google.com/)

## API End Points
Whole code of Backend present on [this](https://github.com/prashant280920/diaryApp_server) link.

|Verb   |Enpoints                 | Action                         | Description                                |
|:------|:------------------------|:-------------------------------|:-------------------------------------------|
|GET    |/                        | -                              |-                                           |
|POST   |/signIn                  |log in user                     |Log in to the app                           |
|POST   |/signUp                  |create user                     |Sign up to the app                          |
|PUT    |/profile/:id             |profile info of user            |Information regarding diary name etc.       |
|POST   |/textContent             |update a diary entry            |Add or modify diary entry                   |
|POST   |/showText                |fetch specific entry            |view specific diary entry                   |
|POST   |/fav                     |fetch all entry of a month      |show favourite diary entries of a month     |


# Getting Started - Want To Contribute?
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**. Go ahead and fork the project.

There are three parts to start the project locally

### Run Frontend - React App
1. Fork this repo
1. Clone the repo `https://github.com/prashant280920/Personal_Diary_WebApp.git`.
2. Run `cd Personal_Diary_WebApp`.
3. Install dependencies using npm - Run `npm install`.
4. Run app using `npm start`. This will run the app on [localhost:3000](http://localhost:3000)

### Run Database - MySQL server
For storing data we have to use DataBase. I prefer to use MYSQL.
1. Install Mysql in your machine [MySQL installer](https://dev.mysql.com/downloads/installer/). You can also folow any youtube link to install mysql and run mysql from cmd.
2. Now open cmd and run `mysql -u root -p <password>`. Try to use "" empty password. This will run the MYSQL monitor.
3. Now we have to cretae Database. Run `CREATE DATABASE diary_data`
4. Now to use diary_data Database. Run `USE diary_data`;
5. Now we have to create three table. Run the below three command to create 3 tables. Take care of spelling. Make sure use of lowecase and uppercase letter. As it may casue issue in server side. So you can just copy paste from here.
```python
CREATE TABLE login (
   id serial PRIMARY KEY,
   hash VARCHAR(100) NOT NULL,
   email VARCHAR(100) UNIQUE NOT NULL
  );
```
```python
CREATE TABLE profile(
   id serial PRIMARY KEY,
   name VARCHAR(100),
   email VARCHAR(100) UNIQUE NOT NULL,
   diaryName VARCHAR(100),
   Avatar VARCHAR(20) NOT NULL DEFAULT 'Women',
   textColor VARCHAR(25) NOT NULL DEFAULT 'rgb(0, 0, 0)',
   joined TIMESTAMP NOT NULL
  );
```
```python
CREATE TABLE userscontent (
   id serial PRIMARY KEY,
   email text NOT NULL,
   textContent text NOT NULL,
   dates DATE NOT NULL,
   fav boolean
  );
```


### Run Backend - Diary App server
1. Fork [Diary App Server](https://github.com/prashant280920/diaryApp_server.git)
2. Clone the repo `https://github.com/prashant280920/diaryApp_server.git`
3. Navigate to directory using `cd diaryApp_server`
4. Install dependencies using npm - Run `npm install`.
5. Run app using `npm start`. This will run the app on [localhost:5000](http://localhost:5000)
6. If you face issue like this. 
![2023-01-16](https://user-images.githubusercontent.com/60234231/213192744-0af3ab66-a021-41e1-acfa-e913c9fddcfa.png)
7. Then go to mysql server and run command also shown in figure below.
```python 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
```
![2023-01-16 (2)](https://user-images.githubusercontent.com/60234231/213192419-6131e9ac-b796-47b2-a4a7-451676ac86b8.png)


### Want to Solve Issues

Check [this](https://github.com/prashant280920/Personal_Diary_WebApp/issues) list.

