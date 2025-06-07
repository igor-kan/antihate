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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route 
            path="/monitor" 
            element={
              <Layout>
                <Monitor />
              </Layout>
            } 
          />
          <Route 
            path="/counteract" 
            element={
              <Layout>
                <Counteract />
              </Layout>
            } 
          />
          <Route 
            path="/resources" 
            element={
              <Layout>
                <Resources />
              </Layout>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
