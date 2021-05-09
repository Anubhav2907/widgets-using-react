import React, { useState } from "react";
import Accordian from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <Header></Header>
      <Route path="/">
        <Accordian items={items}></Accordian>
      </Route>
      <Route path="/list">
        <Search></Search>
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          onSelectedChange={setSelected}
          selected={selected}
        ></Dropdown>
      </Route>
      <Route path="/translate">
        <Translate></Translate>
      </Route>
    </div>
  );
};
export default App;
