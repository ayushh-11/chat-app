import React,{useState} from 'react'

function Signup() {
    const [name, setName] = useState("");
    
    const [password, setPassword] = useState("");
    
    const [cpassword, setCPassword] = useState("");
    const [ename, setEName] = useState("");
   
    const [epassword, setEPassword] = useState("");
    const [ecpassword, setECPassword] = useState("");


    function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submission
        
        let isValid = true;

        // Full Name Validation
        if (name.trim() === "") {
            setEName("Full name is required");
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            setEName("Invalid Name");
            isValid = false;
        }


        // Password Validation
        if (password.trim() === "") {
            setEPassword("Password is required");
            isValid = false;
        } else if (password.length < 6) {
            setEPassword("Password must be at least 6 characters long");
            isValid = false;
        } else if (password !== cpassword) {
            
            isValid = false;
        }

        // Confirm Password Validation
        if (cpassword.trim() === "") {
            setECPassword("Confirm password is required");
            isValid = false;
        } else if (password !== cpassword) {
            setECPassword("Passwords do not match");
            isValid = false;
        } else {
            setECPassword("");
        }
        
    }
    return (
        <div className="flex flex-col items-center justify-center w-full mx-auto">
            <div className="flex flex-col justify-center h-full w-full max-w-md bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
                <h1 className="p-6 w-full text-3xl font-semibold text-center">
                    Create an Account
                    <span className="text-2xl font-semibold text-blue-600"> ChatApp</span>
                </h1>
                <form className="w-full px-6" onSubmit={handleSubmit}>
                <div className="mb-1">
                        <label className="label">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input
                            className="w-full input input-bordered h-10"
                            type="text"
                            placeholder="Enter name"
                            name="name"
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    {ename && <div className="alert alert-danger mt-2">{ename}</div>}
                    </div>
                    <div className="mb-1">
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
                    <div className="mb-1">
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input
                            className="w-full input input-bordered h-10"
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                        required
                    />
                    {epassword && <div className="alert alert-danger mt-2">{epassword}</div>}
                    </div>
                    <div className="mb-1">
                        <label className="label">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input
                            className="w-full input input-bordered h-10"
                            type="password"
                            placeholder="Enter password again"
                            name="cpassword"
                        onChange={e => setCPassword(e.target.value)}
                        required
                    />
                    {ecpassword && <div className="flex items-center gap-2 mt-2 px-4 py-2 text-sm text-blue-800 bg-blue-100 border border-blue-200 rounded-md shadow">{ecpassword}</div>}
                    </div>
                    <div>
                    <input type="radio" name="radio-4" className="radio radio-accent size-3" defaultChecked value="Male"/>Male 
                     <input type="radio" name="radio-4" className="radio radio-accent size-3 ml-3" value="Female"/> Female
                    </div>
                    <a
                        href="#"
                        className="text-sm hover:underline hover:text-blue-600 block text-right"
                    >
                        Already have an account?
                    </a>
                    <div>
                        <button type="submit" className="btn btn-block btn-sm mt-4 mb-8">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup