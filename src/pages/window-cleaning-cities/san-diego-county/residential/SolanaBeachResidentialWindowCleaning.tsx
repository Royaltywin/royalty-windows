import ResidentialWindowCleaningTemplate from "@/components/ResidentialWindowCleaningTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SolanaBeachResidentialWindowCleaning = () => {
  return (
    <ResidentialWindowCleaningTemplate
      cityName="Solana Beach"
      citySlug="solana-beach"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["solana-beach"]}
    />
  );
};

export default SolanaBeachResidentialWindowCleaning;
