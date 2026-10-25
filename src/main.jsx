
// The createRoot() function takes one argument, an HTML element.

// The purpose of the function is to define the HTML element where a React component should be displayed.

// To better understand the createRoot function, let's remove unnecessary code and write our own "Hello React!" example:

// import { createRoot } from 'react-dom/client'

// createRoot(document.getElementById('sandy')).render(
//   <h1>Hello React!</h1>
// )

// import { createRoot } from 'react-dom/client'

// const myelement = (
//   <table>
//     <tbody>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//     </tbody>
//   </table>
// );

// createRoot(document.getElementById('sandy')).render(
//   myelement 
// )



// ==== MAPS IN REACT=========
// import { createRoot } from 'react-dom/client'

// const fruitlist = ['apple', 'banana', 'cherry'];

// function MyList() {
//   return (
//     <ul>
//       {fruitlist.map(fruit => 
//         <li key={fruit}>{fruit}</li>
//       )}
//     </ul>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <MyList />
// )


//========== Map() with Objects========
// import { createRoot } from 'react-dom/client'

// const users = [
//   { id: 1, name: 'John', age: 30 },
//   { id: 2, name: 'Jane', age: 25 },
//   { id: 3, name: 'Bob', age: 35 }
// ];

// function UserList() {
//   return (
//     <ul>
//       {users.map(user => 
//         <li key={user.id}>
//           {user.name} is {user.age} years old
//         </li>
//       )}
//     </ul>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <UserList />
// )


// ====Map() Parameters====
// The map() method takes three parameters:
// currentValue - The current element being processed
// index - The index of the current element (optional)
// array - The array that map was called upon (optional)
// EXAMPLE:
// import { createRoot } from 'react-dom/client'

// const fruitlist = ['apple', 'banana', 'cherry'];

// function App() {
//   return (
//     <ul>
//       {fruitlist.map((fruit, index, array) => {
//         return (
//           <li key={fruit}>
//             Name: {fruit}, Index: {index}, Array: {array}
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
// createRoot(document.getElementById('sandy')).render(
//   <App />
// )


// ====Props Destructuring=====
// When a component receives props, you can use destructuring to extract the values you need.

// Check out the difference between using and not using destructuring:
// import { createRoot } from 'react-dom/client'
//EXAMPLE:
// function Greeting({ name, age }) {
//   return <h1>Hello, {name}! You are {age} years old.</h1>;
// }
// createRoot(document.getElementById('sandy')).render(
//   <Greeting name="Justice" age={25} />
// );


// ===useState Hook Destructuring=====
// When a component uses the useState hook, we use destructuring to extract the values from it.

// Example
// Using destructuring to extract values from useState:
// import { createRoot } from 'react-dom/client';
// import { useState } from 'react';

// function Counter() {
//   // Destructuring the array returned by useState
//   const [count, setCount] = useState(0);
//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Count: {count}
//     </button>
//   );
// }
// createRoot(document.getElementById('sandy')).render(<Counter />);


//===JSX====
// import { createRoot } from 'react-dom/client'
// const myElement = <h1>I Love JSX!</h1>;
// createRoot(document.getElementById('sandy')).render(
//   myElement
// );

// import { createRoot } from 'react-dom/client'
// const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
// createRoot(document.getElementById('sandy')).render(
//   myElement
// );

// import { createRoot } from 'react-dom/client'
// const myElement = (
//   <ol>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ol>
// );
// createRoot(document.getElementById('sandy')).render(
//   myElement
// );

    //Example
//Wrap two paragraphs inside one DIV element as the dif wraps them up:

// import { createRoot } from 'react-dom/client'
// const myElement = (
//   <div className="paragrah">
//     <p>I am a paragraph.</p>
//     <p>I am a paragraph too.</p>
//   </div>
// );
// createRoot(document.getElementById('sandy')).render(
//   myElement
// );

//OR using FRAGMENTS
// import { createRoot } from 'react-dom/client'
// const myElement = (
//   <>
//     <p>I am a paragraph.</p>
//     <p>I am a paragraph too.</p>
//     {/* notice how the <></> were used to wrap the pragraphs instead of a traditional html element*/}
//   </>
// );
// createRoot(document.getElementById('sandy')).render(
//   myElement
// );

// import { createRoot } from 'react-dom/client'

// function Car() {
//   return (
//     <>
//       <h2>My Car</h2>
//       <p>It is a Ford Mustang.</p>
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car />
// );
//Inside the components, you can do some other operations before returning the HTML:
// import { createRoot } from 'react-dom/client'

// function Car() {
//   const brand = "Ford";
//   const model = "Mustang";
//   return (
//     <>
//       <h2>My Car</h2>
//       <p>It is a {brand} {model}.</p>
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car />
// )


//=====JSX EXPRESSIONS=====
// import { createRoot } from 'react-dom/client'

// function Car() {
//   return (
//     <>
//       <h1>My car</h1>
//       <p>It has {218 * 1.36} horsepower</p>
//     </>
//   );
// }
// createRoot(document.getElementById('sandy')).render(
//   <Car />
// );

//Variables are also valid expressions. Insert variables in JSX by wrapping it in curly braces { }.
// import { createRoot } from 'react-dom/client'

// function Car() {
//   const hp = 218 * 1.36;
//   return (
//     <>
//       <h1>My car</h1>
//       <p>It has {hp} horsepower</p>
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car />
// );

//Function calls are valid expressions. Insert function calls in JSX by wrapping it in curly braces { }.
// import { createRoot } from 'react-dom/client'

// function kwtohp(kw) {
//   return kw * 1.36;
// }

// function Car() {
//   return (
//     <>
//       <h1>My car</h1>
//       <p>It has {kwtohp(218)} horsepower</p>
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car />
// ); 

//Access object properties within JSX:
//Example
//Refer to an object property inside JSX:
// import { createRoot } from 'react-dom/client'

// function Car() {
//   const myobj = {
//     name: "Fiat",
//     model: "500",
//     color: "white"
//   };
//   return (
//     <>
//       <h1>My car is a {myobj.color} {myobj.name} {myobj.model}</h1>
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car />
// );


//=====JSX ATTRIBUTES=====
// import { createRoot } from 'react-dom/client'

// //Check out the index.html file, were we have added some styles.

// function Car() {
//   return (
//     <h1 className="myclass">Hello World</h1>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car />
// );

// Use JavaScript expressions as attribute values:

//import { createRoot } from 'react-dom/client'

//Check out the index.html file, were we have added some styles.

// function Car() {
//   const x = "myclass";
//   return (
//     <h1 className={x}>Hello World</h1>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car />
// );

//If you pass no value for an attribute, JSX treats it as true. To pass false, you must specify it as an expression.
// import { createRoot } from 'react-dom/client'

// function Car() {
//   const myfunc = () => {
//     alert('REACT IS BORING');
//   };
//   return (
//     <button onClick={myfunc} disabled//={false}
//     >Click me</button>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car />);
//False in JSX, this will NOT make the button disabled:

//The style attribute in JSX only accepts a JavaScript object with camelCased CSS property names, rather than a CSS string (as in HTML).
// import { createRoot } from 'react-dom/client'

// function Car() {
//   const mystyles = {
//     color: "red",
//     fontSize: "20px",
//     backgroundColor: "lightyellow",
//   };

//   return (
//     <>
//       <h1 style={mystyles}>My car</h1>
//     </>
//   );
// }
// createRoot(document.getElementById('sandy')).render(
//   <Car />
// );


