import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const JurupaValleyResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Jurupa Valley"
      citySlug="jurupa-valley"
      countySlug="riverside"
      nearbyCities={nearbyCitiesMap["jurupa-valley"]}
    />
  );
};

export default JurupaValleyResidentialWindowCleaning;
