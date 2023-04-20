import { render, screen,cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import FileUpload from ".";

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