//===React JSX If Statements====
//Option 1:
//Write if statements outside of the JSX code:

//Example:
//Write "Banana" if x is less than 10, otherwise "Apple":
// import { createRoot } from 'react-dom/client'

// function Fruit() {
//   const x = 5;
//   let y = "Apple";
//   if (x < 10) {
//     y = "Banana";
//   }

//   return (
//     <h1>{y}</h1>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Fruit />
// );

//Option 2:
//Use ternary expressions instead:

//Example
//Write "Banana" if x is less than 10, otherwise "Apple":
// import { createRoot } from 'react-dom/client'

// function Fruit() {
//   const x = 5;
//   return (
//     <h1>{(x) < 10 ? "Banana" : "Apple"}</h1>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Fruit />
// );


//===REACT COMPONENTS====
//Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render function.
// When creating a React component, the component's name MUST start with an upper case letter.
// React components returns HTML code.
// import { createRoot } from 'react-dom/client'

// function Car() {
//   return (
//     <h2>Hi, I am a Car!</h2>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car />
// );

//You send the arguments into the component as HTML attributes.
// import { createRoot } from 'react-dom/client'

// function Car(props) {
//   return (
//     <h2>I am a {props.color} Car!</h2>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car color="red"/>
// );

//We can refer to components inside other components:
// import { createRoot } from 'react-dom/client'

// function Car() {
//   return (
//     <h2>It is my Car!</h2>
//   );
// }

// function Garage() {
//   return (
//     <>
//       <h1>Who lives in my Garage?</h1>
//       <Car />
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Garage />
// );

//We can render a component multiple times:
// import { createRoot } from 'react-dom/client'

// function Car(props) {
//   return (
//     <h2>My {props.brand}!</h2>
//   );
// }

// function Garage() {
//   return (
//     <>
//       <h1>What Car brand do you have?</h1>
//       <Car brand="Ford" />
//       <Car brand="BMW" />
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Garage />
// );

// React is all about re-using code, and it can be a good idea to split your components into separate files.

// To do that, create a new file in the src folder with a .jsx file extension and put the code inside it.
//  For example, create a file called Vehicle.jsx and put the Car component code inside it.

// To be able to use the Car component, you have to import the Vehicle.jsx file in your application.
// import Car from './Vehicle.jsx';
// import { createRoot } from 'react-dom/client'
// import Emo from './Vehicle.jsx';

// createRoot(document.getElementById('sandy')).render(
//   <Emo />
// );

//Make sure to check out the Vehicle.js file.


//====React Class Components====
// When creating a React component, the component's name must start with an upper case letter.
// The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
// The component also requires a render() method, this method returns HTML.

// ExampleGet your own React.js Server
// Create a Class component called Car:
// import React from 'react';
// import { createRoot } from 'react-dom/client'

// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car />
// );

//Component Constructor

// If there is a constructor() function in your component, this function will be called when the component gets initiated.
// The constructor function is where you initiate the component's properties.
// In React, component properties should be kept in an object called state.
// You will learn more about state later in this tutorial.
// The constructor function is also where you honor the inheritance of the parent component by including the super() statement,
//  which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component).
// import React from 'react';
// import { createRoot } from 'react-dom/client'

// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = {color: "red"};
//   }
//   render() {
//     return <h2>I am a {this.state.color} Car!</h2>;
//   }
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car />
// );

// Props in the Constructor
// If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.
// import React from 'react';
// import { createRoot } from 'react-dom/client'

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <h2>I am a {this.props.model}!</h2>;
//   }
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car model="Mustang"/>
// );

//  Components in Components
//We can refer to components inside other components:
// import React from 'react';
// import { createRoot } from 'react-dom/client'

// class Car extends React.Component {
//   render() {
//     return <h2>Porshe, Mecerdies AMG</h2>;
//   }
// }

// class Garage extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1>What type of cars do you have in the Garage?</h1>
//       <Car />
//       </div>
//     );
//   }
// }

// createRoot(document.getElementById('sandy')).render(
//   <Garage />
// );

//Components in Files
//React is all about re-using code, and it can be smart to insert some of your components in separate files.
//To do that, create a new file with a .jsx file extension and put the code inside it:
//Note that the file must start by importing React (as before), and it has to end with the statement [export default Car;].

//To be able to use the *Result* component, you have to import the Vehicle.jsx file in your application.\
// import { createRoot } from 'react-dom/client'
// import Result from './Result.jsx';

// createRoot(document.getElementById('sandy')).render(
//   <Result />
// );
//Make sure to check out the Result.jsx file.

//Using the state Object
//Refer to the state object anywhere in the component by using the [this.state.propertyname] syntax:
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964
//     };
//   }
/* CHANGING THE STATE COLOR*/
//   changeColor = () => {
//     this.setState({color: "blue"});
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color}
//           {this.state.model}
//           from {this.state.year}.
//         </p>
      /* THIS IS WHERE THE BUTTON IS USED*/
//         <button
//           type="button"
//           onClick={this.changeColor}
//         >Change color</button>
//       </div>
//     );
//   }
// }

// const container = document.getElementById('sandy');
// const root = ReactDOM.createRoot(container);
// root.render(<Car />);

// Changing the state Object
// To change a value in the state object, use the this.setState() method.
// When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).

// Example:
// Add a button with an onClick event that will change the color property:
// changeColor = () => {
//     this.setState({color: "blue"});
//   }
// <button
//           type="button"
//           onClick={this.changeColor}
//         >Change color</button>
//NOTE:Always use the setState() method to change the state object, it will ensure that the component knows its been updated and calls the render() method (and all the other lifecycle methods).

//==LIFECYCLE OF COMPONENTS==
//Phase 1: MOUNTING; involves the following bellow

//1: Constructor
// The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.
// The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).

// Example:
// The constructor method is called, by React, every time you make a component:
// import { createRoot } from 'react-dom/client'
// import React from 'react';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }

// createRoot(document.getElementById('sandy')).render(
//   <Header />
// )

//2: getDerivedStateFromProps
// The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
// This is the natural place to set the state object based on the initial props.
// It takes state as an argument, and returns an object with changes to the state.
// The example below starts with the favorite color being "red", but the getDerivedStateFromProps() method updates the favorite color based on the favcol attribute:

// Example:
// The getDerivedStateFromProps method is called right before the render method:
// import { createRoot } from 'react-dom/client'
// import React from 'react';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   static getDerivedStateFromProps(props, state) {
//     return {favoritecolor: props.favcol };
//   }
//   render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }

// createRoot(document.getElementById('sandy')).render(
//   <Header favcol="yellow"/>
// );

//3: Render
//The render() method is required, and is the method that actually outputs the HTML to the DOM.
// import { createRoot } from 'react-dom/client'
// import React from 'react';

// class Header extends React.Component {
//   render() {
//     return (
//       <h1>This is the content of the Header component</h1>
//     );
//   }
// }

// createRoot(document.getElementById('sandy')).render(
//   <Header />
// );

//4: componentDidMount
// The componentDidMount() method is called after the component is rendered.
//This is where you run statements that requires that the component is already placed in the DOM.
// import { createRoot } from 'react-dom/client'
// import React from 'react';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 10000)
//   }
//   render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }

// createRoot(document.getElementById('sandy')).render(
//   <Header />
// );

//Phase 2: UPDATING; involves the following bellow

