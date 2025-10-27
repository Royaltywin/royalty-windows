export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      quote_requests: {
        Row: {
          addon_services: string[] | null
          blind_types: string[] | null
          blinds_over_6ft: number | null
          blinds_quantity: number | null
          created_at: string | null
          email: string
          first_name: string
          form_data: Json | null
          has_gutter_guards: boolean | null
          has_hard_water_spots: boolean | null
          has_sunroom: boolean | null
          home_sqft: number | null
          id: string
          is_current_customer: boolean | null
          last_cleaning: string | null
          last_name: string
          patio_cover_type: string | null
          phone: string
          photo_urls: string[] | null
          pressure_structures: string[] | null
          pressure_surfaces: string[] | null
          primary_services: string[]
          property_address: string
          property_city: string | null
          property_lat: number | null
          property_lng: number | null
          property_notes: string | null
          property_state: string | null
          property_zip: string | null
          quote_number: string
          referral_name: string | null
          referral_source: string | null
          roof_stories: string | null
          roof_type: string | null
          sms_consent: boolean | null
          solar_panels_first_story: number | null
          solar_panels_ground: number | null
          solar_panels_second_story: number | null
          solar_stories: string | null
          status: string | null
          updated_at: string | null
          window_count: number | null
          window_sliding_doors: number | null
          window_stories: string | null
          window_types: string[] | null
          year_built: number | null
        }
        Insert: {
          addon_services?: string[] | null
          blind_types?: string[] | null
          blinds_over_6ft?: number | null
          blinds_quantity?: number | null
          created_at?: string | null
          email: string
          first_name: string
          form_data?: Json | null
          has_gutter_guards?: boolean | null
          has_hard_water_spots?: boolean | null
          has_sunroom?: boolean | null
          home_sqft?: number | null
          id?: string
          is_current_customer?: boolean | null
          last_cleaning?: string | null
          last_name: string
          patio_cover_type?: string | null
          phone: string
          photo_urls?: string[] | null
          pressure_structures?: string[] | null
          pressure_surfaces?: string[] | null
          primary_services: string[]
          property_address: string
          property_city?: string | null
          property_lat?: number | null
          property_lng?: number | null
          property_notes?: string | null
          property_state?: string | null
          property_zip?: string | null
          quote_number: string
          referral_name?: string | null
          referral_source?: string | null
          roof_stories?: string | null
          roof_type?: string | null
          sms_consent?: boolean | null
          solar_panels_first_story?: number | null
          solar_panels_ground?: number | null
          solar_panels_second_story?: number | null
          solar_stories?: string | null
          status?: string | null
          updated_at?: string | null
          window_count?: number | null
          window_sliding_doors?: number | null
          window_stories?: string | null
          window_types?: string[] | null
          year_built?: number | null
        }
        Update: {
          addon_services?: string[] | null
          blind_types?: string[] | null
          blinds_over_6ft?: number | null
          blinds_quantity?: number | null
          created_at?: string | null
          email?: string
          first_name?: string
          form_data?: Json | null
          has_gutter_guards?: boolean | null
          has_hard_water_spots?: boolean | null
          has_sunroom?: boolean | null
          home_sqft?: number | null
          id?: string
          is_current_customer?: boolean | null
          last_cleaning?: string | null
          last_name?: string
          patio_cover_type?: string | null
          phone?: string
          photo_urls?: string[] | null
          pressure_structures?: string[] | null
          pressure_surfaces?: string[] | null
          primary_services?: string[]
          property_address?: string
          property_city?: string | null
          property_lat?: number | null
          property_lng?: number | null
          property_notes?: string | null
          property_state?: string | null
          property_zip?: string | null
          quote_number?: string
          referral_name?: string | null
          referral_source?: string | null
          roof_stories?: string | null
          roof_type?: string | null
          sms_consent?: boolean | null
          solar_panels_first_story?: number | null
          solar_panels_ground?: number | null
          solar_panels_second_story?: number | null
          solar_stories?: string | null
          status?: string | null
          updated_at?: string | null
          window_count?: number | null
          window_sliding_doors?: number | null
          window_stories?: string | null
          window_types?: string[] | null
          year_built?: number | null
        }
        Relationships: []
      }
      service_waivers: {
        Row: {
          after_photo_urls: string[] | null
          before_photo_urls: string[] | null
          created_at: string | null
          customer_email: string
          customer_name: string
          customer_phone: string
          customer_signature_date: string
          customer_signature_url: string
          id: string
          pdf_url: string | null
          property_address: string
          service_date: string
          services_performed: string[]
          technician_name: string | null
          technician_signature_date: string | null
          technician_signature_url: string | null
          updated_at: string | null
          waiver_number: string
          waiver_text: string
          waiver_type: string
        }
        Insert: {
          after_photo_urls?: string[] | null
          before_photo_urls?: string[] | null
          created_at?: string | null
          customer_email: string
          customer_name: string
          customer_phone: string
          customer_signature_date: string
          customer_signature_url: string
          id?: string
          pdf_url?: string | null
          property_address: string
          service_date: string
          services_performed: string[]
          technician_name?: string | null
          technician_signature_date?: string | null
          technician_signature_url?: string | null
          updated_at?: string | null
          waiver_number: string
          waiver_text: string
          waiver_type: string
        }
        Update: {
          after_photo_urls?: string[] | null
          before_photo_urls?: string[] | null
          created_at?: string | null
          customer_email?: string
          customer_name?: string
          customer_phone?: string
          customer_signature_date?: string
          customer_signature_url?: string
          id?: string
          pdf_url?: string | null
          property_address?: string
          service_date?: string
          services_performed?: string[]
          technician_name?: string | null
          technician_signature_date?: string | null
          technician_signature_url?: string | null
          updated_at?: string | null
          waiver_number?: string
          waiver_text?: string
          waiver_type?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "staff" | "customer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "staff", "customer"],
    },
  },
} as const
