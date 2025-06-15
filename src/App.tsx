
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GoldenRetriever from "./pages/breeds/GoldenRetriever";
import LabradorRetriever from "./pages/breeds/LabradorRetriever";
import FrenchBulldog from "./pages/breeds/FrenchBulldog";
import GermanShepherd from "./pages/breeds/GermanShepherd";
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
          <Route path="/breeds/golden-retriever" element={<GoldenRetriever />} />
          <Route path="/breeds/labrador-retriever" element={<LabradorRetriever />} />
          <Route path="/breeds/french-bulldog" element={<FrenchBulldog />} />
          <Route path="/breeds/german-shepherd" element={<GermanShepherd />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
