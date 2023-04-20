import React, {useState} from 'react'

const FileUpload = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.target.files && setFile(event.target.files[0]);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(file);
    };
  return (
    <form onSubmit={handleSubmit}>
    <input type="file" onChange={handleChange} />
    <button type="submit">Upload</button>
  </form>
  )
}

export default FileUpload