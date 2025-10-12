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

// Pressure Washing Service Pages
import CommercialExteriorCleaning from "./pages/pressure-washing/commercial/CommercialExteriorCleaning";
import ConcreteCleaning from "./pages/pressure-washing/commercial/ConcreteCleaning";
import ExteriorBuildingWash from "./pages/pressure-washing/commercial/ExteriorBuildingWash";
import GraffitiRemovalPW from "./pages/pressure-washing/commercial/GraffitiRemoval";
import TrashEnclosureCleaning from "./pages/pressure-washing/commercial/TrashEnclosureCleaning";
import RoofCleaningPW from "./pages/pressure-washing/commercial/RoofCleaning";
import SignageCleaning from "./pages/pressure-washing/commercial/SignageCleaning";
import ParkingGarageCleaning from "./pages/pressure-washing/commercial/ParkingGarageCleaning";
import AwningCanopyCleaning from "./pages/pressure-washing/commercial/AwningCanopyCleaning";
import StormDrainCleaning from "./pages/pressure-washing/commercial/StormDrainCleaning";
import DeckPatioCleaning from "./pages/pressure-washing/residential/DeckPatioCleaning";
import GarageDrivewayClean from "./pages/pressure-washing/residential/GarageDrivewayClean";
import RoofGutterCleaning from "./pages/pressure-washing/residential/RoofGutterCleaning";

// Pressure Washing City Pages - Orange County (44 cities)
import IrvinePressureWashing from "./pages/pressure-washing-cities/orange-county/IrvinePressureWashing";
import AnaheimPressureWashing from "./pages/pressure-washing-cities/orange-county/AnaheimPressureWashing";
import NewportBeachPressureWashing from "./pages/pressure-washing-cities/orange-county/NewportBeachPressureWashing";
import AlisoViejoPressureWashing from "./pages/pressure-washing-cities/orange-county/AlisoViejoPressureWashing";
import BreaPressureWashing from "./pages/pressure-washing-cities/orange-county/BreaPressureWashing";
import BuenaParkPressureWashing from "./pages/pressure-washing-cities/orange-county/BuenaParkPressureWashing";
import CapistranoBeachPressureWashing from "./pages/pressure-washing-cities/orange-county/CapistranoBeachPressureWashing";
import CoronaDelMarPressureWashing from "./pages/pressure-washing-cities/orange-county/CoronaDelMarPressureWashing";
import CostaMesaPressureWashing from "./pages/pressure-washing-cities/orange-county/CostaMesaPressureWashing";
import CotoDeCazaPressureWashing from "./pages/pressure-washing-cities/orange-county/CotoDeCazaPressureWashing";
import CypressPressureWashing from "./pages/pressure-washing-cities/orange-county/CypressPressureWashing";
import DanaPointPressureWashing from "./pages/pressure-washing-cities/orange-county/DanaPointPressureWashing";
import FoothillRanchPressureWashing from "./pages/pressure-washing-cities/orange-county/FoothillRanchPressureWashing";
import FountainValleyPressureWashing from "./pages/pressure-washing-cities/orange-county/FountainValleyPressureWashing";
import FullertonPressureWashing from "./pages/pressure-washing-cities/orange-county/FullertonPressureWashing";
import GardenGrovePressureWashing from "./pages/pressure-washing-cities/orange-county/GardenGrovePressureWashing";
import HuntingtonBeachPressureWashing from "./pages/pressure-washing-cities/orange-county/HuntingtonBeachPressureWashing";
import LaHabraPressureWashing from "./pages/pressure-washing-cities/orange-county/LaHabraPressureWashing";
import LaPalmaPressureWashing from "./pages/pressure-washing-cities/orange-county/LaPalmaPressureWashing";
import LagunaBeachPressureWashing from "./pages/pressure-washing-cities/orange-county/LagunaBeachPressureWashing";
import LagunaHillsPressureWashing from "./pages/pressure-washing-cities/orange-county/LagunaHillsPressureWashing";
import LagunaNiguelPressureWashing from "./pages/pressure-washing-cities/orange-county/LagunaNiguelPressureWashing";
import LagunaWoodsPressureWashing from "./pages/pressure-washing-cities/orange-county/LagunaWoodsPressureWashing";
import LakeForestPressureWashing from "./pages/pressure-washing-cities/orange-county/LakeForestPressureWashing";
import LosAlamitosPressureWashing from "./pages/pressure-washing-cities/orange-county/LosAlamitosPressureWashing";
import LosFloresPressureWashing from "./pages/pressure-washing-cities/orange-county/LosFloresPressureWashing";
import MissionViejoPressureWashing from "./pages/pressure-washing-cities/orange-county/MissionViejoPressureWashing";
import NewportCoastPressureWashing from "./pages/pressure-washing-cities/orange-county/NewportCoastPressureWashing";
import OrangePressureWashing from "./pages/pressure-washing-cities/orange-county/OrangePressureWashing";
import PlacentiaPressureWashing from "./pages/pressure-washing-cities/orange-county/PlacentiaPressureWashing";
import RanchoSantaMargaritaPressureWashing from "./pages/pressure-washing-cities/orange-county/RanchoSantaMargaritaPressureWashing";
import SanClementePressureWashing from "./pages/pressure-washing-cities/orange-county/SanClementePressureWashing";
import SanJuanCapistranoPressureWashing from "./pages/pressure-washing-cities/orange-county/SanJuanCapistranoPressureWashing";
import SantaAnaPressureWashing from "./pages/pressure-washing-cities/orange-county/SantaAnaPressureWashing";
import SealBeachPressureWashing from "./pages/pressure-washing-cities/orange-county/SealBeachPressureWashing";
import SilveradoPressureWashing from "./pages/pressure-washing-cities/orange-county/SilveradoPressureWashing";
import StantonPressureWashing from "./pages/pressure-washing-cities/orange-county/StantonPressureWashing";
import TalegaPressureWashing from "./pages/pressure-washing-cities/orange-county/TalegaPressureWashing";
import TrabucoCanyonPressureWashing from "./pages/pressure-washing-cities/orange-county/TrabucoCanyonPressureWashing";
import TustinPressureWashing from "./pages/pressure-washing-cities/orange-county/TustinPressureWashing";
import VillaParkPressureWashing from "./pages/pressure-washing-cities/orange-county/VillaParkPressureWashing";
import WestminsterPressureWashing from "./pages/pressure-washing-cities/orange-county/WestminsterPressureWashing";
import YorbaLindaPressureWashing from "./pages/pressure-washing-cities/orange-county/YorbaLindaPressureWashing";
import LaderaRanchPressureWashing from "./pages/pressure-washing-cities/orange-county/LaderaRanchPressureWashing";

