import React from "react";
import Icon from "@/components/ui/icon";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" size={28} className="text-primary-600" />
            <h1 className="text-xl font-bold text-primary-600">Bihotel</h1>
          </div>
          <div className="flex items-center gap-4">
            <p className="hidden md:block text-sm text-gray-600">
              г. Бишкек, Кыргызстан
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-primary-600">
              <Icon name="Phone" size={18} />
              <span className="hidden md:inline">+996 </span>
              <span>555 123 456</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
