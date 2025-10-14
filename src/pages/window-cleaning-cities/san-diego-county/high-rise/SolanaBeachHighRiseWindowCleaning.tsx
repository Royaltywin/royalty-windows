import HighRiseWindowCleaningTemplate from "@/components/HighRiseWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SolanaBeachHighRiseWindowCleaning = () => {
  return (
    <HighRiseWindowCleaningTemplate
      cityName="Solana Beach"
      citySlug="solana-beach"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["solana-beach"]}
    />
  );
};

export default SolanaBeachHighRiseWindowCleaning;
