![Screenshot of My Hike Tracker](/public/assets/images/Screenshot%20of%20Hike%20Tracker.png)

# Welcome to Your Hike Tracker!

## An App for Tracking Your Hikes

### Objective of the app

    *   Sign in and document your hikes
    *   Create, Read, Update, and Delete hikes in your collection.
    *   Also add Gear for each hike! Create, Read, Update, and Delete what gear you used on your hike.

### Description

I was asked to build a full stack application:

- The back-end application was built with Express and Node

- The front-end application was built with React

- MongoDB is the database management system

- The back-end and front-end applications implement JWT token-based authentication to sign up, sign in, and sign out users.

- The application must have two data entities in additon to the User Model.

### Timeframe:

We were able to work on this project over the course of about 3 weeks. This was an optional group project, but I chose to build it solo.

### Technologies Used:

    Front End:
    HTML
    CSS
    Javascript
    React

    Back End:
    Node.JS
    Express
    JWT Auth
    Mongoose Database

### MVP:

    - The back-end application is built with Express and Node.
    - The front-end application is built with React.
    - MongoDB is used as the database management system.
    - The back-end and front-end applications implement JWT token-based authentication to sign up, sign in, and sign out users.
    - Authorization is implemented across the front-end and back-end. Guest users (those not signed in) should not be able to create, update, or delete data in the application or access functionality allowing those actions.
    - The project has at least two data entities in addition to the User model. At least one entity must have a relationship with the User model.
    - The project has full CRUD functionality on both the back-end and front-end.
    - The front-end application does not hold any secret keys. Public APIs that require secret keys must be accessed from the back-end application.
    - The project is deployed online so that the rest of the world can use it.

### Code Convention:

- The files in the back-end and front-end applications are organized following the conventions demonstrated in lectures.
- The code in the back-end and front-end applications adheres to the coding conventions demonstrated in lectures, like using plural names for arrays.
- The back-end and front-end applications do not contain dead code, commented-out sections, or console logs.
- The back-end application can be used without encountering errors in the terminal. The front-end application can be used without encountering errors in the browser’s console.
- The back-end application follows RESTful routing conventions for routes.
- The back-end and front-end applications are coded using proper indentation.

### UI/UX:

- The app exhibits a visual theme, like a consistent color palette and cohesive layout across pages.
- The app is easily navigable by a first-time user. For example, navigation should be done through links instead of having to type in a URL to navigate around the app.
- The app utilizes CSS Flexbox and/or Grid for page layout design.
- Colors used in the app have appropriate contrast that meet the WCAG 2.0 level AA standard.
- When editing an item, the form is pre-filled with that item’s details.
- Only the user who created a piece of data can see and interact with the UI for editing or deleting that data.
- All images have alt text.
- No text is placed on top of an image in a way that makes the text inaccessible.
- All buttons are styled.

### Planning:

Trello was used to complete a list of AAU, Wireframes, ERD, and Stretch Goals

![Screenshot of Trello Planning of Hike Tracker](/public/assets/images/Trello%20MERN%20Stack%20CRUD%20App%20Project%203.png)

### User Stories:

- AAU, I want to be able to login to the app securely. If I am new to the app, I want to be able to create a secure login username and password, with my password hashed & protected.

- AAU, I want to be able to view my hikes I've completed.

- AAU, I want to be able to add a new hike to my completed list.

- AAU, I want to be able to edit/update a hike I've completed.

- AAU, I want to be able to delete a hike from my list.

- AAU, I want to be able to add Gear to each hike. 

- AAU, I want to be able to Create, Read, Update, and/or Delete Gear from each hike.

- AAU, I want to be able to securely log out. 

#### Pseudocode

1. Welcome to Your Hike Tracker!
2. An App for listing your hikes and gear used on each hike.
3. Securely log-in with a hashed password.
4. View your hikes once logged in.
5. Add New Hike button allows you to fill out a form to add a new hike with the following information:
    - Name of Hike
    - Location of Trailhead for Hike
    - Document the distance of the hike
    - Document the time it took to complete the hike
    - Add notes
6. Each hike has a button to update/edit the hike, delete the hike, or add gear to the hike.
7. For each hike, you can Create, Read, Update, and/or Delete gear items:
    - Name of gear itme
    - Type of gear
    - Brand of gear
    - Notes
8. Securely log out.

### Build/ Code Process:

- Created the first data entity model, hikeSchema and connected to MongoDB Atlas.
- Downloaded all of the packages needed.
- Added route middleware
- Build Hike Controller


### Challenges:

- Adding the second data entity was my biggest challenge.

### Wins:

- It's pretty and it works.

### Key Learnings/ Takeaways:

- Test test test your code!

### Bugs:


### Future Improvements:

- Add maps/ location on maps
- Add a community function to be able to view other users hikes, and perhaps make comments or suggestions.
- Add search function.
- Add photos to each hike.
- List goal hikes.