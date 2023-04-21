import { Transaction } from "../types";

export const toModelTransaction = (chunks:any): Transaction[] => {
    return chunks?.map((chunk:any) => {
        const fields = [
          { name: "type", start: 0, end: 0 },
          { name: "date", start: 1, end: 25 },
          { name: "product", start: 26, end: 55},
          { name: "value", start: 56, end: 65 },
          { name: "seller", start: 66, end: 85 },
        ];
        const output: any = {};
        for (const field of fields) {
          const { name, start, end } = field;
          const value = chunk.slice(start, end + 1).trim();
          output[name] = value;       
        }
        output.value = output.value.replace(/^0+/, '')
        return output;
      });
}