import { useState } from "react";

function FormValidation() {
  const [isValues, setValues] = useState({});
  const [isErrors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChangeInput(evt) {
    const input = evt.target;
    const valueInput = input.value;
    const nameInput = input.name;

    setValues({ ...isValues, [nameInput]: valueInput });
    setErrors({ ...isErrors, [nameInput]: input.validationMessage });
    setIsValid(input.closest("form").checkValidity());
  }

  return {
    isValid,
    isErrors,
    isValues,
    handleChangeInput,
    setIsValid,
    setErrors,
    setValues,
  };
}

export default FormValidation;
