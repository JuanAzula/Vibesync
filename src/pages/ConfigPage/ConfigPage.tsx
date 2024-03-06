import { useState } from "react";
import { User } from "../../types/data";
import "./ConfigPage.css";
import { Link, useNavigate } from "react-router-dom";
// import { validatePassword } from "../../utils/utils";
import axios from "axios";

type Props = {
  user: User;
  triggerRefetch: Function;
};

export const ConfigPage = ({ user, triggerRefetch }: Props) => {
  const [visible, setVisible] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");
  const [input2Disabled, setInput2Disabled] = useState(true);

  const validatePassword = (input: string) => {
    if (input.length < 6) {
        setPasswordError('Password must be at least 6 characters')
    } else if (!/[A-Z]/.test(input)) {
        setPasswordError('Password must contain at least one uppercase letter')
    } else if (!/[\W_]/.test(input)) {
        setPasswordError('Password must contain at least one special character')
    } else if (input === user.password){
        setPasswordError('Password must different from your last password')
    } else {
        setPasswordError('');
        setVisible(!visible);
        
    }
  }
  const navigate = useNavigate()
  const logout = () => {
    window.localStorage.removeItem("userLogged");
    navigate("/")
    window.location.reload();
    // triggerRefetch();
  };

  const togglePasswordChange = () => {
    setInput1Value("");
    setInput2Value("");
    setInput2Disabled(true);
    setVisible(!visible);
  };

  const handleInputChange1 = (event) => {
    const value = event.target.value;
    setInput1Value(value);
    setInput2Disabled(value !== user.password);
  };

  const handleInputChange2 = (event) => {
    setInput2Value(event.target.value);
  };

  const addNewPassword = (event: React.FormEvent) => {
    event?.preventDefault();
    validatePassword(input2Value);
    //cambiar el json con la nueva contraseña que llega desde el input2value
    changePassword();
  };

  const changePassword = () => {
    const url = `http://localhost:3000/user/${user.id}`;
    const newPassword = input2Value;
    const modifiedData = {
      name: user.first_name,
      password: newPassword,
      first_name: "Assembler",
      last_name: "Institute",
      email: "music@assemblerschool.com",
      profilePicture: "/src/assets/profile_pic.png",
      isLoggedin: false
    };

    axios.put(url, modifiedData)
      .then(response =>{
        console.log("password cambiada con exito", response.data)
      })
      .catch(error => {
        console.log("error al cambiar la contraseña", error)
      })

  }

  return (
    <>
      <header className="configpage-header">
        <Link to="/">
          <button className="configpage-btn configpage-back">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        </Link>
        <h2 className="configpage-title">Profile</h2>
      </header>
      <section>
        <div className="configpage-user-info">
          <img
            className="configpage-profile-pic"
            src={user && user.profilePicture}
            alt="profile-pic"
          />
          <div className="configpage-user-text">
            <h3>
              {user && user.first_name} {user && user.last_name}
            </h3>
            <p>{user && user.email}</p>
          </div>
          <Link to="/profile">
            <button className="configpage-btn">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </Link>
        </div>
        <div className="configpage-menu">
          <p>View Profile</p>
          <p
            className="configpage-password-change-title"
            onClick={() => togglePasswordChange()}
          >
            Change Password
          </p>
          {visible && (
            <form className="configpage-password-form">
              <label>
                {" "}
                Old Password
                <input
                  className="configpage-input"
                  type="password"
                  value={input1Value}
                  onChange={handleInputChange1}
                />
              </label>
              <label>
                {" "}
                New Password
                <input
                  type="password"
                  className="configpage-input"
                  value={input2Value}
                  onChange={handleInputChange2}
                  disabled={input2Disabled}
                />
                {passwordError && (
                  <div className="error-password">{passwordError}</div>
                )}
              </label>
              <button
                className="configpage-save-btn"
                onClick={(event) => addNewPassword(event)}
              >
                Save
              </button>
            </form>
          )}
        </div>
      </section>
      <section className="configpage-logout">
        <button onClick={() => logout()} className="configpage-logout-btn">
          Logout
        </button>
      </section>
    </>
  );
};
