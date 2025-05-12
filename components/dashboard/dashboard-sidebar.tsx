"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  ChevronLeft, 
  Home, 
  LayoutDashboard, 
  Settings, 
  TrendingUp, 
  Users,
  Video
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  icon: React.ElementType;
  title: string;
  href: string;
  isActive?: boolean;
  isCollapsed?: boolean;
  onClick?: () => void;
}

function NavItem({ icon: Icon, title, href, isActive, isCollapsed, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
        isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground",
        isCollapsed && "justify-center py-3"
      )}
      onClick={onClick}
    >
      <Icon className={cn("h-5 w-5", isCollapsed ? "mr-0" : "mr-2")} />
      {!isCollapsed && <span>{title}</span>}
    </Link>
  );
}

interface DashboardSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function DashboardSidebar({ isOpen, onToggle }: DashboardSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { icon: Home, title: "Home", href: "/dashboard" },
    { icon: LayoutDashboard, title: "Dashboard", href: "/dashboard/overview" },
    { icon: BarChart3, title: "Analytics", href: "/dashboard/analytics" },
    { icon: Video, title: "Content", href: "/dashboard/content" },
    { icon: Users, title: "Audience", href: "/dashboard/audience" },
    { icon: Settings, title: "Settings", href: "/dashboard/settings" }
  ];

  return (
    <aside 
      className={cn(
        "flex flex-col border-r bg-card transition-all duration-300 ease-in-out",
        isOpen ? (isCollapsed ? "w-[72px]" : "w-64") : "w-0 -ml-[72px] md:ml-0 md:w-[72px]"
      )}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!isCollapsed && (
          <Link href="/dashboard" className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">TrueViral</span>
          </Link>
        )}
        {(isOpen && !isCollapsed) && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsCollapsed(true)}
            className="hidden md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        )}
        {(isOpen && isCollapsed) && (
          <div className="flex w-full justify-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsCollapsed(false)}
              className="hidden md:flex"
            >
              <TrendingUp className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-1 px-2">
          {navItems.map((item) => (
            <NavItem 
              key={item.href}
              icon={item.icon} 
              title={item.title} 
              href={item.href} 
              isActive={pathname === item.href}
              isCollapsed={isCollapsed}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
}