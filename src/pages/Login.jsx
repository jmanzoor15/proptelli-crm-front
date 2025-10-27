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
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "sreejesh@proptelli.com",
    password: "Test@123",
  });
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
      email: formData.email,
      password: formData.password,
    };

    const success = await login(credentials);

    if (success) {
      navigate("/dashboard");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      {/* Left Side: Hero Section - Hidden on mobile */}
      <div className="hidden lg:block bg-goldgreen text-white p-10 lg:w-[55%] relative overflow-hidden h-screen">
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
      <div className="flex-1 flex flex-col items-center justify-center bg-white px-4 py-8 md:px-0 md:py-0">
        <img
          src={Logo}
          alt="PropTelli Logo"
          className="md:w-[180px] md:h-[86px] w-[120px] h-[59px] lg:w-[233px] lg:h-[111px]  lg:mb-6"
        />

        {/* Mobile Hero Text */}
        <div className="lg:hidden text-center pt-[43px]">
          <div className="flex flex-col items-center text-goldgreen leading-tight">
            <h1 className="text-25 font-normal">
              Lead <span className="font-bold">Management</span>
            </h1>
            <h2 className="text-25 font-bold">Made Powerful</h2>
          </div>
        </div>

        <div className="w-full max-w-md text-center flex justify-center lg:justify-normal lg:pt-[87px] pt-[62px]">
          <AuthCard
            title="Welcome to PropTelli CRM"
            subtitle="Enter the login details to continue"
            onSubmit={handleLogin}
          >
            <div className="w-full mb-4 mt-4 px-2 md:px-0 text-left">
              <label className="pb-6 pl-4 block text-sm font-bold text-black mb-1">
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
            <div className="text-left w-ful px-2 md:px-0 mb-4 left">
              <label className="pb-6 pl-4 block text-sm font-bold text-black mb-1">
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
            <div className="text-right text-sm mb-4">
              <Link
                to="/forgot-password"
                className="text-goldgreen font-semibold text-md hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            </div>
            <div className="pt-[37px] flex items-center justify-center">
              <Button
                text={loading ? "Logging in..." : "Login"}
                type="submit"
                disabled={loading}
                className="bg-black text-white  w-[241px] h-[55px]"
              />
            </div>
          </AuthCard>
        </div>
        <div className="mt-8 lg:absolute lg:bottom-4 text-xs text-gray-400 flex flex-wrap justify-center gap-x-2 lg:gap-x-4 px-4 text-center">
          <a href="#">Help</a> | <a href="#">Terms of Service</a> |{" "}
          <a href="#">Privacy Policy</a> | <a href="#">Acceptable Use</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
