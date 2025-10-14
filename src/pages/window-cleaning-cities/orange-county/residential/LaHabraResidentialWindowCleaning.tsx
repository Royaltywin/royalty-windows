import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LaHabraResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="La Habra"
      citySlug="la-habra"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["la-habra"]}
    />
  );
};

export default LaHabraResidentialWindowCleaning;
