import { useState } from "react";

const useForm = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Aquí ira la llamada al servicio
    alert(`Datos ingresados:\n${JSON.stringify(formData)}`);
    alert(`Actividades:\n${JSON.stringify(selectedCategories)}`);
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item != category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return {
    handleChange,
    handleSubmit,
    formData,
    handleCategoryChange,
    selectedCategories,
  };
};

export default useForm;
