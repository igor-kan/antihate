
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartBar, Shield, MessageSquare } from 'lucide-react';

const DataCard = ({ title, value, description, change, positive = true }) => (
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-lg font-medium">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold">{value}</div>
      <p className={`text-sm mt-1 ${positive ? 'text-green-600' : 'text-red-600'}`}>
        {change} {positive ? '↑' : '↓'}
      </p>
    </CardContent>
  </Card>
);

const TrendingTopic = ({ topic, count, severity }) => {
  const getSeverityColor = (level: string) => {
    const colors = {
      low: 'bg-alert-low',
      medium: 'bg-alert-medium',
      high: 'bg-alert-high',
      severe: 'bg-alert-severe',
    };
    return colors[level] || colors.medium;
  };

  return (
    <div className="flex items-center justify-between py-2 border-b last:border-0">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${getSeverityColor(severity)}`} />
        <span className="font-medium">#{topic}</span>
      </div>
      <div className="text-sm text-muted-foreground">{count} mentions</div>
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor and analyze antisemitic content across platforms.
          </p>
        </div>
        <div>
          <Button className="bg-brandBlue hover:bg-brandBlue-dark">
            Generate Report
          </Button>
        </div>
      </div>

      <Alert className="bg-accent border-l-4 border-l-brandBlue">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          <span className="font-medium">Alert: </span>
        </div>
        <p className="mt-1">Detected a 34% increase in antisemitic content related to #IsraelConflict in the last 24 hours.</p>
      </Alert>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DataCard 
          title="Detected Today" 
          value="312" 
          description="Total antisemitic posts"
          change="+18% from yesterday"
          positive={false}
        />
        <DataCard 
          title="Counter Actions" 
          value="186" 
          description="Generated responses"
          change="+24% from yesterday"
          positive={true}
        />
        <DataCard 
          title="Active Campaigns" 
          value="3" 
          description="Running counter-narratives"
          change="No change"
          positive={true}
        />
        <DataCard 
          title="User Engagement" 
          value="89%" 
          description="Weekly activity score"
          change="+5% from last week"
          positive={true}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ChartBar className="h-5 w-5" /> 
              <span>Detection Trends</span>
            </CardTitle>
            <CardDescription>
              7-day antisemitic content detection analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="volume">
              <TabsList>
                <TabsTrigger value="volume">Volume</TabsTrigger>
                <TabsTrigger value="regions">Regions</TabsTrigger>
                <TabsTrigger value="topics">Topics</TabsTrigger>
              </TabsList>
              <TabsContent value="volume" className="space-y-4 pt-4">
                {/* Simulate chart with color blocks */}
                <div className="h-64 bg-accent rounded-md flex items-end p-4 gap-2">
                  {[35, 42, 58, 47, 62, 82, 76].map((height, i) => (
                    <div 
                      key={i}
                      className="bg-brandBlue h-[${height}%] flex-1 rounded-t-sm"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </TabsContent>
              <TabsContent value="regions" className="pt-4">
                <div className="h-64 flex items-center justify-center bg-accent rounded-md text-muted-foreground">
                  Geographic map visualization (placeholder)
                </div>
              </TabsContent>
              <TabsContent value="topics" className="pt-4">
                <div className="h-64 flex items-center justify-center bg-accent rounded-md text-muted-foreground">
                  Topics distribution chart (placeholder)
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Trending Hashtags</CardTitle>
            <CardDescription>
              Most frequent antisemitic hashtags
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <TrendingTopic topic="globalists" count={142} severity="severe" />
              <TrendingTopic topic="bankers" count={98} severity="high" />
              <TrendingTopic topic="IsraelLies" count={76} severity="high" />
              <TrendingTopic topic="elites" count={62} severity="medium" />
              <TrendingTopic topic="cabal" count={47} severity="high" />
              <TrendingTopic topic="rothschild" count={38} severity="severe" />
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Hashtags
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>Top Offenders</span>
              </CardTitle>
              <CardDescription>
                Accounts with most antisemitic content
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Anonymous User 1', handle: '@user2984651', posts: 28, severity: 92 },
                { name: 'Anonymous User 2', handle: '@user7364921', posts: 23, severity: 88 },
                { name: 'Anonymous User 3', handle: '@user4287103', posts: 19, severity: 76 },
                { name: 'Anonymous User 4', handle: '@user5912384', posts: 15, severity: 71 },
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.handle}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{user.posts} posts</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Progress value={user.severity} className="h-2 w-24" />
                      <span className="text-xs text-muted-foreground">{user.severity}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View Complete List
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <span>Generated Counter-Responses</span>
            </CardTitle>
            <CardDescription>
              Recent AI-powered responses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { type: 'Fact-Check', count: 87, description: 'Providing historical context and accurate information' },
                { type: 'Educational', count: 64, description: 'Explaining antisemitic tropes and their origins' },
                { type: 'Satirical', count: 35, description: 'Using humor to diffuse harmful narratives' },
              ].map((response, i) => (
                <div key={i} className="p-3 bg-muted rounded-md">
                  <div className="flex justify-between">
                    <span className="font-medium">{response.type}</span>
                    <span className="text-sm text-muted-foreground">{response.count} responses</span>
                  </div>
                  <p className="text-sm mt-1">{response.description}</p>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-2">
                View Response Examples
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
