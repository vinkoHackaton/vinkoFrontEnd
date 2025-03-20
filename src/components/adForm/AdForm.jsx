import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import "./AdForm.css";

const AdForm = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    hobby: "",
    description: "",
  });

  const handleCategoryChange = (category) => {

    if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter((item) => item != category));
    } else {
        setSelectedCategories([...selectedCategories, category]);
    }
  } 

  const onDrop = useCallback(acceptedFiles => {
    setImage(acceptedFiles[0]);
  }, []);

  const {getRootProps, getInputProps} = useDropzone(
    {onDrop,
     accept: "image/*",  
    });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Datos ingresados:\n${JSON.stringify(formData)}`);
    alert(`Aficiones:\n${JSON.stringify(selectedCategories)}`);
  };

  return (
    <form id="form" onSubmit={handleSubmit} autoComplete="off">
      <fieldset className="form-section">
        <div className="dropzone" {...getRootProps()}>
          <input {...getInputProps()} />
          {!image ? (
            <img
              id="profile-pic"
              src="/images/profilepic.png"
              alt="preview"
            />
          ) : (
            <img id="profile-pic" src={URL.createObjectURL(image)} />
          )}
        </div>
        <div className="pad-bottom">
          <label htmlFor="name" className="label">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="pad-bottom">
          <label htmlFor="age" className="label">
            Edad
          </label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>

        <div className="pad-bottom">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
      </fieldset>

      <fieldset className="form-section">
        <label htmlFor="hobby" className="label">
          Aficiones
        </label>
        <div className="category-buttons">
          {[
            "Deporte",
            "Música",
            "Cine",
            "Arte",
            "Comer",
            "Historia",
            "Tertulia",
            "Pasear",
            "Comedia",
            "Piano",
            "Ajedrez",
          ].map((category) => (
            <button
              type="button"
              key={category}
              className={`category-button ${
                selectedCategories.includes(category) ? "selected" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset className="form-section">
        <label htmlFor="description" className="label">
          Descríbete
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="Describe la actividad a la que te gustaría sumarte"
        />
        <button type="submit" id="submit">
          Enviar
        </button>
      </fieldset>
    </form>
  );
};

export default AdForm;
