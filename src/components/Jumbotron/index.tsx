import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

type Props = {
    label: string;
    value: string;
};

const JumbotronComponent: React.FC<Props> = ({ label, value }) => {
    return (
        <Jumbotron className="text-center mt-5">
            <h1>
                {label} <br /> <strong>R$ {value}</strong>
            </h1>
        </Jumbotron>
    );
};

export default JumbotronComponent;
