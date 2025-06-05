
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Info, Search, Eye, Bot } from 'lucide-react';
import { Input } from '@/components/ui/input';

const ResourceCard = ({ title, description, type, tags = [] }) => {
  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <Badge variant="outline">{type}</Badge>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map((tag, i) => (
            <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
        <Button className="w-full">View Resource</Button>
      </CardContent>
    </Card>
  );
};

export default function Resources() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Knowledge Resources</h1>
        <p className="text-muted-foreground">
          Educational materials and training resources on antisemitism
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search resources..."
            className="pl-8"
          />
        </div>
      </div>

      <Tabs defaultValue="guides">
        <TabsList className="mb-4">
          <TabsTrigger value="guides">Learning Guides</TabsTrigger>
          <TabsTrigger value="examples">Example Responses</TabsTrigger>
          <TabsTrigger value="templates">Response Templates</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>
        
        <TabsContent value="guides">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-3">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Info size={18} />
                  <CardTitle>Understanding Antisemitism</CardTitle>
                </div>
                <CardDescription>
                  Core educational resources to understand and identify antisemitism
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <ResourceCard
                    title="Common Antisemitic Tropes"
                    description="Learn to identify the common antisemitic stereotypes and dog whistles that appear in modern discourse."
                    type="Guide"
                    tags={["Stereotypes", "Dog Whistles", "Detection"]}
                  />
                  
                  <ResourceCard
                    title="History of Antisemitism"
                    description="A comprehensive timeline of antisemitism throughout history and its evolution to modern forms."
                    type="Educational"
                    tags={["Historical Context", "Evolution", "Background"]}
                  />
                  
                  <ResourceCard
                    title="Conspiracy Theories Debunked"
                    description="Fact-based refutations of common antisemitic conspiracy theories circulating online."
                    type="Fact-Check"
                    tags={["Conspiracy Theories", "Refutation", "Facts"]}
                  />
                  
                  <ResourceCard
                    title="Coded Language Guide"
                    description="How to identify and decode veiled antisemitic language and symbols on social media."
                    type="Detection"
                    tags={["Coded Language", "Symbols", "Hidden Messages"]}
                  />
                  
                  <ResourceCard
                    title="Antisemitism vs. Legitimate Criticism"
                    description="Understanding the difference between antisemitism and legitimate criticism of Israeli policies."
                    type="Educational"
                    tags={["Nuance", "Criticism", "Boundaries"]}
                  />
                  
                  <ResourceCard
                    title="Platform-Specific Detection Guide"
                    description="How antisemitism manifests differently across various social media platforms."
                    type="Guide"
                    tags={["Platform-Specific", "Detection", "Identification"]}
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-3">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Eye size={18} />
                  <CardTitle>Effective Counter-Speech Strategies</CardTitle>
                </div>
                <CardDescription>
                  Techniques and approaches for countering antisemitism through speech and education
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <ResourceCard
                    title="Educational Counter-Response Guide"
                    description="How to craft educational responses that effectively counter misinformation."
                    type="Strategy"
                    tags={["Education", "Information", "Technique"]}
                  />
                  
                  <ResourceCard
                    title="Humor as a Countering Tool"
                    description="Using satire and humor ethically and effectively to counter hate speech."
                    type="Strategy"
                    tags={["Humor", "Satire", "Ethical Guidelines"]}
                  />
                  
                  <ResourceCard
                    title="Bystander Intervention"
                    description="How to safely and effectively intervene when witnessing antisemitism online."
                    type="Guide"
                    tags={["Intervention", "Allyship", "Safety"]}
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-3">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Bot size={18} />
                  <CardTitle>AI-Powered Response Training</CardTitle>
                </div>
                <CardDescription>
                  Learn how to effectively use AI tools to create impactful counter-responses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <ResourceCard
                    title="AI Persona Selection Guide"
                    description="How to choose the right AI persona for different types of antisemitic content."
                    type="Tutorial"
                    tags={["AI", "Personas", "Strategy"]}
                  />
                  
                  <ResourceCard
                    title="Customizing AI Responses"
                    description="Tips for customizing and personalizing AI-generated responses for maximum impact."
                    type="Guide"
                    tags={["Customization", "Personalization", "Effectiveness"]}
                  />
                  
                  <ResourceCard
                    title="Counter-Campaign Creation"
                    description="Step-by-step guide to creating effective counter-narratives using our AI tools."
                    type="Tutorial"
                    tags={["Campaigns", "Strategy", "Content Creation"]}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="examples">
          <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">Example responses library coming soon</p>
              <Button variant="outline">Get Notified</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="templates">
          <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">Response templates will be available in the next update</p>
              <Button variant="outline">Get Notified</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="faq">
          <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">FAQ section will be available in the next update</p>
              <Button variant="outline">Get Notified</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
