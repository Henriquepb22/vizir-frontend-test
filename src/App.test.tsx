import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
  it("should render app with header and main content", () => {
    const { getByText } = render(<App />);
    const header = getByText(/telzir/i);
    const homeLink = getByText(/inicio/i);
    const plansLink = getByText(/planos/i);
    const aboutLink = getByText(/sobre nós/i);

    expect(header).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(plansLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  })
})