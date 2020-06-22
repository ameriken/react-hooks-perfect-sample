import React from 'react';
import './App.css';
import CounterHooks from "./component/CounterHooks";
import FormHook from "./component/FormHook";
import ItemHook from "./component/ItemHook";
import EffectHook from "./component/EffectHook";
import MouseEventEffect from "./component/MouseEventEffect";
import DataFetch from "./component/DataFetch";
import DataFetchById from "./component/DataFetchById";

function App() {
  return (
    <div className="App">
      {/*<CounterHooks />
      {/*<FormHook/>
      <ItemHook/>
      <EffectHook />
      <MouseEventEffect/>
      <DataFetch /> */}
      <DataFetchById />
    </div>
  );
}

export default App;
