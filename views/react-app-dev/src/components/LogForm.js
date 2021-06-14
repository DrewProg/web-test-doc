import React, { useContext, useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { REG_ROUTE, LOGIN_ROUTE, PROJECTS_ROUTE } from '../utils/consts';
import '../styles/LogForm.css'
import { signIn, signUp } from '../http/userAPI';
import { Context } from '../index';

const LogForm = observer(() => {
    const [passVis, setPassVis] = useState(false);
    const [confirmPassVis, setConfirmPassVis] = useState(false);
    const [nickname, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { user } = useContext(Context);
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const history = useHistory();
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // if (password !== confirmPassword) throw new Error('Пароли не с');
            let data;
            if (isLogin) {
                data = await signIn(nickname, password);
            }
            else {
                data = await signUp(nickname, password);
            }
            user.setUser(data);
            user.setIsAuth(true);
            history.push(PROJECTS_ROUTE);
        } catch (error) {
            alert(error.response.data.message)
        }
    };

    const handleSwitchChange = (event) => {
        event.target.id==='custom-switch' ?
        setPassVis(!passVis) : setConfirmPassVis(!confirmPassVis);
    };

    return (
        <>
            <Card className="p-5 m-5">
                <h3>{isLogin ? 'Авторизация' : 'Регистрация'}</h3>
                <Form className="d-flex flex-column">
                    <Form.Control
                        required
                        className="mt-3"
                        placeholder="Введите логин"
                        value={nickname}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <Form.Control
                        required
                        type={passVis ? 'text' : 'password'}
                        className="mt-3"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        name="pass"
                    />
                    <Form.Group as={Row} controlId="formHorizontalCheck">
                        <Col>
                            <Form.Check
                                type="switch"
                                label="Показать пароль"
                                id="custom-switch"
                                onChange={handleSwitchChange} />
                        </Col>
                    </Form.Group>
                    {
                        isLogin ? <></> :
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                    type={confirmPassVis ? 'text' : 'password'}
                                    placeholder="Повторите пароль"
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                    name="confirmPass"
                                    required
                                />
                                <Form.Check
                                    type="switch"
                                    id="custom-switch-2"
                                    label="Показать пароль"
                                    onChange={handleSwitchChange}
                                />
                            </Form.Group>
                    }
                    <Form.Group as={Col} className="d-flex flex-column">
                        <Row className="justify-content-center">
                            <Button
                                variant="outline-success"
                                type="submit"
                                onClick={handleSubmit}>
                                {isLogin ? 'Войти' : 'Зарегистрироваться'}
                            </Button>
                        </Row>
                        <Row className="justify-content-center">
                            {isLogin ?
                                <NavLink to={REG_ROUTE}>Зарегистрироваться</NavLink>
                                :
                                <NavLink to={LOGIN_ROUTE}>Есть аккаунт? Войти</NavLink>
                            }
                        </Row>
                    </Form.Group>
                </Form>
            </Card>
        </>
    );
})

export default LogForm;