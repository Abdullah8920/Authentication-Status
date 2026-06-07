import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
import { useNavigate, useLocation } from 'react-router';

const Login = () => {
    const location = useLocation();

    const [formstate, setformstate] = useState({
        loader: false,
        email: location.state?.email || "",
        password: "",
    })

    const [error, setError] = useState("");


    const navigate = useNavigate();


    const sumbitform = () => {

        const { email, password } = formstate;
        if (!email || !password) {
            setError("Please enter email and password");
            return;
        }
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const matchedUser = users.find(
            (user) => user.email === email && user.password === password
        );
        if (!matchedUser) {
            setError("Wrong email or password");
            return;
        }

        setformstate({
            ...formstate,
            loader: true,
        })

        console.log("you have logged in Successfully")
        localStorage.setItem("userAuthStatus", JSON.stringify(true));
        localStorage.setItem("currentUser", JSON.stringify(matchedUser));


        setTimeout(() => {
            navigate("/")
        }, 2000)
    };

    useEffect(() => {
        const isAuthenticated = JSON.parse(localStorage.getItem('userAuthStatus'));

        if (isAuthenticated) navigate("/");

        else if (isAuthenticated === null || !isAuthenticated) {
            localStorage.setItem('userAuthStatus', JSON.stringify(false))

        }
    }, [])

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
                <h2 className="text-center mb-4">Sign In</h2>
                {error && <p className="text-danger text-center mb-3">{error}</p>}

                <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    id="form1"
                    type="email"
                    value={formstate.email}
                    onChange={(e) => {
                        setformstate({
                            ...formstate,
                            email: e.target.value,
                        })
                    }
                    }
                />

                <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="form2"
                    type="password"
                    onChange={(e) => {
                        setformstate({
                            ...formstate,
                            password: e.target.value,
                        })
                    }
                    }
                />

                <div className="d-flex justify-content-between align-items-center mb-4">
                    <MDBCheckbox
                        name="flexCheck"
                        id="flexCheckDefault"
                        label="Remember me"
                    />
                    <a href="#!">Forgot password?</a>
                </div>

                <MDBBtn
                    className="w-100 mb-4"
                    onClick={sumbitform}
                >
                    Login IN
                </MDBBtn>

                <div className="text-center">
                    <p>
                        Not a member? <Link to={'/signup'}>Register</Link>
                    </p>

                    <p className="text-muted">or sign in with</p>

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
}

export default Login;