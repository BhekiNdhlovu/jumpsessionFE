import React, { useRef, useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import "./Login.css"
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const history = useHistory();


    async function handleSubmit(e) {
        e.preventDefault()
        // console.log("submitted")
        // console.log(emailRef.current.value)
        // console.log(passwordRef.current.value)
        let loginrequest = {
                username: emailRef.current.value,
                password: passwordRef.current.value
        }

        history.push("/home");
        //continue posting axios request
        axios.post('http://localhost:3000/login/', loginrequest)
            .then(function (response) {
                // console.log(response.body);
            })
    }

    return (
        <React.Fragment>
            <div className="content-cover" style={{fontFamily:"Nunito"}}>
                <div className="row" >
                    <div className="col-md-12 mx-auto p-0" >
                        <img src={"/Unknown.jpg"} alt="Learn" style={{margin:"auto"}} />
                    </div>
                    <div className="col-md-4 mx-auto p-0">
                        <div className="card shadow-lg">
                            <div className="card-header text-center">Login</div>
                            <div className="card-body">
                                <Form onSubmit={handleSubmit}>

                                    <Form.Group id="email">
                                        <div style={{width:"70%",margin:"auto"}}>
                                            <Form.Label className="label">Email</Form.Label>
                                        </div>
                                        <Form.Control ref={emailRef} style={{width:"70%",margin:"auto"}} required />
                                    </Form.Group>
                                    <Form.Group id="password">
                                        <div style={{width:"70%",margin:"auto"}}>
                                            <Form.Label className="label">Password</Form.Label>
                                        </div>
                                        <Form.Control type="password" ref={passwordRef} style={{width:"70%",margin:"auto"}} required />
                                    </Form.Group>
                                    <div className="text-right mt-2 mb-2" style={{width:"70%",margin:"auto"}}>
                                        {/*<Link to="/updatePassword" className="label">Forgot Password?</Link>*/}
                                    </div>
                                    <Form.Group className="text-center">
                                        <Button  style={{width:"70%",margin:"auto"}} type="submit">
                                            Sign In
                                        </Button>
                                    </Form.Group>
                                    <div className="mt-2 new" style={{width:"70%",margin:"auto"}}>
                                        {/*New to Learn.com <Link to="/Register" className="label"><strong>Register here</strong></Link>*/}
                                    </div>
                                </Form>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}
