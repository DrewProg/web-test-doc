import React, { useContext } from 'react';
import { Context } from '../index';
import { observer } from "mobx-react-lite";
import { LOGIN_ROUTE } from '../utils/consts';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import '../styles/TopBar.css';

const TopBar = observer(() => {
    const { user } = useContext(Context);
    const history = useHistory()
;    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        history.push(LOGIN_ROUTE);
    }

    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <NavLink to={LOGIN_ROUTE}><div className="nav-burger">☰</div></NavLink>
                {!user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant="outline-light" onClick={() => history.push(LOGIN_ROUTE)}>Вход</Button>
                    </Nav> :
                    <>
                        <div>{user.nickname}</div>
                        <Button variant="outline-light" onClick={() => logOut()}>Выйти</Button>
                    </>}
            </Container>
        </Navbar >
    );
});

export default TopBar;