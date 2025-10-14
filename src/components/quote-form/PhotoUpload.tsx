import { useState } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import imageCompression from "browser-image-compression";
import { useToast } from "@/hooks/use-toast";

interface PhotoUploadProps {
  photos: File[];
  onChange: (photos: File[]) => void;
}

const PhotoUpload = ({ photos, onChange }: PhotoUploadProps) => {
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
            maxSizeMB: 1,
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
      toast({
        title: "Photos added",
        description: `${files.length} photo(s) uploaded successfully`,
      });
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
    <div className="space-y-4">
      <div>
        <Label>Property Photos (Optional)</Label>
        <p className="text-sm text-muted-foreground mt-1">
          Upload photos to help us provide a more accurate quote
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {photos.map((photo, index) => (
          <div key={index} className="relative aspect-square rounded-lg overflow-hidden border-2 border-muted">
            <img
              src={URL.createObjectURL(photo)}
              alt={`Upload ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => removePhoto(index)}
              className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full p-1 hover:bg-destructive/90"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}

        <label className="aspect-square rounded-lg border-2 border-dashed border-muted hover:border-primary cursor-pointer flex flex-col items-center justify-center gap-2 transition-colors">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            disabled={isCompressing}
          />
          {isCompressing ? (
            <>
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <span className="text-xs text-muted-foreground">Compressing...</span>
            </>
          ) : (
            <>
              <Upload className="w-8 h-8 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Add Photos</span>
            </>
          )}
        </label>
      </div>
    </div>
  );
};

export default PhotoUpload;
