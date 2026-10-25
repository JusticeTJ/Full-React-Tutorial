# React Learning Project

This repository is a personal learning workspace for practising React and the JavaScript concepts used alongside it. It is intentionally made up of small examples rather than one finished application: the HTML files in the project root cover individual topics, while the `src` folder contains the Vite-powered React project, components, styles, and hook examples.

Use the examples to revisit a concept, experiment with the code, and see how React features work. Some files are standalone lesson pages and others are part of the Vite app, so the repository is best treated as a collection of exercises rather than a single polished product.

## What you can learn here

The lessons and examples cover topics such as:

- JavaScript fundamentals used in React, including variables, classes, modules, destructuring, spread syntax, maps, and template strings
- JSX, attributes, expressions, and conditional rendering
- Components, props, children, events, and lists
- React hooks, including `useState`, `useEffect`, `useContext`, `useReducer`, `useRef`, `useMemo`, and `useCallback`
- Forms, input fields, checkboxes, radio buttons, selects, and text areas
- Styling with regular CSS, CSS Modules, Sass, and styled-components
- More advanced patterns such as custom hooks, portals, higher-order components, refs, transitions, routing, and Suspense

## Project layout

```text
.
├── *.html              # Small HTML/JavaScript/React lesson examples
├── package.json        # Project dependencies and npm scripts
├── index.html          # Vite's HTML entry page
├── vite.config.js      # Vite configuration with the React plugin
├── public/             # Static files copied as-is when building
└── src/
    ├── main.jsx        # JavaScript entry point loaded by index.html
    ├── App.jsx         # Main React component
    ├── *.jsx           # Practice components and examples
    ├── *.css           # Stylesheets
    ├── *.scss          # Sass stylesheets
    └── assets/         # Images and other imported assets
```

The HTML files in the root are useful as topic-by-topic references. The React application is managed by Vite: `index.html` loads `src/main.jsx`, which starts the React app and renders its components.

## Run this project

### Requirements

- [Node.js](https://nodejs.org/) (an active LTS release is recommended)
- npm, which is included with Node.js

### Install and start

1. Open a terminal in the project folder.
2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the Vite development server:

   ```bash
   npm run dev
   ```

4. Open the local URL printed in the terminal (usually `http://localhost:5173`).
5. Edit files under `src` and save them. Vite refreshes the page as you work.

Other available commands:

```bash
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Check the project with ESLint
```

## Create a new React project

This project uses [Vite](https://vite.dev/) to create and run a React application. Vite is a lightweight development server and build tool; React provides the component and user-interface library.

### 1. Check that Node.js and npm are installed

In a terminal, run:

```bash
node --version
npm --version
```

If either command is not recognised, install Node.js first, then reopen the terminal.

### 2. Generate a React project

Choose a name for the new project and run:

```bash
npm create vite@latest my-react-app -- --template react
```

Replace `my-react-app` with the folder name you want. The `react` template creates a JavaScript React project; use `react-ts` instead if you want the TypeScript template.

If prompted to install `create-vite`, confirm the prompt. Vite may also ask you to select a framework and variant; choose **React** and then **JavaScript** (or **TypeScript** if you chose that template).

### 3. Install dependencies and start the development server

```bash
cd my-react-app
npm install
npm run dev
```

Open the URL shown in the terminal, typically `http://localhost:5173`. Keep the terminal running while you work; stop the server with `Ctrl+C`.

### 4. Understand the main files

A new Vite React project typically includes:

```text
my-react-app/
├── index.html       # Page containing the HTML element React mounts into
├── package.json     # Dependencies and commands such as dev, build, and lint
├── public/          # Static files served without being imported by JavaScript
└── src/
    ├── main.jsx     # Starts React and renders the root component
    ├── App.jsx      # The main application component
    ├── App.css      # Styles for the application
    └── index.css    # Global styles
```

The `index.html` page includes a mount element such as `<div id="root"></div>`. The JavaScript entry point (`src/main.jsx`) finds that element and asks React to render a component into it. `App.jsx` is a convenient place to begin building the interface.

### 5. Create a component file

For example, create `src/Greeting.jsx`:

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;
```

Import and use it from `src/App.jsx`:

```jsx
import Greeting from "./Greeting";

function App() {
  return (
    <main>
      <Greeting name="React learner" />
    </main>
  );
}

export default App;
```

React component names start with a capital letter. A component is a JavaScript function that returns JSX, and it can receive values (called **props**) from its parent. Exporting the component lets another file import and render it.

### 6. Build and check the project

When you are ready to check a production build, run:

```bash
npm run build
```

Vite writes the built files to `dist/`. If the project defines a lint script, run `npm run lint` to check for common code issues. Continue editing and testing in the development server as you add components, styles, and behaviour.

## Learning tip

Try changing one example at a time, then explain what changed in your own words. For a new experiment, create a separate component or lesson file so you can compare it with the original and easily undo mistakes.
