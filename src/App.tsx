
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AmericanAkita from "./pages/breeds/AmericanAkita";
import SouthAfricanBoerboel from "./pages/breeds/SouthAfricanBoerboel";
import MiniatureSchnauzer from "./pages/breeds/MiniatureSchnauzer";
import KerryBlueTerrier from "./pages/breeds/KerryBlueTerrier";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/breeds/american-akita" element={<AmericanAkita />} />
          <Route path="/breeds/south-african-boerboel" element={<SouthAfricanBoerboel />} />
          <Route path="/breeds/miniature-schnauzer" element={<MiniatureSchnauzer />} />
          <Route path="/breeds/kerry-blue-terrier" element={<KerryBlueTerrier />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
