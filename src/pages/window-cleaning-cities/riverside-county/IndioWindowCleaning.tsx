import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const IndioWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Indio"
      citySlug="indio"
      countyName="Riverside County"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["indio"]}
    />
  );
};

export default IndioWindowCleaning;
