const AuthCard = ({ title, subtitle, children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="w-full max-w-sm text-center">
      <h2 className="md:text-2xl text-lg font-semibold mb-1">{title}</h2>
      <p className="md:text-base text-sm font-normal text-gray-500 mb-6">{subtitle}</p>
      {children}
    </form>
  );
};

export default AuthCard;