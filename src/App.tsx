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

// Solar Panel Cleaning City Pages - Orange County
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
import CapistranoBeachSolarCleaning from "./pages/solar-cities/orange-county/CapistranoBeachSolarCleaning";
import CoronaDelMarSolarCleaning from "./pages/solar-cities/orange-county/CoronaDelMarSolarCleaning";
import CotoDeCazaSolarCleaning from "./pages/solar-cities/orange-county/CotoDeCazaSolarCleaning";
import CypressSolarCleaning from "./pages/solar-cities/orange-county/CypressSolarCleaning";
import DanaPointSolarCleaning from "./pages/solar-cities/orange-county/DanaPointSolarCleaning";
import FoothillRanchSolarCleaning from "./pages/solar-cities/orange-county/FoothillRanchSolarCleaning";
import FountainValleySolarCleaning from "./pages/solar-cities/orange-county/FountainValleySolarCleaning";
import LaHabraSolarCleaning from "./pages/solar-cities/orange-county/LaHabraSolarCleaning";
import LaPalmaSolarCleaning from "./pages/solar-cities/orange-county/LaPalmaSolarCleaning";
import LagunaHillsSolarCleaning from "./pages/solar-cities/orange-county/LagunaHillsSolarCleaning";
import LagunaWoodsSolarCleaning from "./pages/solar-cities/orange-county/LagunaWoodsSolarCleaning";
import LosAlamitosSolarCleaning from "./pages/solar-cities/orange-county/LosAlamitosSolarCleaning";
import LosFloresSolarCleaning from "./pages/solar-cities/orange-county/LosFloresSolarCleaning";
import NewportCoastSolarCleaning from "./pages/solar-cities/orange-county/NewportCoastSolarCleaning";
import PlacentiaSolarCleaning from "./pages/solar-cities/orange-county/PlacentiaSolarCleaning";
import RanchoSantaMargaritaSolarCleaning from "./pages/solar-cities/orange-county/RanchoSantaMargaritaSolarCleaning";
import SealBeachSolarCleaning from "./pages/solar-cities/orange-county/SealBeachSolarCleaning";
import SilveradoSolarCleaning from "./pages/solar-cities/orange-county/SilveradoSolarCleaning";
import StantonSolarCleaning from "./pages/solar-cities/orange-county/StantonSolarCleaning";
import TalegaSolarCleaning from "./pages/solar-cities/orange-county/TalegaSolarCleaning";
import TrabucoCanyonSolarCleaning from "./pages/solar-cities/orange-county/TrabucoCanyonSolarCleaning";
import VillaParkSolarCleaning from "./pages/solar-cities/orange-county/VillaParkSolarCleaning";

// Solar Panel Cleaning City Pages - Riverside County
import RiversideSolarCleaning from "./pages/solar-cities/riverside-county/RiversideSolarCleaning";
import CoronaSolarCleaning from "./pages/solar-cities/riverside-county/CoronaSolarCleaning";
import MurrietaSolarCleaning from "./pages/solar-cities/riverside-county/MurrietaSolarCleaning";
import TemeculaSolarCleaning from "./pages/solar-cities/riverside-county/TemeculaSolarCleaning";
import BanningSolarCleaning from "./pages/solar-cities/riverside-county/BanningSolarCleaning";
import BeaumontSolarCleaning from "./pages/solar-cities/riverside-county/BeaumontSolarCleaning";
import BlytheSolarCleaning from "./pages/solar-cities/riverside-county/BlytheSolarCleaning";
import CalimesaSolarCleaning from "./pages/solar-cities/riverside-county/CalimesaSolarCleaning";
import CanyonLakeSolarCleaning from "./pages/solar-cities/riverside-county/CanyonLakeSolarCleaning";
import CathedralCitySolarCleaning from "./pages/solar-cities/riverside-county/CathedralCitySolarCleaning";
import CoachellaSolarCleaning from "./pages/solar-cities/riverside-county/CoachellaSolarCleaning";
import DesertHotSpringsSolarCleaning from "./pages/solar-cities/riverside-county/DesertHotSpringsSolarCleaning";
import EastvaleSolarCleaning from "./pages/solar-cities/riverside-county/EastvaleSolarCleaning";
import HemetSolarCleaning from "./pages/solar-cities/riverside-county/HemetSolarCleaning";
import IndianWellsSolarCleaning from "./pages/solar-cities/riverside-county/IndianWellsSolarCleaning";
import IndioSolarCleaning from "./pages/solar-cities/riverside-county/IndioSolarCleaning";
import JurupaValleySolarCleaning from "./pages/solar-cities/riverside-county/JurupaValleySolarCleaning";
import LakeElsinoreSolarCleaning from "./pages/solar-cities/riverside-county/LakeElsinoreSolarCleaning";
import LaQuintaSolarCleaning from "./pages/solar-cities/riverside-county/LaQuintaSolarCleaning";
import MenifeeSolarCleaning from "./pages/solar-cities/riverside-county/MenifeeSolarCleaning";
import MorenoValleySolarCleaning from "./pages/solar-cities/riverside-county/MorenoValleySolarCleaning";
import NorcoSolarCleaning from "./pages/solar-cities/riverside-county/NorcoSolarCleaning";
import PalmDesertSolarCleaning from "./pages/solar-cities/riverside-county/PalmDesertSolarCleaning";
import PalmSpringsSolarCleaning from "./pages/solar-cities/riverside-county/PalmSpringsSolarCleaning";
import PerrisSolarCleaning from "./pages/solar-cities/riverside-county/PerrisSolarCleaning";
import RanchoMirageSolarCleaning from "./pages/solar-cities/riverside-county/RanchoMirageSolarCleaning";
import SanJacintoSolarCleaning from "./pages/solar-cities/riverside-county/SanJacintoSolarCleaning";
import WildomarSolarCleaning from "./pages/solar-cities/riverside-county/WildomarSolarCleaning";

