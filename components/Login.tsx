'use client';
import { signIn } from 'next-auth/react';
import { SiOpenai } from 'react-icons/si';
import { GoogleIcon } from './GoogleIcon';

function Login() {
    return (
        <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
            <SiOpenai size={150} className="text-white mb-8" />

            <button
                onClick={() => signIn('google')}
                className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
            >
                <GoogleIcon />
                Sign in with Google
            </button>
        </div>
    );
}

export default Login;
