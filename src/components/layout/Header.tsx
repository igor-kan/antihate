
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function Header() {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 w-full max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search content..."
              className="pl-8 w-full"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Platform: Twitter/X
          </Button>
          <Button variant="default" size="sm">
            New Campaign
          </Button>
        </div>
      </div>
    </header>
  );
}
