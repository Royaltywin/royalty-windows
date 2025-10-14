import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CathedralCityResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Cathedral City"
      citySlug="cathedral-city"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["cathedral-city"]}
    />
  );
};

export default CathedralCityResidentialWindowCleaning;
