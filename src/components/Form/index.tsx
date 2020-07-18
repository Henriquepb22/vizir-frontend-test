import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import FormLocation from "../FormLocation";
import FormInput from "../FormInput";
import FormPlans from "../FormPlans";

const FormComponent: React.FC = () => {
    return (
        <Form>
            <Form.Row>
                <Col sm={12} md={4}>
                    <FormLocation />
                </Col>
                <Col sm={12} md={4}>
                    <FormInput />
                </Col>
                <Col sm={12} md={4}>
                    <FormPlans />
                </Col>
            </Form.Row>
            <Button variant="primary" block>
                Calcular
            </Button>
        </Form>
    );
};

export default FormComponent;
