import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        });
    };

    return (
        <button
            className="inline-block px-6 py-2  text-white rounded-full duration-200 hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;
