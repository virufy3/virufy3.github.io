import { useRef, useCallback, useEffect } from "react";

export default function useScrollLock(lock) {
  const isInitialMount = useRef(true);

  const lockScroll = useCallback(() => {
    // Override CSS
    document.body.style.height = "100%";
    document.body.style.overflowY = "hidden";
  }, []);

  const restoreScroll = useCallback(() => {
    // Restore CSS
    document.body.style.height = "";
    document.body.style.overflowY = "";
  }, []);

  useEffect(() => {
    // Initially, only lock if `lock` is true, otherwise do nothing
    if (isInitialMount.current) {
      isInitialMount.current = false;

      if (lock) lockScroll();

      return;
    }

    // Then once the lock value changes, respond with both options
    if (lock) {
      lockScroll();
    } else {
      restoreScroll();
    }

    // And restore scroll when unmounted
    return restoreScroll;
  }, [lock, lockScroll, restoreScroll]);
}
