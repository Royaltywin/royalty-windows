import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const NewportBeachCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Newport Beach"
      citySlug="newport-beach"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["newport-beach"]}
    />
  );
};

export default NewportBeachCommercialWindowCleaning;
