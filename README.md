# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory (after running `npm install`), you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm start:api`

Runs the express app in the development mode.\
Open [http://localhost:9000](http://localhost:9000) to view it in your browser.

The page will not reload when you make changes.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Packages used in this project

### md5

For encyrpting data hashed into sha256

### Express

For backend api creation and calls

### Materialize

For bootstrapping forms, and appearance of app

### Sqlite 3

For database usage

### React Router Dom

For navigation and routing of pages, also used for creating a private route only to be viewed after sign up / login.

### React Modal

For creating modals (see `set reminder` functionality)

### Cors

For ease of testing on localhost with express to manage cors (cross origin resource sharing).

## App information

This app is a react web application for creating todos. You may set a reminder for a web alert to complete a task, create users, and create tasks. I recommend starting out this app by creating at least one user after the database is created and creating one task that is connected to the user via user_id (as a foreign key, the tables are a many to one relationship as one user may have many tasks)

## Ways this app could be improved

- Add Validic for form validation errors
- Add Accessibility tags for screenreaders and accessibility devices (voiceover, etc)
- Use a content management system for translations across languages
- Adding unit/integration tests
- Adding automated e2e tests to ensure the user flow doesn't break
- Design could be more unique and not as simple, adding transition as a user minimizes or maximizes the screen could be a nice touch to responsiveness (or adding personalized font, font scaling for accessibility, etc)
- Making the app responsive could improve this app (mobile friendly, not just web focused)

## API Routes

### Task endpoints

`api/tasks` - Shows all tasks across all users

`api/tasks/users/:id` - shows all tasks under a specific user id

`api/tasks/task` - creates a new task

`api/tasks/:id` - gets a task by task id, but can also update a task when using a put operation, or delete a task when using a delete operation

### User endpoints

`api/users/` - Shows all users, with sensitive info encrypted

`api/users/:id` - gets a user by id, but can also update a user or delete a user by id as well.

`api/users/login` - sees if a user is using valid credentials for login

`api/users/user` - creates a new user

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
