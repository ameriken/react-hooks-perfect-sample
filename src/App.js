import React, {createContext, useState} from 'react';
import './App.css';
import CounterHooks from "./component/CounterHooks";
import FormHook from "./component/FormHook";
import ItemHook from "./component/ItemHook";
import EffectHook from "./component/EffectHook";
import MouseEventEffect from "./component/MouseEventEffect";
import DataFetch from "./component/DataFetch";
import DataFetchById from "./component/DataFetchById";
import ComponentC from "./component/ComponentC";

export const UserContext = createContext()
export const LanguageContext = createContext()

function App() {
    const [user, setUser] = useState({name: 'yamada', age:'32'})
    const [language, setLanguage] = useState('日本語')
  return (
    <div className="App">
        {/*<CounterHooks />
            <FormHook/>
            <ItemHook/>
            <EffectHook />
            <MouseEventEffect/>
            <DataFetch />
            <DataFetchById /> */}
        <UserContext.Provider value={user}>
            <LanguageContext.Provider value={language}>
                <ComponentC />
            </LanguageContext.Provider>
        </UserContext.Provider>
    </div>
  );
}

export default App;
