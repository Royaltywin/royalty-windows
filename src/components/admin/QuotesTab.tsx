import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { format } from "date-fns";

const QuotesTab = () => {
  const { data: quotes, isLoading } = useQuery({
    queryKey: ['admin-quotes'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('quote_requests')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return <div className="text-center py-8">Loading quotes...</div>;
  }

  if (!quotes || quotes.length === 0) {
    return (
      <div className="text-center py-12 bg-card border rounded-lg">
        <p className="text-muted-foreground">No quote requests yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-card border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Quote #</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Services</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {quotes.map((quote) => (
              <TableRow key={quote.id}>
                <TableCell className="font-mono text-xs">
                  {quote.quote_number}
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <p className="font-medium">{quote.first_name} {quote.last_name}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span className="truncate max-w-[200px]">{quote.property_address}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <a 
                      href={`tel:${quote.phone}`}
                      className="flex items-center gap-1 text-xs hover:text-primary"
                    >
                      <Phone className="h-3 w-3" />
                      {quote.phone}
                    </a>
                    <a 
                      href={`mailto:${quote.email}`}
                      className="flex items-center gap-1 text-xs hover:text-primary"
                    >
                      <Mail className="h-3 w-3" />
                      <span className="truncate max-w-[150px]">{quote.email}</span>
                    </a>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {quote.primary_services?.slice(0, 2).map((service: string, idx: number) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                    {quote.primary_services?.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{quote.primary_services.length - 2}
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={quote.status === 'new' ? 'default' : 'outline'}>
                    {quote.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {format(new Date(quote.created_at), 'MMM d, yyyy')}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default QuotesTab;
