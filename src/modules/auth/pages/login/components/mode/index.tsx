type ModeProps = {
    toggleDarkMode: () => void;
    darkMode: boolean;
  };
  
export const Mode = (props: ModeProps) => {

    return (
        <div className="absolute top-4 right-4">
        <button onClick={props.toggleDarkMode} className="p-2 rounded-full bg-white text-black">
          {props.darkMode ? "☀️" : "🌙"}
        </button>
      </div>
      );
  };
  