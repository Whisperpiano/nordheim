import { AnnouncementBarProps } from "./AnnouncementBar.types";
import { motion } from "framer-motion";

export default function AnnouncementBar({ text }: AnnouncementBarProps) {
  return (
    <div className="bg-neutral-950 text-neutral-50 font-condensed text-xs font-medium uppercase text-center py-2">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {text}
      </motion.p>
    </div>
  );
}
