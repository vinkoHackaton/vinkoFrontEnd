const FormInput = ({ type, name, formData, onChange }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={onChange}
        required
        className="input-field"
      />
    </>
  );
};

export default FormInput;
