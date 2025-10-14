import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const NewportBeachResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Newport Beach"
      citySlug="newport-beach"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["newport-beach"]}
    />
  );
};

export default NewportBeachResidentialWindowCleaning;
