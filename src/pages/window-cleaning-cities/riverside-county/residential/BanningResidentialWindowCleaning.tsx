import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BanningResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Banning"
      citySlug="banning"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["banning"]}
    />
  );
};

export default BanningResidentialWindowCleaning;
