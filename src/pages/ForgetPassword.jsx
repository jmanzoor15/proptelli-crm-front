import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/LoginButton";
import BackArrowButton from "../components/buttons/BackIconButton";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResend = () => {
    alert(`Reset link resent to: ${email}`);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Side */}
      <div className="hidden md:block bg-goldgreen text-white p-10 w-[55%] relative overflow-hidden h-screen">
        <div className="pt-[10%] pl-[5%]">
          <h1 className="text-3xl font-light">
            Lead <span className="font-bold">Management</span>
          </h1>
          <h2 className="text-4xl font-bold">Made Powerful</h2>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-[40px] pb-[80px]">
          <img
            src={"/icons/worldicon.svg"}
            alt="World Map"
            className="w-full h-[380px] object-contain"
            draggable={false}
          />
        </div>
      </div>

      {/* Right Side */}

      <div className="w-full h-full md:flex-1 flex flex-col items-center justify-center bg-white relative overflow-hidden">
        <div className="absolute top-8 left-4 md:hidden">
          <BackArrowButton onClick={() => navigate("/login")} />
        </div>
        <div className="">
          <img
            src={"/Proptelli_Crm.svg"}
            alt="PropTelli Logo"
            className="md:w-[180px] md:h-[86px] w-[120px] h-[59px] lg:w-[233px] lg:h-[111px] md:pl-2   lg:mb-6"
          />
        </div>
        <div className="w-full max-w-md pt-[87px]  bg-white rounded-lg text-center">
          {submitted ? (
            <>
              <img
                src={"/icons/mailopen.svg"}
                alt="Mail Icon"
                className="w-[68px] h-[68px] mx-auto mb-6"
              />
              <h2 className="md:text-2xl text-lg font-semibold mb-2">Check Your Inbox</h2>
              <p className="text-sm font-medium text-gray-600 mb-[17px]">
                A password reset link has been emailed to <br />
                <span className="font-bold md:text-base text-sm text-black">{email}</span>
              </p>
              <p className="md:text-base text-sm font-normal text-black mb-6 mx-4 md:mx-0">
                If you don’t see it in your inbox within a few minutes,
                <br /> check your spam folder. Didn't receive it?
              </p>
              <div className="pt-[37px] flex items-center justify-center">
                <Button
                  text="Send Again"
                  onClick={handleResend}
                  className="bg-black font-normal text-white w-[241px] h-[55px]"
                />
              </div>
              <button
                className="mt-4 text-goldgreen text-sm font-semibold hover:underline"
                onClick={() => navigate("/login")}
              >
                Back to Login
              </button>
            </>
          ) : (
            <>
              <h2 className="text-[18px] md:text-[24px] font-semibold mb-2">
                Forgot Your Password?
              </h2>
              <p className="text-[14px] md:text-[16px] text-gray-500 mb-6 px-5">
                We'll send a password reset link to your registered email
              </p>

              <form
                onSubmit={handleSubmit}
                className="w-full px-4 sm:px-6 md:px-0"
              >
                <div className="w-full mb-4 mt-4 px-2 md:px-6 md:px-0 text-left">
                  <label
                    htmlFor="email"
                    className="pb-6 pl-4 block text-sm font-bold text-black mb-1"
                  >
                    Email
                  </label>
                  <InputField
                    type="email"
                    name="email"
                    placeholder="Please Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    leftIcon={
                      <img
                        src={"/icons/mailicon.svg"}
                        alt="Mail Icon"
                        className="w-4 md:w-5 h-4 md:h-5"
                      />
                    }
                    className="
                  w-full ctext-sm md:text-base px-3 md:px-4 py-2 md:py-3
                  rounded-lg border border-gray-300 focus:ring-2 focus:ring-goldgreen focus:outline-none
                  transition-all duration-200
                "
                  />
                </div>
                <div className="pt-[37px] flex items-center justify-center">
                  <Button
                    text="Send link"
                    type="submit"
                    className="bg-black font-normal text-white w-[241px] h-[55px]"
                  />
                </div>
              </form>

              <button
                className="mt-4 text-goldgreen text-sm font-semibold hover:underline"
                onClick={() => navigate("/login")}
              >
                Back to Login
              </button>
            </>
          )}
        </div>

        <div className="absolute bottom-4 text-xs text-gray-400 flex flex-wrap justify-center gap-x-4">
          <a href="#">Help</a> | <a href="#">Terms of Service</a> |{" "}
          <a href="#">Privacy Policy</a> | <a href="#">Acceptable Use</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
