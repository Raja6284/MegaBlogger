import React from 'react';
import Logo from '../Logo';

function Footer() {
    return (
        <footer className="bg-gray-800 py-8 text-gray-200">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center md:flex-row md:justify-between">
                {/* Logo and Copyright */}
                <div className="mb-6 md:mb-0">
                    <Logo width="100px" />
                    <p className="mt-2 text-sm text-gray-400">&copy; 2024. All Rights Reserved by Mr Raja.</p>
                </div>

                {/* Social Media Links */}
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="https://github.com/Raja6284" className="text-gray-400 hover:text-white">GitHub</a>
                    <a href="https://x.com/_raja_berlin" className="text-gray-400 hover:text-white">Twitter</a>
                    <a href="https://www.instagram.com/raja_r4j4/" className="text-gray-400 hover:text-white">Instagram</a>
                    <a href="https://www.linkedin.com/in/raja-kumar-b1453826a/" className="text-gray-400 hover:text-white">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;