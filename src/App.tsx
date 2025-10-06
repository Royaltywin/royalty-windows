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
import GutterCleaning from "./pages/GutterCleaning";
import Locations from "./pages/Locations";
import CityService from "./pages/CityService";
import AlisoViejoWindowCleaning from "./pages/cities/AlisoViejoWindowCleaning";
import AnaheimWindowCleaning from "./pages/cities/AnaheimWindowCleaning";
import BreaWindowCleaning from "./pages/cities/BreaWindowCleaning";
import BuenaParkWindowCleaning from "./pages/cities/BuenaParkWindowCleaning";
import CoastaMesaWindowCleaning from "./pages/cities/CoastaMesaWindowCleaning";
import CypressWindowCleaning from "./pages/cities/CypressWindowCleaning";
import DanaPointWindowCleaning from "./pages/cities/DanaPointWindowCleaning";
import FountainValleyWindowCleaning from "./pages/cities/FountainValleyWindowCleaning";
import FullertonWindowCleaning from "./pages/cities/FullertonWindowCleaning";
import GardenGroveWindowCleaning from "./pages/cities/GardenGroveWindowCleaning";
import HuntingtonBeachWindowCleaning from "./pages/cities/HuntingtonBeachWindowCleaning";
import IrvineWindowCleaning from "./pages/cities/IrvineWindowCleaning";
import LaHabraWindowCleaning from "./pages/cities/LaHabraWindowCleaning";
import LaPalmaWindowCleaning from "./pages/cities/LaPalmaWindowCleaning";
import LagunaBeachWindowCleaning from "./pages/cities/LagunaBeachWindowCleaning";
import LagunaHillsWindowCleaning from "./pages/cities/LagunaHillsWindowCleaning";
import LagunaNiguelWindowCleaning from "./pages/cities/LagunaNiguelWindowCleaning";
import MissionViejoWindowCleaning from "./pages/cities/MissionViejoWindowCleaning";
import NewportBeachWindowCleaning from "./pages/cities/NewportBeachWindowCleaning";
import OrangeWindowCleaning from "./pages/cities/OrangeWindowCleaning";
import PlacentiaWindowCleaning from "./pages/cities/PlacentiaWindowCleaning";
import RanchoSantaMargaritaWindowCleaning from "./pages/cities/RanchoSantaMargaritaWindowCleaning";
import SanClementeWindowCleaning from "./pages/cities/SanClementeWindowCleaning";
import SanJuanCapistranoWindowCleaning from "./pages/cities/SanJuanCapistranoWindowCleaning";
import SantaAnaWindowCleaning from "./pages/cities/SantaAnaWindowCleaning";
import SealBeachWindowCleaning from "./pages/cities/SealBeachWindowCleaning";
import StantonWindowCleaning from "./pages/cities/StantonWindowCleaning";
import TustinWindowCleaning from "./pages/cities/TustinWindowCleaning";
import VillaParkWindowCleaning from "./pages/cities/VillaParkWindowCleaning";
import WestminsterWindowCleaning from "./pages/cities/WestminsterWindowCleaning";
import YorbaLindaWindowCleaning from "./pages/cities/YorbaLindaWindowCleaning";
import CapistranoBeachWindowCleaning from "./pages/cities/CapistranoBeachWindowCleaning";
import CoronaDelMarWindowCleaning from "./pages/cities/CoronaDelMarWindowCleaning";
import CotoDeCazaWindowCleaning from "./pages/cities/CotoDeCazaWindowCleaning";
import FoothillRanchWindowCleaning from "./pages/cities/FoothillRanchWindowCleaning";
import LagunaWoodsWindowCleaning from "./pages/cities/LagunaWoodsWindowCleaning";
import LakeForestWindowCleaning from "./pages/cities/LakeForestWindowCleaning";
import LosAlamitosWindowCleaning from "./pages/cities/LosAlamitosWindowCleaning";
import LosFloresWindowCleaning from "./pages/cities/LosFloresWindowCleaning";
import NewportCoastWindowCleaning from "./pages/cities/NewportCoastWindowCleaning";
import SilveradoWindowCleaning from "./pages/cities/SilveradoWindowCleaning";
import TalegaWindowCleaning from "./pages/cities/TalegaWindowCleaning";
import TrabucoCanyonWindowCleaning from "./pages/cities/TrabucoCanyonWindowCleaning";

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
          <Route path="/gutter-cleaning" element={<GutterCleaning />} />
          <Route path="/construction-cleanup" element={<ConstructionCleanup />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/window-cleaning/aliso-viejo" element={<AlisoViejoWindowCleaning />} />
          <Route path="/window-cleaning/anaheim" element={<AnaheimWindowCleaning />} />
          <Route path="/window-cleaning/brea" element={<BreaWindowCleaning />} />
          <Route path="/window-cleaning/buena-park" element={<BuenaParkWindowCleaning />} />
          <Route path="/window-cleaning/costa-mesa" element={<CoastaMesaWindowCleaning />} />
          <Route path="/window-cleaning/cypress" element={<CypressWindowCleaning />} />
          <Route path="/window-cleaning/dana-point" element={<DanaPointWindowCleaning />} />
          <Route path="/window-cleaning/fountain-valley" element={<FountainValleyWindowCleaning />} />
          <Route path="/window-cleaning/fullerton" element={<FullertonWindowCleaning />} />
          <Route path="/window-cleaning/garden-grove" element={<GardenGroveWindowCleaning />} />
          <Route path="/window-cleaning/huntington-beach" element={<HuntingtonBeachWindowCleaning />} />
          <Route path="/window-cleaning/irvine" element={<IrvineWindowCleaning />} />
          <Route path="/window-cleaning/la-habra" element={<LaHabraWindowCleaning />} />
          <Route path="/window-cleaning/la-palma" element={<LaPalmaWindowCleaning />} />
          <Route path="/window-cleaning/laguna-beach" element={<LagunaBeachWindowCleaning />} />
          <Route path="/window-cleaning/laguna-hills" element={<LagunaHillsWindowCleaning />} />
          <Route path="/window-cleaning/laguna-niguel" element={<LagunaNiguelWindowCleaning />} />
          <Route path="/window-cleaning/mission-viejo" element={<MissionViejoWindowCleaning />} />
          <Route path="/window-cleaning/newport-beach" element={<NewportBeachWindowCleaning />} />
          <Route path="/window-cleaning/orange" element={<OrangeWindowCleaning />} />
          <Route path="/window-cleaning/placentia" element={<PlacentiaWindowCleaning />} />
          <Route path="/window-cleaning/rancho-santa-margarita" element={<RanchoSantaMargaritaWindowCleaning />} />
          <Route path="/window-cleaning/san-clemente" element={<SanClementeWindowCleaning />} />
          <Route path="/window-cleaning/san-juan-capistrano" element={<SanJuanCapistranoWindowCleaning />} />
          <Route path="/window-cleaning/santa-ana" element={<SantaAnaWindowCleaning />} />
          <Route path="/window-cleaning/seal-beach" element={<SealBeachWindowCleaning />} />
          <Route path="/window-cleaning/stanton" element={<StantonWindowCleaning />} />
          <Route path="/window-cleaning/tustin" element={<TustinWindowCleaning />} />
          <Route path="/window-cleaning/villa-park" element={<VillaParkWindowCleaning />} />
          <Route path="/window-cleaning/westminster" element={<WestminsterWindowCleaning />} />
          <Route path="/window-cleaning/yorba-linda" element={<YorbaLindaWindowCleaning />} />
          <Route path="/window-cleaning/capistrano-beach" element={<CapistranoBeachWindowCleaning />} />
          <Route path="/window-cleaning/corona-del-mar" element={<CoronaDelMarWindowCleaning />} />
          <Route path="/window-cleaning/coto-de-caza" element={<CotoDeCazaWindowCleaning />} />
          <Route path="/window-cleaning/foothill-ranch" element={<FoothillRanchWindowCleaning />} />
          <Route path="/window-cleaning/laguna-woods" element={<LagunaWoodsWindowCleaning />} />
          <Route path="/window-cleaning/lake-forest" element={<LakeForestWindowCleaning />} />
          <Route path="/window-cleaning/los-alamitos" element={<LosAlamitosWindowCleaning />} />
          <Route path="/window-cleaning/los-flores" element={<LosFloresWindowCleaning />} />
          <Route path="/window-cleaning/newport-coast" element={<NewportCoastWindowCleaning />} />
          <Route path="/window-cleaning/silverado" element={<SilveradoWindowCleaning />} />
          <Route path="/window-cleaning/talega" element={<TalegaWindowCleaning />} />
          <Route path="/window-cleaning/trabuco-canyon" element={<TrabucoCanyonWindowCleaning />} />
          <Route path="/:service/:city" element={<CityService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
