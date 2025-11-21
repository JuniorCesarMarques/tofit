// components/MenuList.tsx
import React from "react";

const MenuList: React.FC = () => {
  const meals = [
    "Frango desfiado ao molho",
    "Frango com legumes",
    "Panqueca de frango",
    "Filé de Frango",
    "Carne moída com legumes",
    "Panqueca de carne",
    "Bife acebolado",
    "Tiras de patinho ao molho",
    "Carne com mandioca",
  ];

  return (
    <div className="flex flex-col items-center max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">Cardápio</h1>
      <ul className="list-disc list-inside space-y-3 text-gray-800 text-lg">
        {meals.map((meal, index) => (
          <li
            key={index}
            className="hover:text-green-700 transition-colors duration-200"
          >
            {meal}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-gray-700 font-medium">
        Todas vêm acompanhadas de arroz.
      </p>
      <p className="text-gray-700 font-medium">
        Purê de batata ou Refogado de legumes.
      </p>
    </div>
  );
};

export default MenuList;
