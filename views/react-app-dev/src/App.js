import { Route, Switch } from 'react-router-dom';
import './App.css';
import LogForm from './components/LogForm';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="app-wrapper">
      <TopBar/>
      <Switch>     
        <Route exact path='/' component={LogForm}/>
      </Switch>
    </div>
  );
}

export default App;
