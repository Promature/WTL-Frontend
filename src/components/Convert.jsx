const Convert = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
    };
  });
}

export default Convert

// const [file, setFile] = useState({myFile : null});

// const handleFileInputChange = async (e) => {
//     const file = e.target.files[0]; 
//     const base64 = await Convert(file);
//     setFile({myFile : base64});
// }