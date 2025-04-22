
import { useState, ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  User,
  FileText,
  BarChart,
  Calculator,
  Leaf,
  BookOpen,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type SidebarItemProps = {
  icon: React.ElementType;
  href: string;
  label: string;
  active: boolean;
};

const SidebarItem = ({ icon: Icon, href, label, active }: SidebarItemProps) => (
  <Link to={href}>
    <div
      className={cn(
        'flex items-center gap-4 px-4 py-3 rounded-lg transition-colors',
        active
          ? 'bg-secondary text-white'
          : 'hover:bg-accent hover:text-secondary'
      )}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </div>
  </Link>
);

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { pathname } = useLocation();
  const { signOut } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    await signOut();
    navigate('/auth');
  };

  const sidebarItems = [
    {
      icon: User,
      href: '/dashboard/profile',
      label: 'Profile',
    },
    {
      icon: FileText,
      href: '/dashboard/schemes',
      label: 'Government Schemes',
    },
    {
      icon: BarChart,
      href: '/dashboard/budget',
      label: 'Budget',
    },
    {
      icon: Calculator,
      href: '/dashboard/tax-calculator',
      label: 'Income Tax Calculator',
    },
    {
      icon: Leaf,
      href: '/dashboard/green-investment',
      label: 'Green Investment',
    },
    {
      icon: BookOpen,
      href: '/dashboard/resources',
      label: 'Resources',
    },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile sidebar toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-primary text-primary-foreground transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-primary-foreground/10">
            <h1 className="text-xl font-bold">Aarthik Saathi</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {sidebarItems.map((item) => (
              <SidebarItem
                key={item.href}
                icon={item.icon}
                href={item.href}
                label={item.label}
                active={pathname === item.href}
              />
            ))}
          </nav>

          {/* Logout button */}
          <div className="p-4 border-t border-primary-foreground/10">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
