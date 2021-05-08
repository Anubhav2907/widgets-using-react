import React, { useState } from "react";
import Acccordian from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";

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

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Acccordian items={items}></Acccordian> */}
      {/* <Search></Search> */}
      <Dropdown 
      options={options}
      onSelectedChange = {setSelected} 
      selected={selected}
      ></Dropdown>
    </div>
  );
};
export default App;
