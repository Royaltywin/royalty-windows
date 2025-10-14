import { useRef, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

interface SignaturePadProps {
  onSignatureChange: (signature: string) => void;
  label: string;
}

const SignaturePad = ({ onSignatureChange, label }: SignaturePadProps) => {
  const sigPadRef = useRef<SignatureCanvas>(null);

  const handleClear = () => {
    sigPadRef.current?.clear();
    onSignatureChange("");
  };

  const handleEnd = () => {
    if (sigPadRef.current && !sigPadRef.current.isEmpty()) {
      const dataURL = sigPadRef.current.toDataURL();
      onSignatureChange(dataURL);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (sigPadRef.current) {
        const canvas = sigPadRef.current.getCanvas();
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d")?.scale(ratio, ratio);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">{label}</label>
        <Button type="button" variant="ghost" size="sm" onClick={handleClear}>
          <RotateCcw className="w-4 h-4 mr-2" />
          Clear
        </Button>
      </div>
      <div className="border-2 border-muted rounded-lg bg-background">
        <SignatureCanvas
          ref={sigPadRef}
          canvasProps={{
            className: "w-full h-40 cursor-crosshair",
          }}
          onEnd={handleEnd}
        />
      </div>
      <p className="text-xs text-muted-foreground">Sign above using your mouse or touchscreen</p>
    </div>
  );
};

export default SignaturePad;
