import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const nameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    function handleLogin(e) {
        e.preventDefault();

        let userInfo = {
            username: nameRef.current.value,
            password: passwordRef.current.value,
        };

        setUser((prev) => [...prev, userInfo]);

        axios
            .post('https://auth-rg69.onrender.com/api/auth/signin', userInfo, {
                headers: {
                    'Content-type': 'application/json',
                },
            })
            .then((res) => {
                if (res.data.accessToken) {
                    localStorage.setItem('token', res.data.accessToken);
                    navigate('/');
                }
            })
            .catch((err) => {
                if (err.message === 'Request failed with status code 404') {
                    alert('Sizning Loginizda hatolik mavjud!!!');
                    navigate('/register');
                }
                console.log(err);
            });
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md p-8 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white rounded-2xl shadow-lg transform transition-all hover:scale-105">
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-center mb-6">
                    Login
                </h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-6">
                        <input
                            ref={nameRef}
                            type="text"
                            placeholder="Enter username..."
                            className="w-full p-4 bg-[#334155] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 transition duration-200"
                        />
                    </div>
                    <div className="mb-8">
                        <input
                            ref={passwordRef}
                            type="password"
                            placeholder="Enter password..."
                            className="w-full p-4 bg-[#334155] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 transition duration-200"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:bg-gradient-to-l hover:from-blue-600 hover:to-purple-600 transform transition duration-300 hover:scale-105"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
