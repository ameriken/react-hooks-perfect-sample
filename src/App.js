import React, {createContext, useEffect, useReducer, useState} from 'react';
import './App.css';
import CounterHooks from "./component/useState/CounterHooks";
import FormHook from "./component/useState/FormHook";
import ItemHook from "./component/useState/ItemHook";
import EffectHook from "./component/useEffect/EffectHook";
import MouseEventEffect from "./component/useEffect/MouseEventEffect";
import DataFetch from "./component/useEffect/DataFetch";
import DataFetchById from "./component/useEffect/DataFetchById";
import ComponentC from "./component/useContext/ComponentC";
import CounterReducer from "./component/useReducer/CounterReducer";
import ComponentA from "./component/useContext/ComponentA";
import ComponentB from "./component/useContext/ComponentB";
import WrapComponent from "./component/useCallback/WrapComponent";
import Check from "./component/useMemo/Check";
import axios from 'axios'
import FocusInput from "./component/useRef/FocusInput";
import Count from "./component/useRef/Count"
import DocTitleUpdateOne from "./component/customHook/DocTitleUpdateOne";
import DocTitleUpdateTwo from "./component/customHook/DocTitleUpdateTwo";
import Form from "./component/customHook/Form";

export const UserContext = createContext()
export const LanguageContext = createContext()
export const CountContext = createContext()

const initialState = {
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'データの取得に失敗しました。'
            }
        default:
            return state
    }
    /*
    switch (action.type) {
        case 'increment1':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement1':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state;

    }
    */
}

function App() {
    //const [user, setUser] = useState({name: 'yamada', age:'32'})
    //const [language, setLanguage] = useState('日本語')
    //const [count, dispatch] = useReducer(reducer, initialState)
    //const [state, dispatch] = useReducer(reducer, initialState)
    //useEffect(() => {
    //    axios
    //        .get('https://jsonplaceholder.typicode.com/posts/1')
    //        .then(res => {
    //            dispatch({type: 'FETCH_SUCCESS', payload: res.data})
    //        })
    //        .catch(err => {
    //            dispatch({type: 'FETCH_ERROR'})
    //        })
    //})
  return (
    <div className="App">
        {/*
            <CounterHooks />
            <FormHook/>
            <ItemHook/>
            <EffectHook />
            <MouseEventEffect/>
            <DataFetch />
            <DataFetchById />
            <UserContext.Provider value={user}>
                <LanguageContext.Provider value={language}>
                    <ComponentD />
                </LanguageContext.Provider>
            </UserContext.Provider>
            <CounterReducer />
            <h1>カウント{count.firstCounter}</h1>
            <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </CountContext.Provider>
            <h1>{state.loading ? 'Loading....' : state.post.title }</h1>
            <h1>{state.error ? state.error : null }</h1>
            <WrapComponent />
            <Check />
            <FocusInput />
            <Count />
            <DocTitleUpdateOne />
            <DocTitleUpdateTwo />
        */}
        <Form />
    </div>
  );
}

export default App;