//1: getDerivedStateFromProps
//The example below has a button that changes the favorite color to blue, but since the getDerivedStateFromProps() method is called,
//  which updates the state with the color from the favcol attribute, the favorite color is still rendered as yellow:
// import { createRoot } from 'react-dom/client'
// import React from 'react';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   static getDerivedStateFromProps(props, state) {
//     return {favoritecolor: props.favcol };
//   }
//   changeColor = () => {
//     this.setState({favoritecolor: "blue"});
//   }
//   render() {
//     return (
//       <div>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }

// createRoot(document.getElementById('sandy')).render(
//   <Header favcol="yellow" />
// );
/*
This example has a button that changes the favorite color to blue,
but since the getDerivedStateFromProps() method is called,
the favorite color is still rendered as yellow
(because the method updates the state
with the color from the favcol attribute).
*/

//2:shouldComponentUpdate
// In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.
// The default value is true.
// The example below shows what happens when the shouldComponentUpdate() method returns false:
// import { createRoot } from 'react-dom/client'
// import React from 'react';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   shouldComponentUpdate() {
//     return false;
//   }
//   changeColor = () => {
//     this.setState({favoritecolor: "blue"});
//   }
//   render() {
//     return (
//       <div>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }

// createRoot(document.getElementById('sandy')).render(
//   <Header />
// );
/*
This example has a button that changes the favorite color to blue,
but since the shouldComponentUpdate() method is called,
the favorite color is still rendered as red
(because the method returns false).
*/

//3:Render
// The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.
// The example below has a button that changes the favorite color to blue:
// import { createRoot } from 'react-dom/client'
// import React from 'react';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   changeColor = () => {
//     this.setState({favoritecolor: "blue"});
//   }
//   render() {
//     return (
//       <div>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }

// createRoot(document.getElementById('root')).render(
//   <Header />
// );


//4:getSnapshotBeforeUpdate
// In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.
// If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
// import { createRoot } from 'react-dom/client'
// import React from 'react';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 1000)
//   }
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     document.getElementById("div1").innerHTML =
//     "Before the update, the favorite was " + prevState.favoritecolor;
//   }
//   componentDidUpdate() {
//     document.getElementById("div2").innerHTML =
//     "The updated favorite is " + this.state.favoritecolor;
//   }
//   render() {
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         <div id="div1"></div>
//         <div id="div2"></div>
//       </div>
//     );
//   }
// }

// createRoot(document.getElementById('sandy')).render(
//   <Header />
// );



//====REACT PROPS====
//React Props are like function arguments in JavaScript and attributes in HTML.
//To send props into a component, use the same syntax as HTML attributes:
// import { createRoot } from 'react-dom/client'

// function Car(props) {
//   return (
//     <h2>I am a {props.brand}!</h2> /*instead of using props.brand, you can use myobj.brand, where myobj is the name of the object that contains the brand property. */
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car brand="Ford" />
// );

//The name of the object is props, but you can call it anything you want.
//You can use myobj instead of props in the component:

//Pass Multiple Properties
//You can send as many properties as you want.
//Every attribute is sent to the Car component as object properties.
// import { createRoot } from 'react-dom/client'

// function Car(props) {
//   return (
//     <h2>I am a {props.color} {props.brand} {props.model}!</h2>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car brand="Ford" model="Mustang" color="red" />
// );

//Different Data Types
//React props can be of any data type, including variables, numbers, strings, objects, arrays, and more.
//Strings can be sent inside quotes as in the examples above("ford" and ("mustang")), but numbers, variables, and objects need to be sent inside curly brackets.

//NUMBERS
// import { createRoot } from 'react-dom/client'

// function Car(props) {
//   return (
//     <h2>The {props.brand} is from {props.year}!</h2>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car year={1969} brand="Ford" />
// );

//VARIABLES
// import { createRoot } from 'react-dom/client'

// function Car(props) {
//   return (
//     <h2>I have  a {props.color} {props.brand}!</h2>
//   );
// }

// let x = "Ford";
// let y = "red"

// createRoot(document.getElementById('sandy')).render(
//   <Car brand={x} color={y} />
// );

//OBJECT AND ARRAY COMBINATION
//Objects and Arrays has to be sent inside curly brackets:
// import { createRoot } from 'react-dom/client'

// function Car(props) {
//   return (
//     <>
//       <h2>My favorite car is a {props.carinfo.name} {props.carinfo.model}!</h2>
//       <p>But it has to from {props.years[0]}, {props.years[1]}, or {props.years[2]}.</p>
//     </>
//   );
// }

// let x = [1964, 1965, 1966];
// let y = {name: "Ford", model: "Mustang"};

// createRoot(document.getElementById('sandy')).render(
//   <Car years={x} carinfo={y} />
// );

//OBJECT PROPS
//The component treats objects like objects, and you can use the dot notation to access the properties.
// import { createRoot } from 'react-dom/client'

// function Car(props) {
//   return (
//     <>
//       <h2>My {props.carinfo.name} {props.carinfo.model}!</h2>
//       <p>It is {props.carinfo.color} and it is from {props.carinfo.year}!</p>
//     </>
//   );
// }

// const carInfo = {
//   name: "Ford",
//   model: "Mustang",
//   color: "red",
//   year: 1969
// };

// createRoot(document.getElementById('sandy')).render(
//   <Car carinfo={carInfo} />
// );

//ARRAY PROPS
//Array props can be accessed using the indexes.
// import { createRoot } from 'react-dom/client'

// function Car(props) {
//   return (
//     <h2>My car is a {props.carinfo[0]} {props.carinfo[1]}!</h2>
//   );
// }

// const carInfo = ["Ford", "Mustang"];

// createRoot(document.getElementById('sandy')).render(
//   <Car carinfo={carInfo} />
// );

//PROPS PASS FROM COMPONENTS TO COMPONENTS
//Attributes are also how you pass data from one component to another, as parameters.
// import { createRoot } from 'react-dom/client'

// function Car(props) {
//   return (
//     <h2>I am a {props.brand}!</h2>
//   );
// }

// function Garage() {
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <Car brand="Ford" />
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Garage />
// );


//=====React Destructuring Props=======
//The component knows it only need the color property, so in the function definition, it only specifies that:
//Note: React uses curly brackets to destructure props: {color}.
// import { createRoot } from 'react-dom/client'

// function Car({color}) {
//   return (
//     <h2>My car is {color}!</h2>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car brand="Ford" model="Mustang" color="red" year={1969} />
// );

//You can also destruct the properties you need inside the component.
//This way, the component receives all the properties, but the destructuring makes sure it only uses the ones it needs
// import { createRoot } from 'react-dom/client'

// function Car(props) {
//   const {brand, model} = props;
//   return (
//     <h2>I love my {brand} {model}!</h2>
//   );
// }
// createRoot(document.getElementById('sandy')).render(
//   <Car brand="Ford" model="Mustang" color="red" year={1969} />
// );

//Destructuring ...rest
//When you don't know how many properties you will receive, you can use the ...rest operator.
//Meaning: you can specify the properties you need, and the rest will be stored in an object.
// import { createRoot } from 'react-dom/client'

// function Car({color, brand, ...rest}) {
//   return (
//     <h2>My {brand} {rest.model} is {color}!</h2>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car brand="Ford" model="Mustang" color="red" year={1969} />
// );

//Default Values
//With Destructuring, you can set default values for props.
//If a property has no value, the default value will be used.
// import { createRoot } from 'react-dom/client'

// function Car({color = "blue", brand}) {
//   return (
//     <h2>My {color} {brand}!</h2>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car brand="Ford" />
// );


//===Props Children====
//In React, you can send the content between the opening and closing tags of a component, to another component.
//This can be accessed in the other component using the props.children property.

