
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Copy, Bot, User } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const ResponsePreviewCard = ({ persona, content, type }) => {
  const getTypeColor = (responseType) => {
    const colors = {
      "Educational": "bg-blue-100 text-blue-800",
      "Satirical": "bg-purple-100 text-purple-800",
      "Historical Fact": "bg-green-100 text-green-800",
      "Logical Refutation": "bg-amber-100 text-amber-800",
    };
    return colors[responseType] || "bg-gray-100 text-gray-800";
  };

  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base font-medium flex items-center gap-2">
            <Bot size={16} />
            <span>{persona} Response</span>
          </CardTitle>
          <Badge className={getTypeColor(type)}>{type}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{content}</p>
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm" className="h-8 flex items-center gap-1">
            <Copy size={14} />
            <span>Copy</span>
          </Button>
          <Button size="sm" className="h-8">Use Response</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Counteract() {
  const [inputText, setInputText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResponses, setShowResponses] = useState(false);
  
  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setShowResponses(true);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Counteraction Tools</h1>
        <p className="text-muted-foreground">
          Generate effective responses to antisemitic content
        </p>
      </div>

      <Tabs defaultValue="generator">
        <TabsList className="mb-4">
          <TabsTrigger value="generator">Response Generator</TabsTrigger>
          <TabsTrigger value="campaigns">Counter-Campaigns</TabsTrigger>
          <TabsTrigger value="library">Response Library</TabsTrigger>
        </TabsList>
        
        <TabsContent value="generator">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare size={18} />
                  <span>Content Analysis & Response</span>
                </CardTitle>
                <CardDescription>
                  Paste antisemitic content to generate effective counteractions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label className="mb-2 block">Antisemitic Content</Label>
                    <Textarea 
                      placeholder="Paste or type antisemitic content here..." 
                      className="min-h-[150px]"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="mb-2 block">Response Type</Label>
                      <Select defaultValue="mixed">
                        <SelectTrigger>
                          <SelectValue placeholder="Select response type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="educational">Educational</SelectItem>
                          <SelectItem value="factual">Historical Facts</SelectItem>
                          <SelectItem value="satirical">Satirical</SelectItem>
                          <SelectItem value="mixed">Mixed Approach</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label className="mb-2 block">AI Persona</Label>
                      <Select defaultValue="scholar">
                        <SelectTrigger>
                          <SelectValue placeholder="Select AI persona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="scholar">The Scholar</SelectItem>
                          <SelectItem value="satirist">The Satirist</SelectItem>
                          <SelectItem value="witness">The Witness</SelectItem>
                          <SelectItem value="logician">The Logician</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="mb-2 block">Tone</Label>
                    <RadioGroup defaultValue="balanced" className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="gentle" id="gentle" />
                        <Label htmlFor="gentle">Gentle</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="balanced" id="balanced" />
                        <Label htmlFor="balanced">Balanced</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="direct" id="direct" />
                        <Label htmlFor="direct">Direct</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Button 
                    onClick={handleGenerate}
                    disabled={!inputText.trim() || isGenerating} 
                    className="w-full"
                  >
                    {isGenerating ? "Generating Responses..." : "Generate Responses"}
                  </Button>
                </div>
                
                {showResponses && (
                  <div className="mt-8 space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Generated Responses</h3>
                      
                      <ResponsePreviewCard
                        persona="The Scholar"
                        type="Educational"
                        content="This statement employs the 'global elite' trope, which has roots in 'The Protocols of the Elders of Zion' - a debunked antisemitic text from the early 1900s. Banking conspiracy theories have been used to scapegoat Jewish communities for centuries, despite the fact that historical banking systems developed across diverse cultures worldwide."
                      />
                      
                      <ResponsePreviewCard
                        persona="The Logician"
                        type="Logical Refutation"
                        content="Your argument commits several logical fallacies: 1) The Appeal to Vagueness by referring to undefined 'global elites,' 2) Begging the Question by assuming an 'agenda' without evidence, and 3) False Attribution by implying a coordinated conspiracy without proof. These claims lack specific, verifiable evidence."
                      />
                      
                      <ResponsePreviewCard
                        persona="The Satirist"
                        type="Satirical"
                        content="Ah yes, those mysterious 'global elite banking families' - apparently powerful enough to control the world but somehow not powerful enough to prevent people from exposing their 'secret agenda' in public social media posts. Quite the paradox! Perhaps instead of 'waking up,' we should consider reading actual economics."
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>AI Response Personas</CardTitle>
                <CardDescription>
                  Choose the right approach for different contexts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-muted rounded-md">
                    <div className="flex items-center gap-2">
                      <Bot size={16} />
                      <p className="font-medium">The Scholar</p>
                    </div>
                    <p className="text-sm mt-1">
                      Provides historical context, references, and educational explanations about antisemitic tropes and their origins.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-muted rounded-md">
                    <div className="flex items-center gap-2">
                      <Bot size={16} />
                      <p className="font-medium">The Satirist</p>
                    </div>
                    <p className="text-sm mt-1">
                      Uses humor, irony and mockery to expose logical fallacies and absurdities in antisemitic arguments.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-muted rounded-md">
                    <div className="flex items-center gap-2">
                      <Bot size={16} />
                      <p className="font-medium">The Witness</p>
                    </div>
                    <p className="text-sm mt-1">
                      Draws on testimonials and real experiences to humanize issues and counter dehumanizing stereotypes.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-muted rounded-md">
                    <div className="flex items-center gap-2">
                      <Bot size={16} />
                      <p className="font-medium">The Logician</p>
                    </div>
                    <p className="text-sm mt-1">
                      Methodically breaks down logical fallacies and reasoning errors in antisemitic arguments.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-accent rounded-md">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <p className="font-medium">Expert Review</p>
                  </div>
                  <p className="text-sm mt-2">
                    All AI-generated responses are based on expert-designed countering strategies and fact-checked information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="campaigns">
          <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">Counter-campaign features coming soon</p>
              <Button variant="outline">Get Notified</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="library">
          <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">Response library will be available in the next update</p>
              <Button variant="outline">Get Notified</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
