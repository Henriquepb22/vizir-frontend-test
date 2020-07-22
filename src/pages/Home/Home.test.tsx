import React from "react";
import { render } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import Home from ".";

describe("<Home />", () => {
    it("should render home page with heading, paragraph, form and an div with form response", () => {
        const { getByText, getByRole } = render(<Home />);
        const heading = getByText(/calculadora de custo/i);
        const paragraph = getByText(/digite o ddd/i);
        const form = getByRole("form");
        const firstFormResponse = getByText(/com falemais/i);
        const secondFormResponse = getByText(/sem falemais/i);

        expect(heading).toBeInTheDocument();
        expect(paragraph).toBeInTheDocument();
        expect(form).toBeInTheDocument();
        expect(firstFormResponse).toBeInTheDocument();
        expect(secondFormResponse).toBeInTheDocument();
    });

    it("should calculate prices right when form submited", () => {
        const { getByTitle, getByText } = render(<Home />);

        const originSelect = getByTitle(/origem/i);
        const destinySelect = getByTitle(/destino/i);
        const minutesInput = getByTitle(/em minutos/i);
        const plansSelect = getByTitle(/planos/i);
        const calcButton = getByText(/calcular/i);
        const firstFormResponse = getByText(/com falemais/i);
        const secondFormResponse = getByText(/sem falemais/i);

        expect(originSelect).toBeInTheDocument();
        expect(destinySelect).toBeInTheDocument();
        expect(minutesInput).toBeInTheDocument();
        expect(plansSelect).toBeInTheDocument();
        expect(calcButton).toBeInTheDocument();
        expect(firstFormResponse).toBeInTheDocument();
        expect(secondFormResponse).toBeInTheDocument();

        UserEvent.selectOptions(originSelect, "11");
        UserEvent.selectOptions(destinySelect, "16");
        UserEvent.type(minutesInput, "100");
        UserEvent.selectOptions(plansSelect, "PLUS60");
        UserEvent.click(calcButton);

        expect(firstFormResponse).toHaveTextContent("R$ 83,60");
        expect(secondFormResponse).toHaveTextContent("R$ 190,00");
    });
});
