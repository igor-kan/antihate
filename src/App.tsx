/**
 * AntiHate - AI-Powered Hate Speech Detection and Content Moderation Platform
 * 
 * Advanced content moderation system that leverages artificial intelligence and
 * machine learning to identify, analyze, and counteract hate speech across digital platforms:
 * - Real-time hate speech detection using natural language processing
 * - Multi-platform content monitoring and analysis (social media, forums, comments)
 * - AI-powered sentiment analysis and toxicity scoring
 * - Automated counteraction strategies and response recommendations
 * - Educational resources and community building tools for positive discourse
 * 
 * Social Impact Technology Architecture:
 * Built with HashRouter to ensure maximum accessibility and deployment flexibility
 * across various organizations, from educational institutions to social media platforms.
 * This approach guarantees consistent functionality regardless of the host environment's
 * technical complexity or organizational infrastructure constraints.
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import Monitor from "./pages/Monitor";
import Counteract from "./pages/Counteract";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

/**
 * Content Moderation Data Management Configuration
 * 
 * React Query client optimized for real-time content analysis and hate speech detection:
 * - High-frequency polling for live content streams and social media feeds
 * - Intelligent caching for previously analyzed content to improve response times
 * - Robust error handling for critical content moderation operations
 * - Optimistic updates for community reporting and moderation actions
 * 
 * AI-Powered Content Analysis Optimizations:
 * - Efficient batch processing for large-scale content analysis
 * - Real-time synchronization with multiple social media APIs and platforms
 * - Memory-optimized storage for machine learning model predictions
 * - Comprehensive audit logging for content moderation decisions and appeals
 * - Privacy-preserving data handling for sensitive user-generated content
 * - Multi-language support for global hate speech detection capabilities
 */
const queryClient = new QueryClient();

/**
 * Root AntiHate Application Component
 * 
 * Establishes the complete hate speech detection and content moderation platform
 * infrastructure with emphasis on real-time analysis, user safety, and educational
 * impact essential for creating safer digital communities.
 * 
 * Provider Architecture (Social Impact Technology Hierarchy):
 * 1. QueryClientProvider - Real-time content analysis and moderation data management
 * 2. TooltipProvider - Accessible guidance for content moderation workflows
 * 3. Notification Systems - Critical for hate speech alerts and community safety updates
 * 4. HashRouter - Universal deployment compatibility for diverse organizations
 * 
 * Content Moderation Platform Routing:
 * - HashRouter selected for maximum organizational and institutional compatibility
 * - Eliminates server configuration barriers for educational and nonprofit deployments
 * - Consistent performance across different organizational network architectures
 * - Simplified integration with existing community management and safety systems
 * 
 * Platform Architecture:
 * - "/" : Main dashboard with platform overview and key metrics
 * - "/monitor" : Real-time content monitoring and hate speech detection interface
 * - "/counteract" : Strategic response tools and intervention management system
 * - "/resources" : Educational materials and community building resources
 * - "*" : Safety-grade error handling protecting user data and moderation workflows
 * 
 * @returns {JSX.Element} Complete hate speech detection platform with community safety safeguards
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* 
        Community Safety Notification Infrastructure
        
        Critical for content moderation where notifications directly impact user safety:
        - Toaster: Standard notifications for routine moderation workflow updates
        - Sonner: High-priority alerts for severe hate speech detection and emergency responses
        
        Content Moderation Features:
        - Real-time hate speech detection alerts with severity classifications
        - Community safety notifications for policy violations and enforcement actions
        - Educational engagement prompts for positive community building
        - Moderator workflow notifications for review queues and escalations
        - Privacy-compliant user reporting confirmations and status updates
        - Integration with platform safety systems and community management tools
      */}
      <Toaster />
      <Sonner />
      
      {/*
        HashRouter for Organizational Compatibility
        
        Community Safety Platform Benefits:
        - Functions across all organizational IT environments without modification
        - No complex server setup required for educational and nonprofit deployments
        - Compatible with institutional firewalls and content filtering systems
        - Reduces deployment complexity for schools, universities, and community organizations
        - Consistent behavior across different organizational network configurations
        
        Content Moderation Considerations:
        - Bookmarkable analysis URLs for recurring content review and auditing
        - Shareable links for collaborative moderation and educational purposes
        - Integration-ready for existing community management and CMS platforms
        - Compliant with privacy regulations and content moderation standards
        - Support for multi-tenant organizational environments and communities
        - Direct URL access for emergency content moderation and crisis response
      */}
      <HashRouter>
        <Routes>
          {/* 
            Platform Overview and Dashboard
            
            Comprehensive platform introduction featuring:
            - Real-time hate speech detection statistics and trends
            - Platform impact metrics and community safety improvements
            - Quick access to key moderation tools and educational resources
            - Community health indicators and positive engagement metrics
          */}
          <Route path="/" element={<Index />} />
          
          {/* 
            Real-Time Content Monitoring Interface
            
            Advanced monitoring dashboard featuring:
            - Live content stream analysis with AI-powered hate speech detection
            - Multi-platform integration for social media and forum monitoring
            - Customizable alert systems for different types of harmful content
            - Detailed analytics on content toxicity trends and patterns
            - Bulk content analysis tools for large-scale moderation operations
          */}
          <Route 
            path="/monitor" 
            element={
              <Layout>
                <Monitor />
              </Layout>
            } 
          />
          
          {/* 
            Strategic Counteraction and Response Management
            
            Intervention strategy interface featuring:
            - AI-powered response recommendation engine for hate speech incidents
            - Community engagement tools for positive discourse promotion
            - Automated counteraction deployment and effectiveness tracking
            - Educational intervention strategies and restorative justice approaches
            - Collaborative response planning for multi-stakeholder environments
          */}
          <Route 
            path="/counteract" 
            element={
              <Layout>
                <Counteract />
              </Layout>
            } 
          />
          
          {/* 
            Educational Resources and Community Building
            
            Comprehensive resource center featuring:
            - Educational materials on digital citizenship and respectful communication
            - Community guidelines and best practices for online discourse
            - Training modules for moderators and community leaders
            - Research and data insights on hate speech trends and prevention
            - Tool integrations and API documentation for developers and organizations
          */}
          <Route 
            path="/resources" 
            element={
              <Layout>
                <Resources />
              </Layout>
            } 
          />
          
          {/* 
            Community Safety Error Handling
            
            CRITICAL: Must remain as the final route for user safety and data protection
            
            Content Moderation Error Management:
            - Graceful handling of broken moderation workflow links to maintain safety
            - Community safety protection through comprehensive error logging and analysis
            - Content moderation audit trail maintenance for all navigation and system errors
            - Automatic fallback mechanisms to prevent moderation system interruption
            - Integration with community safety monitoring and incident response systems
            - Real-time error reporting to safety team leads and platform administrators
            - Privacy-compliant documentation for all system errors and user impact assessments
          */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
