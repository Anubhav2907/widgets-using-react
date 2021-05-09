import React, { useState } from "react";
import Acccordian from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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
    const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      {/* <Acccordian items={items}></Acccordian> */}
      {/* <Search color={selected}></Search> */}
      {/* <button
        className="ui button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          onSelectedChange={setSelected}
          selected={selected}
        ></Dropdown>
      ) : null} */}
      <Translate></Translate>
    </div>
  );
};
export default App;
