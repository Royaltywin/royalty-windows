import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const BigBearLakeResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Big Bear Lake"
      citySlug="big-bear-lake"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["big-bear-lake"]}
    />
  );
};

export default BigBearLakeResidentialWindowCleaning;
