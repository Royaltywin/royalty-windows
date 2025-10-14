import CommercialWindowCleaningTemplate from "@/components/CommercialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SolanaBeachCommercialWindowCleaning = () => {
  return (
    <CommercialWindowCleaningTemplate
      cityName="Solana Beach"
      citySlug="solana-beach"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["solana-beach"]}
    />
  );
};

export default SolanaBeachCommercialWindowCleaning;
