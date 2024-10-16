import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuGroup, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "../../components/ui/dropdown-menu";

interface DashboardMenuItem {
  icon: React.ReactNode;
  text: string;
  action?: () => void
}

interface DashboardUserMenuProps {
  label: string;
  items: DashboardMenuItem[];
  avatar: string;
  avatarFallback: string;
  username: string;
  role: string;
}

export function DashboardUserMenu({ 
  label, 
  items,
  avatar,
  avatarFallback, 
  username, 
  role 
}: DashboardUserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="focus-visible:outline focus-visible:outline-yellow-400 rounded-full hover:bg-green-300 transition-colors duration-200 py-2 px-2.5"
      >
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="leading-tight my-auto text-left">
            <p className="font-nauman-demi-bold">{username}</p>
            <p className="text-xs font-nauman-demi-bold">{role}</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start"> 
        <DropdownMenuLabel>
          <p className="font-nauman-demi-bold">
            {label}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="flex flex-col gap-1">
          {items.map((item, index) => (
            <DropdownMenuItem
              key={index}
              className="flex gap-2 font-nauman-demi-bold"
              onClick={item.action}
            >
              {item.icon}
              <span className="font-nauman-regular">{item.text}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    
  )
}