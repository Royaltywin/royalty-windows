import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const HemetResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Hemet"
      citySlug="hemet"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["hemet"]}
    />
  );
};

export default HemetResidentialWindowCleaning;
