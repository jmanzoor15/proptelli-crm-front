const TrashButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" hover:bg-goldgreen hover:border-goldgreen border-2 flex justify-center text-gray-800 font-bold w-40 h-40 md:w-50 md:h-50 rounded-full  inline-flex items-center"
    >
      <img src={"src/assets/icons/trash-icon.svg"} alt="Delete" className="md:w-[24px] md:h-[24px] w-14 h-14" />
    </button>
  );
};
export default TrashButton;
