import { motion } from "framer-motion";
import { announcementBarText } from "../../../../config/config";

export default function AnnouncementBar() {
  return (
    <div className="bg-neutral-950 text-neutral-50 font-condensed text-xs font-medium uppercase text-center py-2">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {announcementBarText}
      </motion.p>
    </div>
  );
}
