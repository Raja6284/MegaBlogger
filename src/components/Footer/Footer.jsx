import React from 'react';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-800 py-10 text-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Logo and Copyright */}
                    <div className="flex flex-col items-start">
                        <Logo width="100px" />
                        <p className="mt-4 text-sm text-gray-400">
                            &copy; 2024. All Rights Reserved by Mr Raja.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase text-gray-400 mb-3">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link className="text-base font-medium hover:text-white" to="/">Features</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium hover:text-white" to="/">Pricing</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium hover:text-white" to="/">Affiliate Program</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium hover:text-white" to="/">Press Kit</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase text-gray-400 mb-3">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link className="text-base font-medium hover:text-white" to="/">Account</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium hover:text-white" to="/">Help</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium hover:text-white" to="/">Contact Us</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium hover:text-white" to="/">Customer Support</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase text-gray-400 mb-3">Legals</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link className="text-base font-medium hover:text-white" to="/">Terms &amp; Conditions</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium hover:text-white" to="/">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium hover:text-white" to="/">Licensing</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 text-center">
                    <h4 className="text-xs font-semibold uppercase text-gray-400 mb-3">Follow Us</h4>
                    <div className="flex justify-center space-x-4">
                        <a href="https://github.com/Raja6284" className="text-gray-400 hover:text-white">GitHub</a>
                        <a href="https://x.com/_raja_berlin" className="text-gray-400 hover:text-white">Twitter</a>
                        <a href="https://www.instagram.com/raja_r4j4/" className="text-gray-400 hover:text-white">Instagram</a>
                        <a href="https://www.linkedin.com/in/raja-kumar-b1453826a/" className="text-gray-400 hover:text-white">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
