import React from 'react';
import { Col, Form, Table } from 'react-bootstrap'

const AddDoc = () => {
    // const projects = [];
    // const docsets = [];
    return (
        <div>
            Добавление нового документа
            <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Проект</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Набор</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Тип документа</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Атрибут</th>
                            <th>Значение</th>
                        </tr>
                    </thead>
                </Table>
            </Form>
        </div>
    )
}

export default AddDoc
