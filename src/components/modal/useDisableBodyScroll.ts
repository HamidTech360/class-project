import { useEffect } from "react";

export const useDisableBodyScroll = (open: boolean) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else if (!open) {
      document.body.style.overflow = "unset";
    }
  }, [open]);
};
