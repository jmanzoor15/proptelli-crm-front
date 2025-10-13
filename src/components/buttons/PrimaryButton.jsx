const PrimaryButton = ({ 
  label = "Create Role", 
  onClick, 
  src, 
  bgcolor = "goldgreen", 
  iconwidth = 16, 
  iconheight = 16 
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 bg-${bgcolor} text-white rounded-full hover:bg-goldgreen transition-colors
        h-[40px] w-[153px] px-4 py-2
        md:h-50 md:w-188 md:px-33 md:py-14`}
    >
      {src && <img width={iconwidth} height={iconheight} src={src} alt="icon" />}
      <span className="text-xs md:text-md font-medium pr-2">{label}</span>
    </button>
  );
};

export default PrimaryButton;