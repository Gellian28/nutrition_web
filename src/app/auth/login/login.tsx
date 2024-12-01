// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useUserStore } from "../../../shared/stores/user";
// import { Button } from "../../../components/ui/button";
// import { Input } from "../../../components/ui/input";
// import { login } from "../../../shared/firestore"; // Adjust the import path to your Firebase config

// function Login() {
//   const navigate = useNavigate();
//   const user = useUserStore();

//   const [email, setEmail] = useState<string | undefined>();
//   const [password, setPassword] = useState<string | undefined>();
//   const [error, setError] = useState('');

//   const submitAction = async () => {
//     try {
//       if (!email || !password) return;

//       await login(email, password);
//       navigate('/dashboard');
//     } catch (err) {
//       setError('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-pink-200">
//       <div className="bg-neutral-900 p-8 rounded-xl shadow-lg max-w-sm w-full">
//         <div className="flex justify-center mb-4">
//           <img
//             aria-hidden="true"
//             alt="user-icon"
//             src="https://openui.fly.dev/openui/64x64.svg?text=👤"
//             className="w-16 h-16 rounded-full bg-pink-400 p-2"
//           />
//         </div>
//         <h2 className="text-pink-500 text-center text-2xl font-semibold mb-6">Admin Login</h2>
//         <div className="mb-4">
//           <Input
//             type="text"
//             placeholder="Email"
//             className="text-neutral-100 w-full p-2 border border-neutral-600 rounded focus:outline-none focus:ring focus:ring-pink-500"
//             value={email}
//             onChange={(ev) => setEmail(ev.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <Input
//             type="password"
//             placeholder="********"
//             className="text-neutral-100 w-full p-2 border border-neutral-600 rounded focus:outline-none focus:ring focus:ring-pink-500"
//             value={password}
//             onChange={(ev) => setPassword(ev.target.value)}
//           />
//         </div>
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center">
//             <Input type="checkbox" id="remember" className="mr-2 w-4 h-4" />
//             <label htmlFor="remember" className="text-neutral-100 text-sm">Remember me</label>
//           </div>
//           <a href="#" className="text-neutral-100 text-sm hover:underline">Forgot Password?</a>
//         </div>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <Button className="w-full text-neutral-100 bg-pink-400 p-2 rounded text-sm hover:underline" onClick={submitAction}>Login</Button>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../shared/stores/user";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { login } from "../../../shared/firestore"; // Adjust the import path to your Firebase config
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

function Login() {
  const navigate = useNavigate();
  const user = useUserStore();

  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  const submitAction = async () => {
    try {
      if (!email || !password) return;

      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle the password visibility state
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-pink-200">
      <div className="bg-neutral-900 p-8 rounded-xl shadow-lg max-w-sm w-full">
        <div className="flex justify-center mb-4">
          <img
            aria-hidden="true"
            alt="user-icon"
            src="https://openui.fly.dev/openui/64x64.svg?text=👤"
            className="w-16 h-16 rounded-full bg-pink-400 p-2"
          />
        </div>
        <h2 className="text-pink-500 text-center text-2xl font-semibold mb-6">Admin Login</h2>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Email"
            className="text-neutral-100 w-full p-2 border border-neutral-600 rounded focus:outline-none focus:ring focus:ring-pink-500"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>
        <div className="mb-4 relative">
          <Input
            type={passwordVisible ? "text" : "password"} // Toggle between text and password types
            placeholder="********"
            className="text-neutral-100 w-full p-2 border border-neutral-600 rounded focus:outline-none focus:ring focus:ring-pink-500"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          {/* Eye Icon */}
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Input type="checkbox" id="remember" className="mr-2 w-4 h-4" />
            <label htmlFor="remember" className="text-neutral-100 text-sm">Remember me</label>
          </div>
          <a href="#" className="text-neutral-100 text-sm hover:underline">Forgot Password?</a>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <Button className="w-full text-neutral-100 bg-pink-400 p-2 rounded text-sm hover:underline" onClick={submitAction}>Login</Button>
      </div>
    </div>
  );
}

export default Login;
