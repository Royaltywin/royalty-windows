import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { LogOut, FileText, ClipboardList } from "lucide-react";
import QuotesTab from "@/components/admin/QuotesTab";
import WaiversTab from "@/components/admin/WaiversTab";

const AdminDashboard = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const loadUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email || "");
      }
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully.",
    });
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">{userEmail}</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="quotes" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="quotes">
              <ClipboardList className="h-4 w-4 mr-2" />
              Quote Requests
            </TabsTrigger>
            <TabsTrigger value="waivers">
              <FileText className="h-4 w-4 mr-2" />
              Service Waivers
            </TabsTrigger>
          </TabsList>

          <TabsContent value="quotes" className="space-y-4">
            <QuotesTab />
          </TabsContent>

          <TabsContent value="waivers" className="space-y-4">
            <WaiversTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
