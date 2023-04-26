import { render, screen,cleanup,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TransactionSection from "./index"
import { useRouter } from "next/router";

jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))

const pushMock = jest.fn()

useRouter.mockReturnValue({
    push: pushMock,
})

describe("TransactionSection component Tests", () => {
    afterEach(() => {
        cleanup();
      });

    test("Render Component", () => {
        render(<TransactionSection/>);
        const text = screen.getByText("Show transactions");
        expect(text).toBeInTheDocument();
    });

    test('Clicking the button', async () => {
        render(<TransactionSection />);
        const button = screen.getByText("Show transactions");
        fireEvent.click(button);
        const text = await screen.findByText("Hide transactions");
        expect(text).toBeInTheDocument();
    });

})

