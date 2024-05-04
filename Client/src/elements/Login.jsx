import React from "react"
import './Login.css'
const Login = ()=>{
    return(
        <>
<body>

         <div className="form-container">
      <p className="title">!ברוכה הבאה</p>
      <form className="form">
        <input type="email" className="input" placeholder="אימייל"/>
        <input type="password" className="input" placeholder="סיסמא"/>
        <p className="page-link">
          <span className="page-link-label">שכחתי סיסמא</span>
        </p>
        <button className="form-btn">התחברי</button>
        
      </form>
      <p className="sign-up-label">
        אין לי חשבון <span className="sign-up-link">הירשמי</span>
      </p>
      <div className="buttons-container">
      </div>
     
    </div>
    </body>
        </>
    )
}
export default Login;