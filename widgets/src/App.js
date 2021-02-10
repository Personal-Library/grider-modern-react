import React, { useState } from 'react';
import Translate from './components/Translate';
import Dropdown from './components/Dropdown';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
]

const options = [
  {
    label: 'The Color GoldenRod',
    value: 'GoldenRod'
  },
  {
    label: 'The Color LightCoral',
    value: 'LightCoral'
  },
  {
    label: 'The Color RebeccaPurple',
    value: 'RebeccaPurple'
  },
  {
    label: 'The Color Salmon',
    value: 'Salmon'
  },
  {
    label: 'The Color SpringGreen',
    value: 'SpringGreen'
  },
  {
    label: 'The Color SaddleBrown',
    value: 'SaddleBrown'
  },
  {
    label: 'The Color Peru',
    value: 'Peru'
  },
  {
    label: 'The Color DodgerBlue',
    value: 'DodgerBlue'
  }
];

const App = () => {
  const [selected, setSelected] = useState(options[0])

  return (
    <div style={{ margin:'20px' }}>
      <Header />
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App

// Dropdown Menu Stuff Show Toggle
// <button
//  className="ui button"
//  onClick={() => setShowDropdown(!showDropdown)}>
//  Toggle Dropdown
// </button>
// {showDropdown ? <Dropdown 
//  options={options} 
//  selected={selected}
//  onSelectedChange={setSelected} 
// /> : null}
// <span style={{ color: selected.value }}>
//  Almost before we knew it, we had left the ground.
// </span> 