import { render, screen, fireEvent, waitFor  } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginPage from "./index"
import { useRouter } from "next/router";

jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))

const pushMock = jest.fn()

useRouter.mockReturnValue({
    push: pushMock,
})

describe("LoginPage component Tests", () => {

    test("Render", () => {
        render(<LoginPage />);
        const text = screen.getByText("Desafio Hubla!");
        expect(text).toBeInTheDocument();
    });

    test("Email input change ",async () => {
        render(<LoginPage />);
        const emailInput = screen.getByPlaceholderText("Email");
        fireEvent.change(emailInput, { target: { value: "test@test.com" } });
        expect(emailInput.value).toBe("test@test.com");
    });

    test("Password input change ",async () => {
        render(<LoginPage />);
        const passwordInput = screen.getByPlaceholderText("Password");
        fireEvent.change(passwordInput, { target: { value: "password123" } });
        expect(passwordInput.value).toBe("password123");
    });

    test("Login", async () => { 
        const { getByPlaceholderText, getByText } = render(<LoginPage />);
    
        const emailInput = getByPlaceholderText("Email");
        const passwordInput = getByPlaceholderText("Password");
        const loginButton = getByText("Login");
    
        fireEvent.change(emailInput, { target: { value: "email@email.com" } });
        fireEvent.change(passwordInput, { target: { value: "123456" } });
    
        fireEvent.click(loginButton);
    
        await waitFor(() => expect(pushMock).toHaveBeenCalledWith("/home"));
      });


})

