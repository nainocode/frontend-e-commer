import React from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
// import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';



const Login = () => {

    const notify = () => toast('User Login Successfully');
    const navigate = useNavigate();
    const [ authUser , setAuthUser] = useAuth();
    
    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const UserInfo = {
            email: data.email,
            password: data.password
        };
         try {
        const response = await axios.post(
            'http://localhost:4001/api/auth/login',
            UserInfo
        );
        console.log('User Login Successfully', response.data);
        // ----- Correct Data Path -----
        const user = response.data;
        const token = response.data.data.token;
        // ----- Save to localStorage -----
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token); 
        // ----- Update React Context -----
        setAuthUser(user);
        // ----- Redirect -----
       setTimeout(() => {
         navigate('/');
         }, 3000);
       

    } catch (error) {
        alert('Login failed: ' + error.response.data.error);
        console.error('Login error:', error);
    }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='w-full border border-purple-600 max-w-lg mx-auto  p-6 mt-30 bg-[#37445e] rounded-base shadow-xl '>
                    <div className="mb-6">
                        <label for="email" className="block mb-2.5 text-sm font-medium text-heading">Email address</label>
                        <input
                            {...register("email", { required: true })}
                            type="email" id="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="john.doe@company.com" required />
                    </div>
                    <div className="mb-6">
                        <label for="password" className="block mb-2.5 text-sm font-medium text-heading">Password</label>
                        <input
                            {...register("password", { required: true })}
                            type="password" id="password" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />
                    </div>
                    <button onClick={notify} type='submit' className='py-2 px-4 bg-purple-400 rounded-full'>Submit</button>
                    <Toaster />
                </div>
            </form>
        </div>
    )
}

export default Login;


// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthProvider';
// import { useForm } from "react-hook-form"
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';

// const Login = () => {
//     const navigate = useNavigate();
//     const [authUser, setAuthUser] = useAuth(); // Fixed: you were missing authUser
    
//     const {
//         register,
//         handleSubmit,
//     } = useForm()
    
//     const onSubmit = async (data) => {
//         const UserInfo = {
//             email: data.email,
//             password: data.password
//         };
        
//         try {
//             const response = await axios.post(
//                 'http://localhost:4001/api/auth/login',
//                 UserInfo
//             );
//             console.log('User Login Successfully', response.data);
            
//             // ----- Correct Data Path -----
//             const user = response.data;
//             const token = response.data.data.token;
            
//             // ----- Save to localStorage -----
//             localStorage.setItem('user', JSON.stringify(user));
//             localStorage.setItem('token', token); 
            
//             // ----- Update React Context -----
//             setAuthUser(user);
//             console.log("Auth User after Login:", user);
            
//             // ----- Show success toast -----
//             toast.success('User Login Successfully');
            
//             // ----- Redirect after a short delay -----
//             setTimeout(() => {
//                 navigate('/');
//             }, 1000);

//         } catch (error) {
//             const errorMessage = error.response?.data?.error || 'Login failed. Please try again.';
//             toast.error(errorMessage);
//             console.error('Login error:', error);
//         }
//     }
    
//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className='w-full border border-purple-600 max-w-lg mx-auto p-6 mt-30 bg-[#37445e] rounded-base shadow-xl'>
//                     <div className="mb-6">
//                         <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">
//                             Email address
//                         </label>
//                         <input
//                             {...register("email", { required: true })}
//                             type="email" 
//                             id="email" 
//                             className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
//                             placeholder="john.doe@company.com" 
//                             required 
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">
//                             Password
//                         </label>
//                         <input
//                             {...register("password", { required: true })}
//                             type="password" 
//                             id="password" 
//                             className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
//                             placeholder="•••••••••" 
//                             required 
//                         />
//                     </div>
//                     <button 
//                         type='submit' 
//                         className='py-2 px-4 bg-purple-400 rounded-full hover:bg-purple-500 transition-colors'
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </form>
//             <Toaster position="top-center" />
//         </div>
//     )
// }

// export default Login;
