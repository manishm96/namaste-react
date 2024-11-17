import react from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello World"); // React Element

const jsxHeading = <h1 id="heading">Hello World</h1>; // React Element using JSX

const elementInsideElement = (
  <>
    {heading}
    {jsxHeading}
    <h2 id="sub-heading">Hello!!</h2>
  </>
); // React Element inside another React Element

const HeadingComponent = () => <h1 id="heading">Hello World</h1>; // React Component

const ElementInsideComponent = () => (
  <>
    {elementInsideElement}
    <h2 id="sub-heading">Hello!!</h2>
  </>
); // React Element inside React Component

const ComponentInsideComponent = () => (
  <>
    <HeadingComponent />
    <h2 id="sub-heading">Namaste React!!</h2>
  </>
); // React Component inside React Component

const root = createRoot(document.getElementById("root"));
const root2 = createRoot(document.getElementById("root"));
// root.render(elementInsideElement); // Rendering React Element inside root
root.render(<ComponentInsideComponent />); // Rendering React Component inside root

/*
KEY POINTS:
1. React element is nothing but a JS object. Babel transpiles JSX to React.createElement() function and then to JS object that browser can understand.
2. React component is a JS function that returns some piece of JSX.
3. React element can be nested inside another React element. It can be done using {}. {} is used to evaluate JS expression inside JSX.
4. React component can be nested inside another React component. It can be done by invoking the component inside another component. <ComponentName /> is used to invoke a component.
5. JSX can have only one parent element. So, if we want to return multiple elements, we can wrap them inside a fragment <> </> or <React.Fragment> </React.Fragment> or <div> </div>.
*/
