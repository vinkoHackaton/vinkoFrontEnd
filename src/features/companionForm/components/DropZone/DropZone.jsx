import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./DropZone.css"
const DropZone = ({handleImageUpload}) => {
  const [image, setImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const imageUrl = URL.createObjectURL(file)
    setImage(imageUrl)
    handleImageUpload(imageUrl)
  }, [handleImageUpload]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <>
      <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} />
          <img id="profile-pic" src={image ? image : "/images/profilepic.png"} alt="preview"/>
      </div>
    </>
  );
};

export default DropZone;
