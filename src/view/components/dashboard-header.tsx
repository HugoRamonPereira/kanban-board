import { AlarmClock, Bell, CalendarDays, Headphones, LockKeyhole, LogOut, MapPin, Settings, Trash2, User } from "lucide-react";
import { IconButton } from "./icon-button";
import { Search } from "./search";
import { DashboardUserMenu } from "./dashboard-user-menu";
import useLogout from "../../hooks/use-logout";

export function DashboardHeader() {
  const logout = useLogout();

  const iconButtonNotificationItems = [
    { icon: <AlarmClock size={20} strokeWidth={1.3} />, text: 'Alarm'},
    { icon: <CalendarDays size={20} strokeWidth={1.3} />, text: 'Calendar'},
    { icon: <Trash2 size={20} strokeWidth={1.3} />, text: 'Delete'},
  ]

  const iconButtonSettingsItems = [
    { icon: <MapPin size={20} strokeWidth={1.3} />, text: 'Location'},
    { icon: <LockKeyhole size={20} strokeWidth={1.3} />, text: 'Protect'},
    { icon: <Headphones size={20} strokeWidth={1.3} />, text: 'Audio'},
  ]

  const UserMenuItems = [
    { icon: <User size={20} strokeWidth={1.3} />, text: 'Profile'},
    { icon: <LogOut size={20} strokeWidth={1.3} />, text: 'Sign out', action: logout},
  ]

  return (
    <header className="flex items-center justify-between w-full">
      <div>
        <p className="font-nauman-demi-bold">Admin Dashboard</p>
      </div>
      <div>
        <Search />
      </div>
      <div className="flex items-center gap-6">
        <IconButton 
          items={iconButtonNotificationItems}
          label="Notifications"
        >
          <Bell strokeWidth={1.5} />
        </IconButton>
        <IconButton 
          items={iconButtonSettingsItems}
          label="Settings"
        >
          <Settings strokeWidth={1.5} /> 
        </IconButton>
        <DashboardUserMenu
          avatar="https://github.com/HugoRamonPereira.png"
          avatarFallback="HR"
          label="User menu"
          items={UserMenuItems}
          role="Administrator"
          username="Hugo Ramon"
        />
      </div>
    </header>
  )
}