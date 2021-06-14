import React, { useContext, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { Row, Col, Table, Button } from 'react-bootstrap'
import { ADD_PROJECT_ROUTE, MAIN_ROUTE, PROJECTS_ROUTE } from '../../utils/consts';
import { Context } from '../..';
import { fetchProject } from '../../http/projectsAPI';
import { observer } from 'mobx-react-lite';

const Projects = observer(() => {
    const { project } = useContext(Context);
    const { user } = useContext(Context);
    const history = useHistory();

    useEffect(() => {
        fetchProject().then(data => project.setProjects(data))
    }, [])

    const chooseProject = (curProject) => {
        project.setProject(curProject);
        history.push(PROJECTS_ROUTE + '/' + curProject.id);
    }

    return (
        <div>
            Список проектов
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Название</th>
                        <th>Краткое описание</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        project.projects.map((project) => <tr key={project.id}>
                            <td>{project.id}</td>
                            <td>
                                <Button variant="link" onClick={() => chooseProject(project)}>
                                    {project.name}
                                </Button>
                            </td>
                            <td>{project.description}</td>
                            {/* Показывать действия, если пользователь авторизирован как админ */}
                            {user.isAuth ? <td>
                                <NavLink to={MAIN_ROUTE}>Редактировать</NavLink><br/>
                                <NavLink to={MAIN_ROUTE}>Удалить</NavLink>
                                </td> : <td></td>} 
                        </tr>)
                    }
                </tbody>
            </Table>
            <NavLink to={ADD_PROJECT_ROUTE}>Добавить новый проект</NavLink><br />
            <NavLink to={MAIN_ROUTE}>Настройка атрибутов</NavLink><br />
            <NavLink to={MAIN_ROUTE}>Настройка ЖЦ</NavLink>
        </div>
    )
})

export default Projects
