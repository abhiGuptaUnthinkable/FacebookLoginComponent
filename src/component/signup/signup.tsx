import React, { useState } from "react" 
import { validationService } from "../../service/validationservice"
import { TextInput } from "../../widgets/text-input/text-input"
import './signup.css'

interface FormState{
    email?:string;
    password?:string;
    emailError?:string;
    passwordError?:string;
}

export const Signup = () =>{
    const [formState,setFormState] = useState<FormState>({})

    const validateFormState= () =>{
        const newState = {...formState}
        validationService.validateEmailValue(
            newState.email||'',
			newState,
			'emailError',
		);
        setFormState(newState)
        if(newState.emailError){return false}
        return true
    }

    const onSubmit = () =>{
       if( validateFormState()){
           console.log(formState)
       }
    }
 
    const changeFormState = (e: any) => {
		let newState:any = { ...formState };
		const { name, value } = e.target;
		newState[name] = value
		setFormState(newState);
	};

   return(
      <div className="col-form">
      <div className="form-container">
          <TextInput id="email" name="email" type="text" placeholder="Email address or phone number" onChange={changeFormState} value={formState.email} error={formState.emailError} />
          <TextInput id="password" name="password" type="password" placeholder="Password" onChange={changeFormState} value={formState.password}/>
          <button className="btn-login cursor-pointer" onClick={onSubmit}>Login</button>
          <a href="#">Forgotten password?</a>
          <button className="btn-new">Create new Account</button>
      </div>
      <p><a href="#"><b>Create a Page</b></a> for a celebrity, brand or business.</p>
  </div>
   )
}