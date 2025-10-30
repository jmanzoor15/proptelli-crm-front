const Notifications = ({ count, onClick }) => {
  return (
    <div className="relative inline-block">
      <button
        onClick={onClick}
        className="relative flex justify-center items-center rounded-full transition-colors 
                   bg-white border border-darkgreywhite hover:bg-gray-100 
                   w-[37px] h-[37px] sm:w-[50px] sm:h-[50px]"
      >
        <img
          src={"/icons/notification_icon.svg"}
          alt="Notifications"
          className="object-contain w-[18px] h-[18px] sm:w-[21px] sm:h-[21px]"
        />

        {count > 0 && (
          <span
            className="absolute 
                        -top-[3px] -right-[3px]       /* tighter fit on mobile */
                        sm:-top-[3px] sm:-right-[3px] 
                        bg-goldgreen text-white font-semibold rounded-full 
                        flex items-center justify-center
                        w-[13px] h-[13px] text-[9px] 
                        sm:w-[18px] sm:h-[18px] sm:text-[11px]"
          >
            {count}
          </span>
        )}
      </button>
    </div>
  );
};

export default Notifications;