// Pressure Washing City Pages - Riverside County (28 cities)
import RiversidePressureWashing from "./pages/pressure-washing-cities/riverside-county/RiversidePressureWashing";
import CoronaPressureWashing from "./pages/pressure-washing-cities/riverside-county/CoronaPressureWashing";
import BanningPressureWashing from "./pages/pressure-washing-cities/riverside-county/BanningPressureWashing";
import BeaumontPressureWashing from "./pages/pressure-washing-cities/riverside-county/BeaumontPressureWashing";
import BlythePressureWashing from "./pages/pressure-washing-cities/riverside-county/BlythePressureWashing";
import CalimesaPressureWashing from "./pages/pressure-washing-cities/riverside-county/CalimesaPressureWashing";
import CanyonLakePressureWashing from "./pages/pressure-washing-cities/riverside-county/CanyonLakePressureWashing";
import CathedralCityPressureWashing from "./pages/pressure-washing-cities/riverside-county/CathedralCityPressureWashing";
import CoachellaPressureWashing from "./pages/pressure-washing-cities/riverside-county/CoachellaPressureWashing";
import DesertHotSpringsPressureWashing from "./pages/pressure-washing-cities/riverside-county/DesertHotSpringsPressureWashing";
import EastvalePressureWashing from "./pages/pressure-washing-cities/riverside-county/EastvalePressureWashing";
import HemetPressureWashing from "./pages/pressure-washing-cities/riverside-county/HemetPressureWashing";
import IndianWellsPressureWashing from "./pages/pressure-washing-cities/riverside-county/IndianWellsPressureWashing";
import IndioPressureWashing from "./pages/pressure-washing-cities/riverside-county/IndioPressureWashing";
import JurupaValleyPressureWashing from "./pages/pressure-washing-cities/riverside-county/JurupaValleyPressureWashing";
import LakeElsinorePressureWashing from "./pages/pressure-washing-cities/riverside-county/LakeElsinorePressureWashing";
import LaQuintaPressureWashing from "./pages/pressure-washing-cities/riverside-county/LaQuintaPressureWashing";
import MenifeePressureWashing from "./pages/pressure-washing-cities/riverside-county/MenifeePressureWashing";
import MorenoValleyPressureWashing from "./pages/pressure-washing-cities/riverside-county/MorenoValleyPressureWashing";
import MurrietaPressureWashing from "./pages/pressure-washing-cities/riverside-county/MurrietaPressureWashing";
import NorcoPressureWashing from "./pages/pressure-washing-cities/riverside-county/NorcoPressureWashing";
import PalmDesertPressureWashing from "./pages/pressure-washing-cities/riverside-county/PalmDesertPressureWashing";
import PalmSpringsPressureWashing from "./pages/pressure-washing-cities/riverside-county/PalmSpringsPressureWashing";
import PerrisPressureWashing from "./pages/pressure-washing-cities/riverside-county/PerrisPressureWashing";
import RanchoMiragePressureWashing from "./pages/pressure-washing-cities/riverside-county/RanchoMiragePressureWashing";
import SanJacintoPressureWashing from "./pages/pressure-washing-cities/riverside-county/SanJacintoPressureWashing";
import TemeculaPressureWashing from "./pages/pressure-washing-cities/riverside-county/TemeculaPressureWashing";
import WildomarPressureWashing from "./pages/pressure-washing-cities/riverside-county/WildomarPressureWashing";

// Pressure Washing City Pages - San Bernardino County (45 cities)
import SanBernardinoPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/SanBernardinoPressureWashing";
import AdelantoPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/AdelantoPressureWashing";
import AppleValleyPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/AppleValleyPressureWashing";
import BarstowPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/BarstowPressureWashing";
import BigBearCityPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/BigBearCityPressureWashing";
import BigBearLakePressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/BigBearLakePressureWashing";
import ChinoPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/ChinoPressureWashing";
import ChinoHillsPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/ChinoHillsPressureWashing";
import ColtonPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/ColtonPressureWashing";
import FontanaPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/FontanaPressureWashing";
import GrandTerracePressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/GrandTerracePressureWashing";
import HesperiaPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/HesperiaPressureWashing";
import HighlandPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/HighlandPressureWashing";
import LomaLindaPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/LomaLindaPressureWashing";
import MontclairPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/MontclairPressureWashing";
import NeedlesPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/NeedlesPressureWashing";
import OntarioPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/OntarioPressureWashing";
import RanchoCucamongaPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/RanchoCucamongaPressureWashing";
import RedlandsPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/RedlandsPressureWashing";
import RialtoPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/RialtoPressureWashing";
import UplandPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/UplandPressureWashing";
import VictorvillePressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/VictorvillePressureWashing";
import YucaipaPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/YucaipaPressureWashing";
import YuccaValleyPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/YuccaValleyPressureWashing";
import TwentyninePalmsPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/TwentyninePalmsPressureWashing";
import BakerPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/BakerPressureWashing";
import BloomingtonPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/BloomingtonPressureWashing";
import CrestlinePressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/CrestlinePressureWashing";
import LakeArrowheadPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/LakeArrowheadPressureWashing";
import LucerneValleyPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/LucerneValleyPressureWashing";
import MuscoyPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/MuscoyPressureWashing";
import OroGrandePressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/OroGrandePressureWashing";
import PhelanPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/PhelanPressureWashing";
import RimforestPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/RimforestPressureWashing";
import RunningSpringsPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/RunningSpringsPressureWashing";
import SilverLakesPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/SilverLakesPressureWashing";
import SpringValleyLakePressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/SpringValleyLakePressureWashing";
import SugarloafPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/SugarloafPressureWashing";
import TronaPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/TronaPressureWashing";
import TwinPeaksPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/TwinPeaksPressureWashing";
import WrightwoodPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/WrightwoodPressureWashing";
import JoshuaTreePressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/JoshuaTreePressureWashing";
import LytleCreekPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/LytleCreekPressureWashing";
import MentonePressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/MentonePressureWashing";
import OakGlenPressureWashing from "./pages/pressure-washing-cities/san-bernardino-county/OakGlenPressureWashing";

