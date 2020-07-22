import React, { useReducer } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FormComponent from "../../components/Form";
import JumbotronComponent from "../../components/Jumbotron";

import reducer from "../../reducers";
import { initialState } from "../../reducers";

const Home: React.FC = () => {
    const [
        { withPlanValue, withoutPlanValue, invalidOriginDestiny },
        dispatch,
    ] = useReducer(reducer, initialState);

    return (
        <main className="mt-5">
            <h1 className="display-4">Calculadora de Custo</h1>
            <p className="lead">
                Digite o DDD de origem e destino, os minutos falados e escolha o
                plano para saber quanto você pagaria pela ligação.
            </p>
            <FormComponent dispatch={dispatch} />
            <Row className="text-center justify-content-center mt-5">
                <Col md={6}>
                    <JumbotronComponent
                        label="Com FaleMais:"
                        value={withPlanValue}
                        isValid={invalidOriginDestiny}
                    />
                </Col>
                <Col md={6}>
                    <JumbotronComponent
                        label="Sem FaleMais:"
                        value={withoutPlanValue}
                        isValid={invalidOriginDestiny}
                    />
                </Col>
            </Row>
        </main>
    );
};

export default Home;
