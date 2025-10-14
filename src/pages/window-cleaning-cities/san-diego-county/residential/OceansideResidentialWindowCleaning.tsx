import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const OceansideResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Oceanside"
      citySlug="oceanside"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["oceanside"]}
    />
  );
};

export default OceansideResidentialWindowCleaning;
