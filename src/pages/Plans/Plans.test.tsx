import React from "react";
import { render } from "@testing-library/react";
import Plans from ".";

describe("<Plans />", () => {
    it("should render plans page with heading, paragraphs and an table", () => {
        const { getByText, getByTitle } = render(<Plans />);
        const heading = getByText(/nossos planos e tarifas/i);
        const paragraph = getByText(/com o nosso/i);
        const table = getByTitle(/tabela de tarifas/i);

        expect(heading).toBeInTheDocument();
        expect(paragraph).toBeInTheDocument();
        expect(table).toBeInTheDocument();
    });
});
