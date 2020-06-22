import React from 'react';
import './App.css';
import CounterHooks from "./component/CounterHooks";
import FormHook from "./component/FormHook";
import ItemHook from "./component/ItemHook";

function App() {
  return (
    <div className="App">
      {/*<CounterHooks /> */}
      {/*<FormHook/> */}
      <ItemHook/>
    </div>
  );
}

export default App;
