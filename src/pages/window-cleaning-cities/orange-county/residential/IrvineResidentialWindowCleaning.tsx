import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const IrvineResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Irvine"
      citySlug="irvine"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["irvine"]}
    />
  );
};

export default IrvineResidentialWindowCleaning;
