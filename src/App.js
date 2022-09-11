import { useState } from "react";
import React from "react";

import './App.css' ;
export default App();
function App() {
  const[values, setValues] = useState({
    name: '',
    email:'',
    password:'',
    Confirm:'',
  });
  const [submitted, setsubmitted]= useState(true);
  const [valid ,setvalid] = useState(true);
const HandleNameInputChange=(event) => {
  setValues({...values, Name :event.target.value});
}
const handleEmailInputChange=(event) => {
  setValues({...values, Email :event.target.value});
}
const handlePasswordInputChange=(event) => {
  setValues({...values, password :event.target.value});
}
const handleConfirmInputChange=(event) => {
  setValues({...values, Confirm :event.target.value});
}
// eslint-disable-next-line no-unused-vars
const handlesubmit =(event) =>{
event.preventDefault();
  if(values.name && values.email && values.password && values.confirm){
    setvalid(true)
  };
setsubmitted(true);}
  return( 
 <React.Fragment>
 
    <div class="container">
  <div class="row justify-content-center" />
  <div class="col-md-5" />
   <div class="card">
     <h2 class="card-title text-center">Register <a href="http://opensnippets.com">open snippets</a></h2>
      <div class="card-body py-md-4">
       <form _lpchecked="1"/>
          <div class="form-group">
           {submitted && valid ? <div className="success-message">thank you,success registration</div> :null} 
             <input 
             disabled= {submitted}
             onChange={HandleNameInputChange}
             value={values.Name}
              type="text" class="form-control" id="name" placeholder="Name"/ >
        {submitted && !values.Name ? <span>please enter your name</span> :null}
 
        </div>

        <div class="form-group">
         {submitted ? <div className ="success-message">thank you,success registration</div>: null}

             <input
             disabled= {submitted}
             onChange={handleEmailInputChange}
              value={values.email}
             type="email" class="form-control" id="email" placeholder="Email"/>
             {submitted && !values.email ? <span>please inter your Email</span> :null}
                            </div>
                <div class="form-group">
       <input 
      onChange={handlePasswordInputChange}
       value={values.password}
      type="password" class="form-control" id="password" placeholder="Password"/>
    {submitted && !values.password ? <span> please enter your password</span> :null}
   </div>
   <div class="form-group">
      <input
      disabled= {submitted}
        onChange={handleConfirmInputChange}
      value={values.confirm}

      OnChange={handleConfirmInputChange}
      type="password" class="form-control" id="confirm" placeholder="confirm"/>
       { submitted && !values.confirm ? <span>please enter your confirm-password</span> :null}
   </div>
   <div class="d-flex flex-row align-items-center justify-content-between">
      <a href="/">Login</a>
       <button class="btn btn-primary">Create Account</button>
          </div>
            </div>
              </div>
                 </div>
                    </React.Fragment>
                        )};
