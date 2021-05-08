import React,{useEffect, useState} from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
      document.body.addEventListener('click', function(){
          setOpen(false);
      }, {capture:true})
  },[])
  const RenderedOptions = options.map((option) => {
    if (selected.value !== option.value) {
      return (
        <div
          key={option.value}
          className="item"
          onClick={() => onSelectedChange(option)}
        >
          {option.label}
        </div>
      );
    }
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{RenderedOptions}</div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