// import { createRoot } from 'react-dom/client'

// function Son(props) {
//   return (
//     <div style={{background: 'lightgreen'}}>
//       <h2>Son</h2>
//       <div>{props.children}</div>
//     </div>
//   );
// }

// function Daughter(props) {
//   const {brand, model} = props;
//   return (
//     <div style={{background: 'lightblue'}}>
//       <h2>Daughter</h2>
//       <div>{props.children}</div>
//     </div>
//   );
// }

// function Parent() {
//   return (
//     <div>
//       <h1>My two Children</h1>
//       <Son>
//         <p>
//           This was written in the Parent component,
//           but displayed as a part of the Son component
//         </p>
//       </Son>
//       <Daughter>
//         <p>
//           This was written in the Parent component,
//           but displayed as a part of the Daughter component
//         </p>
//       </Daughter>
//     </div>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Parent />
// );


//====EVENTS====
//Adding Events
//React events are written in camelCase syntax:
//onClick instead of onclick.
//React event handlers are written inside curly braces:
//onClick={shoot}  instead of onclick="shoot()".
// import { createRoot } from 'react-dom/client'

// function Football() {
//   const shoot = () => {
//     alert("Great Shot!");
//   }

//   return (
//     <button onClick={shoot}>Take the shot!</button>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Football />
// );

//Passing Arguments
//To pass an argument to an event handler, use an arrow function.
// import { createRoot } from 'react-dom/client'

// function Football() {
//   const shoot = (a) => {
//     alert(a);
//   }

//   return (
//     <button onClick={() => shoot("Goal!")}>Take the shot!</button>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Football />
// );

//React Event Object
//Event handlers have access to the React event that triggered the function.
//In our example the event is the "click" event.
// import { createRoot } from 'react-dom/client'

// function Football() {
//   const shoot = (a, b) => {
//     alert(b.type);
//     /*
//     'b' represents the React event that triggered the function,
//     in this case the 'click' event
//     */
//   }

//   return (
//     <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Football />
// )



//====REACT CONDITIONAL RENDERING====
//IF STATEMENTS
//We can use if statments to decide what to render.
// import { createRoot } from 'react-dom/client'

// function MissedGoal() {
//   return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
//   return <h1>Goal!</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal/>;
//   }
//   return <MissedGoal/>;
// }

// createRoot(document.getElementById('sandy')).render(
//   <Goal isGoal={false} />
// );
//try changing the isGoal property to true and see what happens.

//Logical && Operator
//Another way to conditionally render a React component is by using the && operator.
//In the example below, the heading will only be rendered if the props.brand property is not empty:
// import { createRoot } from 'react-dom/client'

// function Car(props) {
//   return (
//     <>
//       {props.brand && <h1>My car is a {props.brand}</h1>}
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Car brand="Ford" />
// );
//If props.brand evaluates to true, the expression after && will render.
//Try emptying the brand property:

//Ternary Operator
//Another way to conditionally render elements is by using a ternary operator.
// import { createRoot } from 'react-dom/client'

// function MissedGoal() {
//   return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
//   return <h1>Goal!</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   return (
//     <>
//       { isGoal ? <MadeGoal/> : <MissedGoal/> }
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Goal isGoal={false} />
// );


//===REACT LISTS===

// import { createRoot } from 'react-dom/client'

// function MyCars() {
//   const cars = ['Ford', 'BMW', 'Audi'];
//   return (
//     <>
//       <h1>My Cars:</h1>
//       <ul>
//         {cars.map((car) => <li>I am a { car }</li>)}
//       </ul>
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <MyCars />
// );

//Keys in React Lists
//Keys help React identify which items have changed, are added, or are removed.
//Keys should be given to the elements inside the array to give the elements a stable identity:
// import { createRoot } from 'react-dom/client'

// function MyCars() {
//   const cars = [
//     {id: 1001, brand: 'Ford'},
//     {id: 1002, brand: 'BMW'},
//     {id: 1003, brand: 'Audi'}
//   ];
//   return (
//     <>
//       <h1>My Cars:</h1>
//       <ul>
//         {cars.map((car) => <li key={car.id}>I am a { car.brand }</li>)}
//       </ul>
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <MyCars />
// );

//Using Array Index as Key
//As a last resort, you can use the array index as a key.
// import { createRoot } from 'react-dom/client'

// function MyCars() {
//   const cars = ['Ford', 'BMW', 'Audi'];
//   return (
//     <>
//       <h1>My Cars:</h1>
//       <ul>
//         {cars.map((car, index) => <li key={index}>I am a { car }</li>)}
//       </ul>
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <MyCars />
// );


//REACT FORMS
//Just like in HTML, React uses forms to allow users to interact with the web page.
// import { createRoot } from 'react-dom/client'

// function MyForm() {
//   return (
//     <form>
//       <label>Enter your name:
//         <input type="text" />
//       </label>
//     </form>
//   )
// }

// createRoot(document.getElementById('sandy')).render(
//   <MyForm />
// );

//Controlled Components
//In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
//We can combine the two by making the React state be the "single source of truth". Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a "controlled component".
// import { createRoot } from 'react-dom/client'
// import { useState } from 'react'

// function MyForm() {
//   const [name, setName] = useState("");/*Initial Value*/

//   return (
//     <form>
//       <label>Enter your name:
//         <input
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <p>Current value: {name}</p>
//     </form>
//   )
// }

// createRoot(document.getElementById('sandy')).render(
//   <MyForm />
// );

//Initial Values
//To add an initial value to the input field in the example above, add a value to the useState object:



//======REACT SUBMIT FORMS=======
//You can control the submit action by adding an event handler in the onSubmit attribute for the <form>:
// import { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// function MyForm() {
//   const [name, setName] = useState("");

//   function handleChange(e) {
//     setName(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     alert(name);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//         <input
//           type="text" 
//           value={name}
//           onChange={handleChange}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   )
// }
// createRoot(document.getElementById('sandy')).render(
//   <MyForm />
// );



//======REACT FORMS- TEXTAREA=======
//The textarea element in React is slightly different from ordinary HTML.
//In HTML the value of a textarea is the text between the start tag <textarea> and the end tag </textarea>.
                //WHILE
//In React the value of a textarea is placed in a value attribute, just like with the input element.
//We'll use the useState Hook to manage the value of the textarea:   
// import { createRoot } from 'react-dom/client'
// import { useState } from 'react'

// function MyForm() {
//   const [mytxt, setMytxt] = useState("");

//   function handleChange(e) {
//     setMytxt(e.target.value);
//   }

//   return (
//     <form>
//       <label>Write here:
//         <textarea
//           value={mytxt}
//           onChange={handleChange}
//         />
//       </label>
//       <p>Current value: {mytxt}</p>
//     </form>
//   )
// }

// createRoot(document.getElementById('sandy')).render(
//   <MyForm />
// ); 



//======REACT FORMS- SELECT=======
//A drop down list, or a select box, in React is also a bit different from HTML.
//In HTML, the selected value in the drop down list is defined with the selected attribute:
                         //WHILE
//In React, the selected value is set with a value attribute on the <select> tag, and the selected attribute on the <option> tags are not used. 
// import { createRoot } from 'react-dom/client'
// import { useState } from 'react'

// function MyForm() {
//   const [myCar, setMyCar] = useState("Volvo");

//   const handleChange = (event) => {
//     setMyCar(event.target.value)
//   }

