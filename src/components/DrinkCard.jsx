import React from 'react';

const DrinkCard = ({ name, price, desc, status, image, isSelected }) => {
  const getStatusColor = (statusText) => {
    const s = statusText.toLowerCase();
    if (s.includes('accepted')) return 'bg-[#dcfce7] text-[#16a34a]';
    if (s.includes('popular')) return 'bg-[#f0fdf4] text-[#16a34a]';
    if (s.includes('choose')) return 'bg-[#fdf2f8] text-[#db2777]';
    if (s.includes('impression')) return 'bg-[#f0fdf4] text-[#16a34a]';
    return 'bg-gray-100 text-gray-600';
  };

  return (
    <div className={`flex bg-white rounded-[24px] overflow-hidden border transition-all duration-300 cursor-pointer relative h-[130px] group ${isSelected ? 'border-[#ff4d94] shadow-[0_10px_25px_rgba(255,77,148,0.15)]' : 'border-gray-100 hover:border-gray-200 hover:shadow-md'}`}>
      <div className="w-[140px] h-full bg-gray-50 shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      
      <div className="p-4 py-3.5 grow flex flex-col justify-between min-w-0 relative">
        <div className="absolute top-0 right-0 p-2.5">
          <div className="bg-[#ff4d94] text-white text-[12px] font-black px-3.5 py-1.5 rounded-full shadow-lg shadow-[#ff4d94]/20 transform translate-x-1 -translate-y-1">
            ₹{price}
          </div>
        </div>

        <div className="pr-14">
          <h4 className="text-[17px] font-bold text-gray-900 mb-0.5 leading-tight tracking-tight">{name}</h4>
          <p className="text-[11px] font-medium text-gray-400 mb-2">{desc}</p>
        </div>
        
        <div className={`text-[9px] font-black px-3 py-1.5 rounded-full w-fit uppercase tracking-[0.05em] ${getStatusColor(status)}`}>
          {status}
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
