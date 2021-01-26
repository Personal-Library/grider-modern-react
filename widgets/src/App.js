import React from 'react';
import Translate from './components/Translate';
// import Dropdown from './components/Dropdown';
// import Accordion from './components/Accordion';
// import Search from './components/Search';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front end javascript framework'
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is a favorite JS library among engineers'
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating components'
//   }
// ]

// const options = [
//   {
//     label: 'The Color Red',
//     value: 'red'
//   },
//   {
//     label: 'The Color Green',
//     value: 'green'
//   },
//   {
//     label: 'A Shade of Blue',
//     value: 'blue'
//   },
//   {
//     label: 'A Shade of Gray',
//     value: 'gray'
//   },
//   {
//     label: 'The Color Black',
//     value: 'black'
//   }
// ];

const App = () => {

  return (
    <div style={{ margin:'20px' }}>
      <Translate />
    </div>
  );
}

export default App;



// Dropdown Menu Stuff
// {/* <button
// className="ui button"
// onClick={() => setShowDropdown(!showDropdown)}>
// Toggle Dropdown
// </button>
// {showDropdown ? <Dropdown 
// options={options} 
// selected={selected}
// onSelectedChange={setSelected} 
// /> : null}
// <span style={{ color: selected.value }}>
// Almost before we knew it, we had left the ground.
// </span> */}