//   return (
//     <form>
//       <select value={myCar} onChange={handleChange}>
//         <option value="Ford">Ford</option>
//         <option value="Volvo">Volvo</option>
//         <option value="Fiat">Fiat</option>
//       </select>
//     </form>
//   )
// }

// createRoot(document.getElementById('sandy')).render(
//   <MyForm /> 
// ); 
  //By making these changes to the <select> element, React is able to handle it as any other input element.  
  
  

  //======REACT FORMS- MULTIPLE SELECT=======
  // Using a single useState call with an object to hold all form field values.
  //Make sure each input field has a unique name attribute.
//Also, when initializing the state, use an object instead of a string. If the input fields have no initial value, use an empty object.
// import { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   return (
//     <form>
//       <label>First name:
//       <input 
//         type="text" 
//         name="firstname" 
//         value={inputs.firstname} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Last name:
//         <input 
//           type="text" 
//           name="lastname" 
//           value={inputs.lastname} 
//           onChange={handleChange}
//         />
//         </label>
//         <p>Current values: {inputs.firstname} {inputs.lastname}</p>
//     </form>
//   )
// }

// createRoot(document.getElementById('sandy')).render(
//   <MyForm />
// );

// //Use initial values for firstname and lastname:

// function MyForm() {
//   const [inputs, setInputs] = useState({
//     firstname: 'John',
//     lastname: 'Doe'
//   });

//   /*...*/
// }



//====== REACT FORMS CHECKBOX ======
//In the handleChange function, use the e.target.type property check if the current input is a checkbox or not.
//React uses the checked attribute to control the checkbox:
// import { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// function MyForm() {
//   const [inputs, setInputs] = useState({
//     /* firstname: 'John',
//     tomato: true,
//     onion: false
//     */
//   }); /*To add initial values to the input fields, add the proper keys and values to the useState object:*/

//   const handleChange = (e) => {
//     const target = e.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     let fillings = '';
//     if (inputs.tomato) fillings += 'tomato';
//     if (inputs.onion) {
//       if (inputs.tomato) fillings += ' and ';
//       fillings += 'onion';
//     }
//     if (fillings == '') fillings = 'no fillings';
//     alert(`${inputs.firstname} wants a burger with ${fillings}`);
//     event.preventDefault();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>My name is:
//       <input 
//         type="text" 
//         name="firstname" 
//         value={inputs.firstname} 
//         onChange={handleChange}
//       />
//       </label>

//       <p>I want a burger with:</p>
//       <label>Tomato:
//       <input 
//         type="checkbox" 
//         name="tomato" 
//         checked={inputs.tomato} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Onion:
//         <input 
//           type="checkbox" 
//           name="onion" 
//           checked={inputs.onion} 
//           onChange={handleChange}
//         />
//         </label>
//         <button type="submit">Submit</button>
//     </form>
//   )
// }

// createRoot(document.getElementById('sandy')).render(
//   <MyForm />
// );



//===== REACT FORMS RADIO =====
//All radio buttons in a group should share the same name attribute.
//You control radio buttons based on whether the radio button's value matches the selected value in your state.
// import { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// function MyForm() {
//   const [selectedFruit, setSelectedFruit] = useState('banana');

//   const handleChange = (event) => {
//     setSelectedFruit(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     alert(`Your favorite fruit is: ${selectedFruit}`);
//     event.preventDefault();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>Select your favorite fruit:</p>
//       <label>
//         <input 
//           type="radio" 
//           name="fruit" 
//           value="apple" 
//           checked={selectedFruit === 'apple'} 
//           onChange={handleChange} /> Apple
//       </label>
//       <br />
//       <label>
//         <input 
//           type="radio" 
//           name="fruit" 
//           value="banana" 
//           checked={selectedFruit === 'banana'} 
//           onChange={handleChange} /> Banana
//       </label>
//       <br />
//       <label>
//         <input 
//           type="radio" 
//           name="fruit" 
//           value="cherry" 
//           checked={selectedFruit === 'cherry'} 
//           onChange={handleChange} /> Cherry
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <MyForm />
// );



//===REACT PORTALS
//A Portal is a React method that is included in the react-dom package.
//It is used to render HTML outside the parent component's DOM hierarchy.
// import { createRoot } from 'react-dom/client';
// import { useState } from 'react';
// import { createPortal } from 'react-dom';

// function PortalButton({ onClick, children }) {
//   return createPortal(
//     <button 
//       onClick={onClick}
//       style={{
//         position: 'fixed',
//         bottom: '20px',
//         right: '20px',
//         padding: '10px',
//         background: 'blue',
//         color: 'white'
//       }}>
//       {children}
//     </button>,
//     document.body
//   );
// }

// function App() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   return (
//     <div
//       style={{
//         padding: '20px',
//         border: '2px solid black',
//         margin: '20px'
//       }}
//       onClick={() => {
//         setCount1(c => c + 1);
//       }}>
//       <h2>Div Clicked: {count1}</h2>
//       <h2>Button Clicked: {count2}</h2>      
//       <p>The floating button is rendered outside this box using a portal,
//           but its clicks still bubble up to this parent div!</p>
//       <p>Try to click the div element as well, to see the count increase</p>
      
//       <PortalButton
//         onClick={(e) => {
//           // This runs first
//           setCount2(c => c + 1);
//         }}>
//         Floating Button
//       </PortalButton>
//     </div>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <App />
// );



// import { createRoot } from 'react-dom/client';
// import { useState } from 'react';
// import { createPortal } from 'react-dom';

// function Modal({ isOpen, onClose, children }) {
//   if (!isOpen) return null;

//   return createPortal(
//     <div style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     }}>
//       <div style={{
//         background: 'white',
//         padding: '20px',
//         borderRadius: '8px'
//       }}>
//         {children}
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>,
//     document.body
//   );
// }

// function MyApp() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <h1>My App</h1>
//       <button onClick={() => setIsOpen(true)}>
//         Open Modal
//       </button>

//       <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
//         <h2>Modal Content</h2>
//         <p>This content is rendered outside the App component!</p>
//       </Modal>
//     </div>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <MyApp />
// )


// ===== REACT SUSPENSE =====
//Using Suspense
//If a component takes time to load, you can use a Suspense component, and it will display the fallback content while the component is loading.

//Example:
//The Fruits component takes two seconds to load, so we wrap it in a Suspense component to display a loading message while it is loading.
// import { createRoot } from 'react-dom/client';
// import { Suspense } from 'react';
// import MyFruits from './Fruits';
// //Click the "Fruits.jsx" tab to check out the Fruits.jsx file

// function App() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <MyFruits />
//       </Suspense>
//     </div>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <App />
// );

//Using Suspense with lazy Loading
//Another common use of the Suspense component is when importing components with lazy loading:
//But with lazy loading, we can import a component dynamically, and it will display a loading message while it is loading, even if the task is very fast.

//Lets first create an example WITHOUT using lazy loading, where we do not fake a two seconds delay:
// import { createRoot } from 'react-dom/client';
// import { Suspense } from 'react';
// import Cars from './Cars';
// // Click the "cars.jsx" tab to see the content of the "Cars.jsx" file

// function App() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Cars />
//       </Suspense>
//     </div>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <App />
// );

//Now let us create an example WITH using lazy loading:
// import { createRoot } from 'react-dom/client';
// import { Suspense, lazy } from 'react';

// const Cars = lazy(() => import('./Cars'));

// function App() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Cars />
//       </Suspense>
//     </div>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <App />
// );

//Multiple Components
//One Suspense component can wrap multiple lazy components:
// import { createRoot } from 'react-dom/client';
// import { Suspense, lazy } from 'react';

