import { useState } from 'react';
import { storage } from '../firebase'; // Import the Firebase instance

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);

        // You can use the progress to show a progress bar
          
          
        switch (snapshot.state) { 
          case 'paused': 
            console.log('Upload is paused'); 
            break; 
          case 'running': 
            console.log('Upload is running'); 
            break; 
        }

        if (progress === 100) {
          console.log('Upload is complete');
        }
      },
      (error) => {
        console.error(error);
      },
      () => {
        // Complete function
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url); // Handle the uploaded image URL
          });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUpload;
