// components/WhatsAppButton.tsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const whatsappLink =
    "https://whatsa.me/5515996124612/?t=Ol%C3%A1!%20Tudo%20bem?%20Gostaria%20de%20fazer%20um%20pedido%20de%20marmita,%20por%20favor.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
