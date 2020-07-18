import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

type Props = {
    label: string;
    value: string;
};

const JumbotronComponent: React.FC<Props> = ({ label, value }) => {
    return (
        <Jumbotron>
            <h1>
                {label} <br />
                <strong className="text-nowrap">R$ {value}</strong>
            </h1>
        </Jumbotron>
    );
};

export default JumbotronComponent;
