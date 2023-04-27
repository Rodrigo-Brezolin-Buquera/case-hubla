import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const TextContainer = ({ children }: Props) => {
  return (
    <Card
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
      p={"0.5em"}
      gap={"0.5em"}
      fontSize={"lg"}
      w={["360px","400px","500px"]}
    >
      {children}
    </Card>
  );
};

export default TextContainer;
