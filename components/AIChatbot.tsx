import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, FileText, Minimize2, X, Bot, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  category?: 'question' | 'sitrep' | 'analysis';
}

interface AIChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function AIChatbot({ isOpen, onToggle }: AIChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Fire Operations AI Assistant ready. I can answer questions about the current situation or generate a SITREP. How can I help?',
      timestamp: new Date(),
      category: 'analysis'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const mockAIResponses = {
    sitrep: `**SITUATION REPORT - LAHAINA FIRE INCIDENT**
**Time:** 14:42 HST, August 8, 2025
**Incident Commander:** Fire Chief Martinez

**CURRENT STATUS:**
• Fire Size: 2,147 acres (450 active, 200 contained, 1,497 uncontrolled)
• Containment: 35% (+8% last hour)
• Personnel: 89 firefighters on scene
• Equipment: 12 engines, 3 ladder trucks, 3 air support units

**IMMEDIATE THREATS:**
• Zone A North: 47 structures at critical risk
• Lahaina Bypass: High wind exposure creating extreme fire behavior
• Front Street Historic District: Cultural assets under threat

**EVACUATION STATUS:**
• Zone 1: Mandatory evacuation active (782/847 residents evacuated)
• Zone 2: Advisory evacuation issued
• 1,247 total evacuees safely relocated to shelters

**WEATHER CONDITIONS:**
• Wind: 23 mph with gusts to 35 mph, NE direction
• Humidity: 12% (critically low)
• Temperature: 89°F

**NEXT OPERATIONAL PERIOD PRIORITIES:**
1. Deploy air support to Zone A North (15 min)
2. Expand evacuation perimeter to Zone 3 (30 min)
3. Establish additional water supply lines (45 min)

**RESOURCE NEEDS:**
• 2 additional bulldozers for firebreak construction
• Heavy air tanker for structure protection
• Additional water tenders for sustained operations`,

    analysis: {
      'wind': 'Current NE winds at 23 mph are pushing the fire toward residential areas. Wind patterns show sustained direction for next 4 hours, creating predictable fire behavior that allows for strategic resource positioning.',
      'containment': '35% containment represents significant progress. The 8% increase in the last hour indicates effective suppression tactics. Current trajectory suggests 50% containment achievable within 6 hours if resources maintain current effectiveness.',
      'evacuation': 'Zone 1 evacuation 92% complete with 65 estimated residents remaining. Door-to-door teams report good cooperation. Zone 2 advisory issued as precautionary measure due to wind shift potential.',
      'resources': '89 personnel currently deployed with good resource-to-fire-acre ratio. Water supply adequate through municipal systems. Air support limited by smoke conditions but improving.',
      'structures': '47 structures at immediate risk in Zone A North. Defensive positions established around 12 priority buildings. Structure protection teams in position with adequate water supply.',
      'weather': 'Humidity at 12% creates extreme fire conditions. No precipitation forecast for 72 hours. Temperature peak at 89°F occurring now, should decrease after 16:00 HST providing improved suppression conditions.'
    },

    default: 'I can provide specific analysis on wind patterns, containment progress, evacuation status, resource allocation, structure threats, or weather conditions. I can also generate a full SITREP. What would you like to know?'
  };

  const generateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('sitrep') || message.includes('situation report') || message.includes('status report')) {
      return mockAIResponses.sitrep;
    }
    
    for (const [key, response] of Object.entries(mockAIResponses.analysis)) {
      if (message.includes(key)) {
        return response;
      }
    }
    
    if (message.includes('recommend') || message.includes('suggest') || message.includes('action')) {
      return 'Based on current conditions, I recommend: 1) Immediate air support deployment to Zone A North for structure protection, 2) Preposition resources for Zone 3 evacuation expansion, 3) Establish redundant water supply to maintain pressure during peak demand period.';
    }
    
    if (message.includes('risk') || message.includes('threat')) {
      return 'Primary risks: Zone A North has 47 structures under immediate threat due to wind-driven fire behavior. Secondary concern is potential wind shift affecting Lahaina Bypass evacuation route. Low humidity (12%) maintains extreme fire conditions.';
    }
    
    return mockAIResponses.default;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isGenerating) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
      category: 'question'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsGenerating(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateAIResponse(inputMessage),
        timestamp: new Date(),
        category: inputMessage.toLowerCase().includes('sitrep') ? 'sitrep' : 'analysis'
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsGenerating(false);
    }, 1500);
  };

  const handleGenerateSITREP = () => {
    setInputMessage('Generate a SITREP for the current fire situation');
    setTimeout(() => handleSendMessage(), 100);
  };

  const formatMessage = (content: string) => {
    if (content.includes('**')) {
      // Handle SITREP formatting
      return content.split('\n').map((line, index) => {
        if (line.includes('**')) {
          const parts = line.split('**');
          return (
            <div key={index} className="mb-1">
              {parts.map((part, partIndex) => 
                partIndex % 2 === 1 ? <strong key={partIndex}>{part}</strong> : part
              )}
            </div>
          );
        }
        if (line.startsWith('•')) {
          return <div key={index} className="ml-2 mb-1">{line}</div>;
        }
        if (line.match(/^\d+\./)) {
          return <div key={index} className="ml-2 mb-1 font-medium">{line}</div>;
        }
        return line ? <div key={index} className="mb-1">{line}</div> : <div key={index} className="mb-2"></div>;
      });
    }
    return <div>{content}</div>;
  };

  if (!isOpen) {
    return (
      <Button
        onClick={onToggle}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-xl z-50 flex flex-col">
      <CardHeader className="pb-2 flex-shrink-0">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-base">
            <Bot className="h-4 w-4 text-primary" />
            Fire Operations AI
            <Badge variant="outline" className="text-xs">Online</Badge>
          </CardTitle>
          <div className="flex gap-1">
            <Button variant="ghost" size="sm" onClick={onToggle} className="h-6 w-6 p-0">
              <Minimize2 className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onToggle} className="h-6 w-6 p-0">
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-4 pt-2 min-h-0">
        {/* Quick Actions */}
        <div className="mb-3 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleGenerateSITREP}
            className="text-xs h-7"
            disabled={isGenerating}
          >
            <FileText className="h-3 w-3 mr-1" />
            Generate SITREP
          </Button>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 pr-2 min-h-0">
          <div className="space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.type === 'ai' && (
                  <Bot className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-2 text-xs ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-card-foreground'
                  }`}
                >
                  {formatMessage(message.content)}
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
                {message.type === 'user' && (
                  <User className="h-6 w-6 text-muted-foreground mt-1 flex-shrink-0" />
                )}
              </div>
            ))}
            {isGenerating && (
              <div className="flex gap-2 justify-start">
                <Bot className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div className="bg-muted text-card-foreground rounded-lg p-2 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="animate-pulse">Analyzing situation...</div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="flex gap-2 pt-3 border-t border-border flex-shrink-0">
          <Input
            ref={inputRef}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask about fire conditions, resources, or request SITREP..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            disabled={isGenerating}
            className="text-xs"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isGenerating}
            size="sm"
            className="px-3"
          >
            <Send className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}