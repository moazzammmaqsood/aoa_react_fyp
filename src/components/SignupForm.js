import React,{ useState } from 'react'; 
import { Outlet, Link } from "react-router-dom";



function SignupForm(props){
    return(<>
    <form className="mt-4">
                    <h1 className="p-3 text-center">
                        Sign up to Continue
                    </h1>                
                    <div className="form-floating mx-5 my-2">
                        <input type="text" className="form-control " id="cnic" placeholder="xxxxx-xxxxxxxx-x"></input>
                        <label htmlFor="cnic">Enter your Cnic</label>
                    </div>
                    <div className="form-floating mx-5 my-2">
                        <input type="email" className="form-control " id="email" placeholder="name@example.com"></input>
                        <label htmlFor="email">Email Address</label>
                    </div>
                    <div className="form-floating mx-5 my-2">
                        <input type="text" className="form-control " id="name" placeholder="John Doe"></input>
                        <label htmlFor="name">Enter your name</label>
                    </div>
                    <div className="form-floating mx-5 my-2">
                        <input type="password" className="form-control " id="password" placeholder="password"></input>
                        <label  htmlFor="password">Password</label>
                    </div>
                    <div className="text-center my-2">
                    <button className="btn btn-primary center mx-auto w-75 py-2" type="submit" >Sign up</button>
                    </div>
    </form>
    <div >
        <p className="mx-5 my-5">
            Already have an account? <button onClick={props.handleSignup}>Sign in</button>
        </p>
    </div>
    </>
    );
}


export default SignupForm;