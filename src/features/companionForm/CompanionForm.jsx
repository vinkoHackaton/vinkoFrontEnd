import "./CompanionForm.css";
import useForm from "./hooks/useForm";
import FormInput from "./components/FormInput/FormInput";
import DropZone from "./components/DropZone/DropZone";
import inputs from "./utils/inputs";
import categories from "./utils/categories";
import CategoryButton from "./components/CategoryButton/CategoryButton";

const CompanionForm = () => {

  const {
    onChange,
    handleSubmit,
    handleCategoryChange,
    handleImageUpload,
    formData,
    selectedCategories,
  } = useForm();

  return (
    <div className="form-container">
      <form id="form" onSubmit={handleSubmit} noValidate>
        <DropZone handleImageUpload={handleImageUpload}/>
        <div className="pad-bottom">
          {inputs.map((input, idx) => (
            <FormInput
              key={input.id}
              tabIndex={idx + 1}
              {...input}
              value={formData[input.name]}
              onChange={onChange}
            />
          ))}
        </div>
        <label>Actividades</label>
        <div className="pad-bottom">
        <div className="category-buttons">
          {categories.map((category) => (
            <CategoryButton
              category={category}
              selectedCategories={selectedCategories}
              handleCategoryChange={handleCategoryChange}
            />
          ))}
        </div>
        </div>
        <label>Describe las actividades que te gustan</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={onChange}
          className="input-field"
          placeholder="Describe la actividad a la que te gustaría sumarte"
          required
        />
        <button type="submit" id="submit">
          Enviar
        </button>
      </form>
    </div>
  );

};

export default CompanionForm;