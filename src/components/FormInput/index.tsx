import React from "react";
import Form from "react-bootstrap/Form";

type Props = {
    onMinutesChange: React.Dispatch<React.SetStateAction<number>>;
};

const FormInput: React.FC<Props> = ({ onMinutesChange }) => {
    const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const minutes = Number(e.target.value);
        onMinutesChange(minutes);
    };

    return (
        <Form.Group controlId="minutesControl">
            <Form.Label>Tempo falado:</Form.Label>
            <Form.Control
                type="number"
                placeholder="Em Minutos"
                onChange={handleMinutesChange}
                required
            />
        </Form.Group>
    );
};

export default FormInput;
