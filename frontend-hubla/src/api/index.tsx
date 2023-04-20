import axios from "axios";

const baseURL:string =  ""


export const sendFile = async (file: FormData) => {
    try {
        const response = await axios.post(
            baseURL, 
            file,
            { headers: { "Content-Type": "multipart/form-data" }});

        console.log(response.data);
        
      } catch (error) {
        console.error(error);
      }
   
  };