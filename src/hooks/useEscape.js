import { useEffect } from "react";

export default function useEscape(when, handler) {
  useEffect(() => {
    // Call `handler` if the escape key is pressed
    function handleKeydown(event) {
      if (event.keyCode === 27) {
        // 27 -> escape
        handler();
      }
    }

    // Set a document listener for keydown if `when` is true
    if (when) {
      document.addEventListener("keydown", handleKeydown);
      // Otherwise remove the event listener
    } else {
      document.removeEventListener("keydown", handleKeydown);
    }

    // Cleanup the document listener when unmounted
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [when, handler]);
}
