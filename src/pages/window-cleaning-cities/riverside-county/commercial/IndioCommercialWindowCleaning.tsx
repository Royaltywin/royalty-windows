import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const IndioCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Indio"
      citySlug="indio"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["indio"]}
    />
  );
};

export default IndioCommercialWindowCleaning;
