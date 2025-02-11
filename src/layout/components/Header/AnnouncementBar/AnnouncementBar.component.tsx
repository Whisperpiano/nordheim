import { AnnouncementBarProps } from "./AnnouncementBar.types";

export default function AnnouncementBar({ text }: AnnouncementBarProps) {
  return (
    <div className="bg-neutral-950 text-neutral-50 font-condensed text-xs font-medium uppercase text-center py-2">
      <p>{text}</p>
    </div>
  );
}