// Pressure Washing City Pages - San Diego County (18 cities)
import SanDiegoPressureWashing from "./pages/pressure-washing-cities/san-diego-county/SanDiegoPressureWashing";
import CarlsbadPressureWashing from "./pages/pressure-washing-cities/san-diego-county/CarlsbadPressureWashing";
import ChulaVistaPressureWashing from "./pages/pressure-washing-cities/san-diego-county/ChulaVistaPressureWashing";
import CoronadoPressureWashing from "./pages/pressure-washing-cities/san-diego-county/CoronadoPressureWashing";
import DelMarPressureWashing from "./pages/pressure-washing-cities/san-diego-county/DelMarPressureWashing";
import ElCajonPressureWashing from "./pages/pressure-washing-cities/san-diego-county/ElCajonPressureWashing";
import EncinitasPressureWashing from "./pages/pressure-washing-cities/san-diego-county/EncinitasPressureWashing";
import EscondidoPressureWashing from "./pages/pressure-washing-cities/san-diego-county/EscondidoPressureWashing";
import ImperialBeachPressureWashing from "./pages/pressure-washing-cities/san-diego-county/ImperialBeachPressureWashing";
import LaMesaPressureWashing from "./pages/pressure-washing-cities/san-diego-county/LaMesaPressureWashing";
import LemonGrovePressureWashing from "./pages/pressure-washing-cities/san-diego-county/LemonGrovePressureWashing";
import NationalCityPressureWashing from "./pages/pressure-washing-cities/san-diego-county/NationalCityPressureWashing";
import OceansidePressureWashing from "./pages/pressure-washing-cities/san-diego-county/OceansidePressureWashing";
import PowayPressureWashing from "./pages/pressure-washing-cities/san-diego-county/PowayPressureWashing";
import SanMarcosPressureWashing from "./pages/pressure-washing-cities/san-diego-county/SanMarcosPressureWashing";
import SanteePressureWashing from "./pages/pressure-washing-cities/san-diego-county/SanteePressureWashing";
import SolanaBeachPressureWashing from "./pages/pressure-washing-cities/san-diego-county/SolanaBeachPressureWashing";
import VistaPressureWashing from "./pages/pressure-washing-cities/san-diego-county/VistaPressureWashing";

// Pressure Washing City Pages - Ventura County (10 cities)
import OxnardPressureWashing from "./pages/pressure-washing-cities/ventura-county/OxnardPressureWashing";
import CamarilloPressureWashing from "./pages/pressure-washing-cities/ventura-county/CamarilloPressureWashing";
import FillmorePressureWashing from "./pages/pressure-washing-cities/ventura-county/FillmorePressureWashing";
import MoorparkPressureWashing from "./pages/pressure-washing-cities/ventura-county/MoorparkPressureWashing";
import OjaiPressureWashing from "./pages/pressure-washing-cities/ventura-county/OjaiPressureWashing";
import PortHuenemePressureWashing from "./pages/pressure-washing-cities/ventura-county/PortHuenemePressureWashing";
import VenturaPressureWashing from "./pages/pressure-washing-cities/ventura-county/VenturaPressureWashing";
import SantaPaulaPressureWashing from "./pages/pressure-washing-cities/ventura-county/SantaPaulaPressureWashing";
import SimiValleyPressureWashing from "./pages/pressure-washing-cities/ventura-county/SimiValleyPressureWashing";
import ThousandOaksPressureWashing from "./pages/pressure-washing-cities/ventura-county/ThousandOaksPressureWashing";

