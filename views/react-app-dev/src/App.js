import { observer } from 'mobx-react-lite';
import { useContext, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import AppRouter from './components/AppRouter';
import TopBar from './components/TopBar';
import { Nav, NavLink, Container, Spinner } from 'react-bootstrap';
import Sidebar from 'react-sidebar';
import { PROJECTS_ROUTE } from './utils/consts';
import './styles/App.css';
import { check } from './http/userAPI';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data =>{
      user.setUser(true);
      user.setIsAuth(true);
    }).finally(() => setLoading(false))
  }, []);
  
  if (loading) {
    return <Spinner animation={'grow'}/>
  }

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <TopBar />
        <div className="app-router">
          <Sidebar
            styles={{ sidebar: { top: "10%" }, content: { top: "10%" } }}
            docked
            sidebar={
              user.isAuth ?
                <Nav>
                  <NavLink to={PROJECTS_ROUTE}>Проекты</NavLink>
                </Nav> : <></>
            }>
            <Container>
              <AppRouter />
            </Container>
          </Sidebar>
        </div>
      </div>
    </BrowserRouter>
  );
})

export default App;
