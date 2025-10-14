import { useState } from "react";
import { Upload, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import imageCompression from "browser-image-compression";
import { useToast } from "@/hooks/use-toast";

interface PhotoCaptureProps {
  photos: File[];
  onChange: (photos: File[]) => void;
  label: string;
}

const PhotoCapture = ({ photos, onChange, label }: PhotoCaptureProps) => {
  const { toast } = useToast();
  const [isCompressing, setIsCompressing] = useState(false);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setIsCompressing(true);
    try {
      const compressedFiles = await Promise.all(
        files.map(async (file) => {
          if (!file.type.startsWith("image/")) return file;

          const options = {
            maxSizeMB: 2,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
          };

          try {
            return await imageCompression(file, options);
          } catch (error) {
            console.error("Compression failed for", file.name, error);
            return file;
          }
        })
      );

      onChange([...photos, ...compressedFiles]);
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your photos",
        variant: "destructive",
      });
    } finally {
      setIsCompressing(false);
    }
  };

  const removePhoto = (index: number) => {
    onChange(photos.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3">
      <Label>{label}</Label>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
        {photos.map((photo, index) => (
          <div key={index} className="relative aspect-square rounded-lg overflow-hidden border-2 border-muted">
            <img
              src={URL.createObjectURL(photo)}
              alt={`${label} ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => removePhoto(index)}
              className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full p-1 hover:bg-destructive/90"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}

        <label className="aspect-square rounded-lg border-2 border-dashed border-muted hover:border-primary cursor-pointer flex flex-col items-center justify-center gap-1 transition-colors">
          <input
            type="file"
            multiple
            accept="image/*"
            capture="environment"
            onChange={handleFileSelect}
            className="hidden"
            disabled={isCompressing}
          />
          {isCompressing ? (
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Upload className="w-6 h-6 text-muted-foreground" />
              <span className="text-xs text-muted-foreground text-center px-1">Add</span>
            </>
          )}
        </label>
      </div>
    </div>
  );
};

export default PhotoCapture;
