import { getWaiverText } from "@/data/waiverTemplates";
import ReactMarkdown from "react-markdown";

interface WaiverTextProps {
  waiverType: string;
}

const WaiverText = ({ waiverType }: WaiverTextProps) => {
  const waiverContent = getWaiverText(waiverType);

  return (
    <div className="bg-muted/50 p-6 rounded-lg max-h-96 overflow-y-auto">
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <ReactMarkdown>{waiverContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default WaiverText;
