import React from "react";
import { render } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import App from "./App";

describe("<App />", () => {
    it("should render app with header navigation links", () => {
        const { getByText } = render(<App />);
        const header = getByText(/telzir/i);
        const homeLink = getByText(/inicio/i);
        const plansLink = getByText(/planos/i);
        const aboutLink = getByText(/sobre nós/i);

        expect(header).toBeInTheDocument();
        expect(homeLink).toBeInTheDocument();
        expect(plansLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
    });

    it("should render home as default page", () => {
        const { getByText } = render(<App />);

        const homeLink = getByText(/inicio/i);

        expect(homeLink).toHaveClass("active");
    });

    it("should change page to about when selected", () => {
        const { getByText } = render(<App />);

        const aboutPageLink = getByText(/sobre nós/i);

        UserEvent.click(aboutPageLink);

        expect(aboutPageLink).toHaveClass("active");
    });

    it("should change page to plans when selected", () => {
        const { getByText } = render(<App />);

        const plansPageLink = getByText(/planos e tarifas/i);

        UserEvent.click(plansPageLink);

        expect(plansPageLink).toHaveClass("active");
    });

    it("should change page to home when selected back", () => {
        const { getByText } = render(<App />);

        const homePageLink = getByText(/inicio/i);
        const aboutPageLink = getByText(/sobre nós/i);

        UserEvent.click(aboutPageLink);

        expect(aboutPageLink).toHaveClass("active");

        UserEvent.click(homePageLink);

        expect(homePageLink).toHaveClass("active");
        expect(aboutPageLink).not.toHaveClass("active");
    });
});
