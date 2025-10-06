import CityWindowCleaningTemplate from "@/components/CityWindowCleaningTemplate";
import { cityWindowCleaningContent } from "@/data/locations";

const CypressWindowCleaning = () => {
  return (
    <CityWindowCleaningTemplate
      content={cityWindowCleaningContent["cypress"]}
      cityName="Cypress"
      citySlug="cypress"
    />
  );
};

export default CypressWindowCleaning;
