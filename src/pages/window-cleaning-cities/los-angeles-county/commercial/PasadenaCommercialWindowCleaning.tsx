import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const PasadenaCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Pasadena"
      citySlug="pasadena"
      countySlug="los-angeles"
      nearbyCities={nearbyCitiesMap["pasadena"]}
    />
  );
};

export default PasadenaCommercialWindowCleaning;
