import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const YorbaLindaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Yorba Linda"
      citySlug="yorba-linda"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["yorba-linda"]}
    />
  );
};

export default YorbaLindaCommercialWindowCleaning;
