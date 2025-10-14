import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const CamarilloHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Camarillo"
      citySlug="camarillo"
      countySlug="ventura"
      nearbyCities={nearbyCitiesMap["camarillo"]}
    />
  );
};

export default CamarilloHighRiseWindowCleaning;
