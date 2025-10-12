import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service | Royalty Cleaning Services"
        description="Read the terms and conditions for using Royalty Cleaning Services website and booking our professional cleaning services."
        url="https://getroyaltyservices.com/terms-of-service"
      />
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-primary text-primary-foreground py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link to="/">
              <Button variant="outline" size="sm" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-black mb-3">
              TERMS OF SERVICE
            </h1>
            <p className="text-lg opacity-90">
              Royalty Cleaning Services
            </p>
            <p className="text-sm opacity-75 mt-2">
              Effective Date: January 15, 2025
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="prose prose-lg max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Your Acceptance of These Terms</h2>
              <p>
                These Terms apply to all users of this Site and our Services. By using this Site at https://getroyaltyservices.com/ (the "Site") or by purchasing our Services, you are agreeing to comply with and be bound by these Terms. If you do not agree to these Terms, you must not access or use this Site or purchase our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Your Acceptance of Our Privacy Policy</h2>
              <p>
                By agreeing to these Terms, you agree to the terms of our <Link to="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>, which is expressly incorporated herein. Before using this Site, please carefully review our Privacy Policy. All information provided to us through your use of this Site will be handled in accordance with our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Ownership of this Site and its Content</h2>
              <p className="mb-4">
                This Site, including all its content, features, and functionality (including but not limited to all data, information, software, code, text, displays, images, photographs, illustrations, graphics, video, audio, and all other materials on this Site; and the design, selection, and arrangement thereof) (the "Content") are owned by Royalty Cleaning Services, its licensors, or other providers of such material, and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="mb-4">
                The presence of any Content on this Site does not constitute a waiver of any right in such Content. You do not acquire ownership rights to any such Content viewed through this Site. Except as otherwise provided herein, you may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site, without our express prior written permission.
              </p>
              <p>
                Permission is hereby granted to the extent necessary to lawfully access and use this Site and to display, download, or print portions of this Site on a temporary basis and for your personal, educational, noncommercial use only, provided that you (i) do not modify the Content; (ii) you retain any and all copyright and other proprietary notices contained in the Content; and (iii) you do not copy or post the Content on any network computer or broadcast the Content in any media.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Trademarks</h2>
              <p>
                The Royalty Cleaning Services name and logo, all product and service names, all graphics, all button icons, and all trademarks, service marks, and logos appearing within this Site, unless otherwise noted, are trademarks (whether registered or not), service marks and/or trade dress of Royalty Cleaning Services (the "Royalty Marks"). You are not authorized to display or use the Royalty Marks in any manner without our prior written permission. The use or misuse of the Royalty Marks or other materials contained herein, except as permitted herein, is expressly prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Your Obligations and Prohibited Uses</h2>
              <p className="mb-4">
                In consideration of your use of this Site, you agree that to the extent you provide personal information to Royalty, it will be true, accurate, current, and complete and that you will update all personal information as necessary.
              </p>
              <p className="mb-4">
                You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way</li>
                <li>To transmit any advertising or promotional material, including any "junk mail," "chain letter," "spam," or similar solicitation</li>
                <li>To impersonate or attempt to impersonate Royalty, a Royalty employee, another user, or any other person or entity</li>
                <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Payment Terms and Conditions</h2>
              <p className="mb-4">
                You can request an estimate for window cleaning, pressure washing, roof washing, solar panel cleaning, gutter cleaning, and/or any other services listed on the Site. You will be contacted by Royalty Cleaning Services to confirm the pricing.
              </p>
              <p className="mb-4">
                Once you purchase the Services, you may be required to provide us with certain payment information. You represent and warrant that you have the legal right to use any credit or debit card payment. By providing credit or debit payment information, and upon receipt of completion of the Services, you authorize us to process your existing payment method.
              </p>
              <p>
                All fees incurred (including, without limitation, the service-related fees, taxes or similar charges) are non-refundable unless otherwise expressly stated in these Terms. We reserve the right to change our Service prices at any time and will notify you of any price changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Service Cancellation and Rescheduling</h2>
              <p>
                If you need to cancel or reschedule your service appointment, please contact us at least 24 hours in advance at <a href="tel:+19519994546" className="text-accent hover:underline">(951) 999-4546</a> or <a href="mailto:info@getroyaltyservices.com" className="text-accent hover:underline">info@getroyaltyservices.com</a>. Cancellations or rescheduling requests made with less than 24 hours' notice may be subject to a cancellation fee.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Service Guarantee</h2>
              <p>
                At Royalty Cleaning Services, we stand behind our work with a 100% satisfaction guarantee. If you are not completely satisfied with our services, please contact us within 48 hours of service completion, and we will return to address any concerns at no additional charge. Our goal is to ensure every customer is completely satisfied with our work.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. SMS Communications</h2>
              <p className="mb-4">
                By providing your consent to receive SMS communications, you acknowledge and agree to receive text messages from Royalty Cleaning Services at the phone number you provide. We will not sell or share your phone number with third parties for their direct marketing purposes.
              </p>
              
              <h3 className="text-xl font-semibold mb-2">Opt-In and Opt-Out</h3>
              <p className="mb-4">
                You may opt-in to receive SMS messages by providing your phone number and checking the SMS consent box on our forms. You can opt-out of receiving SMS messages at any time by texting "STOP" to the number from which you received the message.
              </p>

              <h3 className="text-xl font-semibold mb-2">Message Frequency</h3>
              <p className="mb-4">
                Message frequency may vary depending on your interactions with us. Standard messaging rates will be charged by your mobile service provider.
              </p>

              <h3 className="text-xl font-semibold mb-2">Help</h3>
              <p>
                If you are experiencing any issues, you can reply with the keyword HELP, or you can get help directly from us by calling <a href="tel:+19519994546" className="text-accent hover:underline">(951) 999-4546</a> or emailing us at <a href="mailto:info@getroyaltyservices.com" className="text-accent hover:underline">info@getroyaltyservices.com</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. DISCLAIMERS</h2>
              <p className="mb-4 font-semibold uppercase text-muted-foreground">
                WE MAKE NO REPRESENTATIONS OR WARRANTIES WITH RESPECT TO THIS SITE OR ITS CONTENT, OR ANY PRODUCT OR SERVICE AVAILABLE ON OR PROMOTED THROUGH THIS SITE. THIS SITE AND ALL OF ITS CONTENT ARE PROVIDED ON AN "AS IS," "AS AVAILABLE" BASIS, WITHOUT REPRESENTATIONS OR WARRANTIES OF ANY KIND.
              </p>
              <p className="uppercase text-muted-foreground">
                TO THE FULLEST EXTENT PERMITTED BY LAW, ROYALTY CLEANING SERVICES DISCLAIMS ANY AND ALL REPRESENTATIONS AND WARRANTIES, WHETHER EXPRESS, IMPLIED, ARISING BY STATUTE, CUSTOM, COURSE OF DEALING, COURSE OF PERFORMANCE OR IN ANY OTHER WAY, WITH RESPECT TO THIS SITE, ITS CONTENT, AND ANY PRODUCTS OR SERVICES AVAILABLE OR PROMOTED THROUGH THIS SITE.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. LIMITATION OF LIABILITY</h2>
              <p className="uppercase text-muted-foreground">
                TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL ROYALTY CLEANING SERVICES, ITS EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE SITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Links to Third-Party Websites</h2>
              <p>
                This Site may provide links to other websites operated by third parties. Royalty Cleaning Services does not control these websites and is not responsible for their content or practices. We encourage you to review the terms of use and privacy policies of any third-party websites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">13. Updates and Changes</h2>
              <p>
                We reserve the right to modify these Terms at any time. If we make material changes to these Terms, we will notify you by email or by posting a notice on the Site. Your continued use of the Site after such modifications will constitute your acknowledgment of the modified Terms and agreement to abide by them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">14. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy and any other legal notices published by us on the Site, shall constitute the entire agreement between you and Royalty Cleaning Services concerning the Site and Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">15. Contact Us</h2>
              <p className="mb-4">
                If you have any questions regarding these Terms, please contact us at:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="font-semibold">Royalty Cleaning Services</p>
                <p>Southern California</p>
                <p>Email: <a href="mailto:info@getroyaltyservices.com" className="text-accent hover:underline">info@getroyaltyservices.com</a></p>
                <p>Telephone: <a href="tel:+19519994546" className="text-accent hover:underline">(951) 999-4546</a></p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;