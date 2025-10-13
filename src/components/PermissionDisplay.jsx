const PermissionDisplay = ({ title, permissions }) => {
  return (
    <div className="bg-gray-50 rounded-3xl w-full p-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-sm text-black">{title}</h3>
        <span className="px-3 py-1 rounded-full bg-white text-xs font-semibold border">
          ALL
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {permissions.map((perm, index) => (
          <span
            key={index}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
              perm.active
                ? "bg-goldgreen text-white"
                : "border border-gray-300 bg-white text-black"
            }`}
          >
            {perm.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PermissionDisplay