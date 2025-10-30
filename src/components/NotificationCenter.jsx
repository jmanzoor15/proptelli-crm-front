import React, { useState } from "react";
import Notifications from "./Notifications";
import NotificationDrawer from "./NotificationSlider";

export default function NotificationCenter() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [notifications, setNotifications] = useState([
    { id: 1, badge: "Updates", date: "Aug 3, 2025", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
},
   { id: 3, badge: "edits", date: "Aug 5, 2025", content:"Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
},
  
  { id: 2, badge: "Updates", date: "Aug 3, 2025", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
]
  );



  return (
    <div className="relative">
      <Notifications
        count={notifications.length} // dynamic counter
        onClick={() => setDrawerOpen(true)}
      />

      <NotificationDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        notifications={notifications} // pass dynamic array
      />
    </div>
  );
}