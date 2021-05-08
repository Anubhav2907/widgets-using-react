import React from "react";
import Acccordian from "./Accordion";
import Search from "./Search";

const items = [
  {
    title: "What is React",
    content: "React is a frontend js framework",
  },
  {
    title: "Why to use React",
    content: "So handy and easy to use",
  },
  {
    title: "How to structure react project",
    content: "By dividing it into different structures",
  },
];

const App = () => {
  return (
    <div>
      {/* <Acccordian items={items}></Acccordian> */}
      <Search></Search>{" "}
    </div>
  );
};
export default App;
