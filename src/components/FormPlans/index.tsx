import React from "react";
import Form from "react-bootstrap/Form";

type Props = {
    onPlansChange: React.Dispatch<React.SetStateAction<string>>;
};

const FormPlans: React.FC<Props> = ({ onPlansChange }) => {
    const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
        onPlansChange(e.target.value);

    return (
        <Form.Group controlId="plansControl">
            <Form.Label>Plano:</Form.Label>
            <Form.Control as="select" onChange={handlePlanChange} required>
                <option value="PLUS30">FaleMais 30</option>
                <option value="PLUS60">FaleMais 60</option>
                <option value="PLUS120">FaleMais 120</option>
            </Form.Control>
        </Form.Group>
    );
};

export default FormPlans;
