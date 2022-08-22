import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Select from './select';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <body>
    <div className='form'>
      <div className='formitem'>New Post </div>
    </div>
    <Select />
  </body>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
