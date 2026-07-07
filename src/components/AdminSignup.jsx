import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const AdminSignup = () => {

    const notify = () => toast('Admin Signup Successfully');
    const navigate = useNavigate();

    const [adminAuthUser, setAdminAuthUser] = useAuth();

    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        const UserInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
            adminSecret: data.adminSecret
        };

        try {
            const response = await axios.post(
                'http://localhost:4001/api/admin/register',
                UserInfo
            );
            // ----- Correct Data Path -----
            const adminUser = response.data;
            const token = response.data.data.token;

            // ----- Save to localStorage -----
            localStorage.setItem('adminUser', JSON.stringify(adminUser));
            localStorage.setItem('token', token);

            // ----- Update React Context -----
            setAdminAuthUser(adminUser);
            // ----- Redirect -----
            navigate('/');
            toast.success('Successfully Admin Signed Up!');

        } catch (error) {
            alert('Registration failed: ' + error.response.data.error);
            console.error('Admin Signup error:', error);
        }
    };
    return (
        <>
            <div >
                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className='w-full border border-purple-600 max-w-lg mx-auto  p-6 mt-30 bg-[#37445e] rounded-base shadow-xl '>


                        <div className="mb-6">
                            <label for="name" className="block mb-2.5 text-sm font-medium text-heading">Name</label>
                            <input
                                {...register("name", { required: true })}
                                type="text" id="name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John Doe" required />
                        </div>
                        <div className="mb-6">
                            <label for="email" className="block mb-2.5 text-sm font-medium text-heading">Email</label>
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
                        <div className="mb-6">
                            <label for="adminSecret" className="block mb-2.5 text-sm font-medium text-heading">Admin Secret</label>
                            <input
                                {...register("adminSecret", { required: true })}
                                type="password" id="adminSecret" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />
                        </div>
                        <button onClick={notify} type='submit' className='py-2 px-4 bg-purple-400 rounded-full'>Submit</button>
                        <Toaster />

                    </div>
                </form>
            </div>

        </>
    )
}

export default AdminSignup
