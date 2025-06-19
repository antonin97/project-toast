import React from "react";


export default function useEscapeKey(callback) {

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        callback();
      }
    }
    console.log("useEscapeKey called");
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
}