import { useRef, useState } from "react";
import "./App.css";
import Editor from "@monaco-editor/react";
import TypingAnimation from "./components/ui/typing-animation";
import Output from "./Output";
import { LANGUAGES_VERSION, CODE_SNIPPETS } from "./constants"; 
import LanguageSelector from "./LanguageSelector";

function App() {
  const editorRef = useRef(null);
  const [value, setValue] = useState("Please select language from above options."); 
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleEditorChange = (newValue) => {
    setValue(newValue);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setValue(CODE_SNIPPETS[language]); // Set editor value to the corresponding snippet
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <>
      <TypingAnimation className="h-[10vh] bg-zinc-800 text-white flex w-full items-center justify-center">
        Code Editor
      </TypingAnimation>
      <section className="flex items-center justify-center gap-0">
        <div className="flex flex-col w-[50%] bg-black"> 
          <LanguageSelector
            languages={Object.entries(LANGUAGES_VERSION)}
            selectedLanguage={selectedLanguage}
            onSelectLanguage={handleLanguageChange}
          />
          <Editor
            height="86vh"
            theme="vs-dark"
            language={selectedLanguage}
            value={value}
            onChange={handleEditorChange}
            onMount={onMount}
          />
        </div>
        <Output editorRef={editorRef} selectedLanguage={selectedLanguage} />
      </section>
    </>
  );
}

export default App;
