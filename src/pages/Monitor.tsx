
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Shield, Eye } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContentCard = ({ 
  content, 
  platform = "Twitter", 
  timestamp, 
  threat, 
  type = "text",
  username, 
  handleName,
  categories = []
}) => {
  const [isBlurred, setIsBlurred] = useState(true);

  const getThreatColor = (level) => {
    const colors = {
      low: 'bg-alert-low text-white',
      medium: 'bg-alert-medium text-white',
      high: 'bg-alert-high text-white',
      severe: 'bg-alert-severe text-white',
    };
    return colors[level] || colors.medium;
  };

  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-base font-medium">{username}</CardTitle>
            <CardDescription>{handleName} • {platform}</CardDescription>
          </div>
          <Badge className={getThreatColor(threat)}>{threat.charAt(0).toUpperCase() + threat.slice(1)} Threat</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-2">
          <div 
            className={`rounded p-3 bg-muted ${isBlurred ? 'blur-sm' : ''}`}
            onClick={() => setIsBlurred(false)}
          >
            {isBlurred && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Button 
                  variant="secondary"
                  size="sm" 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsBlurred(false);
                  }}
                  className="flex items-center gap-1"
                >
                  <Eye size={16} />
                  <span>Show Content</span>
                </Button>
              </div>
            )}
            <p className="text-sm">{content}</p>
          </div>
          <div className="flex gap-2 mt-2">
            {categories.map((category, i) => (
              <Badge key={i} variant="outline" className="text-xs">{category}</Badge>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span>{timestamp}</span>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="h-7 px-2 py-1">Flag</Button>
            <Button size="sm" variant="default" className="h-7 px-2 py-1">Respond</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Monitor() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Content Monitor</h1>
        <p className="text-muted-foreground">
          Track and analyze detected antisemitic content in real-time
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Card className="w-full md:w-72 flex-shrink-0">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Filter size={18} />
              <span>Filters</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Platform</Label>
                <Select defaultValue="twitter">
                  <SelectTrigger>
                    <SelectValue placeholder="Platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="twitter">Twitter/X</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="telegram">Telegram</SelectItem>
                    <SelectItem value="reddit">Reddit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Content Type</Label>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="text" defaultChecked />
                    <label htmlFor="text" className="text-sm">Text</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="images" defaultChecked />
                    <label htmlFor="images" className="text-sm">Images</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="videos" defaultChecked />
                    <label htmlFor="videos" className="text-sm">Videos</label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Threat Level</Label>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="low" defaultChecked />
                    <label htmlFor="low" className="text-sm">Low</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="medium" defaultChecked />
                    <label htmlFor="medium" className="text-sm">Medium</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="high" defaultChecked />
                    <label htmlFor="high" className="text-sm">High</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="severe" defaultChecked />
                    <label htmlFor="severe" className="text-sm">Severe</label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="blur-content">Blur Sensitive Content</Label>
                  <Switch id="blur-content" defaultChecked />
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by keyword or hashtag..."
                className="pl-8"
              />
            </div>
            <Select defaultValue="recent">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="threat">Highest Threat</SelectItem>
                <SelectItem value="engagement">Most Engagement</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-4 w-full">
              <TabsTrigger value="all" className="flex-1">All Content</TabsTrigger>
              <TabsTrigger value="flagged" className="flex-1">Flagged</TabsTrigger>
              <TabsTrigger value="responded" className="flex-1">Responded To</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-muted-foreground">
                    Showing 58 results from the last 24 hours
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Shield size={14} />
                    <span>Auto-respond</span>
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <ContentCard
                    content="The global elite banking families are pushing their agenda again. Wake up!"
                    username="Anonymous User"
                    handleName="@user5429847"
                    timestamp="2 hours ago"
                    threat="high"
                    categories={["Dog Whistle", "Conspiracy"]}
                  />
                  
                  <ContentCard
                    content="Those who control the media are trying to silence us. We know who they are."
                    username="Anonymous User"
                    handleName="@user2917364"
                    timestamp="5 hours ago"
                    threat="medium"
                    categories={["Media Control", "Coded Language"]}
                  />
                  
                  <ContentCard
                    content="We all know (((they))) are the ones pulling the strings in government."
                    username="Anonymous User"
                    handleName="@user8374922"
                    timestamp="6 hours ago"
                    threat="severe"
                    categories={["Triple Parentheses", "Government Conspiracy"]}
                  />
                  
                  <ContentCard
                    content="The international cabal of bankers wants to establish a new world order."
                    username="Anonymous User"
                    handleName="@user3759201"
                    timestamp="8 hours ago"
                    threat="high"
                    categories={["Banking Conspiracy", "New World Order"]}
                  />
                </div>
                
                <div className="flex justify-center mt-6">
                  <Button variant="outline">Load More</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="flagged">
              <div className="flex items-center justify-center h-32 bg-muted rounded-lg">
                <p className="text-muted-foreground">No flagged content yet</p>
              </div>
            </TabsContent>
            
            <TabsContent value="responded">
              <div className="flex items-center justify-center h-32 bg-muted rounded-lg">
                <p className="text-muted-foreground">No responses generated yet</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
