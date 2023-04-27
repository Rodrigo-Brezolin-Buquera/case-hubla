import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TransactionList from "./TransactionList"


describe("TransactionList component Tests", () => {

    const mockList = [{
        date: "2022-01-15T19:20:30-03:00",
        id: "c414933f-7a08-455b-841f-1c80cdbfef79",
        product: "CURSO DE BEM-ESTAR", 
        seller: "2160669b-9ab4-4c16-ad96-8c828876f5ce", 
        type: 1,
        value: 12750
    }]

    afterEach(() => {
        cleanup();
    });

    test("Render Component with mockList", async () => {
        render(<TransactionList list={mockList} />);
        const { queryByText } = screen;
        expect(queryByText((content) =>content.includes("curso de bem-estar"))).toBeInTheDocument();
        expect(queryByText((content) =>content.includes("Value: 12750"))).toBeInTheDocument();
        expect(queryByText((content) =>content.includes("15/01/2022"))).toBeInTheDocument();
    });



})
