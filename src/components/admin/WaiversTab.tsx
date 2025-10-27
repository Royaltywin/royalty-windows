import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Calendar, FileText } from "lucide-react";
import { format } from "date-fns";

const WaiversTab = () => {
  const { data: waivers, isLoading } = useQuery({
    queryKey: ['admin-waivers'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('service_waivers')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return <div className="text-center py-8">Loading waivers...</div>;
  }

  if (!waivers || waivers.length === 0) {
    return (
      <div className="text-center py-12 bg-card border rounded-lg">
        <p className="text-muted-foreground">No service waivers yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-card border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Waiver #</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Waiver Type</TableHead>
              <TableHead>Services</TableHead>
              <TableHead>Service Date</TableHead>
              <TableHead>Technician</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {waivers.map((waiver) => (
              <TableRow key={waiver.id}>
                <TableCell className="font-mono text-xs">
                  {waiver.waiver_number}
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <p className="font-medium">{waiver.customer_name}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span className="truncate max-w-[200px]">{waiver.property_address}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <a 
                      href={`tel:${waiver.customer_phone}`}
                      className="flex items-center gap-1 text-xs hover:text-primary"
                    >
                      <Phone className="h-3 w-3" />
                      {waiver.customer_phone}
                    </a>
                    <a 
                      href={`mailto:${waiver.customer_email}`}
                      className="flex items-center gap-1 text-xs hover:text-primary"
                    >
                      <Mail className="h-3 w-3" />
                      <span className="truncate max-w-[150px]">{waiver.customer_email}</span>
                    </a>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">
                    {waiver.waiver_type}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {waiver.services_performed?.slice(0, 2).map((service: string, idx: number) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                    {waiver.services_performed?.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{waiver.services_performed.length - 2}
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {format(new Date(waiver.service_date), 'MMM d, yyyy')}
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-sm">{waiver.technician_name || 'N/A'}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default WaiversTab;
