import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmail } from '../module/helper';
import './Signup.css';

const Signup = () => {
    const navigate = useNavigate();

    const signup = async (e, _user) => {
        e.preventDefault();
        try {
            const [error, data] = await signInWithEmail(_user);
            if (error) throw error;
            alert('User created successfully, please verify email')
            const {access_token, refresh_token} = data.session
            sessionStorage.setItem('access_token', access_token);
            sessionStorage.setItem('refresh_token', refresh_token);
            navigate('/dashboard');
        } catch (error) {
            console.log(error)
        }
    }

    const [email, updateEmail] = useState('');
    const [password, updatePassword] = useState('');

    return (
        <form onSubmit={e => signup(e, { email, password})}>
            <h3>
                Create new account
            </h3>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                    <input value={email}
                        type="email"
                        onChange={(e) => updateEmail(e.target.value)}
                        placeholder='Johndoe@gmail.com'
                        className="form-control"
                    />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                    <input value={password}
                        type="password"
                        onChange={(e) => updatePassword(e.target.value)}
                        placeholder='********'
                        className="form-control"
                    />
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </div>
        </form>
    );
}

export default Signup;