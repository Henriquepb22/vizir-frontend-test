import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

type Props = {
    onLocationChange: React.Dispatch<React.SetStateAction<string>>;
};

const FormLocation: React.FC<Props> = ({ onLocationChange }) => {
    const [origin, setOrigin] = useState<number | string>("");
    const [destiny, setDestiny] = useState<number | string>("");
    const [prefixes] = useState([11, 16, 17, 18]);

    useEffect(() => {
        if (origin !== 0 && destiny !== 0) {
            onLocationChange(`ORIGIN0${origin}_DESTINY0${destiny}`);
        }
    }, [origin, destiny, onLocationChange]);

    const handleOriginChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOrigin = Number(e.target.value);
        setOrigin(selectedOrigin);
    };

    const handleDestinyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedDestiny = Number(e.target.value);
        setDestiny(selectedDestiny);
    };

    return (
        <Form.Group controlId="dddControl">
            <Form.Label>DDD:</Form.Label>
            <InputGroup>
                <Form.Control
                    as="select"
                    value={origin}
                    onChange={handleOriginChange}
                    required
                >
                    <option value="" disabled hidden selected>
                        Origem
                    </option>
                    {prefixes.map((prefix) =>
                        prefix !== destiny ? (
                            <option key={prefix} value={prefix}>
                                0{prefix}
                            </option>
                        ) : (
                            false
                        )
                    )}
                </Form.Control>
                <Form.Control
                    as="select"
                    value={destiny}
                    onChange={handleDestinyChange}
                    required
                >
                    <option value="" disabled hidden selected>
                        Destino
                    </option>
                    {prefixes.map((prefix) =>
                        prefix !== origin ? (
                            <option key={prefix} value={prefix}>
                                0{prefix}
                            </option>
                        ) : (
                            false
                        )
                    )}
                </Form.Control>
            </InputGroup>
        </Form.Group>
    );
};

export default FormLocation;
