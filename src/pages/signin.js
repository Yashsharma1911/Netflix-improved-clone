import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';
import { Form } from '../components'
import TopLoader from '../top-loader/top-loader'

 
export default function Signin() {
    const [ progress, setProgress] = useState(0);
    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext);
    const [ emailAddress, setEmailAddress] = useState('');
    const [ password, setPassword] = useState('');
    const [ error, setError ] = useState('');
    const isInvalid = password === '' || emailAddress === '';
    const handleSignIn = (e) => {
        // to stop doing some magic by browser itself
        setProgress(20);
        e.preventDefault();
        setProgress(60);
        return firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
            setProgress(100);
            navigate(ROUTES.BROWSE);
        })
        .catch(error => {
            setProgress(100);
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        });
    }


    return (
        <>
        <TopLoader progress={progress}/>
        <HeaderContainer dontShowOnSmallViewPort={true}>
            <Form>
                <Form.Title>SignIn</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignIn} method="POST">
                    <Form.Input 
                        placeholder="Email Address"
                        value={emailAddress}
                        onChange={({target}) => setEmailAddress(target.value)}
                    />
                    <Form.Input 
                        placeholder="Password"
                        value={password}
                        type="password"
                        onChange={({target}) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type="submit">SignIn</Form.Submit>
                </Form.Base>
                <Form.Text>
                    New to Netflix? <Form.Link to="/signup">Sign up now</Form.Link>
                </Form.Text>
                <Form.TextSmall>This page is protected by google reCAPTCHA to ensure   you're not a bot. Learn More</Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
        </>
    )
}
