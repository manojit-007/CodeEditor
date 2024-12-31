/* eslint-disable react/prop-types */
import { useState } from "react";
import { LANGUAGES_VERSION } from "./constants";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./components/ui/menubar";

const LanguageSelector = ({ onSelectLanguage }) => {
  const languages = Object.entries(LANGUAGES_VERSION);
  const [selectedLanguage, setSelectedLanguage] = useState("Select language");

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    onSelectLanguage(language);
  };

  return (
    <div className="w-64 mb-1 bg-transparent">
      <Menubar className="bg-transparent w-max border-none">
        <MenubarMenu>
          <MenubarTrigger className="px-4 py-2 bg-gray-900 border text-white rounded-md hover:bg-gray-700">
            {selectedLanguage}
          </MenubarTrigger>
          <MenubarContent className="bg-gray-900 text-white p-2 rounded-md shadow-lg">
            {languages.map(([language, version]) => (
              <MenubarItem
                key={language}
                className={`px-4 py-2 hover:bg-gray-700 rounded-md ${
                  language === selectedLanguage ? "bg-gray-700" : "text-white"
                }`}
                onClick={() => handleLanguageSelect(language)}
              >
                {language} ({version})
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default LanguageSelector;
