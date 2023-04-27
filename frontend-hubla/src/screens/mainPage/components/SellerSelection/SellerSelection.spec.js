import { render, screen, cleanup, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SellerSelection from "./index"
import React from "react"
import { useRouter } from "next/router";

jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))

const pushMock = jest.fn()

useRouter.mockReturnValue({
    push: pushMock,
})

describe("SellerSelection component Tests", () => {
  const sellersMock = [
        {
          "id": "cbd06e25-9ad9-45ec-8af2-919dc1edde00",
          "name": "jose carlos",
          "type": "Creator",
          "balance": 21000
        },
        {
          "id": "531368a3-623b-44b3-88eb-379cf9291ebf",
          "name": "maria candida",
          "type": "Creator",
          "balance": 150000
        }
  ]
    afterEach(() => {
        cleanup();
    });

    test("Dont Render with no sellers", async () => {
        render(<SellerSelection sellers={[]} />);
        const select = screen.queryByPlaceholderText('Sellers');
        expect(select).not.toBeInTheDocument();
      });

    test("Render Component", async () => {
        render(<SellerSelection sellers={sellersMock} />);
        const text = await waitFor(() => screen.getByText(/Select a seller/));
        expect(text).toBeInTheDocument();
    });

    test.skip('Selecting a seller', async () => {
        render(<SellerSelection sellers={sellersMock} />);
        const select = screen.getByPlaceholderText('Sellers');
      
        fireEvent.change(select, { target: { value: 'cbd06e25-9ad9-45ec-8af2-919dc1edde00' } });
      
        await waitFor(() => screen.getByText("Type: Creator"));
      
        const name = screen.getByText("jose carlos");
        expect(name).toBeInTheDocument();
      });
})

