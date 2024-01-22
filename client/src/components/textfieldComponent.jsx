import TextField from "@mui/material/TextField";
import UserDetailsContext from "../context/context";
import React, { useContext } from "react";

const TextFieldComponent = (props) => {
  const contextValue = useContext(UserDetailsContext);

  const handleChange = (event) => {
    contextValue.userDetails?.setUserDetails({
      [props.name]: event.target.value !== "" ? event.target.value : "",
    });
  };

  const handleInputBlur = (event) => {
    const fieldType = props.name;
    const newValue = event.target.value;

    switch (fieldType) {
      case "phNumber":
        validatePhoneNumber(newValue);
        break;
      case "eMail":
        validateEmail(newValue);
        break;
      default:
    }
  };
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    const isValidPhoneNumber = phoneRegex.test(phoneNumber);

    contextValue.userDetails?.setUserDetails({
      errorState: {
        ...contextValue.userDetails?.errorState,
        phNumberError: !isValidPhoneNumber,
      },
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    contextValue.userDetails?.setUserDetails({
      errorState: {
        ...contextValue.userDetails?.errorState,
        eMailError: !isValidEmail,
      },
    });
  };
  return (
    <>
      <TextField
        required
        size="small"
        id={props.name}
        label={props.label}
        variant="outlined"
        name={props.name}
        onChange={handleChange}
        onBlur={handleInputBlur}
        error={contextValue?.userDetails?.errorState[`${props.name}Error`]}
      />
    </>
  );
};

export default TextFieldComponent;
