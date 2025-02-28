import { useEffect } from "react";

const usePageTitle = (title = "Nordheim | Premium Backpacks") => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default usePageTitle;
