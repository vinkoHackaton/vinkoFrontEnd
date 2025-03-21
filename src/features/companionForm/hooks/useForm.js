import { useState } from "react";
import { createCompanion } from "../services/fetchCompanion";

const useForm = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    description: "",
    photoUrl: "",
    hourlyRate: "",
    rating: "1",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (url) => {
    setFormData({ ...formData, photoUrl: url });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(formData).every((value) => value.trim() !== "")) {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (formData.age >= 18 && formData.email.match(regex)) {
        await createCompanion(formData);
        alert(`Actividades:\n${JSON.stringify(selectedCategories)}`);
      }
    }
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
    handleCategoryChange,
    handleImageUpload,
    formData,
    selectedCategories,
  };
};

export default useForm;
