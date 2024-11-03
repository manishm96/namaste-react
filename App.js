import react from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div id="heading">
      <h1>Hello World</h1>
      <h2>Namaste React!!</h2>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
