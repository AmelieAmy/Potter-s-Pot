import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux_files/actions/userActions';
import LoadingBox from '../sharedComponents/loadingBox';
import MessageBox from '../sharedComponents/messageBox';

const RegisterScreen = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search ? 
    props.location.search.split('=')[1]
    : '/';
    
    const userRegister = useSelector((state) => state.userRegister)
    const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert('Password and confirm password are not match')
        } else {
            dispatch(register(name, email, password));
        }
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
                    <h1>Créer un compte</h1>
                </div>
                { loading && <LoadingBox></LoadingBox> }
                { error && <MessageBox variant="danger">{error}</MessageBox> }
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    id="name"
                    placeholder="Entrer votre nom"
                    required
                    onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
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
                    <label htmlFor="confirmPassword">Confirmation mot de passe</label>
                    <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirmer votre mot de passe"
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Enregistrer
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        Vous avez déjà un compte ? <Link to={`/signin?redirect=${redirect}`}>Se connecter</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RegisterScreen;