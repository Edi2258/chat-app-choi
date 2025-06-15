const AuthImagePattern = ({ title, subtitle,logoSize }) => {
  return (
    <div className="hidden lg:flex items-center justify-center p-12">
      <div className="max-w-md text-center">
        {/* Ganti kotak animasi dengan satu gambar */}
        <img
          src="/Logo.png"
          alt="Logo NisBa"
          style={{ width: logoSize, height: logoSize }}
          className="mb-0 w-48 h-48 object-contain mx-auto animate-pulse"
        />

        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
