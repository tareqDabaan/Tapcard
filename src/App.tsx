import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // ✅ HashRouter
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import EditProfile from "./pages/EditProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter> {/* ✅ no basename */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
