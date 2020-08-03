import React from 'react';
import { render } from "@testing-library/react";
import ForecastSummary from '../forecast-summary.js';

describe("ForecastSummary", () => {
    it('renders correctly', () => {
       const { asFragment } = render(
        <ForecastSummary
            date="1525305600000"
            maxTemperature="20"
            minTemperature="4"
            description="Tornado"
            icon="781"
         />
       );
       expect(asFragment()).toMatchSnapshot();
    });

    it("renders the correct props", () => {
        const { getByText } = render(
            <ForecastSummary
                date="1525305600000"
                maxTemperature="20"
                minTemperature="4"
                description="Tornado"
                icon="781"
             />
        );
        expect(getByText("1525305600000")).toHaveClass("date");
        expect(getByText("20")).toHaveClass("maxTemperature");
        expect(getByText("4")).toHaveClass("minTemperature");
        expect(getByText("Tornado")).toHaveClass("description");
        expect(getByText("781")).toHaveClass("icon");
    });
});