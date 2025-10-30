import UpdatesCard from "./NotificationPop";
import { ArrowRight } from "lucide-react";

export default function NotificationDrawer({ open, onClose, notifications = [] }) {


    
  return (
    <>
  {/* Overlay */}
{open && (
  <div
    className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
    onClick={onClose}
  />
)}

  {/* Drawer Panel */}
<div
  className={`fixed top-0 right-0 w-full sm:w-[400px] pt-4 px-4 h-full bg-[#F5F5F5] shadow-2xl z-50 transform transition-transform duration-300 ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
>


        {/* Header */}
        <div className="w-full bg-goldgreen text-white pt-4 px-4 py-4 flex items-center justify-between rounded-full">
            {/* Title with counter badge */}
            <div className="flex items-center gap-2 font-semibold text-lg">
              <span>Notifications</span>
              <span className="bg-white text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
  {notifications.length}
</span>
            </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="text-white hover:opacity-80 transition"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>


       <div className="flex items-center justify-end gap-3 pt-2 pr-4">
      <button
        onClick={() => console.log("Clear all clicked")}
        className="text-sm font-semibold opacity-80 hover:opacity-100 transition"
      >
        Clear all
      </button>
    </div>


        {/* Notifications */}
        <div className="overflow-y-auto h-[calc(100%-64px)] px-4 pb-6 space-y-3 mt-2">
  {notifications.map((n) => (
    <UpdatesCard
      key={n.id}
      badge={n.badge}
      date={n.date}
      content={n.content}
    />
      ))}
    </div>
  </div>
</>
  );
}