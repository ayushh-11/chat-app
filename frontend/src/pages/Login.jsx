import React from 'react'

function Login() {
    return (
        <div className="flex flex-col items-center justify-center w-full mx-auto">
            <div className="flex flex-col justify-center h-full w-full max-w-md bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
                <h1 className="p-6 w-full text-3xl font-semibold text-center">
                    Login
                    <span className="text-2xl font-semibold"> ChatApp</span>
                </h1>
                <form className="w-full px-6">
                    <div className="mb-4">
                        <label className="label">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input
                            className="w-full input input-bordered h-10"
                            type="text"
                            placeholder="Enter Username"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input
                            className="w-full input input-bordered h-10"
                            type="password"
                            placeholder="Enter password"
                            required
                        />
                    </div>
                    <a
                        href="#"
                        className="text-sm hover:underline hover:text-blue-600 block text-right"
                    >
                        Don't have an account?
                    </a>
                    <div>
                        <button className="btn btn-block btn-sm mt-4 mb-6">Login</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login