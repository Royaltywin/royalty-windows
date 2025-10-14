import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const FontanaResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Fontana"
      citySlug="fontana"
      countySlug="san-bernardino"
      nearbyCities={nearbyCitiesMap["fontana"]}
    />
  );
};

export default FontanaResidentialWindowCleaning;
