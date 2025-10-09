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
import CityHub from "./pages/CityHub";
import ServiceCity from "./pages/ServiceCity";

// County Hub Pages
import OrangeCounty from "./pages/counties/OrangeCounty";
import RiversideCounty from "./pages/counties/RiversideCounty";
import LosAngelesCounty from "./pages/counties/LosAngelesCounty";
import SanBernardinoCounty from "./pages/counties/SanBernardinoCounty";
import SanDiegoCounty from "./pages/counties/SanDiegoCounty";
import VenturaCounty from "./pages/counties/VenturaCounty";

// Keep existing city-specific window cleaning pages for SEO
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

// Solar Panel Cleaning City Pages
import IrvineSolarCleaning from "./pages/solar-cities/orange-county/IrvineSolarCleaning";
import AnaheimSolarCleaning from "./pages/solar-cities/orange-county/AnaheimSolarCleaning";
import NewportBeachSolarCleaning from "./pages/solar-cities/orange-county/NewportBeachSolarCleaning";
import HuntingtonBeachSolarCleaning from "./pages/solar-cities/orange-county/HuntingtonBeachSolarCleaning";
import SantaAnaSolarCleaning from "./pages/solar-cities/orange-county/SantaAnaSolarCleaning";
import CostaMesaSolarCleaning from "./pages/solar-cities/orange-county/CostaMesaSolarCleaning";
import FullertonSolarCleaning from "./pages/solar-cities/orange-county/FullertonSolarCleaning";
import OrangeSolarCleaning from "./pages/solar-cities/orange-county/OrangeSolarCleaning";
import GardenGroveSolarCleaning from "./pages/solar-cities/orange-county/GardenGroveSolarCleaning";
import TustinSolarCleaning from "./pages/solar-cities/orange-county/TustinSolarCleaning";
import LagunaBeachSolarCleaning from "./pages/solar-cities/orange-county/LagunaBeachSolarCleaning";
import MissionViejoSolarCleaning from "./pages/solar-cities/orange-county/MissionViejoSolarCleaning";
import LakeForestSolarCleaning from "./pages/solar-cities/orange-county/LakeForestSolarCleaning";
import LagunaNiguelSolarCleaning from "./pages/solar-cities/orange-county/LagunaNiguelSolarCleaning";
import SanClementeSolarCleaning from "./pages/solar-cities/orange-county/SanClementeSolarCleaning";
import YorbaLindaSolarCleaning from "./pages/solar-cities/orange-county/YorbaLindaSolarCleaning";
import SanJuanCapistranoSolarCleaning from "./pages/solar-cities/orange-county/SanJuanCapistranoSolarCleaning";
import WestminsterSolarCleaning from "./pages/solar-cities/orange-county/WestminsterSolarCleaning";
import BuenaParkSolarCleaning from "./pages/solar-cities/orange-county/BuenaParkSolarCleaning";
import BreaSolarCleaning from "./pages/solar-cities/orange-county/BreaSolarCleaning";
import AlisoViejoSolarCleaning from "./pages/solar-cities/orange-county/AlisoViejoSolarCleaning";
import RiversideSolarCleaning from "./pages/solar-cities/riverside-county/RiversideSolarCleaning";
import CoronaSolarCleaning from "./pages/solar-cities/riverside-county/CoronaSolarCleaning";
import MurrietaSolarCleaning from "./pages/solar-cities/riverside-county/MurrietaSolarCleaning";
import TemeculaSolarCleaning from "./pages/solar-cities/riverside-county/TemeculaSolarCleaning";
import SanBernardinoSolarCleaning from "./pages/solar-cities/san-bernardino-county/SanBernardinoSolarCleaning";
import SanDiegoSolarCleaning from "./pages/solar-cities/san-diego-county/SanDiegoSolarCleaning";
import LosAngelesSolarCleaning from "./pages/solar-cities/los-angeles-county/LosAngelesSolarCleaning";

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
          
          {/* Solar Panel City Pages - Orange County */}
          <Route path="/solar-panel-cleaning/irvine" element={<IrvineSolarCleaning />} />
          <Route path="/solar-panel-cleaning/anaheim" element={<AnaheimSolarCleaning />} />
          <Route path="/solar-panel-cleaning/newport-beach" element={<NewportBeachSolarCleaning />} />
          <Route path="/solar-panel-cleaning/huntington-beach" element={<HuntingtonBeachSolarCleaning />} />
          <Route path="/solar-panel-cleaning/santa-ana" element={<SantaAnaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/costa-mesa" element={<CostaMesaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/fullerton" element={<FullertonSolarCleaning />} />
          <Route path="/solar-panel-cleaning/orange" element={<OrangeSolarCleaning />} />
          <Route path="/solar-panel-cleaning/garden-grove" element={<GardenGroveSolarCleaning />} />
          <Route path="/solar-panel-cleaning/tustin" element={<TustinSolarCleaning />} />
          <Route path="/solar-panel-cleaning/laguna-beach" element={<LagunaBeachSolarCleaning />} />
          <Route path="/solar-panel-cleaning/mission-viejo" element={<MissionViejoSolarCleaning />} />
          <Route path="/solar-panel-cleaning/lake-forest" element={<LakeForestSolarCleaning />} />
          <Route path="/solar-panel-cleaning/laguna-niguel" element={<LagunaNiguelSolarCleaning />} />
          <Route path="/solar-panel-cleaning/san-clemente" element={<SanClementeSolarCleaning />} />
          <Route path="/solar-panel-cleaning/yorba-linda" element={<YorbaLindaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/san-juan-capistrano" element={<SanJuanCapistranoSolarCleaning />} />
          <Route path="/solar-panel-cleaning/westminster" element={<WestminsterSolarCleaning />} />
          <Route path="/solar-panel-cleaning/buena-park" element={<BuenaParkSolarCleaning />} />
          <Route path="/solar-panel-cleaning/brea" element={<BreaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/aliso-viejo" element={<AlisoViejoSolarCleaning />} />
          
          {/* Solar Panel City Pages - Other Counties */}
          <Route path="/solar-panel-cleaning/riverside" element={<RiversideSolarCleaning />} />
          <Route path="/solar-panel-cleaning/corona" element={<CoronaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/murrieta" element={<MurrietaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/temecula" element={<TemeculaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/san-bernardino" element={<SanBernardinoSolarCleaning />} />
          <Route path="/solar-panel-cleaning/san-diego" element={<SanDiegoSolarCleaning />} />
          <Route path="/solar-panel-cleaning/los-angeles" element={<LosAngelesSolarCleaning />} />
          
          {/* Locations Structure */}
          <Route path="/locations" element={<Locations />} />
          
          {/* County Hubs */}
          <Route path="/locations/orange" element={<OrangeCounty />} />
          <Route path="/locations/riverside" element={<RiversideCounty />} />
          <Route path="/locations/los-angeles" element={<LosAngelesCounty />} />
          <Route path="/locations/san-bernardino" element={<SanBernardinoCounty />} />
          <Route path="/locations/san-diego" element={<SanDiegoCounty />} />
          <Route path="/locations/ventura" element={<VenturaCounty />} />
          
          {/* City Hubs - Dynamic Route */}
          <Route path="/locations/:county/:city" element={<CityHub />} />
          
          {/* Existing Orange County Window Cleaning Pages (for SEO) */}
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
          
          {/* Service-City Pages - Dynamic Route for all services x all cities */}
          <Route path="/:service/:city" element={<ServiceCity />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
