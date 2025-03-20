import "./AdForm.css";
import useForm from "./hooks/useForm";
import FormInput from "./components/FormInput";
import DropZone from "./components/DropZone";

const AdForm = () => {
  const {
    handleSubmit,
    formData,
    handleChange,
    handleCategoryChange,
    selectedCategories,
  } = useForm();

  return (
    <form id="form" onSubmit={handleSubmit} autoComplete="off">
      <fieldset className="form-section">
        <DropZone />
        <div className="pad-bottom">
          <label htmlFor="name" className="label">
            Nombre
          </label>
          <FormInput
            type="text"
            name="name"
            formData={formData}
            onChange={handleChange}
          />
        </div>

        <div className="pad-bottom">
          <label htmlFor="age" className="label">
            Edad
          </label>
          <FormInput
            type="text"
            name="age"
            formData={formData}
            onChange={handleChange}
          />
        </div>

        <div className="pad-bottom">
          <label htmlFor="email" className="label">
            Email
          </label>
          <FormInput
            type={"email"}
            name={"email"}
            formData={formData}
            onChange={handleChange}
          />
        </div>
      </fieldset>

      <fieldset className="form-section">
        <label htmlFor="hobby" className="label">
          Actividades
        </label>
        <div className="pad-bottom">
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
