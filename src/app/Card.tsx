import Image from 'next/image';
import qrcode from '../images/image-qr-code.png';

const Card = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-100">
        <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-xs">
          <div className="p-6">
            <div className="flex justify-center">
              <Image
                className="w-48 h-48 object-cover rounded-xl"
                src={qrcode}
                alt="QR Code"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-center font-bold text-xl text-black">
                Improve your front-end skills by building projects
              </h2>
              <p className="text-center text-gray-600 mt-2">
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  