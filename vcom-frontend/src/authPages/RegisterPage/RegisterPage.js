import React, { useState, useEffect } from "react";
import { Tooltip, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

import AuthBox from "../../shared/components/AuthBox";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import InputWithLabel from "../../shared/components/InputWithLabel";
import { validateRegisterForm } from "../../shared/utils/validators";
import RedirectInfo from "../../shared/components/RedirectInfo";

import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";


// Register page Footer
const getFormNotValidMessage = () => {
  return "Username should contains between 3 and 12 characters and password should contains between 6 and 12 character. Also correct e-mail address should provided";
};

const getFormValidMessage = () => {
  return "Press to register!";
};

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const history = useHistory();

  const handlePushToLoginPage = () => {
    history.push("/login");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Already have an account ?"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

// Register page input
const RegisterPageInputs = (props) => {
  const { mail, setMail, username, setUsername, password, setPassword } = props;

  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail address"
        type="text"
        placeholder="Enter e-mail address"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter a username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
};



// Register page component
const RegisterPage = ({ register }) => {
  const history = useHistory();

  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    const userDetails = {
      mail,
      password,
      username,
    };

    register(userDetails, history);
  };

  useEffect(() => {
    setIsFormValid(
      validateRegisterForm({
        mail,
        username,
        password,
      })
    );
  }, [mail, username, password, setIsFormValid]);

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "#5865f2" }}>
        Create
      </Typography>
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(RegisterPage);
