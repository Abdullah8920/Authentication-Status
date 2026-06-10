import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router';

const Sign = () => {
    const navigate = useNavigate()

    const [formdata, setformdata] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });


    const handlechange = (field, value) => {
        seterror("");
        setformdata({
            ...formdata,
            [field]: value,
        })
    }

    const [error, seterror] = useState("");

    const handlesignup = () => {
        const { name, email, password, confirmPassword, terms } = formdata

        if (!name || !email || !password || !confirmPassword) {
            seterror("Required All Field To Signup")
            return;
        }

        if (password !== confirmPassword) {
            seterror("Passowrd Doesn't Match")
            return;
        }

        if (!terms) {
            seterror("Please Check The Term Box")
            return;
        }


        const users = JSON.parse(localStorage.getItem("users")) || [];
        const emailExist = users.some((user) => user.email === email);

        if (emailExist) {
            seterror("Email Is Alerady Exist")
            return;
        }

        const newuser = {
            name,
            email,
            password,
        }

        users.push(newuser)
        localStorage.setItem("users", JSON.stringify(users));

        navigate("/login", {
            state: { email }
        })
    }

    return (
        <div
            className="d-flex justify-content-center align-items-center bg-light"
            style={{ minHeight: '100vh' }}
        >
            <MDBContainer
                className="p-4 shadow rounded bg-white"
                style={{
                    maxWidth: '400px',
                    width: '100%'
                }}
            >
                <h2 className="text-center mb-4">Sign Up</h2>

                {error && (
                    <p className="text-danger text-center mb-3">{error}</p>
                )}

                <MDBInput
                    wrapperClass="mb-4"
                    label="Full name"
                    id="signup-name"
                    type="text"
                    onChange={(e) => handlechange("name", e.target.value)}
                />

                <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    id="signup-email"
                    type="email"
                    onChange={(e) => handlechange("email", e.target.value)}

                />

                <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="signup-password"
                    type="password"
                    onChange={(e) => handlechange("password", e.target.value)}

                />

                <MDBInput
                    wrapperClass="mb-4"
                    label="Confirm password"
                    id="signup-confirm-password"
                    type="password"
                    onChange={(e) => handlechange("confirmPassword", e.target.value)}

                />

                <div className="mb-4">
                    <MDBCheckbox
                        name="terms"
                        id="signup-terms"
                        label="I agree to the terms and conditions"
                        onChange={(e) => handlechange("terms", e.target.checked)}

                    />
                </div>

                <MDBBtn
                    className="w-100 mb-4"
                    type="button"
                    onClick={handlesignup}
                >
                    Sign Up
                </MDBBtn>

                <div className="text-center">
                    <p>
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>

                    <p className="text-muted">or sign up with</p>

                    <div className="d-flex justify-content-center gap-2">
                        <MDBBtn
                            tag="a"
                            color="none"
                            className="m-1"
                            style={{ color: '#1877F2' }}
                        >
                            <MDBIcon fab icon="facebook-f" />
                        </MDBBtn>

                        <MDBBtn
                            tag="a"
                            color="none"
                            className="m-1"
                            style={{ color: '#1DA1F2' }}
                        >
                            <MDBIcon fab icon="twitter" />
                        </MDBBtn>

                        <MDBBtn
                            tag="a"
                            color="none"
                            className="m-1"
                            style={{ color: '#DB4437' }}
                        >
                            <MDBIcon fab icon="google" />
                        </MDBBtn>

                        <MDBBtn
                            tag="a"
                            color="none"
                            className="m-1"
                            style={{ color: '#333' }}
                        >
                            <MDBIcon fab icon="github" />
                        </MDBBtn>
                    </div>
                </div>
            </MDBContainer>
        </div>
    );
};

export default Sign;
