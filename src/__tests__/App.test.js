import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

describe("App", () => {
    test("Displays a top-level heading with the text `Hi, I'm _______`", () => {
        // Arrange
        render(<App />);
        // Act
        const topLevelHeading = screen.getByRole("heading", {
            name: /hi, i'm/i,
            exact: false,
            level: 1,
          });
        // Assert
        expect(topLevelHeading).toBeInTheDocument();
      });
    
    test("Displays a second-level heading with the text `About me`", () => {

        render(<App />);

        const secondLevelHeading = screen.getByRole("heading", {
            name: /about me/i,
            exact: false,
            level: 2,
        });
        expect(secondLevelHeading).toBeInTheDocument();
    });

    test("Displays a paragraph containing the biography", () => {
        
        const { container } = render(<App />);

        const bioParagraph = container.querySelector("p");

        expect(bioParagraph).toBeInTheDocument();
    })
})
