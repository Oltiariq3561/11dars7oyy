import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [dataUser, setDataUser] = useState([]);

    console.log(dataUser);

    function handleRegister(e) {
        e.preventDefault();

        const user = {
            username: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        setDataUser((prev) => [...prev, user]);

        axios
            .post('https://auth-rg69.onrender.com/api/auth/signup', user, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                if (res.data.message === 'User registered successfully!') {
                    alert('Siz muvaffaqiyatli Register qildingiz!!!');
                    navigate('/login');
                }
            })
            .catch((err) => {
                if (err.message === 'Request failed with status code 400') {
                    alert('Sizda hatolik mavjud');
                }
                console.log(err);
            });
    }

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="w-full max-w-md p-8 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white rounded-2xl shadow-lg transform transition-all hover:scale-105">
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-center mb-6">
                    Register
                </h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-6">
                        <input
                            ref={nameRef}
                            type="text"
                            placeholder="Enter name..."
                            className="w-full p-4 bg-[#334155] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 transition duration-200"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            ref={emailRef}
                            type="email"
                            placeholder="Enter email..."
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
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
