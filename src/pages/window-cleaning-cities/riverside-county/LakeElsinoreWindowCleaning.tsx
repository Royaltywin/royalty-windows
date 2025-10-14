import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const LakeElsinoreWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Lake Elsinore"
      citySlug="lake-elsinore"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["lake-elsinore"]}
    />
  );
};

export default LakeElsinoreWindowCleaning;
