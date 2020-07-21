import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

type Props = {
    label: string;
    value: number;
    isValid: boolean;
};

const JumbotronComponent: React.FC<Props> = ({ label, value, isValid }) => {
    function formatValue(value: number) {
        const formatedValue = value.toFixed(2).replace(".", ",");

        return "R$ " + formatedValue;
    }

    if (isValid) {
        return (
            <Jumbotron>
                <h1>
                    {label} <br />
                    <strong className="text-nowrap">-</strong>
                </h1>
            </Jumbotron>
        );
    }

    return (
        <Jumbotron>
            <h1>
                {label} <br />
                <strong className="text-nowrap">{formatValue(value)}</strong>
            </h1>
        </Jumbotron>
    );
};

export default JumbotronComponent;
