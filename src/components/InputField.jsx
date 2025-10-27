const InputField = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  leftIcon,
  rightIcon,
}) => {
  return (
    <div className="relative w-full mb-4">
      {/* Left Icon */}
      {leftIcon && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-400">
          {leftIcon}
        </span>
      )}

      {/* Right Icon */}
      {rightIcon && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-400">
          {rightIcon}
        </span>
      )}

      {/* Input */}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full h-[55px]
          ${leftIcon ? 'pl-12' : 'pl-4'}
          ${rightIcon ? 'pr-12' : 'pr-4'}
          rounded-full border border-gray-300
          outline-none focus:ring-2 focus:ring-yellow-500
        `}
      />
    </div>
  );
};

export default InputField;
