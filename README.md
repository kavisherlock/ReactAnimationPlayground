## React Aniimation Playground

A simple webpage to play with and learn to use different animation techniques and libraries in React.js
The following were used:
* CSS Animations
* React Motion
* React Spring
* Pose

### CSS Animations

Simple css transitions can go a long way to add animation in a React application. For simple animations, with one or two sequences, CSS is the recomended way to animate. There is no reason to over-engineer and import libraries you don't need. CSS is also the most performant way to animate. Use of simple CSS transitions and keyframes are shown on the **Plain CSS** page

It's easy to apply a transition after all the coding is done, call your component animated and move on. But we don't want animations to be gratuitous. An important part of animatiion is folllow-through. On the **Good CSS** page, we see an example of animation of CSS which is slightly more natural and pleasing to look at

### React Motion

One of the most popular and beautiful animation libraries out there. It was a little tricky in the beginning to wrap my head around the API, but eventually, it all started to make sense. 

React Motion exports three main components, Motion, StaggeredMotion and TransitionMotion. I have example pages for the **Motion** and the **StaggeredMotion** components. To see the Staggered Motion in action, click on the image in the middle and drag your mouse around.

### React Spring

Generally considered one of the best animation packages for React apps out there. Focus: no magic, simplicity and declarative expression. Uses spring-like physics in its core animations; easy to configure. The Spring component makes is easy to manipulate styles, HTML, SVG or any sort of values from measurement units to actual data.

While Spring comes with many out-of-the-box animation techniques, my demos have the **Spring** and **Transition** components

### Pose

In todays times, code never lasts long, especially when in a start-up like environment. The components you write today might not even exist six months from now. There is no point in spending days animatiing your components beautifully, if they're just going to be replaced. With a much higher focus towards simplicity and making easy animated components, that are almost disposable.

I have simple examles of a **posed div** and a **posed image** in my demo. To see the image animation in action, click on the image in the center.
<hr>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests]

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!