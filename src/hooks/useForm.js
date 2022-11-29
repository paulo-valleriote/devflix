import { useState } from 'react';

// Custom Hook para lidar com formulário
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const setValue = (fieldKey, fieldValue) => {
    setValues({
      ...values,
      [fieldKey]: fieldValue,
    });
  };

  const handleValues = (e) => {
    e.stopPropagation();

    setValue(e.target.getAttribute('name'), e.target.value);
  };

  const clearForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleValues,
    clearForm,
  };
}

export default useForm;
