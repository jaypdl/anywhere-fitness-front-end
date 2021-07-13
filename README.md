# Anywhere Fitness Frontend

Anywhere Fitness is an app meant to empower Fitness Instructors and Clients. 
Instructors can create classes and clients can log in and save classes they wish to join.

When an instructor creates a class they can specify:
 - The name of the class
 - The type of class 
 - The duration
 - The intensity
 - The class capacity
 - The date, time of when it will be held
 - The location of where the class will take place

## My Contributions

The frontend functionality of this web app was built out in 4 days by a team of 3 frontend developers.
- [Myself, Jay Ponce de Leon](https://github.com/jaypdl)
- [Jennifer Kramer](https://github.com/jenkrame21)
- and [Carlos Santiago](https://github.com/elCarlosSantiago) 

Due to this being a small team in a time crunch (this was a turned in project) I worked on most components, as have my other 2 team members.

Some highlights of my contributions include:

- The Redux, the reducers and actions along with the asynchronous API calls using Redux Thunk, were handled by both myself and Jennifer. 
We did the majority together while pair-programming over Zoom.
These API calls can be found starting at this line: [Redux Actions](https://github.com/jaypdl/anywhere-fitness-front-end/blob/main/src/actions/index.js#L53)

- Integrating forms ('LoginForm', 'SignUpForm', 'AddClassForm') to work with Redux

- The 'axiosWithAuth' component, which is a helper utility that grabs and sends in a user's JWT token from local storage, in order to authenticate with the backend.

- The 'PrivateRoute' component, which acts as guard so that only users issued a token can view the certain portions of the site.

- The 'NavBar' component which uses conditional logic to determine which navigation options to show a user, depending on if they are logged in.

- Work on routing throughout the project including in 'App', 'Home', 'User', and 'Instructor' components.

- Work on debugging code, and fixing general issues, including a solution to retain state through a page refresh.

<!-- ## Try out the deployment

The [original group project](https://github.com/Build-Week-Anywhere-Fitness-TT39/front-end) is deployed here: [https://anywhere-fitness-tt39-tt39.vercel.app/](https://anywhere-fitness-tt39-tt39.vercel.app/)


#### To login as an instructor and add classes, you can use the following test credentials:
```
Username: TestIns
Password: TestIns123
```

#### To login as a client and add classes to your "saved" list, you can use the following test credentials:
```
Username: TestUser
Password: TestUser123
```
 -->
## How to run locally:
1. Clone project, "cd" into the main folder.
1. Install dependencies with "npm i".
2. Run Locally with "npm start"