// Pressure Washing City Pages - Los Angeles County (144 cities)
import LosAngelesPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/LosAngelesPressureWashing";
import ActonPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/ActonPressureWashing";
import AgouraHillsPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/AgouraHillsPressureWashing";
import AlhambraPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/AlhambraPressureWashing";
import AltadenaPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/AltadenaPressureWashing";
import ArcadiaPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/ArcadiaPressureWashing";
import AzusaPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/AzusaPressureWashing";
import BaldwinParkPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/BaldwinParkPressureWashing";
import BellPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/BellPressureWashing";
import BellGardensPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/BellGardensPressureWashing";
import BellflowerPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/BellflowerPressureWashing";
import BeverlyHillsPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/BeverlyHillsPressureWashing";
import BurbankPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/BurbankPressureWashing";
import CalabasasPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/CalabasasPressureWashing";
import CarsonPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/CarsonPressureWashing";
import CitrusHeightsPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/CitrusHeightsPressureWashing";
import CommercePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/CommercePressureWashing";
import ComptonPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/ComptonPressureWashing";
import CovinaPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/CovinaPressureWashing";
import CudahyPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/CudahyPressureWashing";
import CulverCityPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/CulverCityPressureWashing";
import DiamondBarPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/DiamondBarPressureWashing";
import DowneyPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/DowneyPressureWashing";
import DuartePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/DuartePressureWashing";
import ElMontePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/ElMontePressureWashing";
import ElSegundoPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/ElSegundoPressureWashing";
import GardenaPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/GardenaPressureWashing";
import GlendalePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/GlendalePressureWashing";
import GlendoraPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/GlendoraPressureWashing";
import HawthornePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/HawthornePressureWashing";
import HermosaBeachPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/HermosaBeachPressureWashing";
import HiddenHillsPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/HiddenHillsPressureWashing";
import HuntingtonParkPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/HuntingtonParkPressureWashing";
import IndustryPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/IndustryPressureWashing";
import InglewoodPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/InglewoodPressureWashing";
import IrwindalePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/IrwindalePressureWashing";
import LaCanadaFlintridgePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/LaCanadaFlintridgePressureWashing";
import LaMiradaPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/LaMiradaPressureWashing";
import LaPuentePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/LaPuentePressureWashing";
import LaVernePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/LaVernePressureWashing";
import LakewoodPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/LakewoodPressureWashing";
import LancasterPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/LancasterPressureWashing";
import LawndalePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/LawndalePressureWashing";
import LomitaPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/LomitaPressureWashing";
import LongBeachPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/LongBeachPressureWashing";
import LynwoodPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/LynwoodPressureWashing";
import MalibuPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/MalibuPressureWashing";
import ManhattanBeachPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/ManhattanBeachPressureWashing";
import MaywoodPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/MaywoodPressureWashing";
import MonroviaPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/MonroviaPressureWashing";
import MontebelloPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/MontebelloPressureWashing";
import MontereyParkPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/MontereyParkPressureWashing";
import NorwalkPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/NorwalkPressureWashing";
import PalmdalePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/PalmdalePressureWashing";
import PalosVerdesEstatesPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/PalosVerdesEstatesPressureWashing";
import ParamountPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/ParamountPressureWashing";
import PasadenaPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/PasadenaPressureWashing";
import PicoRiveraPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/PicoRiveraPressureWashing";
import PomonaPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/PomonaPressureWashing";
import RanchoPalosVerdesPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/RanchoPalosVerdesPressureWashing";
import RedondoBeachPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/RedondoBeachPressureWashing";
import RollingHillsPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/RollingHillsPressureWashing";
import RollingHillsEstatesPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/RollingHillsEstatesPressureWashing";
import RosemeadPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/RosemeadPressureWashing";
import SanDimasPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/SanDimasPressureWashing";
import SanFernandoPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/SanFernandoPressureWashing";
import SanGabrielPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/SanGabrielPressureWashing";
import SanMarinoPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/SanMarinoPressureWashing";
import SantaClaritaPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/SantaClaritaPressureWashing";
import SantaFeSpringsPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/SantaFeSpringsPressureWashing";
import SantaMonicaPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/SantaMonicaPressureWashing";
import SierraMadrePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/SierraMadrePressureWashing";
import SignalHillPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/SignalHillPressureWashing";
import SouthElMontePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/SouthElMontePressureWashing";
import SouthGatePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/SouthGatePressureWashing";
import SouthPasadenaPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/SouthPasadenaPressureWashing";
import TempleCityPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/TempleCityPressureWashing";
import TorrancePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/TorrancePressureWashing";
import VernonPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/VernonPressureWashing";
import WalnutPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/WalnutPressureWashing";
import WestCovinaPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/WestCovinaPressureWashing";
import WestHollywoodPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/WestHollywoodPressureWashing";
import WestlakeVillagePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/WestlakeVillagePressureWashing";
import WhittierPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/WhittierPressureWashing";
import StevensonRanchPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/StevensonRanchPressureWashing";
import ValenciaPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/ValenciaPressureWashing";
import NewhallPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/NewhallPressureWashing";
import CastaicPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/CastaicPressureWashing";
import CanyonCountryPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/CanyonCountryPressureWashing";
import SaugusPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/SaugusPressureWashing";
import AguaDulcePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/AguaDulcePressureWashing";
import QuartzHillPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/QuartzHillPressureWashing";
import LakeLosAngelesPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/LakeLosAngelesPressureWashing";
import LittlerockPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/LittlerockPressureWashing";
import PearblossomPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/PearblossomPressureWashing";
import ValyermoPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/ValyermoPressureWashing";
import DelAirePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/DelAirePressureWashing";
import ViewParkWindsorHillsPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/ViewParkWindsorHillsPressureWashing";
import LaderaHeightsPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/LaderaHeightsPressureWashing";
import AthensPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/AthensPressureWashing";
import WillowbrookPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/WillowbrookPressureWashing";
import FlorenceGrahamPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/FlorenceGrahamPressureWashing";
import WalnutParkPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/WalnutParkPressureWashing";
import WestRanchoDominguezPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/WestRanchoDominguezPressureWashing";
import EastRanchoDominguezPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/EastRanchoDominguezPressureWashing";
import WestCarsonPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/WestCarsonPressureWashing";
import TopangaPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/TopangaPressureWashing";
import PacificPalisadesPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/PacificPalisadesPressureWashing";
import BrentwoodPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/BrentwoodPressureWashing";
import MarVistaPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/MarVistaPressureWashing";
import PlayaDelReyPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/PlayaDelReyPressureWashing";
import WestchesterPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/WestchesterPressureWashing";
import VenicePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/VenicePressureWashing";
import MarinaDelReyPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/MarinaDelReyPressureWashing";
import CenturyCityPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/CenturyCityPressureWashing";
import BeverlyGlenPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/BeverlyGlenPressureWashing";
import BelAirPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/BelAirPressureWashing";
import HollywoodPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/HollywoodPressureWashing";
import LosFelizPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/LosFelizPressureWashing";
import SilverLakePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/SilverLakePressureWashing";
import EchoParkPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/EchoParkPressureWashing";
import KoreatownPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/KoreatownPressureWashing";
import MidWilshirePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/MidWilshirePressureWashing";
import HancockParkPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/HancockParkPressureWashing";
import WindsorSquarePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/WindsorSquarePressureWashing";
import MiracleMilePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/MiracleMilePressureWashing";
import FairfaxPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/FairfaxPressureWashing";
import WestAdamsPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/WestAdamsPressureWashing";
import BaldwinHillsPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/BaldwinHillsPressureWashing";
import LeimertParkPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/LeimertParkPressureWashing";
import CrenshawPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/CrenshawPressureWashing";
import HydeParkPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/HydeParkPressureWashing";
import WattsPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/WattsPressureWashing";
import HarborGatewayPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/HarborGatewayPressureWashing";
import SanPedroPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/SanPedroPressureWashing";
import WilmingtonPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/WilmingtonPressureWashing";
import HarborCityPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/HarborCityPressureWashing";
import RollingHillsGatewayPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/RollingHillsGatewayPressureWashing";
import RanchoDominguezPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/RanchoDominguezPressureWashing";
import LennoxPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/LennoxPressureWashing";
import AlondraParkPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/AlondraParkPressureWashing";
import ElCaminoVillagePressureWashing from "./pages/pressure-washing-cities/los-angeles-county/ElCaminoVillagePressureWashing";
import DelAmoPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/DelAmoPressureWashing";
import WestmontPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/WestmontPressureWashing";
import GlenoraPressureWashing from "./pages/pressure-washing-cities/los-angeles-county/GlenoraPressureWashing";

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
          
          {/* Pressure Washing Service Routes */}
          <Route path="/pressure-washing/commercial-exterior-cleaning" element={<CommercialExteriorCleaning />} />
          <Route path="/pressure-washing/concrete-cleaning" element={<ConcreteCleaning />} />
          <Route path="/pressure-washing/exterior-building-wash" element={<ExteriorBuildingWash />} />
          <Route path="/pressure-washing/graffiti-removal" element={<GraffitiRemovalPW />} />
          <Route path="/pressure-washing/trash-enclosure-cleaning" element={<TrashEnclosureCleaning />} />
          <Route path="/pressure-washing/roof-cleaning" element={<RoofCleaningPW />} />
          <Route path="/pressure-washing/signage-cleaning" element={<SignageCleaning />} />
          <Route path="/pressure-washing/parking-garage-cleaning" element={<ParkingGarageCleaning />} />
          <Route path="/pressure-washing/awning-canopy-cleaning" element={<AwningCanopyCleaning />} />
          <Route path="/pressure-washing/storm-drain-cleaning" element={<StormDrainCleaning />} />
          <Route path="/pressure-washing/deck-patio-cleaning" element={<DeckPatioCleaning />} />
          <Route path="/pressure-washing/garage-driveway-cleaning" element={<GarageDrivewayClean />} />
          <Route path="/pressure-washing/roof-gutter-cleaning" element={<RoofGutterCleaning />} />

          {/* Pressure Washing City Routes - Orange County (44 cities) */}
          <Route path="/pressure-washing/irvine" element={<IrvinePressureWashing />} />
          <Route path="/pressure-washing/anaheim" element={<AnaheimPressureWashing />} />
          <Route path="/pressure-washing/newport-beach" element={<NewportBeachPressureWashing />} />
          <Route path="/pressure-washing/aliso-viejo" element={<AlisoViejoPressureWashing />} />
          <Route path="/pressure-washing/brea" element={<BreaPressureWashing />} />
          <Route path="/pressure-washing/buena-park" element={<BuenaParkPressureWashing />} />
          <Route path="/pressure-washing/capistrano-beach" element={<CapistranoBeachPressureWashing />} />
          <Route path="/pressure-washing/corona-del-mar" element={<CoronaDelMarPressureWashing />} />
          <Route path="/pressure-washing/costa-mesa" element={<CostaMesaPressureWashing />} />
          <Route path="/pressure-washing/coto-de-caza" element={<CotoDeCazaPressureWashing />} />
          <Route path="/pressure-washing/cypress" element={<CypressPressureWashing />} />
          <Route path="/pressure-washing/dana-point" element={<DanaPointPressureWashing />} />
          <Route path="/pressure-washing/foothill-ranch" element={<FoothillRanchPressureWashing />} />
          <Route path="/pressure-washing/fountain-valley" element={<FountainValleyPressureWashing />} />
          <Route path="/pressure-washing/fullerton" element={<FullertonPressureWashing />} />
          <Route path="/pressure-washing/garden-grove" element={<GardenGrovePressureWashing />} />
          <Route path="/pressure-washing/huntington-beach" element={<HuntingtonBeachPressureWashing />} />
          <Route path="/pressure-washing/la-habra" element={<LaHabraPressureWashing />} />
          <Route path="/pressure-washing/la-palma" element={<LaPalmaPressureWashing />} />
          <Route path="/pressure-washing/laguna-beach" element={<LagunaBeachPressureWashing />} />
          <Route path="/pressure-washing/laguna-hills" element={<LagunaHillsPressureWashing />} />
          <Route path="/pressure-washing/laguna-niguel" element={<LagunaNiguelPressureWashing />} />
          <Route path="/pressure-washing/laguna-woods" element={<LagunaWoodsPressureWashing />} />
          <Route path="/pressure-washing/lake-forest" element={<LakeForestPressureWashing />} />
          <Route path="/pressure-washing/los-alamitos" element={<LosAlamitosPressureWashing />} />
          <Route path="/pressure-washing/los-flores" element={<LosFloresPressureWashing />} />
          <Route path="/pressure-washing/mission-viejo" element={<MissionViejoPressureWashing />} />
          <Route path="/pressure-washing/newport-coast" element={<NewportCoastPressureWashing />} />
          <Route path="/pressure-washing/orange" element={<OrangePressureWashing />} />
          <Route path="/pressure-washing/placentia" element={<PlacentiaPressureWashing />} />
          <Route path="/pressure-washing/rancho-santa-margarita" element={<RanchoSantaMargaritaPressureWashing />} />
          <Route path="/pressure-washing/san-clemente" element={<SanClementePressureWashing />} />
          <Route path="/pressure-washing/san-juan-capistrano" element={<SanJuanCapistranoPressureWashing />} />
          <Route path="/pressure-washing/santa-ana" element={<SantaAnaPressureWashing />} />
          <Route path="/pressure-washing/seal-beach" element={<SealBeachPressureWashing />} />
          <Route path="/pressure-washing/silverado" element={<SilveradoPressureWashing />} />
          <Route path="/pressure-washing/stanton" element={<StantonPressureWashing />} />
          <Route path="/pressure-washing/talega" element={<TalegaPressureWashing />} />
          <Route path="/pressure-washing/trabuco-canyon" element={<TrabucoCanyonPressureWashing />} />
          <Route path="/pressure-washing/tustin" element={<TustinPressureWashing />} />
          <Route path="/pressure-washing/villa-park" element={<VillaParkPressureWashing />} />
          <Route path="/pressure-washing/westminster" element={<WestminsterPressureWashing />} />
          <Route path="/pressure-washing/yorba-linda" element={<YorbaLindaPressureWashing />} />
          <Route path="/pressure-washing/ladera-ranch" element={<LaderaRanchPressureWashing />} />

          {/* Pressure Washing City Routes - Riverside County (28 cities) */}
          <Route path="/pressure-washing/riverside" element={<RiversidePressureWashing />} />
          <Route path="/pressure-washing/corona" element={<CoronaPressureWashing />} />
          <Route path="/pressure-washing/banning" element={<BanningPressureWashing />} />
          <Route path="/pressure-washing/beaumont" element={<BeaumontPressureWashing />} />
          <Route path="/pressure-washing/blythe" element={<BlythePressureWashing />} />
          <Route path="/pressure-washing/calimesa" element={<CalimesaPressureWashing />} />
          <Route path="/pressure-washing/canyon-lake" element={<CanyonLakePressureWashing />} />
          <Route path="/pressure-washing/cathedral-city" element={<CathedralCityPressureWashing />} />
          <Route path="/pressure-washing/coachella" element={<CoachellaPressureWashing />} />
          <Route path="/pressure-washing/desert-hot-springs" element={<DesertHotSpringsPressureWashing />} />
          <Route path="/pressure-washing/eastvale" element={<EastvalePressureWashing />} />
          <Route path="/pressure-washing/hemet" element={<HemetPressureWashing />} />
          <Route path="/pressure-washing/indian-wells" element={<IndianWellsPressureWashing />} />
          <Route path="/pressure-washing/indio" element={<IndioPressureWashing />} />
          <Route path="/pressure-washing/jurupa-valley" element={<JurupaValleyPressureWashing />} />
          <Route path="/pressure-washing/lake-elsinore" element={<LakeElsinorePressureWashing />} />
          <Route path="/pressure-washing/la-quinta" element={<LaQuintaPressureWashing />} />
          <Route path="/pressure-washing/menifee" element={<MenifeePressureWashing />} />
          <Route path="/pressure-washing/moreno-valley" element={<MorenoValleyPressureWashing />} />
          <Route path="/pressure-washing/murrieta" element={<MurrietaPressureWashing />} />
          <Route path="/pressure-washing/norco" element={<NorcoPressureWashing />} />
          <Route path="/pressure-washing/palm-desert" element={<PalmDesertPressureWashing />} />
          <Route path="/pressure-washing/palm-springs" element={<PalmSpringsPressureWashing />} />
          <Route path="/pressure-washing/perris" element={<PerrisPressureWashing />} />
          <Route path="/pressure-washing/rancho-mirage" element={<RanchoMiragePressureWashing />} />
          <Route path="/pressure-washing/san-jacinto" element={<SanJacintoPressureWashing />} />
          <Route path="/pressure-washing/temecula" element={<TemeculaPressureWashing />} />
          <Route path="/pressure-washing/wildomar" element={<WildomarPressureWashing />} />

          {/* Pressure Washing City Routes - San Bernardino County (45 cities) */}
          <Route path="/pressure-washing/san-bernardino" element={<SanBernardinoPressureWashing />} />
          <Route path="/pressure-washing/adelanto" element={<AdelantoPressureWashing />} />
          <Route path="/pressure-washing/apple-valley" element={<AppleValleyPressureWashing />} />
          <Route path="/pressure-washing/barstow" element={<BarstowPressureWashing />} />
          <Route path="/pressure-washing/big-bear-city" element={<BigBearCityPressureWashing />} />
          <Route path="/pressure-washing/big-bear-lake" element={<BigBearLakePressureWashing />} />
          <Route path="/pressure-washing/chino" element={<ChinoPressureWashing />} />
          <Route path="/pressure-washing/chino-hills" element={<ChinoHillsPressureWashing />} />
          <Route path="/pressure-washing/colton" element={<ColtonPressureWashing />} />
          <Route path="/pressure-washing/fontana" element={<FontanaPressureWashing />} />
          <Route path="/pressure-washing/grand-terrace" element={<GrandTerracePressureWashing />} />
          <Route path="/pressure-washing/hesperia" element={<HesperiaPressureWashing />} />
          <Route path="/pressure-washing/highland" element={<HighlandPressureWashing />} />
          <Route path="/pressure-washing/loma-linda" element={<LomaLindaPressureWashing />} />
          <Route path="/pressure-washing/montclair" element={<MontclairPressureWashing />} />
          <Route path="/pressure-washing/needles" element={<NeedlesPressureWashing />} />
          <Route path="/pressure-washing/ontario" element={<OntarioPressureWashing />} />
          <Route path="/pressure-washing/rancho-cucamonga" element={<RanchoCucamongaPressureWashing />} />
          <Route path="/pressure-washing/redlands" element={<RedlandsPressureWashing />} />
          <Route path="/pressure-washing/rialto" element={<RialtoPressureWashing />} />
          <Route path="/pressure-washing/upland" element={<UplandPressureWashing />} />
          <Route path="/pressure-washing/victorville" element={<VictorvillePressureWashing />} />
          <Route path="/pressure-washing/yucaipa" element={<YucaipaPressureWashing />} />
          <Route path="/pressure-washing/yucca-valley" element={<YuccaValleyPressureWashing />} />
          <Route path="/pressure-washing/twentynine-palms" element={<TwentyninePalmsPressureWashing />} />
          <Route path="/pressure-washing/baker" element={<BakerPressureWashing />} />
          <Route path="/pressure-washing/bloomington" element={<BloomingtonPressureWashing />} />
          <Route path="/pressure-washing/crestline" element={<CrestlinePressureWashing />} />
          <Route path="/pressure-washing/lake-arrowhead" element={<LakeArrowheadPressureWashing />} />
          <Route path="/pressure-washing/lucerne-valley" element={<LucerneValleyPressureWashing />} />
          <Route path="/pressure-washing/muscoy" element={<MuscoyPressureWashing />} />
          <Route path="/pressure-washing/oro-grande" element={<OroGrandePressureWashing />} />
          <Route path="/pressure-washing/phelan" element={<PhelanPressureWashing />} />
          <Route path="/pressure-washing/rimforest" element={<RimforestPressureWashing />} />
          <Route path="/pressure-washing/running-springs" element={<RunningSpringsPressureWashing />} />
          <Route path="/pressure-washing/silver-lakes" element={<SilverLakesPressureWashing />} />
          <Route path="/pressure-washing/spring-valley-lake" element={<SpringValleyLakePressureWashing />} />
          <Route path="/pressure-washing/sugarloaf" element={<SugarloafPressureWashing />} />
          <Route path="/pressure-washing/trona" element={<TronaPressureWashing />} />
          <Route path="/pressure-washing/twin-peaks" element={<TwinPeaksPressureWashing />} />
          <Route path="/pressure-washing/wrightwood" element={<WrightwoodPressureWashing />} />
          <Route path="/pressure-washing/joshua-tree" element={<JoshuaTreePressureWashing />} />
          <Route path="/pressure-washing/lytle-creek" element={<LytleCreekPressureWashing />} />
          <Route path="/pressure-washing/mentone" element={<MentonePressureWashing />} />
          <Route path="/pressure-washing/oak-glen" element={<OakGlenPressureWashing />} />

          {/* Pressure Washing City Routes - San Diego County (18 cities) */}
          <Route path="/pressure-washing/san-diego" element={<SanDiegoPressureWashing />} />
          <Route path="/pressure-washing/carlsbad" element={<CarlsbadPressureWashing />} />
          <Route path="/pressure-washing/chula-vista" element={<ChulaVistaPressureWashing />} />
          <Route path="/pressure-washing/coronado" element={<CoronadoPressureWashing />} />
          <Route path="/pressure-washing/del-mar" element={<DelMarPressureWashing />} />
          <Route path="/pressure-washing/el-cajon" element={<ElCajonPressureWashing />} />
          <Route path="/pressure-washing/encinitas" element={<EncinitasPressureWashing />} />
          <Route path="/pressure-washing/escondido" element={<EscondidoPressureWashing />} />
          <Route path="/pressure-washing/imperial-beach" element={<ImperialBeachPressureWashing />} />
          <Route path="/pressure-washing/la-mesa" element={<LaMesaPressureWashing />} />
          <Route path="/pressure-washing/lemon-grove" element={<LemonGrovePressureWashing />} />
          <Route path="/pressure-washing/national-city" element={<NationalCityPressureWashing />} />
          <Route path="/pressure-washing/oceanside" element={<OceansidePressureWashing />} />
          <Route path="/pressure-washing/poway" element={<PowayPressureWashing />} />
          <Route path="/pressure-washing/san-marcos" element={<SanMarcosPressureWashing />} />
          <Route path="/pressure-washing/santee" element={<SanteePressureWashing />} />
          <Route path="/pressure-washing/solana-beach" element={<SolanaBeachPressureWashing />} />
          <Route path="/pressure-washing/vista" element={<VistaPressureWashing />} />

          {/* Pressure Washing City Routes - Ventura County (10 cities) */}
          <Route path="/pressure-washing/oxnard" element={<OxnardPressureWashing />} />
          <Route path="/pressure-washing/camarillo" element={<CamarilloPressureWashing />} />
          <Route path="/pressure-washing/fillmore" element={<FillmorePressureWashing />} />
          <Route path="/pressure-washing/moorpark" element={<MoorparkPressureWashing />} />
          <Route path="/pressure-washing/ojai" element={<OjaiPressureWashing />} />
          <Route path="/pressure-washing/port-hueneme" element={<PortHuenemePressureWashing />} />
          <Route path="/pressure-washing/ventura" element={<VenturaPressureWashing />} />
          <Route path="/pressure-washing/santa-paula" element={<SantaPaulaPressureWashing />} />
          <Route path="/pressure-washing/simi-valley" element={<SimiValleyPressureWashing />} />
          <Route path="/pressure-washing/thousand-oaks" element={<ThousandOaksPressureWashing />} />

          {/* Pressure Washing City Routes - Los Angeles County (144 cities) */}
          <Route path="/pressure-washing/los-angeles" element={<LosAngelesPressureWashing />} />
          <Route path="/pressure-washing/acton" element={<ActonPressureWashing />} />
          <Route path="/pressure-washing/agoura-hills" element={<AgouraHillsPressureWashing />} />
          <Route path="/pressure-washing/alhambra" element={<AlhambraPressureWashing />} />
          <Route path="/pressure-washing/altadena" element={<AltadenaPressureWashing />} />
          <Route path="/pressure-washing/arcadia" element={<ArcadiaPressureWashing />} />
          <Route path="/pressure-washing/azusa" element={<AzusaPressureWashing />} />
          <Route path="/pressure-washing/baldwin-park" element={<BaldwinParkPressureWashing />} />
          <Route path="/pressure-washing/bell" element={<BellPressureWashing />} />
          <Route path="/pressure-washing/bell-gardens" element={<BellGardensPressureWashing />} />
          <Route path="/pressure-washing/bellflower" element={<BellflowerPressureWashing />} />
          <Route path="/pressure-washing/beverly-hills" element={<BeverlyHillsPressureWashing />} />
          <Route path="/pressure-washing/burbank" element={<BurbankPressureWashing />} />
          <Route path="/pressure-washing/calabasas" element={<CalabasasPressureWashing />} />
          <Route path="/pressure-washing/carson" element={<CarsonPressureWashing />} />
          <Route path="/pressure-washing/claremont" element={<CitrusHeightsPressureWashing />} />
          <Route path="/pressure-washing/commerce" element={<CommercePressureWashing />} />
          <Route path="/pressure-washing/compton" element={<ComptonPressureWashing />} />
          <Route path="/pressure-washing/covina" element={<CovinaPressureWashing />} />
          <Route path="/pressure-washing/cudahy" element={<CudahyPressureWashing />} />
          <Route path="/pressure-washing/culver-city" element={<CulverCityPressureWashing />} />
          <Route path="/pressure-washing/diamond-bar" element={<DiamondBarPressureWashing />} />
          <Route path="/pressure-washing/downey" element={<DowneyPressureWashing />} />
          <Route path="/pressure-washing/duarte" element={<DuartePressureWashing />} />
          <Route path="/pressure-washing/el-monte" element={<ElMontePressureWashing />} />
          <Route path="/pressure-washing/el-segundo" element={<ElSegundoPressureWashing />} />
          <Route path="/pressure-washing/gardena" element={<GardenaPressureWashing />} />
          <Route path="/pressure-washing/glendale" element={<GlendalePressureWashing />} />
          <Route path="/pressure-washing/glendora" element={<GlendoraPressureWashing />} />
          <Route path="/pressure-washing/hawthorne" element={<HawthornePressureWashing />} />
          <Route path="/pressure-washing/hermosa-beach" element={<HermosaBeachPressureWashing />} />
          <Route path="/pressure-washing/hidden-hills" element={<HiddenHillsPressureWashing />} />
          <Route path="/pressure-washing/huntington-park" element={<HuntingtonParkPressureWashing />} />
          <Route path="/pressure-washing/industry" element={<IndustryPressureWashing />} />
          <Route path="/pressure-washing/inglewood" element={<InglewoodPressureWashing />} />
          <Route path="/pressure-washing/irwindale" element={<IrwindalePressureWashing />} />
          <Route path="/pressure-washing/la-canada-flintridge" element={<LaCanadaFlintridgePressureWashing />} />
          <Route path="/pressure-washing/la-mirada" element={<LaMiradaPressureWashing />} />
          <Route path="/pressure-washing/la-puente" element={<LaPuentePressureWashing />} />
          <Route path="/pressure-washing/la-verne" element={<LaVernePressureWashing />} />
          <Route path="/pressure-washing/lakewood" element={<LakewoodPressureWashing />} />
          <Route path="/pressure-washing/lancaster" element={<LancasterPressureWashing />} />
          <Route path="/pressure-washing/lawndale" element={<LawndalePressureWashing />} />
          <Route path="/pressure-washing/lomita" element={<LomitaPressureWashing />} />
          <Route path="/pressure-washing/long-beach" element={<LongBeachPressureWashing />} />
          <Route path="/pressure-washing/lynwood" element={<LynwoodPressureWashing />} />
          <Route path="/pressure-washing/malibu" element={<MalibuPressureWashing />} />
          <Route path="/pressure-washing/manhattan-beach" element={<ManhattanBeachPressureWashing />} />
          <Route path="/pressure-washing/maywood" element={<MaywoodPressureWashing />} />
          <Route path="/pressure-washing/monrovia" element={<MonroviaPressureWashing />} />
          <Route path="/pressure-washing/montebello" element={<MontebelloPressureWashing />} />
          <Route path="/pressure-washing/monterey-park" element={<MontereyParkPressureWashing />} />
          <Route path="/pressure-washing/norwalk" element={<NorwalkPressureWashing />} />
          <Route path="/pressure-washing/palmdale" element={<PalmdalePressureWashing />} />
          <Route path="/pressure-washing/palos-verdes-estates" element={<PalosVerdesEstatesPressureWashing />} />
          <Route path="/pressure-washing/paramount" element={<ParamountPressureWashing />} />
          <Route path="/pressure-washing/pasadena" element={<PasadenaPressureWashing />} />
          <Route path="/pressure-washing/pico-rivera" element={<PicoRiveraPressureWashing />} />
          <Route path="/pressure-washing/pomona" element={<PomonaPressureWashing />} />
          <Route path="/pressure-washing/rancho-palos-verdes" element={<RanchoPalosVerdesPressureWashing />} />
          <Route path="/pressure-washing/redondo-beach" element={<RedondoBeachPressureWashing />} />
          <Route path="/pressure-washing/rolling-hills" element={<RollingHillsPressureWashing />} />
          <Route path="/pressure-washing/rolling-hills-estates" element={<RollingHillsEstatesPressureWashing />} />
          <Route path="/pressure-washing/rosemead" element={<RosemeadPressureWashing />} />
          <Route path="/pressure-washing/san-dimas" element={<SanDimasPressureWashing />} />
          <Route path="/pressure-washing/san-fernando" element={<SanFernandoPressureWashing />} />
          <Route path="/pressure-washing/san-gabriel" element={<SanGabrielPressureWashing />} />
          <Route path="/pressure-washing/san-marino" element={<SanMarinoPressureWashing />} />
          <Route path="/pressure-washing/santa-clarita" element={<SantaClaritaPressureWashing />} />
          <Route path="/pressure-washing/santa-fe-springs" element={<SantaFeSpringsPressureWashing />} />
          <Route path="/pressure-washing/santa-monica" element={<SantaMonicaPressureWashing />} />
          <Route path="/pressure-washing/sierra-madre" element={<SierraMadrePressureWashing />} />
          <Route path="/pressure-washing/signal-hill" element={<SignalHillPressureWashing />} />
          <Route path="/pressure-washing/south-el-monte" element={<SouthElMontePressureWashing />} />
          <Route path="/pressure-washing/south-gate" element={<SouthGatePressureWashing />} />
          <Route path="/pressure-washing/south-pasadena" element={<SouthPasadenaPressureWashing />} />
          <Route path="/pressure-washing/temple-city" element={<TempleCityPressureWashing />} />
          <Route path="/pressure-washing/torrance" element={<TorrancePressureWashing />} />
          <Route path="/pressure-washing/vernon" element={<VernonPressureWashing />} />
          <Route path="/pressure-washing/walnut" element={<WalnutPressureWashing />} />
          <Route path="/pressure-washing/west-covina" element={<WestCovinaPressureWashing />} />
          <Route path="/pressure-washing/west-hollywood" element={<WestHollywoodPressureWashing />} />
          <Route path="/pressure-washing/westlake-village" element={<WestlakeVillagePressureWashing />} />
          <Route path="/pressure-washing/whittier" element={<WhittierPressureWashing />} />
          <Route path="/pressure-washing/stevenson-ranch" element={<StevensonRanchPressureWashing />} />
          <Route path="/pressure-washing/valencia" element={<ValenciaPressureWashing />} />
          <Route path="/pressure-washing/newhall" element={<NewhallPressureWashing />} />
          <Route path="/pressure-washing/castaic" element={<CastaicPressureWashing />} />
          <Route path="/pressure-washing/canyon-country" element={<CanyonCountryPressureWashing />} />
          <Route path="/pressure-washing/saugus" element={<SaugusPressureWashing />} />
          <Route path="/pressure-washing/agua-dulce" element={<AguaDulcePressureWashing />} />
          <Route path="/pressure-washing/quartz-hill" element={<QuartzHillPressureWashing />} />
          <Route path="/pressure-washing/lake-los-angeles" element={<LakeLosAngelesPressureWashing />} />
          <Route path="/pressure-washing/littlerock" element={<LittlerockPressureWashing />} />
          <Route path="/pressure-washing/pearblossom" element={<PearblossomPressureWashing />} />
          <Route path="/pressure-washing/valyermo" element={<ValyermoPressureWashing />} />
          <Route path="/pressure-washing/del-aire" element={<DelAirePressureWashing />} />
          <Route path="/pressure-washing/view-park-windsor-hills" element={<ViewParkWindsorHillsPressureWashing />} />
          <Route path="/pressure-washing/ladera-heights" element={<LaderaHeightsPressureWashing />} />
          <Route path="/pressure-washing/athens" element={<AthensPressureWashing />} />
          <Route path="/pressure-washing/willowbrook" element={<WillowbrookPressureWashing />} />
          <Route path="/pressure-washing/florence-graham" element={<FlorenceGrahamPressureWashing />} />
          <Route path="/pressure-washing/walnut-park" element={<WalnutParkPressureWashing />} />
          <Route path="/pressure-washing/west-rancho-dominguez" element={<WestRanchoDominguezPressureWashing />} />
          <Route path="/pressure-washing/east-rancho-dominguez" element={<EastRanchoDominguezPressureWashing />} />
          <Route path="/pressure-washing/west-carson" element={<WestCarsonPressureWashing />} />
          <Route path="/pressure-washing/topanga" element={<TopangaPressureWashing />} />
          <Route path="/pressure-washing/pacific-palisades" element={<PacificPalisadesPressureWashing />} />
          <Route path="/pressure-washing/brentwood" element={<BrentwoodPressureWashing />} />
          <Route path="/pressure-washing/mar-vista" element={<MarVistaPressureWashing />} />
          <Route path="/pressure-washing/playa-del-rey" element={<PlayaDelReyPressureWashing />} />
          <Route path="/pressure-washing/westchester" element={<WestchesterPressureWashing />} />
          <Route path="/pressure-washing/venice" element={<VenicePressureWashing />} />
          <Route path="/pressure-washing/marina-del-rey" element={<MarinaDelReyPressureWashing />} />
          <Route path="/pressure-washing/century-city" element={<CenturyCityPressureWashing />} />
          <Route path="/pressure-washing/beverly-glen" element={<BeverlyGlenPressureWashing />} />
          <Route path="/pressure-washing/bel-air" element={<BelAirPressureWashing />} />
          <Route path="/pressure-washing/hollywood" element={<HollywoodPressureWashing />} />
          <Route path="/pressure-washing/los-feliz" element={<LosFelizPressureWashing />} />
          <Route path="/pressure-washing/silver-lake" element={<SilverLakePressureWashing />} />
          <Route path="/pressure-washing/echo-park" element={<EchoParkPressureWashing />} />
          <Route path="/pressure-washing/koreatown" element={<KoreatownPressureWashing />} />
          <Route path="/pressure-washing/mid-wilshire" element={<MidWilshirePressureWashing />} />
          <Route path="/pressure-washing/hancock-park" element={<HancockParkPressureWashing />} />
          <Route path="/pressure-washing/windsor-square" element={<WindsorSquarePressureWashing />} />
          <Route path="/pressure-washing/miracle-mile" element={<MiracleMilePressureWashing />} />
          <Route path="/pressure-washing/fairfax" element={<FairfaxPressureWashing />} />
          <Route path="/pressure-washing/west-adams" element={<WestAdamsPressureWashing />} />
          <Route path="/pressure-washing/baldwin-hills" element={<BaldwinHillsPressureWashing />} />
          <Route path="/pressure-washing/leimert-park" element={<LeimertParkPressureWashing />} />
          <Route path="/pressure-washing/crenshaw" element={<CrenshawPressureWashing />} />
          <Route path="/pressure-washing/hyde-park" element={<HydeParkPressureWashing />} />
          <Route path="/pressure-washing/watts" element={<WattsPressureWashing />} />
          <Route path="/pressure-washing/harbor-gateway" element={<HarborGatewayPressureWashing />} />
          <Route path="/pressure-washing/san-pedro" element={<SanPedroPressureWashing />} />
          <Route path="/pressure-washing/wilmington" element={<WilmingtonPressureWashing />} />
          <Route path="/pressure-washing/harbor-city" element={<HarborCityPressureWashing />} />
          <Route path="/pressure-washing/rolling-hills-gateway" element={<RollingHillsGatewayPressureWashing />} />
          <Route path="/pressure-washing/rancho-dominguez" element={<RanchoDominguezPressureWashing />} />
          <Route path="/pressure-washing/lennox" element={<LennoxPressureWashing />} />
          <Route path="/pressure-washing/alondra-park" element={<AlondraParkPressureWashing />} />
          <Route path="/pressure-washing/el-camino-village" element={<ElCaminoVillagePressureWashing />} />
          <Route path="/pressure-washing/del-amo" element={<DelAmoPressureWashing />} />
          <Route path="/pressure-washing/westmont" element={<WestmontPressureWashing />} />
          <Route path="/pressure-washing/glenora" element={<GlenoraPressureWashing />} />
          
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
