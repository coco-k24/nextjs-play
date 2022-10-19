import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
//import Parent from './components/ContainerSample'
import Counter from './components/UseState'
import Counter2 from './components/UseReducer'
//import { Parent } from './components/Parent'
import { Parent } from './components/UseCallbackSample' 
import { UseMemoSample } from './components/UseMemoSample'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App />
    <Hello />
    <Name />
    <Message />
    <Counter initialValue={1}/>
    <Counter2 initialValue={0}/> */}
    <Parent />
    <UseMemoSample />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
