import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LakeForestWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Lake Forest"
      citySlug="lake-forest"
      countyName="Orange County"
      countySlug="orange"
      nearbyCities={nearbyCitiesMap["lake-forest"]}
    />
  );
};

export default LakeForestWindowCleaning;