// Solar Panel Cleaning City Pages - San Bernardino County
import SanBernardinoSolarCleaning from "./pages/solar-cities/san-bernardino-county/SanBernardinoSolarCleaning";
import AdelantoSolarCleaning from "./pages/solar-cities/san-bernardino-county/AdelantoSolarCleaning";
import AppleValleySolarCleaning from "./pages/solar-cities/san-bernardino-county/AppleValleySolarCleaning";
import BarstowSolarCleaning from "./pages/solar-cities/san-bernardino-county/BarstowSolarCleaning";
import BigBearCitySolarCleaning from "./pages/solar-cities/san-bernardino-county/BigBearCitySolarCleaning";
import BigBearLakeSolarCleaning from "./pages/solar-cities/san-bernardino-county/BigBearLakeSolarCleaning";
import ChinoSolarCleaning from "./pages/solar-cities/san-bernardino-county/ChinoSolarCleaning";
import ChinoHillsSolarCleaning from "./pages/solar-cities/san-bernardino-county/ChinoHillsSolarCleaning";
import ColtonSolarCleaning from "./pages/solar-cities/san-bernardino-county/ColtonSolarCleaning";
import FontanaSolarCleaning from "./pages/solar-cities/san-bernardino-county/FontanaSolarCleaning";
import GrandTerraceSolarCleaning from "./pages/solar-cities/san-bernardino-county/GrandTerraceSolarCleaning";
import HesperiaSolarCleaning from "./pages/solar-cities/san-bernardino-county/HesperiaSolarCleaning";
import HighlandSolarCleaning from "./pages/solar-cities/san-bernardino-county/HighlandSolarCleaning";
import LomaLindaSolarCleaning from "./pages/solar-cities/san-bernardino-county/LomaLindaSolarCleaning";
import MontclairSolarCleaning from "./pages/solar-cities/san-bernardino-county/MontclairSolarCleaning";
import NeedlesSolarCleaning from "./pages/solar-cities/san-bernardino-county/NeedlesSolarCleaning";
import OntarioSolarCleaning from "./pages/solar-cities/san-bernardino-county/OntarioSolarCleaning";
import RanchoCucamongaSolarCleaning from "./pages/solar-cities/san-bernardino-county/RanchoCucamongaSolarCleaning";
import RedlandsSolarCleaning from "./pages/solar-cities/san-bernardino-county/RedlandsSolarCleaning";
import RialtoSolarCleaning from "./pages/solar-cities/san-bernardino-county/RialtoSolarCleaning";
import TwentyninePalmsSolarCleaning from "./pages/solar-cities/san-bernardino-county/TwentyninePalmsSolarCleaning";
import UplandSolarCleaning from "./pages/solar-cities/san-bernardino-county/UplandSolarCleaning";
import VictorvilleSolarCleaning from "./pages/solar-cities/san-bernardino-county/VictorvilleSolarCleaning";
import YucaipaSolarCleaning from "./pages/solar-cities/san-bernardino-county/YucaipaSolarCleaning";
import YuccaValleySolarCleaning from "./pages/solar-cities/san-bernardino-county/YuccaValleySolarCleaning";

