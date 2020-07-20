import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import FormLocation from "../FormLocation";
import FormInput from "../FormInput";
import FormPlans from "../FormPlans";

type Action = {
    type: string;
    payload: {
        origin: number;
        destiny: number;
        minutes: number;
    };
};

type Props = {
    dispatch: React.Dispatch<Action>;
};

const FormComponent: React.FC<Props> = ({ dispatch }) => {
    const [origin, setOrigin] = useState(0);
    const [destiny, setDestiny] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [plan, setPlan] = useState("PLAN_PLUS30");

    const calcValue = () =>
        dispatch({
            type: plan,
            payload: { origin, destiny, minutes },
        });

    return (
        <Form>
            <Form.Row>
                <Col sm={12} md={4}>
                    <FormLocation
                        onOriginChange={setOrigin}
                        onDestinyChange={setDestiny}
                    />
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