// const Header = lazy(() => import('./header'));
// const Content = lazy(() => import('./content'));
// const Sidebar = lazy(() => import('./sidebar'));

// function App() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Header />
//         <div style={{ display: 'flex' }}>
//           <Sidebar />
//           <Content />
//         </div>
//       </Suspense>
//     </div>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <App />
// );



//=====Styling React Using CSS======
//==Inline Styling==
//To style an element with the inline style attribute, the value must be a JavaScript object:

//camelCased Property Names
//Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like background-color, must be written with camel case syntax:

//JavaScript Object
//You can also create an object with styling information, and refer to it in the style attribute:

// import { createRoot } from 'react-dom/client';
// import './MyStylesheet.css';/* Imports the css file*/
// import styles from './my-style.module.css';/* Imports the module.css file*/

// const Header = () => {
//   const myStyle = {
//     color: "white",
//     backgroundColor: "DodgerBlue",
//     padding: "10px",
//     fontFamily: "Sans-Serif"
//   };

//   return (
//     <>
//       <div>
//      <h1 className="myheader">{/* You can use the Global Class in your components like this: */}
//         My Header
//       </h1>
//     </div>

//     <h1 className={styles.bigred}>REACT CSS STYLINGS</h1>
//       <h2 style={{color: "red"}}>Hello Style!</h2>
//       <p style={{backgroundColor: "lightblue"}}>Add a little style!</p>
//       <div>
//         {/* the span is an example of a module css file */}
//         <span style={myStyle}>MY first React Slice and dice</span><br/><br/>
//       <button className={styles.mybutton}>
//         My Button
//       </button>
//       {/* the secondary button below with the classname primary is as a result of multiple styling in a single modeule file */}
//       <button className={styles.primary}>
//         Primary Button
//       </button><br/><br/>
//       <button className={styles.secondary}>
//         Secondary Button
//       </button>
//       {/* as the secondary button is depedent on the .secondary style 
//       This can be done by adding composes: mybutton to the secondary classes: */}
//     </div>
  
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Header />
// );

//==CSS Stylesheet==
//You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.

//==CSS MODULES==
//The CSS inside a module is available only for the component that imported it, and you do not have to worry about name conflicts.
//Create the CSS module with the .module.css extension, example: my-style.module.css.



//=======CSS MODULES [FULL CHAPTER]======== {*EVERY SINGLE EXAMPLE WILL BE APPLIED IN THE CSS CODES ABOVE*}
//In React, CSS Modules are CSS files where class names are scoped locally by default.
//Note: CSS Modules are not a part of the React core library, but are supported by many React build tools.
//The CSS file have to have the .module.css extension and can be used by importing it into your React file(s).

//Multiple Classes
//In the example above, we not only used one class, but we  added more classes
//To demostrate the changes, we need to have two buttons, with two classes each with different styling.

//Composing Classes
//CSS Modules allow you to combine classes using the composes keyword:
//Which means that one class can inherit the styles of another class.

//Global Classes
//The :global wrapper makes the class available for everyone.
//It is simply called .myheader and not prefixed and added a unique identifier like _myheader_q1obu_1

//NOTE: You can combine global and local classes in the same CSS Module:




//======= REACTR CSS IN JS=========
// import { createRoot } from 'react-dom/client';
// import styled from 'styled-components';

// const MyHeader = styled.h1`
//   padding: 10px 20px;
//   background-color: #007bff;
//   color: white;
// `;

// function App() {
//   return (
//     <>
//       <MyHeader>Welcome!</MyHeader>
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <App />
// );

//Props in Styled Components
//Another powerful feature of CSS-in-JS is the ability to use props to make styles dynamic.
// import { createRoot } from 'react-dom/client';
// import styled from 'styled-components';

// const Button = styled.button`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   background-color: ${props => props.btntype === 'primary' ? '#007bff' : '#6c757d'};
//   color: white;
//   cursor: pointer;
// `;

// function App() {
//   return (
//     <div>
//       <Button btntype="primary">Primary Button</Button>
//       <br />
//       <br />
//       <Button>Secondary Button</Button>
//     </div>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <App />
// );

//Extending Styles
//Another way of letting multiple elements have the same styles is to extend existing styled components.
// import { createRoot } from 'react-dom/client';
// import styled from 'styled-components';

// const Button = styled.button`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   color: white;
//   cursor: pointer;
// `;

// const PrimaryButton = styled(Button)`
//   background-color: #007bff;
// `;

// const SuccessButton = styled(Button)`
//   background-color: #28a745;
// `;

// function App() {
//   return (
//     <div>
//       <PrimaryButton>Primary</PrimaryButton>
//       <SuccessButton>Success</SuccessButton>
//     </div>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <App />
// );

//Global Styles
//You can also create global styles, which will be given normal class name and will be available for all components:
// import { createRoot } from 'react-dom/client';
// import { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//   h1 {
//     color: white;
//     background-color: purple;
//     font-family: Arial, sans-serif;
//   }

//   .myparagraph {
//     font-family: courier, monospace;
//     color: blue;
//   }
// `;

// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <h1>Welcome!</h1>
//       <p className="myparagraph">This paragraph is styled with global styles.</p>
//     </>
//   );
// }

// createRoot(document.getElementById('sandyq')).render(
//   <App />
// );



//====== REACT ROUTER ======
//React Router is the standard routing library for React applications. It enables you to
//handle navigation between different views.
//Your application must be wrapped with the BrowserRouter component to enable routing:
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function About() {
//   return <h1>About Page</h1>;
// }

// function Contact() {
//   return <h1>Contact Page</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Navigation */}
//       <nav>
//         <Link to="/">Home</Link> |{" "}
//         <Link to="/about">About</Link> |{" "}
//         <Link to="/contact">Contact</Link>
//       </nav>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <App />
// );
//Note that we need to import BrowserRouter, Routes, Route, Link from 'react-router-dom'.
//In this example:
// BrowserRouter wraps your app and enables routing functionality
// Link components create navigation links
// Routes and Route define your routing configuration

//Nested Routes
/*Nested routes allow you change parts of the page when you navigate to a new URL,
 while other parts is not changed or reloaded, almost like having a page within a page.*/
//Example:
//Note that we also need to import the Outlet component from 'react-router-dom'.
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route, Link, Outlet, NavLink, useParams } from 'react-router-dom';

