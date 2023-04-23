import { sendFile } from "@/api";
import { Transaction } from "@/api/types";
import TransactionList from "@/screens/mainPage/components/TransactionList";
import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<Transaction[] | string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.files && setFile(event.target.files[0]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) return null;
    const formData = new FormData();
    formData.append("file", file);
    sendFile(formData, setResponse)
    
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="file" id="input" onChange={handleChange} />
      <button type="submit">Upload</button>
    </form>

    {response &&
    <div>
      <p>Dados enviadas:</p>
      
      {typeof(response) === "string" && <p>{response}</p> }
      {Array.isArray(response) && <TransactionList list={response} />} 

    </div>
    }

    </>
  );
};

export default FileUpload;