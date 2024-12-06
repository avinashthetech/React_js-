import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
let div = document.querySelector("#root");
// createRoot(div).render(<h1> Welcome to React</h1>);

//  createRoot(div).render(
// <nav>
//     <ul>
//         <li>home</li>
//         <li>about</li>
//         <li>login</li>
//         <li>logut</li>
//     </ul>
// </nav>
//  );
 createRoot(div).render(<App></App>);

