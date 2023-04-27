import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import Header from "./index"

jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))

const pushMock = jest.fn()

useRouter.mockReturnValue({
    push: pushMock,
})

describe("Header component Tests", () => {
  
    test("Render", () => {
        render(<Header />);
        const text = screen.getByText(/FullStack Challenge - Hubla!/);
        expect(text).toBeInTheDocument();
    });

  
})

