import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const AppleValleyWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Apple Valley"
      citySlug="apple-valley"
      countyName="San Bernardino County"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["apple-valley"]}
    />
  );
};

export default AppleValleyWindowCleaning;
