import { useState } from 'react';
import { HiEyeOff } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo4.svg';
import image from '../assets/wfh_1.svg';
import { registerUser } from '../redux/reducer/user';

const Register = () => {
    const [registerObj, setRegisterObj] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = (e) => {
        console.log('registerObj', registerObj);
        e.preventDefault();

        dispatch(registerUser(registerObj));

        navigate('/');
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
                                    Register
                                </h1>
                                <p className='font-normal text-primary'>
                                    Please complete to create an account
                                </p>
                            </div>
                        </div>
                        {/* Form register */}
                        <div className='flex flex-col gap-2 sm:flex-row sm:gap-4'>
                            <div className='w-full'>
                                <label
                                    htmlFor='firstname'
                                    className='font-medium text-primary'
                                >
                                    First Name
                                </label>
                                <input
                                    type='text'
                                    id='firstname'
                                    placeholder='Firstname'
                                    className='input mt-2'
                                    onChange={(e) => {
                                        setRegisterObj((prevState) => ({
                                            ...prevState,
                                            firstname: e.target.value,
                                        }));
                                    }}
                                />
                            </div>
                            <div className='w-full'>
                                <label
                                    htmlFor='lastname'
                                    className='font-medium text-primary'
                                >
                                    Last Name
                                </label>
                                <input
                                    type='text'
                                    id='lastname'
                                    placeholder='Lastname'
                                    className='input mt-2'
                                    onChange={(e) => {
                                        setRegisterObj((prevState) => ({
                                            ...prevState,
                                            lastname: e.target.value,
                                        }));
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                            <label className='font-medium text-primary'>
                                Username
                            </label>
                            <input
                                type='text'
                                placeholder='Input your username here'
                                className='input'
                                onChange={(e) => {
                                    setRegisterObj((prevState) => ({
                                        ...prevState,
                                        username: e.target.value,
                                    }));
                                }}
                            />
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                            <label className='font-medium text-primary'>
                                Password
                            </label>
                            <div className='relative'>
                                <input
                                    type='password'
                                    placeholder='Input your password here'
                                    className='input'
                                    onChange={(e) => {
                                        setRegisterObj((prevState) => ({
                                            ...prevState,
                                            password: e.target.value,
                                        }));
                                    }}
                                />
                                <HiEyeOff className='eye-icon' />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <button
                                onClick={handleRegister}
                                className='w-full px-6 py-3 btn btn-secondary'
                            >
                                Register
                            </button>
                        </div>
                        <div className='mt-5'>
                            <p className='text-primary text-sm text-center'>
                                Already have an account?{' '}
                                <Link
                                    to='/'
                                    className='font-semibold underline'
                                >
                                    Login Now
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
