import { useState, useRef } from "react";
import { Camera } from "lucide-react";

export default function UploadProfilePicture() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Validate file type
    const validTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      setError("Please upload PNG or JPG format only");
      return;
    }

    // Validate file size (2MB = 2 * 1024 * 1024 bytes)
    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      setError("File size must be under 2 MB");
      return;
    }

    // Clear any previous errors
    setError("");

    // Read and display the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleChangeImage = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = () => {
    setImage(null);
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex items-center gap-6 p-8">
      {/* Profile Picture Circle */}
      <div className="relative">
        <div className="w-[140px] h-[140px] rounded-full overflow-hidden bg-gray-200 flex items-center justify-center border-4 border-white s">
          {image ? (
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <Camera className="w-12 h-12 text-gray-400" />
          )}
        </div>
      </div>

      {/* Right Side Content */}
      <div className="flex flex-col gap-3">
        <div className="pl-[28px]">
          <h3 className="text-xl font-semibold text-black mb-[14px]">Profile Picture</h3>

          {/* Buttons */}
          <div className="flex gap-3 mb-[11px]">
            <button
              onClick={handleChangeImage}
              className=" bg-goldgreen min-w-[127px] h-[30px] hover:bg-yellow-700 text-white rounded-full text-xs font-medium transition-colors duration-200"
            >
              Change Image
            </button>

            <button
              onClick={handleRemoveImage}
              disabled={!image}
              className=" bg-black min-w-[127px] h-[30px] hover:bg-gray-800 text-white rounded-full font-medium transition-colors duration-200 disabled:opacity-50 text-xs font-medium disabled:cursor-not-allowed"
            >
              Remove Image
            </button>
          </div>

          {/* Info Text */}
          <p className="text-xs font-normal text-gray-500 ">
            We support PNG, JPG under 2 MB
          </p>
        </div>
        {/* Error Message */}
        {error && <p className="text-sm text-red-500 font-medium">{error}</p>}

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
    </div>
  );
}
