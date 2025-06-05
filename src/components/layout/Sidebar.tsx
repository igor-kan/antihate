
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Shield, ChartBar, MessageSquare, Info } from 'lucide-react';

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
};

const SidebarItem = ({ icon, label, href, active }: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        'flex items-center gap-3 px-3 py-2 rounded-md transition-all',
        active
          ? 'bg-primary text-primary-foreground font-medium'
          : 'text-foreground/70 hover:bg-accent hover:text-foreground'
      )}
    >
      <div className="w-5 h-5">{icon}</div>
      <span>{label}</span>
    </Link>
  );
};

export function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="w-64 h-screen flex-shrink-0 border-r bg-sidebar p-4">
      <div className="flex items-center gap-2 py-3 px-1 mb-6">
        <div className="rounded-md bg-primary p-1.5">
          <Shield className="h-5 w-5 text-white" />
        </div>
        <h1 className="font-bold text-xl">Sentinel</h1>
      </div>
      
      <div className="space-y-1">
        <p className="text-xs uppercase text-muted-foreground font-medium ml-3 mb-2">
          Main
        </p>
        <SidebarItem 
          icon={<ChartBar size={18} />} 
          label="Dashboard" 
          href="/"
          active={pathname === '/'} 
        />
        <SidebarItem 
          icon={<Shield size={18} />} 
          label="Monitor" 
          href="/monitor"
          active={pathname === '/monitor'} 
        />
        <SidebarItem 
          icon={<MessageSquare size={18} />} 
          label="Counteractions" 
          href="/counteract"
          active={pathname === '/counteract'} 
        />
      </div>
      
      <div className="mt-8 space-y-1">
        <p className="text-xs uppercase text-muted-foreground font-medium ml-3 mb-2">
          Resources
        </p>
        <SidebarItem 
          icon={<Info size={18} />} 
          label="Knowledge Base" 
          href="/resources"
          active={pathname === '/resources'} 
        />
      </div>
      
      <div className="mt-auto pt-8">
        <div className="bg-accent rounded-lg p-4">
          <h4 className="font-medium text-sm">Beta Preview</h4>
          <p className="text-xs text-muted-foreground mt-1">
            This is an early access version. New features added weekly.
          </p>
        </div>
      </div>
    </div>
  );
}
