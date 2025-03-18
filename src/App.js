// Libraries
import React from 'react';
// Components
import Counter from './components/Counter.js';
// Styles
import "./App.css"

function Main() {
  const page_title = <h1 className='hello-world'>Hello World</h1>;

  return (
    <div>
      {page_title}
      <Counter/>
    </div>
  );
}

export default Main;

