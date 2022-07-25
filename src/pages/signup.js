import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';
import { Form } from '../components'
import TopLoader from '../top-loader/top-loader'

export default function Signup() {
    const [ progress, setProgress] = useState(0);
    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const InValid = firstName === '' || emailAddress === '' || password === '';

    const handleSignUp = (e) => {
        setProgress(20);
        e.preventDefault();
        setProgress(50);
        // some firebase

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                setProgress(70);
                result.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1
                }).then(() => {
                    navigate(ROUTES.BROWSE);
                })
                setProgress(100);
            })
            .catch((error) => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
                setProgress(100);
            });
    }

    return (
        <>
        <TopLoader progress={progress}/>
            <HeaderContainer dontShowOnSmallViewPort={true}>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input
                            placeholder="First Name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        ></Form.Input>
                        <Form.Input
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        ></Form.Input>
                        <Form.Input
                            type="password"
                            autoComplete="off"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        ></Form.Input>
                    <Form.Submit disabled={InValid} type="submit">Sign Up</Form.Submit>
                    </Form.Base>
                    <Form.Text>Already a user? <Form.Link to="/signin">Sign in now.</Form.Link></Form.Text>
                    <Form.TextSmall>
                        This page is protected by google reCAPTCHA to ensure you're not a bot. Learn More.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
            </>
    )
}
