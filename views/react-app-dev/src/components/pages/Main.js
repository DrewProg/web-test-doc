import React from 'react';
import { Container, Nav } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import '../../styles/Main.css'
import { ADD_PROJECT_ROUTE, LOGIN_ROUTE, PROJECTS_ROUTE } from '../../utils/consts';
import AddProject from './AddProject';
import Projects from './Projects';
import Project from './Project';

const Main = () => {
    const location = useLocation().pathname;
    return (
        <>
                <Container className="mt-3">
                    {
                        location === PROJECTS_ROUTE ? <Projects/> : <></>
                    }
                </Container>
            {/* <Sidebar
                styles={{ sidebar: { top: "10%" }, content: { top: "10%" } }}
                docked
                sidebar={
                    <Nav>
                        <NavLink to={PROJECTS_ROUTE}>Проекты</NavLink>
                    </Nav>
                }>
                <Container className="mt-3">
                    {
                        location === PROJECTS_ROUTE + '/:id' ? <Project/> :
                        location === PROJECTS_ROUTE ? <Projects/> : 
                        location === ADD_PROJECT_ROUTE ? <AddProject/> : <></>
                    }
                </Container>
            </Sidebar> */}
        </>
    )
}

export default Main
