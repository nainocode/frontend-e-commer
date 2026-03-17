import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {


    const [cartitem, SetCartitem] = useState([])
    const [product, SetProduct] = useState([])

    const fetchedCart = async () => {
        try {
            const response = await axios.get('http://localhost:4001/api/products')
            SetCartitem(response.data.data)
            console.log(response.data.data)
        } catch (error) {
            console.error('error ', error)
        }
    }
    useEffect(() => {
        fetchedCart();
    }, [])
    const fetchedProduct = async () => {
        try {
            const response = await axios.get('http://localhost:4001/api/products')
            SetCartitem(response.data.data)
            console.log(response.data.data)
        } catch (error) {
            console.error('error ', error)
        }
    }
    useEffect(() => {
        fetchedProduct();
    }, [])



    const [showCart, setShowCart] = useState(false);
    const [showUser, setShowUser] = useState(false);
    const [Products, setProducts] = useState(false);

    const navigate = useNavigate();

    return (
        <>
            <nav className="bg-white dark:bg-gray-800 antialiased">
                <div className="max-w-7xl px-4 mx-auto 2xl:px-0 py-4">
                    <div className="flex items-center justify-between">

                        <div className="flex items-center space-x-8">
                            <div className="shrink-0">
                                <Link to="/" title="" className="">
                                    <img src="/" alt="" />
                                    <h1 className=' text-2xl font-bold text-white '>E-Commer</h1>
                                </Link>
                            </div>
                            <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                                <li>
                                    <Link to="/" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 hover:bg-gray-900 rounded-md px-2 py-2">
                                        Home
                                    </Link>
                                </li>
                                <li className="shrink-0">
                                    <div onMouseEnter={() => setProducts(true)} onMouseLeave={() => setProducts(false)} className="relative">
                                        <button onClick={() => navigate('/products')} id="myCartDropdownButton1" data-dropdown-toggle="myCartDropdown1" type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
                                            <span className="sr-only">All Products</span>
                                            <svg className="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                                            </svg>
                                            {/* clicking the label navigates to /products */}
                                            <Link to="/products" className="hidden sm:flex ms-2 text-sm font-medium text-gray-900 dark:text-white">All Products</Link>
                                            <svg className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div id="myCartDropdown1" className={`${Products ? 'block' : 'hidden'} z-10 bg-white mx-auto w-5xl min-h-[350px] space-y-7 overflow-hidden rounded-lg  p-4 antialiased shadow-lg dark:bg-gray-900 absolute -right-180 `}>
                                            {product.map((item, index) => (
                                                <div key={index} className='flex justify-around'>
                                                    <div className=" flex justify-between gap-5" >
                                                        <div>
                                                            <Link to="/products" className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">{item.name} </Link>
                                                            <p className="mt-0.5 text-sm font-normal text-gray-500 dark:text-gray-400">{item.desc}</p>
                                                            <p className="py-2 px-2 text-blue-600 ">{item.price}</p>
                                                        </div>
                                                        <div>
                                                            <img width={100} src={item.image.url} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className=" flex justify-between gap-5 " >
                                                        <div>
                                                            <Link to="#" className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">{item.name} </Link>
                                                            <p className="mt-0.5 text-sm font-normal text-gray-500 dark:text-gray-400">{item.desc}</p>
                                                            <p className="py-2 px-2 text-blue-600">{item.price}</p>
                                                        </div>
                                                        <div>
                                                            <img width={100} src={item.image} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className=" flex justify-between gap-5">
                                                        <div>
                                                            <Link to="#" className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">{item.name} </Link>
                                                            <p className="mt-0.5 text-sm font-normal text-gray-500 dark:text-gray-400">{item.desc}</p>
                                                            <p className="py-2 px-2 text-blue-600 ">{item.price}</p>
                                                        </div>
                                                        <div>
                                                            <img width={100} src={item.image} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                                <li className="shrink-0">
                                    <Link to="/gifts" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 hover:bg-gray-900 rounded-md px-2 py-2">
                                        Gift Ideas
                                    </Link>
                                </li>
                                <li className="shrink-0">
                                    <Link to="/deals" title="" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 hover:bg-gray-900 rounded-md px-2 py-2">
                                        Today's Deals
                                    </Link>
                                </li>
                                <li className="shrink-0">
                                    <Link to="#" title="" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 hover:bg-gray-900 rounded-md px-2 py-2">
                                        Sell
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center lg:space-x-2">
                            <div onMouseEnter={() => setShowCart(true)} onMouseLeave={() => setShowCart(false)} className="relative">
                                <button onClick={() => navigate('/cart')} id="myCartDropdownButton1" data-dropdown-toggle="myCartDropdown1" type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
                                    <span className="sr-only">Cart</span>
                                    <svg className="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                                    </svg>
                                    {/* clicking the label navigates to /cart */}
                                    <Link to="/cart" className="hidden sm:flex ms-2 text-sm font-medium text-gray-900 dark:text-white">My Cart</Link>
                                    <svg className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                                    </svg>
                                </button>
                                <div id="myCartDropdown1" className={`${showCart ? 'block' : 'hidden'} z-10 bg-white mx-auto w-60 space-y-4 overflow-hidden rounded-lg  p-4 antialiased shadow-lg dark:bg-gray-800 absolute right-0 `}>
                                    {cartitem.map((item, index) => (
                                        <div key={index}>
                                            <div className="grid grid-cols-2 ">
                                                <div>
                                                    <Link to="#" className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">{item.name}</Link>
                                                    <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">${item.price}</p>
                                                </div>
                                                <div className="flex items-center justify-end gap-6">
                                                    <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">{item.quantity}</p>
                                                    <button data-tooltip-target="tooltipRemoveItem1a" type="button" className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                                                        <span className="sr-only"> Remove </span>
                                                        <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                            <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>
                                                    <div id="tooltipRemoveItem1a" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                                                        Remove item
                                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to="/payout" title="" className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-blue-500 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" role="button"> Proceed to Checkout </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>



                            <div onMouseEnter={() => setShowUser(true)} onMouseLeave={() => setShowUser(false)} className="relative">
                                <button id="userDropdownButton1" data-dropdown-toggle="userDropdown1" type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
                                    <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    Account
                                    <svg className="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                                    </svg>
                                </button>
                                <div id="userDropdown1" className={`${showUser ? 'block' : 'hidden'} z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700 absolute right-0 `}>
                                    <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                                        <Link to="/account" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Account </Link>
                                        <Link to="/orders" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> My Orders </Link>
                                        <Link to="/settings" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Settings </Link>
                                        <Link to="/favourites" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Favourites </Link>
                                        <Link to="/addresses" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Delivery Addresses </Link>
                                        <Link to="/billing" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Billing Data </Link>
                                    </ul>

                                    <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
                                        <Link to="/login" title="" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"> Sign Out </Link>
                                    </div>
                                </div>
                            </div>
                            <button type="button" data-collapse-toggle="ecommerce-navbar-menu-1" aria-controls="ecommerce-navbar-menu-1" aria-expanded="false" className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white">
                                <span className="sr-only">
                                    Open Menu
                                </span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
                                </svg>
                            </button>
                        </div>





                    </div>


                    <div id="ecommerce-navbar-menu-1" className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4">
                        <ul className="text-gray-900 dark:text-white text-sm font-medium  space-y-3">
                            <li>
                                <Link to="/" className="hover:text-primary-700 dark:hover:text-primary-500">Home</Link>
                            </li>
                            <li>
                                <Link to="/products" className="hover:text-primary-700 dark:hover:text-primary-500">All Products</Link>
                            </li>
                            <li>
                                <Link to="/gift-ideas" className="hover:text-primary-700 dark:hover:text-primary-500">Gift Ideas</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-primary-700 dark:hover:text-primary-500">Games</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-primary-700 dark:hover:text-primary-500">Electronics</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-primary-700 dark:hover:text-primary-500">Home & Garden</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar;
