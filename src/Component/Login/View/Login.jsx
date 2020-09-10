import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useGlobalState from '../../../Context';
import Spinner from 'react-spinner-material';
import { showAlert, validEmail, isNullEmpty, cookies } from '../../../Common/CommonAlert';
import { setLoginName, setAuth } from '../../../reducer/action'
import "../../../css/main.css";
import "../../../css/react-confirm-alert.css";
import "../Css/Login.css";


const Login = () => {
  const [loading, setLoading] = useState(false)
  const [userName, setUserName] = useState('')
  const [passwords, setPasswords] = useState('')
  const [email, setEmail] = useState()
  const history = useHistory()
  const [{ }, dispatch] = useGlobalState()



  const onChangeUserName = (e) => {
    setUserName(e.target.value)
  }


  const onChangePassword = (e) => {
    setPasswords(e.target.value)
  }

  const handleKeyPress = (target) => {
    if (target.charCode == 13) {
      document.getElementById("loginbtn").click()
    }
  }



  const loginValid = () => {


    if (isNullEmpty(userName) && isNullEmpty(passwords) && email) {
      if (userName.length < 8 || passwords.length < 8) {
        showAlert("Username and password should be minimum of length 8")

      }
      else {
        if (!(validEmail(email))) {
          showAlert("Please enter valid email.")
        }
        else {
          dispatch(setAuth(true))
          cookies('User_name', userName, 1)
          cookies('Pass_word', passwords, 1)
          cookies('Email_ID', email, 1)
          dispatch(setLoginName(userName))
          history.push("/Home")
        }
      }
    }
    else {
      showAlert("Please Enter the Required Fields.")
    }
  }
  return (

    <div id="login-page" className="back-image" style={{ height: "100vh" }}>
      <div className="container" >
        <form className="form-login animate" action="index.html" autocomplete="off">
          <h2 className="form-login-heading">sign in now</h2>
          <div className="login-wrap ">
            <div className="spin">
              <Spinner visible={loading} spinnerColor={"rgba(0, 0, 0, 0.3)"} />
            </div>

            <label>User ID</label>
            <input type="text" input value={userName} id="userLogin" onChange={(e) => onChangeUserName(e)} className="form-control" placeholder="User ID" maxLength="50" autofocus="true" onKeyPress={(e) => handleKeyPress(e)}
              readonly onfocus="this.removeAttribute('readonly');" autoComplete="off" />
            <br />

            <label>Password</label>
            <input type="password" value={passwords} className="form-control" placeholder="Password" id="userPassword" maxLength="50" onChange={(e) => onChangePassword(e)}
              autoComplete="off" />
            <br />

            <label>Email</label>
            <input type="text" value={email} className="form-control" placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)} onKeyPress={(e) => handleKeyPress(e)}
              autoComplete="off" />
            <br />


            <div className="btns">
              <button
                type="button" className="btn btn-primary" id="loginbtn" style={{ width: "100%" }} onClick={(e) => loginValid(e)}
                disabled={loading}
              >Login</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
