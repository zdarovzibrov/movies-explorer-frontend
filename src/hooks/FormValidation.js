import { useState , useCallback} from "react";


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
    isErrors,
    isValues,
    resetForm,
    handleChangeInput,
    setIsValid,
    setErrors,
    setValues,
  };
}

export default FormValidation;
