import { useEffect } from "react";

export function useClickOutside(
  refs: React.RefObject<HTMLElement>[],
  handler: () => void,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        refs.every(
          (ref) => ref.current && !ref.current.contains(event.target as Node),
        )
      ) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, handler]);
}
