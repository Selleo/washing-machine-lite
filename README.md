# Washing Machine manager

Create an application that allows to book washing machine reservations.

It has simple form that allows you to enter the times of reservations per week days. 

You start with one week view that will represent current week's reservations.

#### Libraries used 
- react-query
- react-hook-form
- reactstrap (react bootstrap library)
- date-fns (for date manipulation)
- zod (for validation)
 
During the assignment you can add any package you wish.

## Setup
When running the app FOR THE FIRST TIME you must run:

`yarn run setup && yarn start`

## Running the project

Once you have run the setup, you can run the project with:

`yarn start`

It will start JSON server at `localhost:3000` and Vite app at `localhost:4000`

## To finish your MVP you need to achieve those points:

### 1. Add validation of reservations that will check

- if both `start` and `end` is present and set (will show under start/end input - 'Can not be empty')
- if `end` time is after `start` (will show under end input - 'End time should be after start time')
  
  #### If all of the above pass you need to check:
  
- if two reservations on same day do not collide (show this under day's name - 'Conflict between two reservations')

in `src/components/Reservations.jsx` you will see how to setup proper validation errors in both cases

#### Hints

`moment.js` is great library that provide some nice tools to operate with times/dates. Methods that you can help you are `isAfter`, `isBetween`, `add(15, 'minutes')`. Remember - take care of good time parsing (take care of UTC problems if there will be any).

---

### 2. You need to add additional store for users

- add some router to the project and add additional route for users - eg. /users
- add some navigation buttons - use you good taste to style it
- create store for users
- create simple form for adding users - each has first name, last name, room number
- show a list of users and add some functionalities to remove them from the store
- configure proper action creators and reducers
- list and form can be on one view

---

### BONUS assignment. Connect users store with reservation form

- In the reservation form add new input in a single reservation entry. 
- It should be selected with the list of all the users. Make this value required in validation - because you need to know who made the reservation.

---

You can change whatever file you want, introduce new libraries to the project, and so on...

Good luck!
