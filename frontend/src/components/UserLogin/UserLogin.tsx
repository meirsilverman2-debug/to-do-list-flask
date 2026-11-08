import { useState } from "react"
import "./userLogin.css"

export default function UserLogin() {

    const [hidden, setHidden] = useState<boolean>(true)

  return (
    <div>
        <form className="loginFormSection" action="/">
        <h1 className="login-form-main-header">Please enter the login form</h1>

        <label className="login-lable">
            Name:
            <input 
            type="text"
            placeholder="Please enter a name"
            required
            />
        </label>

        <label className="login-lable">
            Password:
            <input 
            type={hidden ===  true ? "password": "text"}
            placeholder="Please enter a password"
            required
            />
        </label>

        <label className="login-lable">
            Email:
            <input 
            type="email"
            placeholder="Please enter an email"
            required
            />
        </label>

        <div className="login-buttons-section">
        <button className="login-button" type="submit">
            Login
        </button>

        <button className="login-button" type="reset">Clear Form</button>

        <button className="login-button" type="button" onClick={() => setHidden(hidden === true ? false: true)}>{hidden === false ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#1f1f1f"><path d="M15.19,14.69q1.31-1.31 1.31-3.19T15.19,8.31T12,7T8.81,8.31T7.5,11.5t1.31,3.19T12,16t3.19-1.31Zm-5.1-1.28Q9.3,12.63 9.3,11.5t0.79-1.91T12,8.8t1.91,0.79q0.79,0.79 0.79,1.91t-0.79,1.91T12,14.2t-1.91-0.79ZM5.35,16.96Q2.35,14.93 1,11.5Q2.35,8.07 5.35,6.04T12,4t6.65,2.04T23,11.5q-1.35,3.42-4.35,5.46T12,19T5.35,16.96ZM12,11.5Zm5.19,4.01q2.36-1.49 3.61-4.01q-1.25-2.53-3.61-4.01T12,6Q9.18,6 6.81,7.49T3.2,11.5q1.25,2.52 3.61,4.01T12,17t5.19-1.49Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#1f1f1f"><path d="M10.09,13.41Q9.3,12.63 9.3,11.5t0.79-1.91T12,8.8t1.91,0.79q0.79,0.79 0.79,1.91t-0.79,1.91T12,14.2t-1.91-0.79ZM12,19q-3.65,0-6.65-2.04Q2.35,14.93 1,11.5Q2.35,8.07 5.35,6.04T12,4q3.53,0 6.44,1.9T22.8,11H20.53q-1.3-2.33-3.58-3.66Q14.68,6 12,6Q9.18,6 6.81,7.49T3.2,11.5q1.25,2.52 3.61,4.01T12,17q0.5,0 1-0.05t1-0.15v2.02q-0.5,0.07-1,0.13T12,19Zm0-3q0.55,0 1.06-0.13t0.96-0.35q0.13-1.25 0.79-2.25t1.69-1.6q0-0.05 0-0.09t0-0.09q0-1.88-1.31-3.19T12,7T8.81,8.31T7.5,11.5t1.31,3.19T12,16Zm-0.13-4.5ZM17,21q-0.43,0-0.71-0.29Q16,20.43 16,20V17q0-0.43 0.29-0.71T17,16V15q0-0.83 0.59-1.41T19,13t1.41,0.59Q21,14.18 21,15v1q0.43,0 0.71,0.29T22,17v3q0,0.43-0.29,0.71T21,21H17Zm1-5h2V15q0-0.43-0.29-0.71T19,14t-0.71,0.29T18,15v1Z"/></svg>}</button>
        </div>
        </form>
    </div>
  )
}
