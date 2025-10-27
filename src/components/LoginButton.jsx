const Button = ({
  text,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-[241px] h-[55px] rounded-full font-medium transition duration-200
        flex items-center justify-center
        ${disabled ? "bg-gray-400 cursor-not-allowed opacity-70" : "hover:opacity-90 active:scale-[0.98]"}
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default Button;
