import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OntarioWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Ontario"
      citySlug="ontario"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["ontario"]}
    />
  );
};

export default OntarioWindowCleaning;
