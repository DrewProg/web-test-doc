import React from 'react'
import { Table, Form, Button } from 'react-bootstrap'

function AddProject() {
    return (
        <form>
            Информация о новом проекте:
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Название проекта</th>
                        <th>Краткое описание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Form.Control />
                        </td>
                        <td>
                            <Form.Control
                                as="textarea"
                                placeholder="Название проекта"
                            />
                        </td>
                        <td>
                            <Form.Control
                                as="textarea"
                                placeholder="Краткое описание проекта"
                            />
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div className="mb-2 d-flex justify-content-end"><Button type="submit" variant="success">Добавить проект</Button></div>
            <div className="d-flex justify-content-end"><Button type="reset" variant="outline-danger" size="sm">Очистить данные</Button></div>
        </form>
    )
}

export default AddProject