// Style function for active links
// const navLinkStyles = ({ isActive }) => ({
//   color: isActive ? '#007bff' : '#333',
//   textDecoration: isActive ? 'none' : 'underline',
//   fontWeight: isActive ? 'bold' : 'normal',
//   padding: '5px 10px'
// });

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function Products() {
//   return (
//     <div>
//       <h1>Products Page</h1>
//       <nav style={{ marginBottom: '20px' }}>
//         <Link to="/products/car">Cars</Link> |{" "}
//         <Link to="/products/bike">Bikes</Link>
//       </nav> 
//       <Outlet /> 
//     </div>
//   );
// }

// function CarProducts() {
//   return (
//     <div>
//       <h2>Cars</h2>
//       <ul>
//         <li>Audi</li>
//         <li>BMW</li>
//         <li>Volvo</li>
//       </ul>
//     </div>
//   );
// }

// function BikeProducts() {
//   return (
//     <div>
//       <h2>Bikes</h2>
//       <ul>
//         <li>Yamaha</li>
//         <li>Suzuki</li>
//         <li>Honda</li>
//       </ul>
//     </div>
//   );
// }

// function Contact() {
//   return <h1>Contact Page</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Navigation */}
//       <nav>
//         <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{" "}
//         <NavLink to="/products" style={navLinkStyles}>Products</NavLink> |{" "}
//         <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
//         {/* I chaged the Link to NavLink, and added style={navLinkStyles} in front of each to="/" */}
//       </nav>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />}>
//           <Route path="car" element={<CarProducts />} />
//           <Route path="bike" element={<BikeProducts />} />
//         </Route>
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function Info() {
//   const { firstname } = useParams();
//   return <h1>Hello, {firstname}!</h1>;
// }

// function Apps() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/customer/Emil">Emil</Link> | 
//         <Link to="/customer/Tobias">Tobias</Link> |
//         <Link to="/customer/Linus">Linus</Link>
//       </nav>

//       <Routes>
//         <Route path="/customer/:firstname" element={<Info />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Apps />
// );

//Style Active Links
//There is a special version of the Link component called NavLink that knows whether the link's URL is "active" or not
//Note that we also need to import the NavLink component from 'react-router-dom'.

//URL Parameters
//URL parameters are variables that you can add to your route paths. They are often used to pass data between components.
//React Router provides the useParams hook to access these parameters in your components.
// in the render <App />, if i change it to <Apps /> you will see the effect of the URL PARAMETERS.



//===== React Transitions ======
//The useTransition hook helps you keep your React app responsive during heavy updates.
//It lets you mark some state updates as "non-urgent", allowing other, more urgent updates to happen first.
// import { createRoot } from 'react-dom/client';
// import { useState, useTransition } from 'react';

// function SearchBar() {
//   const [text, setText] = useState('');
//   const [results, setResults] = useState('');
//   const [isPending, startTransition] = useTransition();

//   const handleChange = (e) => {
//     // Urgent: Update input right away
//     setText(e.target.value);

//     // Non-urgent: Update search results
//     startTransition(() => {
//       setResults(e.target.value);
//     });
//   };

//   return (
//     <div>
//       <input value={text} onChange={handleChange} />
//       {isPending ? (
//         <p>Loading...</p>
//       ) : (
//         <p>Search results for: {results}</p>
//       )}
//     </div>
//   );
// }
// createRoot(document.getElementById('sandy')).render(
//   <SearchBar />
// );

//Here's a more practical example with a slow search feature:
// import { createRoot } from 'react-dom/client';
// import { useState, useTransition } from 'react';

// function SearchResults({ query }) {
//   // Simulate slow search results
//   const items = [];
//   if (query) {
//     for (let i = 0; i < 1000; i++) {
//       items.push(<li key={i}>Result for {query} - {i}</li>);
//     }
//   }
//   return <ul>{items}</ul>;
// }

// function App() {
//   const [input, setInput] = useState('');
//   const [query, setQuery] = useState('');
//   const [isPending, startTransition] = useTransition();

//   const handleChange = (e) => {
//     // Urgent: Update input field
//     setInput(e.target.value);
    
//     // Non-urgent: Update search results
//     startTransition(() => {
//       setQuery(e.target.value);
//     });
//   };

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={input} 
//         onChange={handleChange} 
//         placeholder="Type to search..."
//       />
//       {isPending && <p>Loading results...</p>}
//       <SearchResults query={query} />
//     </div>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <App />
// );



//====== REACT fowardREF======
//forwardRef lets your component pass a reference to one of its children. It's like giving a direct reference to a DOM element inside your component.

// import { createRoot } from 'react-dom/client';
// import { forwardRef, useRef } from 'react';

// const MyInput = forwardRef((props, ref) => (
//   <input ref={ref} {...props} />
// ));

// function App() {
//   const inputRef = useRef();

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <MyInput ref={inputRef} placeholder="Type here..." />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <App />
// );



// =====React Higher Order Components (HOC) ===== 
/*A Higher Order Component (HOC) is like a wrapper that adds extra features to your React components.
 Think of it like putting a case on your phone - the case adds new features (like water protection) without changing the phone itself.*/
// import { createRoot } from 'react-dom/client';

// A HOC that adds a border to any component
// function withBorder(WrappedComponent) {
//   return function NewComponent(props) {
//     return (
//       <div style={{ border: '2px solid blue', padding: '10px' }}>
//         <WrappedComponent {...props} />
//       </div>
//     );
//   };
// }

// Simple component without border
// function Greeting({ name }) {
//   return <h1>Hello, {name}!</h1>;
// }

// Create a new component with border
// const GreetingWithBorder = withBorder(Greeting);

// function App() {
//   return (
//     <div>
//       <Greeting name="John" />
//       <GreetingWithBorder name="Jane" />
//     </div>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <App />
// );



// =======React Sass Styling======
//Sass is a CSS pre-processor.
//Sass files are executed on the server and sends CSS to the browser.
//Sass adds extra features to CSS like variables, nesting, mixins, and more.
// import { createRoot } from 'react-dom/client';
// import './MyStyle.scss';

// function MyHeader() {
//   return (
//     <h1>My Header</h1>
//   );
// }

// function MyHeader1() {
//   return (
//     <div>
//     <p>My Header 1</p>
//     <h2>My Header 2</h2>
//     <h3>My Header 3</h3>
//     </div>
//   );
// }


// createRoot(document.getElementById('root')).render(
//   <MyHeader />
// );



// ===== REACT HOOKS ======
//Hooks are functions that let you "hook into" React state and lifecycle features from functional components.
// import { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//       <button
//         type="button"
//         onClick={() => setColor("red")}
//       >Red</button>
//       <button
//         type="button"
//         onClick={() => setColor("pink")}
//       >Pink</button>
//       <button
//         type="button"
//         onClick={() => setColor("green")}
//       >Green</button>
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <FavoriteColor />
// );




//===== REACT useState HOOKS ======
//The React useState Hook allows us to track state in a function component.
//State generally refers to data or properties that need to be tracking in an application.
/*useState accepts an initial state and returns two values:
The current state.
A function that updates the state.*/

// import { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return <h1>My favorite color is {color}!</h1>
// }

// createRoot(document.getElementById('sandy')).render(
//   <FavoriteColor />
// );

/*To update our state, we use our state updater function.
We should never directly update state. Ex: color = "blue" is not allowed.*/
// import { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//     </>
//   )
// }

// createRoot(document.getElementById('sandy')).render(
//   <FavoriteColor />
// );

//We could create multiple state Hooks to track individual values.
// import { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// function MyCar() {
//   const [brand, setBrand] = useState("Ford");
//   const [model, setModel] = useState("Mustang");
//   const [year, setYear] = useState("1964");
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My {brand}</h1>
//       <p>
//         It is a {color} {model} from {year}.
//       </p>
//     </>
//   )
// }

// createRoot(document.getElementById('sandy')).render(
//   <MyCar />
// );

//Or, we can just use one state and include an object instead!
// import { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// function MyCar() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   const updateColor = () => {
//   setCar(previousState => {
//     return { ...previousState, color: "blue" }
//   });
// }

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>

//       <button
//         type="button"
//         onClick={updateColor}
//       >Blue</button>
//     </>
//   )
// }

// createRoot(document.getElementById('sandy')).render(
//   <MyCar />
// );
//Use the JavaScript spread operator to update only the color of the car above
// And we added a button as a state updater function to update the state:





//=======REACT useEffect HOOKS=======
//The useEffect Hook allows you to perform side effects in your components.

/*useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)*/

//1: No dependency passed:
// import { useState, useEffect } from 'react';
// import { createRoot } from 'react-dom/client';

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000); // Runs on every render

//   }{/*[] Runs only the first render*/});

//   return <h1>I've rendered {count} times!</h1>;
// }

// createRoot(document.getElementById('sandy')).render(
//   <Timer />
// );

//2: An empty array:
/*useEffect(() => {
  //Runs only on the first render
}, []);
LIKE IN THE EXAMPLE ABOVE
*/

//3. Props or state values:
// import { useState, useEffect } from 'react';
// import { createRoot } from 'react-dom/client';

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]); // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Counter />
// );

