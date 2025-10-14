import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CheckCircle, Download, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const WaiverSuccess = () => {
  const { waiverNumber } = useParams();
  const [waiver, setWaiver] = useState<any>(null);

  useEffect(() => {
    const fetchWaiver = async () => {
      if (!waiverNumber) return;

      const { data, error } = await supabase
        .from("service_waivers")
        .select("*")
        .eq("waiver_number", waiverNumber)
        .single();

      if (!error && data) {
        setWaiver(data);
      }
    };

    fetchWaiver();
  }, [waiverNumber]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <div className="bg-card border rounded-2xl p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Waiver Submitted Successfully!
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Your service waiver has been recorded.
          </p>

          {waiver && (
            <div className="bg-muted/50 rounded-lg p-6 mb-8 text-left">
              <h2 className="font-bold text-lg mb-4">Waiver Details</h2>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold">Waiver Number:</span> {waiver.waiver_number}
                </p>
                <p>
                  <span className="font-semibold">Customer:</span> {waiver.customer_name}
                </p>
                <p>
                  <span className="font-semibold">Service Type:</span> {waiver.waiver_type}
                </p>
                <p>
                  <span className="font-semibold">Service Date:</span>{" "}
                  {new Date(waiver.service_date).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-semibold">Property:</span> {waiver.property_address}
                </p>
              </div>
            </div>
          )}

          <div className="bg-accent/10 border-2 border-accent rounded-lg p-6 mb-8">
            <h3 className="font-bold text-accent mb-2">What's Next?</h3>
            <ul className="text-sm space-y-2 text-left">
              <li className="flex gap-2">
                <span>✓</span>
                <span>A copy has been sent to {waiver?.customer_email}</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>All photos and signatures have been securely stored</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>You can access this waiver anytime using the waiver number</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {waiver?.pdf_url && (
              <Button variant="outline" asChild>
                <a href={waiver.pdf_url} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </Button>
            )}
            <Button asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaiverSuccess;
