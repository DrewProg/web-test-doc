import React, { useContext, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { Context } from '../..';
import { fetchDocsets } from '../../http/docsetsAPI';
import { ADD_DOCSET_ROUTE, DOCSET_ROUTE } from '../../utils/consts';

const Project = () => {
    const location = useLocation().pathname;
    const history = useHistory();
    const { project } = useContext(Context);
    const { docsets } = useContext(Context);

    useEffect(() => {
        fetchDocsets().then(data => docsets.setDocSets(data));
    })

    return (
        <>
            Информация о проекте:
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Краткое описание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {project.project.name}
                        </td>
                        <td>
                            {project.project.description}
                        </td>
                    </tr>
                </tbody>
            </Table>
            Наборы документов:
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Тип документов</th>
                        <th>Название</th>
                        <th>Краткое описание</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        docsets.docsets.map((docset) =>
                            <tr key={docset.id}>
                                <td>{docset.id}</td>
                                <td></td>
                                <td>
                                    <Button key={docset.id} variant="link" onClick={() => history.push(location + DOCSET_ROUTE + '/' + docset.id)}>
                                        {docset.name}
                                    </Button>
                                </td>
                                <td>{docset.description}</td>
                                {/* <td>{docset.doctype}</td> */}
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <NavLink to={ADD_DOCSET_ROUTE}>Добавить новый набор</NavLink><br />
        </>
    )
}

export default Project
