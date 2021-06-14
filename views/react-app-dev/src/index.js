import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/UserStore';
import ProjectStore from './store/ProjectStore';
import DocSetsStore from './store/DocSetsStore';
import 'bootstrap/dist/css/bootstrap.css'

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    project: new ProjectStore(),
    docsets: new DocSetsStore()
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,
  document.getElementById('root')
);
