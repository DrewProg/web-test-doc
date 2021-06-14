import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Table, Form, Button } from 'react-bootstrap'
import AttributeSettings from '../modals/AttributeSettings';
import { MAIN_ROUTE } from '../../utils/consts';

const AddDocSet = () => {
    const [attSettVisible, setAttSettVisible] = useState(false);
    const project = {
        id: 1,
        name: 'Тренажер оператора портального крана',
        description: 'Разработка программного обеспечения тренажера оператора портального крана по заказу Пермского речного порта.'
    };
    return (
        <div>
            Общая информация о новом наборе:
            <Table striped bordered hover size="sm">
                <tbody>
                    <tr>
                        <th>Название проекта</th>
                        <td>{project.name}</td>
                    </tr>
                    <tr>
                        <th>Краткое описание проекта</th>
                        <td>{project.description}</td>
                    </tr>
                    <tr>
                        <th>Выбор типа документов</th>
                        <td>
                            <Form.Control as="select">
                                <option>Выбор...</option>
                                <option>Тест-кейс</option>
                            </Form.Control>
                        </td>
                    </tr>
                    <tr>
                        <th>Название набора</th>
                        <td>
                            <Form.Control
                                as="textarea"
                                placeholder="Название набора"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Краткое описание набора</th>
                        <td>
                            <Form.Control
                                as="textarea"
                                placeholder="Краткое описание набора"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>Жизненный цикл</th>
                        <td>
                            <Form.Control as="select">
                                <option>Выбор...</option>
                                <option>...</option>
                            </Form.Control>
                        </td>
                    </tr>
                </tbody>
            </Table>
            Список атрибутов тест-кейсов из данного набора:
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            Атрибуты документов данного набора
                        </th>
                        <th>
                            Возможные атрибуты
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <NavLink to={MAIN_ROUTE}>Идентификатор</NavLink><Button className='ml-2' size='sm' variant='outline-danger'>-</Button><br/>
                            <NavLink to={MAIN_ROUTE}>Описание</NavLink><Button className='ml-2' size='sm' variant='outline-danger'>-</Button><br/>
                            <NavLink to={MAIN_ROUTE}>Шаги тест-кейса и ожидаемые результаты</NavLink><Button className='ml-2' size='sm' variant='outline-danger'>-</Button><br/>
                            <NavLink to={MAIN_ROUTE}>Приоритет</NavLink><Button className='ml-2' size='sm' variant='outline-danger'>-</Button><br/>
                            <NavLink to={MAIN_ROUTE}>Требование</NavLink><Button className='ml-2' size='sm' variant='outline-danger'>-</Button><br/>
                            {/* <Button onClick={() => setAttSettVisible(true)}>Настроить атрибут</Button> */}
                        </td>
                        <td>
                        <Button className='ml-2' size='sm' variant='outline-success'>+</Button><NavLink to={MAIN_ROUTE}>Модуль приложения</NavLink><br/>
                        <Button className='ml-2' size='sm' variant='outline-success'>+</Button><NavLink to={MAIN_ROUTE}>Исходные данные</NavLink><br/>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <AttributeSettings show={attSettVisible} onHide={() => setAttSettVisible(false)} />
        </div>
    )
}

export default AddDocSet
