import React from 'react';
import {Container , Row ,Col ,Form , Button} from 'react-bootstrap'; 
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';
export const LoginForm = ({handleOnChange , email , pass})=>{
    return(
    <Container>
        <Row>
            <Col>
            <h1 className ="text-info text-center">Client Login</h1>
            <br />
            <Form>
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                type = "email"
                name = "email"
                value = {email}
                onChange={handleOnChange}
                placeholder="Enter Email"
                required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type = "password"
                name = "password"
                value = {pass}
                onChange={handleOnChange}
                placeholder="password"
                required
                />
            </Form.Group>
            <Button type ="submit">login</Button>
            </Form>
            <br />
            </Col>
        </Row>
        <Row>
            <Col>
                <a href ="www.google.com">Forgotpassword</a>
            </Col>
        </Row>
    </Container>
    );
}

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired ,
    email : PropTypes.string.isRequired ,
    pass : PropTypes.string.isRequired
}