// Solar Panel Cleaning City Pages - San Diego County
import SanDiegoSolarCleaning from "./pages/solar-cities/san-diego-county/SanDiegoSolarCleaning";
import CarlsbadSolarCleaning from "./pages/solar-cities/san-diego-county/CarlsbadSolarCleaning";
import ChulaVistaSolarCleaning from "./pages/solar-cities/san-diego-county/ChulaVistaSolarCleaning";
import CoronadoSolarCleaning from "./pages/solar-cities/san-diego-county/CoronadoSolarCleaning";
import DelMarSolarCleaning from "./pages/solar-cities/san-diego-county/DelMarSolarCleaning";
import ElCajonSolarCleaning from "./pages/solar-cities/san-diego-county/ElCajonSolarCleaning";
import EncinitasSolarCleaning from "./pages/solar-cities/san-diego-county/EncinitasSolarCleaning";
import EscondidoSolarCleaning from "./pages/solar-cities/san-diego-county/EscondidoSolarCleaning";
import ImperialBeachSolarCleaning from "./pages/solar-cities/san-diego-county/ImperialBeachSolarCleaning";
import LaMesaSolarCleaning from "./pages/solar-cities/san-diego-county/LaMesaSolarCleaning";
import LemonGroveSolarCleaning from "./pages/solar-cities/san-diego-county/LemonGroveSolarCleaning";
import NationalCitySolarCleaning from "./pages/solar-cities/san-diego-county/NationalCitySolarCleaning";
import OceansideSolarCleaning from "./pages/solar-cities/san-diego-county/OceansideSolarCleaning";
import PowaySolarCleaning from "./pages/solar-cities/san-diego-county/PowaySolarCleaning";
import SanMarcosSolarCleaning from "./pages/solar-cities/san-diego-county/SanMarcosSolarCleaning";
import SanteeSolarCleaning from "./pages/solar-cities/san-diego-county/SanteeSolarCleaning";
import SolanaBeachSolarCleaning from "./pages/solar-cities/san-diego-county/SolanaBeachSolarCleaning";
import VistaSolarCleaning from "./pages/solar-cities/san-diego-county/VistaSolarCleaning";

// Solar Panel Cleaning City Pages - Ventura County
import CamarilloSolarCleaning from "./pages/solar-cities/ventura-county/CamarilloSolarCleaning";
import FillmoreSolarCleaning from "./pages/solar-cities/ventura-county/FillmoreSolarCleaning";
import MoorparkSolarCleaning from "./pages/solar-cities/ventura-county/MoorparkSolarCleaning";
import OjaiSolarCleaning from "./pages/solar-cities/ventura-county/OjaiSolarCleaning";
import OxnardSolarCleaning from "./pages/solar-cities/ventura-county/OxnardSolarCleaning";
import PortHuenemeSolarCleaning from "./pages/solar-cities/ventura-county/PortHuenemeSolarCleaning";
import SanBuenaventuraSolarCleaning from "./pages/solar-cities/ventura-county/SanBuenaventuraSolarCleaning";
import SantaPaulaSolarCleaning from "./pages/solar-cities/ventura-county/SantaPaulaSolarCleaning";
import SimiValleySolarCleaning from "./pages/solar-cities/ventura-county/SimiValleySolarCleaning";
import ThousandOaksSolarCleaning from "./pages/solar-cities/ventura-county/ThousandOaksSolarCleaning";

