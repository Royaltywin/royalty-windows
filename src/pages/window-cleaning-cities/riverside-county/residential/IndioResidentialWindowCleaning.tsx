import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const IndioResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Indio"
      citySlug="indio"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["indio"]}
    />
  );
};

export default IndioResidentialWindowCleaning;
