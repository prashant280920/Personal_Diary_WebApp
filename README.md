# Personal_Diary_WebApp

My Personal_Diary_WebApp is a thougth/idea keeping memories webapp which allows you to write, store and views your idea/thoughts and memories.

A place to sore your content of diary live and safe.

My attempt at making a decent intgerative diary.

### App is live at
1. Deploy on GitHub - https://prashant280920.github.io/Personal_Diary_WebApp/

### Hosted 
* [Heroku](https://www.heroku.com/)

### Objective
Want to make project using 
* React.js
* Node.js
* Express.js framework
* PostgreSQL

### Required Features
1. Users can signUp and signIn
2. Users can create diary entry
3. Users can update diary entry
4. Users can view all diary entry made by he/she
5. Users can change avatar, diary name and textcolor.

### Upcoming Features
1. Change Theme Option
2. Animated opening of diary textarea
These feature will coming soon.

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

Download and Run the Project

### Installation 
1. Clone the repo `https://github.com/prashant280920/Personal_Diary_WebApp.git`.
2. Run `cd Personal_Diary_WebApp`.
3. Install dependencies using npm - Run `npm install`.

### Running the App
* Run `npm start`.

### Want to Solve Issues
Check [this](https://github.com/prashant280920/Personal_Diary_WebApp/issues) list.

### Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**. Go ahead and fork the project.
