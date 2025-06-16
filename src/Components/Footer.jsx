import React from 'react';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { SlSocialFacebook } from 'react-icons/sl';

const Footer = () => {
    return (
        <div className='bg-primary p-10 mt-10 md:mt-20'>
            <footer className="footer sm:footer-horizontal text-neutral-content ">
                <nav className='md:pl-5'>
                    <h2 className='text-xl md:text-3xl inline-flex items-center text-red-800 font-bold'>
                        <img className='w-8 md:w-12 md:mr-1' src="/public/logoicon (2).PNG" alt="" />ReadBooks
                    </h2>

                    <p>📞 29 Madison Street, LA 20183, Dhaka</p>
                    <p>📧 readbooks.care@email.com</p>
                    <p>🕒 Mon-Fri: 8:30-5:00,
                        Sar-Sun: Closed</p>
                </nav>
                <nav className='md:pl-5'>
                    <h4 className=" font-bold text-lg text-gray-700">Contact Info</h4>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Our Team</a>
                    <a className="link link-hover">Book Borrowed</a>
                    <a className="link link-hover">Visit Location</a>
                </nav>
                <nav className='md:pl-5'>
                    <h4 className=" font-bold text-lg text-gray-700">Services</h4>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='md:pl-5'>
                    <h4 className=" font-bold text-lg text-gray-700">Terms</h4>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                    <a className="link link-hover">Terms Conditions</a>
                    <a className="link link-hover">Case Studies</a>
                </nav>
            </footer>

            <hr className='border-gray-600 my-4' />

            <footer className="footer sm:footer-horizontal text-neutral-content items-center pt-4">
                <aside className="grid-flow-col items-center">
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href=""><SlSocialFacebook size={20} className='hover:fill-primary' /></a>

                    <a href=""><CiTwitter size={20} className='hover:fill-primary' /></a>
                    <a href=""><FaInstagram size={20} className='hover:fill-primary' /></a>
                    <a href=""><FiYoutube size={20} className='hover:fill-primary' /></a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;