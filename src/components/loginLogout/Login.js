import React from 'react'
import "./Login.css"
import Logo from "./img/Linkedin.webp"
import { auth } from '../../firebase'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profileUrl, setProfileUrl] = useState('')
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.profileUrl
                })
                );
            }).catch(error => alert(error));
    }
    const register = () => {
        if (!name) {
            return alert("Please enter your full name")
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profileUrl,
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profileUrl
                        }))
                    })
            }).catch(error => alert(error));
    }

    return (
        <>
            <h6>This is a Linkedin Clone made by Tushar </h6>
            <div className='login'>
                <img src={Logo} alt="" />
                <form>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name (required if registering)' type="text" />
                    <input value={profileUrl} onChange={(e) => setProfileUrl(e.target.value)} placeholder='Profile Picture URL(optional)' type="text" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="email" />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password" />
                    <button type='submit' onClick={loginToApp}>Sign In</button>
                </form>
                <p>Not a member?{" "}
                    <span className='login-register' onClick={register}>Register Now</span>
                </p>
            </div>
        </>

    )
}

export default Login