//== Effect Cleanup ==
/*Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
We do this by including a return function at the end of the useEffect Hook.*/
// import { useState, useEffect } from 'react';
// import { createRoot } from 'react-dom/client';

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let timer = setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);

//     return () => clearTimeout(timer)
//   }, []);

//   return <h1>I've rendered {count} times!</h1>;
// }

// createRoot(document.getElementById('sandy')).render(
//   <Timer />
// );





//====== REACT useContex HOOKS ======
/*React Context is a way to manage state globally.
It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
Passing "props" through nested components:  */
// import { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// function Component1() {
//   const [user, setUser] = useState("Linus");

//   return (
//     <>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 user={user} />
//     </>
//   );
// }

// function Component2({ user }) {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 user={user} />
//     </>
//   );
// }

// function Component3({ user }) {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Component1 />
// );

//Here is the full example using React Context:
// import { useState, createContext, useContext } from 'react';
// import { createRoot } from 'react-dom/client';

// const UserContext = createContext();

// function Component1() {
//   const [user, setUser] = useState("Linus");

//   return (
//     <UserContext.Provider value={user}>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 />
//     </UserContext.Provider>
//   );
// }

// function Component2() {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 />
//     </>
//   );
// }

// function Component3() {
//   const user = useContext(UserContext);

//   return (
//     <>
//       <h1>Component 3</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Component1 />
// );





//======REACT usERef HOOKS======
/* The useRef Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly. */

//==Does Not Cause Re-renders==
// import { useState, useRef, useEffect } from 'react';
// import { createRoot } from 'react-dom/client';

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <p>Type in the input field:</p>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <App />
// );

//===Accessing DOM Elements===
// import { useRef } from 'react';
// import { createRoot } from 'react-dom/client';

// function App() {
//   const inputElement = useRef();

//   const focusInput = () => {
//     inputElement.current.focus();
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <App />
// );

//==Tracking State Changes==
// import { useRef, useState, useEffect } from 'react';
// import { createRoot } from 'react-dom/client';

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const previousInputValue = useRef("");

//   useEffect(() => {
//     previousInputValue.current = inputValue;
//   }, [inputValue]);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h2>Current Value: {inputValue}</h2>
//       <h2>Previous Value: {previousInputValue.current}</h2>
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <App />
// );





// ======REACT useReducer HOOK======
// import { useReducer } from 'react';
// import { createRoot } from 'react-dom/client';

// const initialScore = [
//   {
//     id: 1,
//     score: 0,
//     name: "John",
//   },
//   {
//     id: 2,
//     score: 0,
//     name: "Sally",
//   },
// ];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREASE":
//       return state.map((player) => {
//         if (player.id === action.id) {
//           return { ...player, score: player.score + 1 };
//         } else {
//           return player;
//         }
//       });
//     default:
//       return state;
//   }
// };

// function Score() {
//   const [score, dispatch] = useReducer(reducer, initialScore);

//   const handleIncrease = (player) => {
//     dispatch({ type: "INCREASE", id: player.id });
//   };

//   return (
//     <>
//       {score.map((player) => (
//         <div key={player.id}>
//           <label>
//             <input
//               type="button"
//               onClick={() => handleIncrease(player)}
//               value={player.name}
//             />
//             {player.score}
//           </label>
//         </div>
//       ))}
//     </>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <Score />
// );




// =======REACT useCallback HOOK=======
/*The useCallback Hook is used to memoize a callback function.
Memoizing a function means caching the result of a function so that it does not need to be recalculated.*/

//===ithout useCallback:
// import React, { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// // Child component that receives a function prop
// const Button = React.memo(({ onClick, text }) => {
//   alert(`Child ${text} button rendered`);
//   return <button onClick={onClick}>{text}</button>;
// });

// // Parent component without useCallback
// function WithoutCallbackExample() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   // This function is recreated on every render
//   const handleClick1 = () => {
//     setCount1(count1 + 1);
//   };

//   const handleClick2 = () => {
//     setCount2(count2 + 1);
//   };

//   alert("Parent rendered");
//   return (
//     <div>
//       <h2>Without useCallback:</h2>
//       <p>Count 1: {count1}</p>
//       <p>Count 2: {count2}</p>
//       <Button onClick={handleClick1} text="Button 1" />
//       <Button onClick={handleClick2} text="Button 2" />
//     </div>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <WithoutCallbackExample />
// ); 

//==With useCallback:
// import React, { useState, useCallback } from 'react';
// import { createRoot } from 'react-dom/client';

// // Child component that receives a function prop
// const Button = React.memo(({ onClick, text }) => {
//   console.log(`${text} button rendered`);
//   return <button onClick={onClick}>{text}</button>;
// });

// // Parent component with useCallback
// function WithCallbackExample() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   // These functions are memoized and only recreated when dependencies change
//   const handleClick1 = useCallback(() => {
//     setCount1(count1 + 1);
//   }, [count1]);

//   const handleClick2 = useCallback(() => {
//     setCount2(count2 + 1);
//   }, [count2]);

//   console.log("Parent rendered");
//   return (
//     <div>
//       <h2>With useCallback:</h2>
//       <p>Count 1: {count1}</p>
//       <p>Count 2: {count2}</p>
//       <Button onClick={handleClick1} text="Button 1" />
//       <Button onClick={handleClick2} text="Button 2" />
//     </div>
//   );
// }

// createRoot(document.getElementById('sandy')).render(
//   <WithCallbackExample />
// ); 




// =====REACT useMemo HOOK=====
/*The React useMemo Hook returns a memoized value.
Think of memoization as caching a value so that it does not need to be recalculated.
The useMemo Hook only runs when one of its dependencies update.*/

// Without useMemo
// import { useState } from 'react';
// import { createRoot } from 'react-dom/client';


// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const calculation = expensiveCalculation(count);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//         <p>Note that this example executes the expensive function also when you click on the Add Todo button.</p>
//       </div>
//     </div>
//   );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };

// createRoot(document.getElementById('sandy')).render(
//   <App />
// );

// With useMemo
// import { useState, useMemo } from 'react';
// import { createRoot } from 'react-dom/client';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const calculation = useMemo(() => expensiveCalculation(count), [count]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//         <p>Note: This example executes the expensive function only when you click on the Increment button, and not when you add a todo.</p>
//       </div>
//     </div>
//   );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };

// createRoot(document.getElementById('sandy')).render(
//   <App />
// );




//=====REACT CUSTOM HOOKS=====
/*When you have components that can be used by multiple components, we can extract that component into a custom Hook.
Custom Hooks start with "use". Example: useFetch.

Example:
Use the JSONPlaceholder service to fetch some fake titles and display them:*/

// import { useState, useEffect } from 'react';
// import { createRoot } from 'react-dom/client';

// const Home = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//  }, []);

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };

// createRoot(document.getElementById('sandy')).render(
//   <Home />
// );

import { createRoot } from 'react-dom/client';
import useFetch from "./useFetch";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

createRoot(document.getElementById('sandy')).render(
  <Home />
);

