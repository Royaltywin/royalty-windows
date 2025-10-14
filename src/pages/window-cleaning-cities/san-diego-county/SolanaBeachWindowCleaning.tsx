import WindowCleaningCityTemplate from "@/components/WindowCleaningCityTemplate";
import { nearbyCitiesMap } from "@/data/nearbyCitiesMapping";

const SolanaBeachWindowCleaning = () => {
  return (
    <WindowCleaningCityTemplate
      cityName="Solana Beach"
      citySlug="solana-beach"
      countyName="San Diego County"
      countySlug="san-diego"
      nearbyCities={nearbyCitiesMap["solana-beach"]}
    />
  );
};

export default SolanaBeachWindowCleaning;
