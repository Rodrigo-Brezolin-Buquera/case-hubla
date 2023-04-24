import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SellerSelection from "./index"
import React from "react"

describe("SellerSelection component Tests", () => {
  
    afterEach(() => {
        cleanup();
    });

    test("Render Component", () => {
        render(<SellerSelection />);
        const text = screen.getByText("Select a seller:");
        expect(text).toBeInTheDocument();
    });

    test('Selecting a seller', async () => {
        render(<SellerSelection />);
        const select = screen.getByPlaceholderText('Sellers');
        fireEvent.change(select, { target: { value: 'f97523df-b9d5-467b-81a3-c2ea24204e02' } });
        const name = await screen.findByText("THIAGO OLIVEIRA");
        expect(name).toBeInTheDocument();
    });
})

