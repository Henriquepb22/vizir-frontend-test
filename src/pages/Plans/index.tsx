import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const Plans: React.FC = () => {
    return (
        <main className="mt-5">
            <h1 className="display-4">Nossos Planos e Tarifas</h1>
            <Jumbotron>
                <h2>
                    <strong>Plano FaleMais </strong>
                    <span className="badge badge-primary">Novo</span>
                </h2>
                <p className="lead mt-4">
                    Com o nosso novo plano FaleMais você fala de graça até um
                    determinado tempo em minutos e só paga pelos minutos
                    excedentes.*
                </p>
                <p className="lead">
                    Nosso plano FaleMais é divido em 3 planos, que são eles o
                    FaleMais 30 (30 Minutos), FaleMais 60 (60 Minutos) e
                    FaleMais 120 (120 Minutos).
                </p>
                <p className="text-muted">
                    *Os minutos excedentes sofrem um acréscimo de 10% sobre a
                    tarifa normal do minuto.
                </p>
                <h3>
                    <strong>Tabela de Tarifas:</strong>
                </h3>
                <table
                    className="table table-sm table-bordered table-hover"
                    title="Tabela de Tarifas"
                >
                    <thead>
                        <tr>
                            <th scope="col">Origem</th>
                            <th scope="col">Destino</th>
                            <th scope="col">Valor do Minuto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>011</td>
                            <td>016</td>
                            <td>R$ 1,90</td>
                        </tr>
                        <tr>
                            <td>016</td>
                            <td>011</td>
                            <td>R$ 2,90</td>
                        </tr>
                        <tr>
                            <td>011</td>
                            <td>017</td>
                            <td>R$ 1,70</td>
                        </tr>
                        <tr>
                            <td>017</td>
                            <td>011</td>
                            <td>R$ 2,70</td>
                        </tr>
                        <tr>
                            <td>011</td>
                            <td>018</td>
                            <td>R$ 0,90</td>
                        </tr>
                        <tr>
                            <td>018</td>
                            <td>011</td>
                            <td>R$ 1,90</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-muted">
                    ** Para as demais localidades as tarifas podem variar.
                </p>
            </Jumbotron>
        </main>
    );
};

export default Plans;
