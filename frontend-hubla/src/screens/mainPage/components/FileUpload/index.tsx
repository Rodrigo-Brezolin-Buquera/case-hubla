import { sendFile } from "@/api";
import { Transaction } from "@/api/types";
import TextContainer from "@/styles/TextContainer";
import { Button, Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  response: Transaction[] | string | undefined,
  setResponse: React.Dispatch<React.SetStateAction<string | Transaction[] | undefined>>
}

const FileUpload = ({response, setResponse}: Props) => {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.files && setFile(event.target.files[0]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) return null;
    const formData = new FormData();
    formData.append("file", file);
    sendFile(formData, setResponse);
  };
  return (
    <>
    <TextContainer >

      <form onSubmit={handleSubmit}>
        <input type="file" id="input" onChange={handleChange} />
        <Button backgroundColor={"green.100"} type="submit">Upload</Button>
      </form>

    </TextContainer>
      {response && (
        <Box>{typeof response === "string" && <Text>{response}</Text>}</Box>
      )}
    </>
  );
};

export default FileUpload;
