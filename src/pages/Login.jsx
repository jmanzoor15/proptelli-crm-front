import InputField from "../components/InputField";
import AuthCard from "../components/AuthCard";
import Button from "../components/LoginButton";
import worldmap from "/icons/worldicon.svg";
import { useState } from "react";
import Logo from "/Proptelli_Crm.svg";
import Mail from "/icons/mailicon.svg";
import Lock from "/icons/pass.svg";
import Passhide from "/icons/hide.svg";
import Passshow from "/icons/show.svg";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const Login = () => {
  const [formData, setFormData] = useState({ email: "sreejesh@proptelli.com", password: "Test@123" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { login, loading, error } = useAuthStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const credentials = {
        email:formData.email,
        password: formData.password
    }

    const success = await login(credentials);

    if (success) {
      navigate("/dashboard");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="bg-goldgreen text-white p-10 w-[55%] relative overflow-hidden h-screen">
        <div className="pt-[10%] pl-[5%]">
          <h1 className="text-3xl font-light">
            Lead <span className="font-bold">Management</span>
          </h1>
          <h2 className="text-4xl font-bold">Made Powerful</h2>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-[40px] pb-[80px]">
          <img
            src={worldmap}
            alt="World Map"
            className="w-full h-[380px] object-contain"
            draggable={false}
          />
        </div>
      </div>

      {/* Right Side: Login Form */}

      <div className="flex-1 flex flex-col items-center justify-center bg-white">
        <img
          src={Logo}
          alt="PropTelli Logo"
          className="w-[233px] h-[111px] min-w-[233px] min-h-[111px] mb-6"
        />

        <div className="pt-[87px]">
          <AuthCard
            title="Welcome to PropTelli CRM"
            subtitle="Enter the login details to continue"
            onSubmit={handleLogin}
          >
            <div className="w-full mb-4 mt-4  text-left">
              <label className=" pb-6 pl-4  block text-sm font-bold text-black mb-1">
                Email
              </label>
              <InputField
                type="email"
                name="email"
                placeholder="Please Enter Email"
                value={formData.email}
                onChange={handleChange}
                leftIcon={
                  <img src={Mail} alt="Mail Icon" className="w-5 h-5" />
                }
              />
            </div>

            {/* Password Field */}
            <div className=" text-left w-full mb-4 left">
              <label className=" pb-6  pl-4 block text-sm font-bold text-black mb-1">
                Password
              </label>
              <InputField
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                leftIcon={
                  <img src={Lock} alt="Lock Icon" className="w-5 h-5" />
                }
                rightIcon={
                  <img
                    src={showPassword ? Passshow : Passhide}
                    alt={showPassword ? "Hide Password" : "Show Password"}
                    className="w-5 h-5 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                }
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center mt-2">{error}</p>
            )}

            <div className="text-right text-sm mb-4">
              <a
                href="#"
                className="text-goldgreen font-semibold text-md hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  alert(
                    "Forgot Password clicked! Please check your email to reset your password."
                  );
                }}
              >
                Forgot Password?
              </a>
            </div>
            <div className="pt-[37px] flex items-center justify-center">
              <Button
                text={loading ? "Logging in..." : "Login"}
                type="submit"
                disabled={loading}
                className="bg-black text-white w-[241px] h-[55px]"
              />
            </div>
          </AuthCard>
        </div>
        <div className="absolute bottom-4 text-xs text-gray-400 flex flex-wrap justify-center gap-x-4">
          <a href="#">Help</a> | <a href="#">Terms of Service</a> |{" "}
          <a href="#">Privacy Policy</a> | <a href="#">Acceptable Use</a>
        </div>
      </div>
    </div>
  );
};

export default Login;