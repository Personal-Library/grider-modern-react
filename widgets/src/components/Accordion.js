import React, { useState } from 'react';

// Object destructuring is used because we only want to use the items prop
const Accordion = ({ items }) => {
  // 'activeIndex' is the piece of state
  // 'setActiveIndex' is the function to change state
  // 'null' is the intiial value for this piece of state
  const [activeIndex, setActiveIndex] = useState(null);


  const onTitleClick = (index) => {
    setActiveIndex(index)
  }


  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : ''

    return (
      <React.Fragment key={item.title}>
        <div 
          className={`title ${active}`} 
          onClick={() => onTitleClick(index)} 
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment >
    );
  })


  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  );
}

export default Accordion;