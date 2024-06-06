import { useEffect, useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo4.svg';
import image from '../assets/wfh_8.svg';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const dataUser = useSelector((state) => state.user);

    useEffect(() => {
        console.log('Data Auth', dataUser);
    }, [dataUser, username, password]);

    const handleLogin = () => {
        if (username === 'SabinaIzatul' && password === 'sabina12') {
            navigate('/profile');
        } else {
            alert('Login Gagal');
        }
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='flex items-center min-h-screen bg-surface'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-contentbox rounded-2xl mx-auto shadow-2xl overflow-hidden'>
                    <div className='w-full lg:w-1/2 flex items-center justify-center p-12 bg-secondary'>
                        <img src={image} alt='image' />
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col py-16 px-12'>
                        <div className='flex flex-col items-center'>
                            <img
                                className='scale-[1.2]'
                                alt='Logo'
                                src={logo}
                            />
                            <div className='flex flex-col items-center p-5 gap-1'>
                                <h1 className='font-bold text-2xl text-primary'>
                                    Login
                                </h1>
                                <p className='font-normal text-primary'>
                                    Hi, Welcome Back!
                                </p>
                            </div>
                        </div>
                        {/* Form login */}
                        <div className='flex flex-col gap-2'>
                            <label className='font-medium text-primary'>
                                Username
                            </label>
                            <input
                                type='text'
                                placeholder='Input your username here'
                                className='input'
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                            <label className='font-medium text-primary'>
                                Password
                            </label>
                            <div className='relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Input your password here'
                                    className='input'
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                {showPassword ? (
                                    <HiEye
                                        className='eye-icon'
                                        onClick={togglePassword}
                                    /> // Menampilkan icon mata tertutup
                                ) : (
                                    <HiEyeOff
                                        className='eye-icon'
                                        onClick={togglePassword}
                                    /> // Menampilkan icon mata terbuka
                                )}
                            </div>
                        </div>
                        <div className='mt-5'>
                            <button
                                onClick={handleLogin}
                                className='w-full py-3 btn btn-secondary'
                            >
                                Login
                            </button>
                        </div>
                        <div className='mt-5'>
                            <p className='text-primary text-sm text-center'>
                                Don’t have an account?{' '}
                                <Link
                                    to='/register'
                                    className='font-semibold underline'
                                >
                                    Register Now
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
