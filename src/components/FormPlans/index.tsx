import React from "react";
import Form from "react-bootstrap/Form";

type Props = {
    onPlansChange: React.Dispatch<React.SetStateAction<string>>;
};

const FormPlans: React.FC<Props> = ({ onPlansChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
        onPlansChange(e.target.value);

    return (
        <Form.Group controlId="plansControl">
            <Form.Label>Plano:</Form.Label>
            <Form.Control as="select" onChange={handleChange}>
                <option value="PLAN_PLUS30">FaleMais 30</option>
                <option value="PLAN_PLUS60">FaleMais 60</option>
                <option value="PLAN_PLUS120">FaleMais 120</option>
            </Form.Control>
        </Form.Group>
    );
};

export default FormPlans;
