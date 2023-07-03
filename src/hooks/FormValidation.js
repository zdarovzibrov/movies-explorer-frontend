import { useState, useCallback } from 'react';

function FormValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChangeInput(evt) {
    const input = evt.target;
    const valueInput = input.value;
    const nameInput = input.name;

    setValues({ ...values, [nameInput]: valueInput });
    setErrors({ ...errors, [nameInput]: input.validationMessage });
    setIsValid(input.closest('form').checkValidity());
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    isValid,
    errors,
    values,
    resetForm,
    handleChangeInput,
    setIsValid,
    setErrors,
    setValues,
  };
}

export default FormValidation;
