import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

type Props = {
    onDestinyChange: React.Dispatch<React.SetStateAction<number>>;
    onOriginChange: React.Dispatch<React.SetStateAction<number>>;
};

const FormLocation: React.FC<Props> = ({ onOriginChange, onDestinyChange }) => {
    const handleOriginChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = Number(e.target.value);
        onOriginChange(selectedValue);
    };

    const handleDestinyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = Number(e.target.value);
        onDestinyChange(selectedValue);
    };

    return (
        <Form.Group controlId="dddControl">
            <Form.Label>DDD:</Form.Label>
            <InputGroup>
                <Form.Control as="select" onChange={handleOriginChange}>
                    <option hidden>Origem</option>
                    <option value={11}>011</option>
                    <option value={16}>016</option>
                    <option value={17}>017</option>
                    <option value={18}>018</option>
                </Form.Control>
                <Form.Control as="select" onChange={handleDestinyChange}>
                    <option hidden>Destino</option>
                    <option value={11}>011</option>
                    <option value={16}>016</option>
                    <option value={17}>017</option>
                    <option value={18}>018</option>
                </Form.Control>
            </InputGroup>
        </Form.Group>
    );
};

export default FormLocation;
