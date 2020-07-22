import React from "react";
import { render } from "@testing-library/react";
import About from ".";

describe("<About />", () => {
    it("should render about page with heading and paragraph", () => {
        const { getByText } = render(<About />);
        const heading = getByText(/sobre a telzir/i);
        const paragraph = getByText(/conectamos pessoas/i);

        expect(heading).toBeInTheDocument();
        expect(paragraph).toBeInTheDocument();
    });
});
