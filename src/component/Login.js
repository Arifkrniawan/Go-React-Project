import { useState } from "react";
import Input from "./form/Input";
import { useNavigate, useOutletContext } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const { setJwt } = useOutletContext();
    const { setAlertMsg } = useOutletContext();
    const { setClassName } = useOutletContext();

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email, password)


        if (email === "admin@example.com"){
            setJwt("abc");
            setClassName("d-none");
            setAlertMsg("");
            navigate("/")
        } else {
            setAlertMsg("Incorrect Email or Password")
            setClassName("alert-danger")
        }
    }
    return (
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
                <Input
                id="email"
                title="Email Address"
                type="email"
                className="form-control"
                placeholder="your email"
                onChange={(e)=> setEmail(e.target.value)}
                autoComplete="email-new"
                name="email"/>

                <Input
                id="password"
                title="Password"
                type="input"
                className="form-control"
                placeholder="your password"
                onChange={(e)=> setPassword(e.target.value)}
                autoComplete="on"
                name="password"/>

                <input className="btn btn-primary" type="submit" value="Login"/>
                

            </form>
        </div>
    );
  };
  
  export default Login;
  