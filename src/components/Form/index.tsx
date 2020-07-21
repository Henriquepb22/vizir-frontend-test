import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import FormLocation from "../FormLocation";
import FormInput from "../FormInput";
import FormPlans from "../FormPlans";

import { PlanTypeAction } from "../../reducers/types";

type Props = {
    dispatch: React.Dispatch<PlanTypeAction>;
};

const FormComponent: React.FC<Props> = ({ dispatch }) => {
    const [originDestiny, setOriginDestiny] = useState("");
    const [minutes, setMinutes] = useState(0);
    const [plan, setPlan] = useState("PLUS30");

    const calcValue = () => {
        dispatch({
            type: originDestiny,
            payload: { minutes, plan },
        });
    };

    return (
        <Form>
            <Form.Row>
                <Col sm={12} md={4}>
                    <FormLocation onLocationChange={setOriginDestiny} />
                </Col>
                <Col sm={12} md={4}>
                    <FormInput onMinutesChange={setMinutes} />
                </Col>
                <Col sm={12} md={4}>
                    <FormPlans onPlansChange={setPlan} />
                </Col>
            </Form.Row>
            <Button onClick={calcValue} variant="primary" block>
                Calcular
            </Button>
        </Form>
    );
};

export default FormComponent;
