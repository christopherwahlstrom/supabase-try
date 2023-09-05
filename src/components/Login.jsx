import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const login = async (e, _user) => {
        e.preventDefault();
        try {
            const [error, data] = await signInWithEmail(_user);
            if (error) throw error;
            alert(`Login successful`)
            const {access_token, refresh_token} = data.session
            sessionStorage.setItem('access_token', access_token);
            sessionStorage.setItem('refresh_token', refresh_token);
            navigate('/dashboard', { replace: true });
        } catch (error) {
            if (error.message.includes('Email not verified')) alert('Please verify email')
        }
    }


    return (
        <form onSubmit= {e => login(e, {email, password}) }>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                    <input value={email}
                        type="email"
                        onChange={(e) => updateEmail(e.target.value)}                        
                        placeholder='Enter email'
                        className="form-control"
                    />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                    <input value={password}
                        type="password"
                        onChange={(e) => updatePassword(e.target.value)}    
                        placeholder='Enter password'
                        className="form-control"
                    />
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Login</button>
            </div>
        </form>
    );
}

export default Login;



