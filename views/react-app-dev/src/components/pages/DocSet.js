import React, { useContext, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { useHistory, useLocation, NavLink } from 'react-router-dom';
import { Context } from '../..';
import { ADD_DOC_ROUTE, DOC_ROUTE } from '../../utils/consts';

const DocSet = () => {
    const history = useHistory();
    const location = useLocation().pathname;
    const project = useContext(Context);
    const docset = {
        id: 1,
        name: 'docset_name_1',
        description: 'docset_description_1',
        doctype: 'test-case'
    }
    const docs = [{ id: 1, name: 'doc_name_1', status: 'working_1' },
    { id: 2, name: 'doc_name_2', status: 'working_2' }];

    useEffect(() => console.log(project.project));
    return (
        <div>
            Информация о наборе:
            <Table striped bordered hover size="sm">
                <tbody>
                    <tr>
                        <th>
                            Название проекта
                        </th>
                        <td>
                            {project.project.name}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Краткое описание проекта
                        </th>
                        <td>
                            {project.project.description}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Название набора
                        </th>
                        <td>
                            {docset.name}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Краткое описание набора
                        </th>
                        <td>
                            {docset.description}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Тип документов набора
                        </th>
                        <td>
                            {docset.doctype}
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Заглавие</th>
                        <th>Статус</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        docs.map((doc) =>
                            <tr key={doc.id}>
                                <td>{doc.id}</td>
                                <td>
                                    <Button key={doc.id} variant="link" onClick={() => history.push(location + DOC_ROUTE + '/' + doc.id)}>
                                        {doc.name}
                                    </Button>
                                </td>
                                <td>{doc.status}</td>
                                <td>Actions</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <NavLink to={ADD_DOC_ROUTE}>Добавить новый документ</NavLink>
        </div>
    )
}

export default DocSet
