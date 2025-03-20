import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const DropZone = () => {
  const [image, setImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <>
      <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} />
        {!image ? (
          <img id="profile-pic" src="/images/profilepic.png" alt="preview" />
        ) : (
          <img id="profile-pic" src={URL.createObjectURL(image)} />
        )}
      </div>
    </>
  );
};

export default DropZone;
