import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../../redux_files/actions/userActions';
import LoadingBox from '../sharedComponents/loadingBox';
import MessageBox from '../sharedComponents/messageBox';

const SigninScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search ? 
    props.location.search.split('=')[1]
    : '/';
    
    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo, loading, error } = userSignin;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))
    };

    useEffect(() => {
        if(userInfo) {
            props.history.push(redirect);
        }
    }, [userInfo]);

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Connexion</h1>
                </div>
                { loading && <LoadingBox></LoadingBox> }
                { error && <MessageBox variant="danger">{error}</MessageBox> }
                <div>
                    <label htmlFor="email">Adress email</label>
                    <input
                    type="email"
                    id="email"
                    placeholder="Entrer votre email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input
                    type="password"
                    id="password"
                    placeholder="Entrer votre mot de passe"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Connexion
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        Nouveau client ? <Link to={`/register?redirect=${redirect}`}>Créez votre compte ici.</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SigninScreen