// Solar Panel Cleaning City Pages - Los Angeles County
import LosAngelesSolarCleaning from "./pages/solar-cities/los-angeles-county/LosAngelesSolarCleaning";
import LongBeachSolarCleaning from "./pages/solar-cities/los-angeles-county/LongBeachSolarCleaning";
import GlendaleSolarCleaning from "./pages/solar-cities/los-angeles-county/GlendaleSolarCleaning";
import PasadenaSolarCleaning from "./pages/solar-cities/los-angeles-county/PasadenaSolarCleaning";
import TorranceSolarCleaning from "./pages/solar-cities/los-angeles-county/TorranceSolarCleaning";
import PomonaSolarCleaning from "./pages/solar-cities/los-angeles-county/PomonaSolarCleaning";
import LancasterSolarCleaning from "./pages/solar-cities/los-angeles-county/LancasterSolarCleaning";
import PalmdaleSolarCleaning from "./pages/solar-cities/los-angeles-county/PalmdaleSolarCleaning";
import ElMonteSolarCleaning from "./pages/solar-cities/los-angeles-county/ElMonteSolarCleaning";
import DowneySolarCleaning from "./pages/solar-cities/los-angeles-county/DowneySolarCleaning";
import InglewoodSolarCleaning from "./pages/solar-cities/los-angeles-county/InglewoodSolarCleaning";
import WestCovinaSolarCleaning from "./pages/solar-cities/los-angeles-county/WestCovinaSolarCleaning";
import NorwalkSolarCleaning from "./pages/solar-cities/los-angeles-county/NorwalkSolarCleaning";
import BurbankSolarCleaning from "./pages/solar-cities/los-angeles-county/BurbankSolarCleaning";
import CovinaSolarCleaning from "./pages/solar-cities/los-angeles-county/CovinaSolarCleaning";
import HawthorneSolarCleaning from "./pages/solar-cities/los-angeles-county/HawthorneSolarCleaning";
import CarsonSolarCleaning from "./pages/solar-cities/los-angeles-county/CarsonSolarCleaning";
import ArcadiaSolarCleaning from "./pages/solar-cities/los-angeles-county/ArcadiaSolarCleaning";
import RedondoBeachSolarCleaning from "./pages/solar-cities/los-angeles-county/RedondoBeachSolarCleaning";
import MonroviaSolarCleaning from "./pages/solar-cities/los-angeles-county/MonroviaSolarCleaning";
import MontebeloSolarCleaning from "./pages/solar-cities/los-angeles-county/MontebeloSolarCleaning";
import WhittierSolarCleaning from "./pages/solar-cities/los-angeles-county/WhittierSolarCleaning";
import BaldwinParkSolarCleaning from "./pages/solar-cities/los-angeles-county/BaldwinParkSolarCleaning";
import ComptonSolarCleaning from "./pages/solar-cities/los-angeles-county/ComptonSolarCleaning";
import SantaMonicaSolarCleaning from "./pages/solar-cities/los-angeles-county/SantaMonicaSolarCleaning";
import AlhambraSolarCleaning from "./pages/solar-cities/los-angeles-county/AlhambraSolarCleaning";
import BeverlyHillsSolarCleaning from "./pages/solar-cities/los-angeles-county/BeverlyHillsSolarCleaning";
import SouthGateSolarCleaning from "./pages/solar-cities/los-angeles-county/SouthGateSolarCleaning";
import ManhattanBeachSolarCleaning from "./pages/solar-cities/los-angeles-county/ManhattanBeachSolarCleaning";
import RanchoPalosVerdesSolarCleaning from "./pages/solar-cities/los-angeles-county/RanchoP alosVerdesSolarCleaning";
import PicoRiveraSolarCleaning from "./pages/solar-cities/los-angeles-county/PicoRiveraSolarCleaning";
import LynwoodSolarCleaning from "./pages/solar-cities/los-angeles-county/LynwoodSolarCleaning";
import BellGardensSolarCleaning from "./pages/solar-cities/los-angeles-county/BellGardensSolarCleaning";
import SouthPasadenaSolarCleaning from "./pages/solar-cities/los-angeles-county/SouthPasadenaSolarCleaning";
import DuarteSolarCleaning from "./pages/solar-cities/los-angeles-county/DuarteSolarCleaning";
import LaVerneSolarCleaning from "./pages/solar-cities/los-angeles-county/LaVerneSolarCleaning";
import ParamountSolarCleaning from "./pages/solar-cities/los-angeles-county/ParamountSolarCleaning";
import GardenaSolarCleaning from "./pages/solar-cities/los-angeles-county/GardenaSolarCleaning";
import MontereyParkSolarCleaning from "./pages/solar-cities/los-angeles-county/MontereyParkSolarCleaning";
import AzusaSolarCleaning from "./pages/solar-cities/los-angeles-county/AzusaSolarCleaning";
import DiamondBarSolarCleaning from "./pages/solar-cities/los-angeles-county/Diamond BarSolarCleaning";
import CulverCitySolarCleaning from "./pages/solar-cities/los-angeles-county/CulverCitySolarCleaning";
import LaMiradaSolarCleaning from "./pages/solar-cities/los-angeles-county/LaMiradaSolarCleaning";
import ClaremontSolarCleaning from "./pages/solar-cities/los-angeles-county/ClaremontSolarCleaning";
import GlenoraSolarCleaning from "./pages/solar-cities/los-angeles-county/GlenoraSolarCleaning";
import ActonSolarCleaning from "./pages/solar-cities/los-angeles-county/ActonSolarCleaning";
import AgouraHillsSolarCleaning from "./pages/solar-cities/los-angeles-county/AgouraHillsSolarCleaning";
import AltadenaSolarCleaning from "./pages/solar-cities/los-angeles-county/AltadenaSolarCleaning";
import BellSolarCleaning from "./pages/solar-cities/los-angeles-county/BellSolarCleaning";
import BellflowerSolarCleaning from "./pages/solar-cities/los-angeles-county/BellflowerSolarCleaning";
import CalabasasSolarCleaning from "./pages/solar-cities/los-angeles-county/CalabasasSolarCleaning";
import CommerceSolarCleaning from "./pages/solar-cities/los-angeles-county/CommerceSolarCleaning";
import CudahySolarCleaning from "./pages/solar-cities/los-angeles-county/CudahySolarCleaning";
import ElSegundoSolarCleaning from "./pages/solar-cities/los-angeles-county/ElSegundoSolarCleaning";
import GlendoraSolarCleaning from "./pages/solar-cities/los-angeles-county/GlendoraSolarCleaning";
import HermosaBeachSolarCleaning from "./pages/solar-cities/los-angeles-county/HermosaBeachSolarCleaning";
import HiddenHillsSolarCleaning from "./pages/solar-cities/los-angeles-county/HiddenHillsSolarCleaning";
import HuntingtonParkSolarCleaning from "./pages/solar-cities/los-angeles-county/HuntingtonParkSolarCleaning";
import IndustrySolarCleaning from "./pages/solar-cities/los-angeles-county/IndustrySolarCleaning";
import IrwindaleSolarCleaning from "./pages/solar-cities/los-angeles-county/IrwindaleSolarCleaning";
import LaCanadaFlintridgeSolarCleaning from "./pages/solar-cities/los-angeles-county/LaCanadaFlintridgeSolarCleaning";
import LaPuenteSolarCleaning from "./pages/solar-cities/los-angeles-county/LaPuenteSolarCleaning";
import LakewoodSolarCleaning from "./pages/solar-cities/los-angeles-county/LakewoodSolarCleaning";
import LawndaleSolarCleaning from "./pages/solar-cities/los-angeles-county/LawndaleSolarCleaning";
import LomitaSolarCleaning from "./pages/solar-cities/los-angeles-county/LomitaSolarCleaning";
import MalibuSolarCleaning from "./pages/solar-cities/los-angeles-county/MalibuSolarCleaning";
import MaywoodSolarCleaning from "./pages/solar-cities/los-angeles-county/MaywoodSolarCleaning";
import RosemeadSolarCleaning from "./pages/solar-cities/los-angeles-county/RosemeadSolarCleaning";
import SanDimasSolarCleaning from "./pages/solar-cities/los-angeles-county/SanDimasSolarCleaning";
import SanFernandoSolarCleaning from "./pages/solar-cities/los-angeles-county/SanFernandoSolarCleaning";
import SanGabrielSolarCleaning from "./pages/solar-cities/los-angeles-county/SanGabrielSolarCleaning";
import SanMarinoSolarCleaning from "./pages/solar-cities/los-angeles-county/SanMarinoSolarCleaning";
import SantaClaritaSolarCleaning from "./pages/solar-cities/los-angeles-county/SantaClaritaSolarCleaning";
import SierraMadreSolarCleaning from "./pages/solar-cities/los-angeles-county/SierraMadreSolarCleaning";
import SignalHillSolarCleaning from "./pages/solar-cities/los-angeles-county/SignalHillSolarCleaning";
import SouthElMonteSolarCleaning from "./pages/solar-cities/los-angeles-county/SouthElMonteSolarCleaning";
import TempleCitySolarCleaning from "./pages/solar-cities/los-angeles-county/TempleCitySolarCleaning";
import WalnutSolarCleaning from "./pages/solar-cities/los-angeles-county/WalnutSolarCleaning";
import WestHollywoodSolarCleaning from "./pages/solar-cities/los-angeles-county/WestHollywoodSolarCleaning";
import WestlakeVillageSolarCleaning from "./pages/solar-cities/los-angeles-county/WestlakeVillageSolarCleaning";

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
          
          {/* Solar Panel Cleaning - Orange County */}
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
          <Route path="/solar-panel-cleaning/capistrano-beach" element={<CapistranoBeachSolarCleaning />} />
          <Route path="/solar-panel-cleaning/corona-del-mar" element={<CoronaDelMarSolarCleaning />} />
          <Route path="/solar-panel-cleaning/coto-de-caza" element={<CotoDeCazaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/cypress" element={<CypressSolarCleaning />} />
          <Route path="/solar-panel-cleaning/dana-point" element={<DanaPointSolarCleaning />} />
          <Route path="/solar-panel-cleaning/foothill-ranch" element={<FoothillRanchSolarCleaning />} />
          <Route path="/solar-panel-cleaning/fountain-valley" element={<FountainValleySolarCleaning />} />
          <Route path="/solar-panel-cleaning/la-habra" element={<LaHabraSolarCleaning />} />
          <Route path="/solar-panel-cleaning/la-palma" element={<LaPalmaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/laguna-hills" element={<LagunaHillsSolarCleaning />} />
          <Route path="/solar-panel-cleaning/laguna-woods" element={<LagunaWoodsSolarCleaning />} />
          <Route path="/solar-panel-cleaning/los-alamitos" element={<LosAlamitosSolarCleaning />} />
          <Route path="/solar-panel-cleaning/los-flores" element={<LosFloresSolarCleaning />} />
          <Route path="/solar-panel-cleaning/newport-coast" element={<NewportCoastSolarCleaning />} />
          <Route path="/solar-panel-cleaning/placentia" element={<PlacentiaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/rancho-santa-margarita" element={<RanchoSantaMargaritaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/seal-beach" element={<SealBeachSolarCleaning />} />
          <Route path="/solar-panel-cleaning/silverado" element={<SilveradoSolarCleaning />} />
          <Route path="/solar-panel-cleaning/stanton" element={<StantonSolarCleaning />} />
          <Route path="/solar-panel-cleaning/talega" element={<TalegaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/trabuco-canyon" element={<TrabucoCanyonSolarCleaning />} />
          <Route path="/solar-panel-cleaning/villa-park" element={<VillaParkSolarCleaning />} />
          
          {/* Solar Panel Cleaning - Riverside County */}
          <Route path="/solar-panel-cleaning/riverside" element={<RiversideSolarCleaning />} />
          <Route path="/solar-panel-cleaning/corona" element={<CoronaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/murrieta" element={<MurrietaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/temecula" element={<TemeculaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/banning" element={<BanningSolarCleaning />} />
          <Route path="/solar-panel-cleaning/beaumont" element={<BeaumontSolarCleaning />} />
          <Route path="/solar-panel-cleaning/blythe" element={<BlytheSolarCleaning />} />
          <Route path="/solar-panel-cleaning/calimesa" element={<CalimesaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/canyon-lake" element={<CanyonLakeSolarCleaning />} />
          <Route path="/solar-panel-cleaning/cathedral-city" element={<CathedralCitySolarCleaning />} />
          <Route path="/solar-panel-cleaning/coachella" element={<CoachellaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/desert-hot-springs" element={<DesertHotSpringsSolarCleaning />} />
          <Route path="/solar-panel-cleaning/eastvale" element={<EastvaleSolarCleaning />} />
          <Route path="/solar-panel-cleaning/hemet" element={<HemetSolarCleaning />} />
          <Route path="/solar-panel-cleaning/indian-wells" element={<IndianWellsSolarCleaning />} />
          <Route path="/solar-panel-cleaning/indio" element={<IndioSolarCleaning />} />
          <Route path="/solar-panel-cleaning/jurupa-valley" element={<JurupaValleySolarCleaning />} />
          <Route path="/solar-panel-cleaning/lake-elsinore" element={<LakeElsinoreSolarCleaning />} />
          <Route path="/solar-panel-cleaning/la-quinta" element={<LaQuintaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/menifee" element={<MenifeeSolarCleaning />} />
          <Route path="/solar-panel-cleaning/moreno-valley" element={<MorenoValleySolarCleaning />} />
          <Route path="/solar-panel-cleaning/norco" element={<NorcoSolarCleaning />} />
          <Route path="/solar-panel-cleaning/palm-desert" element={<PalmDesertSolarCleaning />} />
          <Route path="/solar-panel-cleaning/palm-springs" element={<PalmSpringsSolarCleaning />} />
          <Route path="/solar-panel-cleaning/perris" element={<PerrisSolarCleaning />} />
          <Route path="/solar-panel-cleaning/rancho-mirage" element={<RanchoMirageSolarCleaning />} />
          <Route path="/solar-panel-cleaning/san-jacinto" element={<SanJacintoSolarCleaning />} />
          <Route path="/solar-panel-cleaning/wildomar" element={<WildomarSolarCleaning />} />
          
          {/* Solar Panel Cleaning - San Bernardino County */}
          <Route path="/solar-panel-cleaning/san-bernardino" element={<SanBernardinoSolarCleaning />} />
          <Route path="/solar-panel-cleaning/adelanto" element={<AdelantoSolarCleaning />} />
          <Route path="/solar-panel-cleaning/apple-valley" element={<AppleValleySolarCleaning />} />
          <Route path="/solar-panel-cleaning/barstow" element={<BarstowSolarCleaning />} />
          <Route path="/solar-panel-cleaning/big-bear-city" element={<BigBearCitySolarCleaning />} />
          <Route path="/solar-panel-cleaning/big-bear-lake" element={<BigBearLakeSolarCleaning />} />
          <Route path="/solar-panel-cleaning/chino" element={<ChinoSolarCleaning />} />
          <Route path="/solar-panel-cleaning/chino-hills" element={<ChinoHillsSolarCleaning />} />
          <Route path="/solar-panel-cleaning/colton" element={<ColtonSolarCleaning />} />
          <Route path="/solar-panel-cleaning/fontana" element={<FontanaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/grand-terrace" element={<GrandTerraceSolarCleaning />} />
          <Route path="/solar-panel-cleaning/hesperia" element={<HesperiaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/highland" element={<HighlandSolarCleaning />} />
          <Route path="/solar-panel-cleaning/loma-linda" element={<LomaLindaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/montclair" element={<MontclairSolarCleaning />} />
          <Route path="/solar-panel-cleaning/needles" element={<NeedlesSolarCleaning />} />
          <Route path="/solar-panel-cleaning/ontario" element={<OntarioSolarCleaning />} />
          <Route path="/solar-panel-cleaning/rancho-cucamonga" element={<RanchoCucamongaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/redlands" element={<RedlandsSolarCleaning />} />
          <Route path="/solar-panel-cleaning/rialto" element={<RialtoSolarCleaning />} />
          <Route path="/solar-panel-cleaning/twentynine-palms" element={<TwentyninePalmsSolarCleaning />} />
          <Route path="/solar-panel-cleaning/upland" element={<UplandSolarCleaning />} />
          <Route path="/solar-panel-cleaning/victorville" element={<VictorvilleSolarCleaning />} />
          <Route path="/solar-panel-cleaning/yucaipa" element={<YucaipaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/yucca-valley" element={<YuccaValleySolarCleaning />} />
          
          {/* Solar Panel Cleaning - San Diego County */}
          <Route path="/solar-panel-cleaning/san-diego" element={<SanDiegoSolarCleaning />} />
          <Route path="/solar-panel-cleaning/carlsbad" element={<CarlsbadSolarCleaning />} />
          <Route path="/solar-panel-cleaning/chula-vista" element={<ChulaVistaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/coronado" element={<CoronadoSolarCleaning />} />
          <Route path="/solar-panel-cleaning/del-mar" element={<DelMarSolarCleaning />} />
          <Route path="/solar-panel-cleaning/el-cajon" element={<ElCajonSolarCleaning />} />
          <Route path="/solar-panel-cleaning/encinitas" element={<EncinitasSolarCleaning />} />
          <Route path="/solar-panel-cleaning/escondido" element={<EscondidoSolarCleaning />} />
          <Route path="/solar-panel-cleaning/imperial-beach" element={<ImperialBeachSolarCleaning />} />
          <Route path="/solar-panel-cleaning/la-mesa" element={<LaMesaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/lemon-grove" element={<LemonGroveSolarCleaning />} />
          <Route path="/solar-panel-cleaning/national-city" element={<NationalCitySolarCleaning />} />
          <Route path="/solar-panel-cleaning/oceanside" element={<OceansideSolarCleaning />} />
          <Route path="/solar-panel-cleaning/poway" element={<PowaySolarCleaning />} />
          <Route path="/solar-panel-cleaning/san-marcos" element={<SanMarcosSolarCleaning />} />
          <Route path="/solar-panel-cleaning/santee" element={<SanteeSolarCleaning />} />
          <Route path="/solar-panel-cleaning/solana-beach" element={<SolanaBeachSolarCleaning />} />
          <Route path="/solar-panel-cleaning/vista" element={<VistaSolarCleaning />} />
          
          {/* Solar Panel Cleaning - Ventura County */}
          <Route path="/solar-panel-cleaning/camarillo" element={<CamarilloSolarCleaning />} />
          <Route path="/solar-panel-cleaning/fillmore" element={<FillmoreSolarCleaning />} />
          <Route path="/solar-panel-cleaning/moorpark" element={<MoorparkSolarCleaning />} />
          <Route path="/solar-panel-cleaning/ojai" element={<OjaiSolarCleaning />} />
          <Route path="/solar-panel-cleaning/oxnard" element={<OxnardSolarCleaning />} />
          <Route path="/solar-panel-cleaning/port-hueneme" element={<PortHuenemeSolarCleaning />} />
          <Route path="/solar-panel-cleaning/san-buenaventura" element={<SanBuenaventuraSolarCleaning />} />
          <Route path="/solar-panel-cleaning/santa-paula" element={<SantaPaulaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/simi-valley" element={<SimiValleySolarCleaning />} />
          <Route path="/solar-panel-cleaning/thousand-oaks" element={<ThousandOaksSolarCleaning />} />
          
          {/* Solar Panel Cleaning - Los Angeles County */}
          <Route path="/solar-panel-cleaning/los-angeles" element={<LosAngelesSolarCleaning />} />
          <Route path="/solar-panel-cleaning/long-beach" element={<LongBeachSolarCleaning />} />
          <Route path="/solar-panel-cleaning/glendale" element={<GlendaleSolarCleaning />} />
          <Route path="/solar-panel-cleaning/pasadena" element={<PasadenaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/torrance" element={<TorranceSolarCleaning />} />
          <Route path="/solar-panel-cleaning/pomona" element={<PomonaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/lancaster" element={<LancasterSolarCleaning />} />
          <Route path="/solar-panel-cleaning/palmdale" element={<PalmdaleSolarCleaning />} />
          <Route path="/solar-panel-cleaning/el-monte" element={<ElMonteSolarCleaning />} />
          <Route path="/solar-panel-cleaning/downey" element={<DowneySolarCleaning />} />
          <Route path="/solar-panel-cleaning/inglewood" element={<InglewoodSolarCleaning />} />
          <Route path="/solar-panel-cleaning/west-covina" element={<WestCovinaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/norwalk" element={<NorwalkSolarCleaning />} />
          <Route path="/solar-panel-cleaning/burbank" element={<BurbankSolarCleaning />} />
          <Route path="/solar-panel-cleaning/covina" element={<CovinaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/hawthorne" element={<HawthorneSolarCleaning />} />
          <Route path="/solar-panel-cleaning/carson" element={<CarsonSolarCleaning />} />
          <Route path="/solar-panel-cleaning/arcadia" element={<ArcadiaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/redondo-beach" element={<RedondoBeachSolarCleaning />} />
          <Route path="/solar-panel-cleaning/monrovia" element={<MonroviaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/montebelo" element={<MontebeloSolarCleaning />} />
          <Route path="/solar-panel-cleaning/whittier" element={<WhittierSolarCleaning />} />
          <Route path="/solar-panel-cleaning/baldwin-park" element={<BaldwinParkSolarCleaning />} />
          <Route path="/solar-panel-cleaning/compton" element={<ComptonSolarCleaning />} />
          <Route path="/solar-panel-cleaning/santa-monica" element={<SantaMonicaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/alhambra" element={<AlhambraSolarCleaning />} />
          <Route path="/solar-panel-cleaning/beverly-hills" element={<BeverlyHillsSolarCleaning />} />
          <Route path="/solar-panel-cleaning/south-gate" element={<SouthGateSolarCleaning />} />
          <Route path="/solar-panel-cleaning/manhattan-beach" element={<ManhattanBeachSolarCleaning />} />
          <Route path="/solar-panel-cleaning/rancho-palos-verdes" element={<RanchoPalosVerdesSolarCleaning />} />
          <Route path="/solar-panel-cleaning/pico-rivera" element={<PicoRiveraSolarCleaning />} />
          <Route path="/solar-panel-cleaning/lynwood" element={<LynwoodSolarCleaning />} />
          <Route path="/solar-panel-cleaning/bell-gardens" element={<BellGardensSolarCleaning />} />
          <Route path="/solar-panel-cleaning/south-pasadena" element={<SouthPasadenaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/duarte" element={<DuarteSolarCleaning />} />
          <Route path="/solar-panel-cleaning/la-verne" element={<LaVerneSolarCleaning />} />
          <Route path="/solar-panel-cleaning/paramount" element={<ParamountSolarCleaning />} />
          <Route path="/solar-panel-cleaning/gardena" element={<GardenaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/monterey-park" element={<MontereyParkSolarCleaning />} />
          <Route path="/solar-panel-cleaning/azusa" element={<AzusaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/diamond-bar" element={<DiamondBarSolarCleaning />} />
          <Route path="/solar-panel-cleaning/culver-city" element={<CulverCitySolarCleaning />} />
          <Route path="/solar-panel-cleaning/la-mirada" element={<LaMiradaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/claremont" element={<ClaremontSolarCleaning />} />
          <Route path="/solar-panel-cleaning/glenora" element={<GlenoraSolarCleaning />} />
          <Route path="/solar-panel-cleaning/acton" element={<ActonSolarCleaning />} />
          <Route path="/solar-panel-cleaning/agoura-hills" element={<AgouraHillsSolarCleaning />} />
          <Route path="/solar-panel-cleaning/altadena" element={<AltadenaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/bell" element={<BellSolarCleaning />} />
          <Route path="/solar-panel-cleaning/bellflower" element={<BellflowerSolarCleaning />} />
          <Route path="/solar-panel-cleaning/calabasas" element={<CalabasasSolarCleaning />} />
          <Route path="/solar-panel-cleaning/commerce" element={<CommerceSolarCleaning />} />
          <Route path="/solar-panel-cleaning/cudahy" element={<CudahySolarCleaning />} />
          <Route path="/solar-panel-cleaning/el-segundo" element={<ElSegundoSolarCleaning />} />
          <Route path="/solar-panel-cleaning/glendora" element={<GlendoraSolarCleaning />} />
          <Route path="/solar-panel-cleaning/hermosa-beach" element={<HermosaBeachSolarCleaning />} />
          <Route path="/solar-panel-cleaning/hidden-hills" element={<HiddenHillsSolarCleaning />} />
          <Route path="/solar-panel-cleaning/huntington-park" element={<HuntingtonParkSolarCleaning />} />
          <Route path="/solar-panel-cleaning/industry" element={<IndustrySolarCleaning />} />
          <Route path="/solar-panel-cleaning/irwindale" element={<IrwindaleSolarCleaning />} />
          <Route path="/solar-panel-cleaning/la-canada-flintridge" element={<LaCanadaFlintridgeSolarCleaning />} />
          <Route path="/solar-panel-cleaning/la-puente" element={<LaPuenteSolarCleaning />} />
          <Route path="/solar-panel-cleaning/lakewood" element={<LakewoodSolarCleaning />} />
          <Route path="/solar-panel-cleaning/lawndale" element={<LawndaleSolarCleaning />} />
          <Route path="/solar-panel-cleaning/lomita" element={<LomitaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/malibu" element={<MalibuSolarCleaning />} />
          <Route path="/solar-panel-cleaning/maywood" element={<MaywoodSolarCleaning />} />
          <Route path="/solar-panel-cleaning/rosemead" element={<RosemeadSolarCleaning />} />
          <Route path="/solar-panel-cleaning/san-dimas" element={<SanDimasSolarCleaning />} />
          <Route path="/solar-panel-cleaning/san-fernando" element={<SanFernandoSolarCleaning />} />
          <Route path="/solar-panel-cleaning/san-gabriel" element={<SanGabrielSolarCleaning />} />
          <Route path="/solar-panel-cleaning/san-marino" element={<SanMarinoSolarCleaning />} />
          <Route path="/solar-panel-cleaning/santa-clarita" element={<SantaClaritaSolarCleaning />} />
          <Route path="/solar-panel-cleaning/sierra-madre" element={<SierraMadreSolarCleaning />} />
          <Route path="/solar-panel-cleaning/signal-hill" element={<SignalHillSolarCleaning />} />
          <Route path="/solar-panel-cleaning/south-el-monte" element={<SouthElMonteSolarCleaning />} />
          <Route path="/solar-panel-cleaning/temple-city" element={<TempleCitySolarCleaning />} />
          <Route path="/solar-panel-cleaning/walnut" element={<WalnutSolarCleaning />} />
          <Route path="/solar-panel-cleaning/west-hollywood" element={<WestHollywoodSolarCleaning />} />
          <Route path="/solar-panel-cleaning/westlake-village" element={<WestlakeVillageSolarCleaning />} />
          
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
