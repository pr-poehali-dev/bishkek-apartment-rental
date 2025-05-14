import React from "react";
import Icon from "@/components/ui/icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Home" size={24} className="text-primary-600" />
              <h2 className="text-lg font-bold text-primary-600">Bihotel</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Удобный сервис для поиска и бронирования квартир посуточно в
              Бишкеке.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-500 hover:text-primary-600 transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary-600 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary-600 transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-primary-600 transition-colors"
              >
                <Icon name="Telegram" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-gray-800">Контакты</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2 items-center">
                <Icon name="MapPin" size={16} className="text-primary-600" />
                г. Бишкек, ул. Киевская 95
              </li>
              <li className="flex gap-2 items-center">
                <Icon name="Phone" size={16} className="text-primary-600" />
                +996 555 123 456
              </li>
              <li className="flex gap-2 items-center">
                <Icon name="Mail" size={16} className="text-primary-600" />
                info@bihotel.kg
              </li>
              <li className="flex gap-2 items-center">
                <Icon name="Clock" size={16} className="text-primary-600" />
                Пн-Вс: 9:00 - 21:00
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-gray-800">Информация</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 transition-colors"
                >
                  О компании
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 transition-colors"
                >
                  Правила бронирования
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 transition-colors"
                >
                  Условия аренды
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-600 transition-colors"
                >
                  Часто задаваемые вопросы
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Bihotel. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
