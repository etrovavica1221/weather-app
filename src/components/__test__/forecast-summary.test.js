import "@testing-library/jest-dom/extend-expect";
import React from 'react';
import { render } from "@testing-library/react";
import ForecastSummary from '../forecast-summary.js';

describe("ForecastSummary", () => {
    it('renders correctly', () => {
       const { asFragment } = render(
        <ForecastSummary
            date={1525305600000}
            temperature="20&deg;c"
            description="Tornado"
            icon="781"
         />
       );
       expect(asFragment()).toMatchSnapshot();
    });

    it("renders the correct props", () => {
        const { getByText, getByTestId } = render(
            <ForecastSummary
                date={1525305600000}
                temperature="20&deg;c"
                description="Tornado"
                icon="781"
             />
        );

        expect(getByTestId("date-id")).toHaveClass("date");
        expect(getByTestId("temperature-id")).toHaveClass("temperature");
        expect(getByText("Tornado")).toHaveClass("description");
        expect(getByTestId("icon-id")).toHaveClass("icon");
    });
});