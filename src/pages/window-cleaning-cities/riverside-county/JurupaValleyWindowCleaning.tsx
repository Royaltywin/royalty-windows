import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const JurupaValleyWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Jurupa Valley"
      citySlug="jurupa-valley"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["jurupa-valley"]}
    />
  );
};

export default JurupaValleyWindowCleaning;
