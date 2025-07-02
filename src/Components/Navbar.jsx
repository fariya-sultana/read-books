import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './navbar.css'
import { FcUnlock } from 'react-icons/fc';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';
import logoImg from '../../public/logoicon (2).PNG';


const Navbar = () => {

    const { user, logOut } = use(AuthContext);
    const links = <>
        <li className='lg:hover:text-red-700'><NavLink to={'/'}>Home</NavLink></li>
        {
            user && <>
                <li className='lg:hover:text-red-700' ><NavLink to={'/allBooks'}>All Books</NavLink></li>
                <li className='lg:hover:text-red-700' ><NavLink to={'/addBook'}>Add Book</NavLink></li>
                <li className='lg:hover:text-red-700' ><NavLink to={'/borrowedBooks'}>Borrowed Books</NavLink></li>
            </>
        }
        <li className='lg:hover:text-red-700' ><NavLink to={'/aboutUs'}>About Us</NavLink></li>
        <li className='lg:hover:text-red-700' ><NavLink to={'/contactUs'}>Contact Us</NavLink></li>
    </>

    const handleLogout = () => {

        logOut().then(() => {

            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Logout successful! 🎉",
                showConfirmButton: false,
                timer: 1500
            });

        }).catch(error => {
            console.log(error.message)
        })

    }


    return (
        <div className='bg-base-100 sticky top-0 z-50 '>

            <div className="navbar md:max-w-11/12 md:mx-auto   p-4">

                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="  lg:hidden cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow font-bold">
                            {links}
                        </ul>
                    </div>

                    <div className='hidden md:block'>
                        <h2 className=' z-20 text-xl md:text-3xl inline-flex items-center text-red-700 font-semibold'>
                            <img className='w-8 md:w-12 md:mr-2' src={logoImg} alt="" />Read<span className=''>Books</span>
                        </h2>
                    </div>

                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="font-bold menu-horizontal px-1 inline-flex gap-10">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end space-x-2  ">

                    {user ? (
                        <div className="relative group flex items-center p-1 rounded-full border border-primary">
                            <img
                                src={
                                    user?.photoURL && user.photoURL.length > 0
                                        ? user.photoURL
                                        : "https://i.postimg.cc/15HJjdw8/3135823.png"
                                }
                                alt="User Avatar"
                                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-primary cursor-pointer"
                                title={user?.displayName}
                            />
                            <div className="absolute right-0 top-12 hidden group-hover:flex flex-col bg-gray-100 rounded-md shadow-lg p-5 w-44 z-50 text-center space-y-2 transition-all duration-300">
                                <p className="font-bold text-red-700">{user?.displayName}</p>
                                <button
                                    onClick={handleLogout}
                                    className="btn btn-sm bg-primary text-white hover:bg-gray-500 font-semibold"
                                >
                                    Log Out <FcUnlock />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1 md:gap-2">
                            <Link
                                to={"/login"}
                                className="btn bg-primary hover:bg-gray-600 text-white font-bold btn-sm"
                            >
                                Login
                            </Link>

                            <Link
                                to={"/register"}
                                className="btn bg-primary text-white hover:bg-gray-600 btn-sm font-bold"
                            >
                                Register
                            </Link>
                        </div>
                    )}


                </div>





            </div>

        </div>
    );
};

export default Navbar;