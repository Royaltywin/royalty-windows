import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WindowCleaning from "./pages/WindowCleaning";
import PressureWashing from "./pages/PressureWashing";
import SolarPanelCleaning from "./pages/SolarPanelCleaning";
import RoofCleaning from "./pages/RoofCleaning";
import GraffitiRemoval from "./pages/GraffitiRemoval";
import ConstructionCleanup from "./pages/ConstructionCleanup";
import Locations from "./pages/Locations";
import CityService from "./pages/CityService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/window-cleaning" element={<WindowCleaning />} />
          <Route path="/pressure-washing" element={<PressureWashing />} />
          <Route path="/solar-panel-cleaning" element={<SolarPanelCleaning />} />
          <Route path="/roof-cleaning" element={<RoofCleaning />} />
          <Route path="/graffiti-removal" element={<GraffitiRemoval />} />
          <Route path="/construction-cleanup" element={<ConstructionCleanup />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/:service/:city" element={<CityService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
