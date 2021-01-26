import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // useEffect(() => {
  //   document.body.addEventListener('click', (event) => {
  //     if (event.target.tagName === 'BODY') {
  //       setOpen(false);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick)
    };

  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    return (
      <div 
        key={option.value} 
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });


  const toggleDropdown = open ? 'dropdown visible' : ''
  const toggleMenu = open ? 'visible transition' : ''

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{label}</label>
        <div 
          onClick={() => setOpen(!open)} 
          className={`ui selection dropdown ${toggleDropdown}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${toggleMenu}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;