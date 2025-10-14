import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const GlendaleResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Glendale"
      citySlug="glendale"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["glendale"]}
    />
  );
};

export default GlendaleResidentialWindowCleaning;
