import WaiverForm from "@/components/waiver/WaiverForm";

const ServiceWaiver = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-foreground mb-4">Service Waiver</h1>
          <p className="text-xl text-muted-foreground">
            Complete this form to document your service and protect both parties
          </p>
        </div>

        <div className="bg-card border rounded-2xl p-6 md:p-8">
          <WaiverForm />
        </div>
      </div>
    </div>
  );
};

export default ServiceWaiver;
