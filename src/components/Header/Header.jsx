
import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        { name: 'Home', slug: '/', active: true },
        { name: 'Login', slug: '/login', active: !authStatus },
        { name: 'Signup', slug: '/signup', active: !authStatus },
        { name: 'All Posts', slug: '/all-posts', active: authStatus },
        { name: 'Add Post', slug: '/add-post', active: authStatus },
    ];

    return (
        <header className="bg-gray-800 py-4 shadow-md">
            <Container>
                <nav className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Logo */}
                    <div className="flex justify-center md:justify-start w-full md:w-auto">
                        <Link to="/">
                            <Logo width="70px" />
                        </Link>
                    </div>

                    {/* Navigation Menu */}
                    <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 w-full md:w-auto">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="text-gray-200 hover:bg-orange-500 transition duration-200 ease-in-out px-4 py-2 rounded-full"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                    </ul>

                    {/* Logout Button (properly aligned on mobile) */}
                    {authStatus && (
                        <div className="flex justify-center md:justify-end w-full md:w-auto">
                            <LogoutBtn />
                        </div>
                    )}
                </nav>
            </Container>
        </header>
    );
}

export default Header;

