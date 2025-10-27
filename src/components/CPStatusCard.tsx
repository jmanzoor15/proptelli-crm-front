import { useState } from "react";

const CPStatusCard = ({ src, title, count, iconBg, onClick }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    if (onClick) onClick();
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        active
          ? " border border-goldgreen shadow-md"
          : "border-gray-200 hover:border-gray-300"
      } bg-greywhite rounded-30 w-[308px] h-[131px] px-19 flex  justify-between`}
    >
      <div>
        <h3 className="text-black text-md pt-20 font-semibold">{title}</h3>
        <p className="text-black text-4.5xl font-semibold">{count}</p>
      </div>
      <div style={{backgroundColor:`${iconBg}`}} className={` rounded-full w-55 h-55 mt-15  flex items-center justify-center`}>
        <img className="w-24 h-19" src={src} alt={title}/>
      </div>
    </div>
  );
};

export default CPStatusCard;
