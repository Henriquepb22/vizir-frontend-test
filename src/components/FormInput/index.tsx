import React from "react";
import Form from "react-bootstrap/Form";

type Props = {
    onMinutesChange: React.Dispatch<React.SetStateAction<number>>;
};

const FormInput: React.FC<Props> = ({ onMinutesChange }) => {
    return (
        <Form.Group controlId="minutesControl">
            <Form.Label>Tempo falado:</Form.Label>
            <Form.Control type="text" placeholder="Em Minutos" />
        </Form.Group>
    );
};

export default FormInput;
