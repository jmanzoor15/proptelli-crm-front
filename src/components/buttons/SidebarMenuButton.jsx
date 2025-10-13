import React from "react";

export const SidebarMenuButton = ({
  icon,
  label,
  active = false,
  onClick,
  href,
}) => {
  const buttonClasses = `group flex items-center gap-3 px-2 py-2.5 w-[228px] h-60 transition-all ${
    active
      ? "bg-goldgreen text-white rounded-full"
      : "text-gray-800 hover:bg-goldgreen hover:text-white bg-white rounded-full"
  }`;

  const content = (
    <>
      <div className="p-2 border border-greywhite bg-greywhite w-48 h-48 flex justify-center items-center rounded-full transition-colors">
        <div
          className={`flex justify-center items-center p-3 w-[17px] h-[21px] transition-colors 
            ${active ? "bg-goldgreen" : "bg-black group-hover:bg-goldgreen"}`}
          style={{
            mask: `url(${icon}) no-repeat center`,
            WebkitMask: `url(${icon}) no-repeat center`,
          }}
        ></div>
      </div>

      <span className="text-sm font-normal not-italic text-center">
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
};
