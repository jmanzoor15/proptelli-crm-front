export const PermissionBadge = ({ label }) => {
  return (
    <button className="px-4 py-1.5 border border-black rounded-full text-xss font-normal text-black hover:bg-gray-50 transition-colors">
      {label}
    </button>
  );
};