import { render, screen,cleanup, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import FileUpload from "../..";
import { useRouter } from "next/router";

jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))

const pushMock = jest.fn()

useRouter.mockReturnValue({
    push: pushMock,
})

describe("FileUpload component Tests", () => {
    afterEach(() => {
        cleanup();
      });

    test("Upload Button", () => {
        render(<FileUpload />);
        const text = screen.getByText("Upload");
        expect(text).toBeInTheDocument();
    });

  
})

