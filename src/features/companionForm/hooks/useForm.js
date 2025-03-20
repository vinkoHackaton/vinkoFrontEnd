import { useState } from "react";

const useForm = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    description: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Object.values(formData).every(value => value.trim() !== "")) {
      return
    }

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
    onChange,
    handleSubmit,
    formData,
    handleCategoryChange,
    selectedCategories,
  };
};

export default useForm;
