import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Royalty Cleaning Services"
        description="Learn about how Royalty Cleaning Services collects, uses, and protects your personal information. Read our comprehensive privacy policy."
        url="https://getroyaltyservices.com/privacy-policy"
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
              PRIVACY POLICY
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
              <h2 className="text-2xl font-bold mb-4">Thank You for Choosing Royalty Cleaning Services</h2>
              <p>
                This website is owned by Royalty Cleaning Services ("Royalty", "we", "us", or "our"). In this Policy, any use of the words "you," "yours," or similar expressions refers to users of this Site and our Services, as well as any other individuals whose information we collect and process. This Policy forms a binding agreement between you and Royalty (each, a "Party", and collectively the "Parties").
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li><a href="#scope" className="text-accent hover:underline">Scope of This Policy</a></li>
                <li><a href="#consent" className="text-accent hover:underline">Your Consent</a></li>
                <li><a href="#terms" className="text-accent hover:underline">The Policy is Part of Our Terms of Use</a></li>
                <li><a href="#information-collect" className="text-accent hover:underline">Types of Information We Collect</a></li>
                <li><a href="#cookies" className="text-accent hover:underline">Information About Third-Party Cookies and Interest-Based Advertising</a></li>
                <li><a href="#how-we-use" className="text-accent hover:underline">How We Use Information</a></li>
                <li><a href="#data-transfers" className="text-accent hover:underline">Data Transfers</a></li>
                <li><a href="#email" className="text-accent hover:underline">Email Notifications</a></li>
                <li><a href="#retention" className="text-accent hover:underline">Retention</a></li>
                <li><a href="#state-rights" className="text-accent hover:underline">Personal Information Requests for Residents of Certain U.S. States</a></li>
                <li><a href="#your-choices" className="text-accent hover:underline">Your Choices</a></li>
                <li><a href="#manage" className="text-accent hover:underline">How to Manage Your Information</a></li>
                <li><a href="#safeguard" className="text-accent hover:underline">Steps We Take to Safeguard Your Information</a></li>
                <li><a href="#share" className="text-accent hover:underline">How We Share Information</a></li>
                <li><a href="#children" className="text-accent hover:underline">Children Under the Age of Thirteen</a></li>
                <li><a href="#changes" className="text-accent hover:underline">This Policy May Change</a></li>
                <li><a href="#contact" className="text-accent hover:underline">Contact Us</a></li>
              </ol>
            </section>

            <section id="scope" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Scope of This Policy</h2>
              <p>
                Royalty Cleaning Services is committed to the privacy of your information. This Privacy Policy (the "Policy") is meant to help you understand the information we collect, why we collect it, and how you can manage it. The Policy applies only to our website at https://getroyaltyservices.com/ (the "Site") and any related products, services, or communications (the "Services").
              </p>
              <p className="mt-4">
                This Site may provide links to other websites operated by third parties, including in some cases our third-party vendors. Royalty does not control these websites and is not responsible for their data practices. This Policy does not apply to third-party platforms or extend to anyone whose personal information is not under our control or management, including data that is collected by other websites that you may visit before or after this Site. We are not responsible for the data protection or privacy policies of any other websites and accept no responsibility or liability for those policies.
              </p>
            </section>

            <section id="consent" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Your Consent</h2>
              <p>
                Please take a few minutes to review this Policy before using the Site. By using the Site, or by purchasing our Services, you are acknowledging that you have read, understood, and accept this Policy. If you do not agree to be bound by this Policy, you must not access or use the Site.
              </p>
            </section>

            <section id="terms" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. This Policy is Part of Our Terms of Use</h2>
              <p>
                This Policy is part of the <Link to="/terms-of-service" className="text-accent hover:underline">Terms of Use</Link> that govern your use of the Site and Services. A link to our Terms of Use is provided at the bottom of each page of the Site.
              </p>
            </section>

            <section id="information-collect" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Types of Information We Collect</h2>
              <p className="mb-4">
                For you to use our Site and Services, we need to collect and process certain types of information. Depending on your use of our Site and Services, this may include:
              </p>
              
              <h3 className="text-xl font-semibold mb-2">Information You Manually Provide</h3>
              <p className="mb-4">
                Royalty collects information you manually provide when you use the Site and Services. For example, we collect the information you provide when you request a free estimate, provide us with feedback, ask us a question, or otherwise interact with the Site and Services. Some of the information you manually provide may be personal information, such as your name and contact information.
              </p>

              <h3 className="text-xl font-semibold mb-2">Transaction Information</h3>
              <p className="mb-4">
                When you purchase services from us, we may use your credit card information for billing and payment processing purposes.
              </p>

              <h3 className="text-xl font-semibold mb-2">Information from Your Browser or Device</h3>
              <p className="mb-4">
                Royalty collects information that is sent to us automatically by your web browser and device(s). This information typically includes your IP address, the name of your operating system, the name and version of your browser, the date and time of your visit, and the pages you visit.
              </p>

              <h3 className="text-xl font-semibold mb-2">Login Information</h3>
              <p className="mb-4">
                Such as username and password, that you may use in connection with our Site and Services.
              </p>

              <h3 className="text-xl font-semibold mb-2">Information About Your Activity</h3>
              <p>
                Examples include your device information, such as your IP address, the type of device or browser you use, and your actions on the Site.
              </p>
            </section>

            <section id="cookies" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Information About Third-Party Cookies and Interest-Based Advertising</h2>
              <p className="mb-4">
                We may use cookies and similar technologies (e.g., web beacons, pixels, ad tags and device identifiers) to recognize you and/or your device(s) on, off and across the Site and different Services and devices. A cookie is a small file that is placed onto your device that stores information when you visit a website.
              </p>
              
              <h3 className="text-xl font-semibold mb-2">Types of Cookies We Use:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Essential cookies:</strong> These cookies are essential for you to be able to navigate our Site and use its features.</li>
                <li><strong>Performance cookies:</strong> These cookies collect information about how you use our Site. All information is aggregated and anonymous.</li>
                <li><strong>Functionality cookies:</strong> These cookies allow our Site to remember the choices you make and provide enhanced features.</li>
                <li><strong>Marketing cookies:</strong> These cookies are used to deliver advertisements more relevant to you and your interests.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">Managing Cookies:</h3>
              <p>
                You can control cookies through your browser settings. If you turn off cookies, please be aware that you may lose some of the functionality of the Site. For more information about cookies, visit <a href="http://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.allaboutcookies.org</a>.
              </p>
            </section>

            <section id="how-we-use" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. How We Use Information</h2>
              <p className="mb-4">
                We will only use your personal information to provide you with information or Services you have requested, or for the purposes set out in this Policy. Generally, we use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide the information, products and services you request</li>
                <li>Process any financial transactions you make</li>
                <li>Keep your information secure and verify your identity</li>
                <li>Provide you with effective customer service</li>
                <li>Contact you with information related to your use of the Services</li>
                <li>Alert you about service updates and special offers</li>
                <li>Better understand your needs and interests</li>
                <li>Improve the content, functionality, and usability of the Site</li>
                <li>Improve our marketing and promotional efforts</li>
              </ul>
            </section>

            <section id="data-transfers" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Data Transfers</h2>
              <p>
                Royalty's Site and Services are tailored for, and targeted to, users in the United States of America ("U.S."). Because Royalty is a U.S.-based company, your information may be collected and processed in the U.S. We will put in place appropriate protection to make sure your personal data remains adequately protected.
              </p>
            </section>

            <section id="email" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Email Notifications</h2>
              <p>
                We try to keep email communications to a minimum and give you the ability to opt-out of any marketing communications. You can always opt-out of receiving marketing emails by sending us an email at <a href="mailto:info@getroyaltyservices.com" className="text-accent hover:underline">info@getroyaltyservices.com</a> stating your request, or by clicking the unsubscribe link in any promotional email.
              </p>
            </section>

            <section id="retention" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Retention</h2>
              <p>
                We will hold your personal information on our systems for as long as is necessary to perform the relevant processing activity, or as long as is set out in any relevant contract you hold with us. When the relevant processing activity has been completed, we may destroy your data, or alternatively anonymize the data so that it is not personally identifiable.
              </p>
            </section>

            <section id="state-rights" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Personal Information Requests for Residents of Certain U.S. States</h2>
              
              <h3 className="text-xl font-semibold mb-2">Right to Know</h3>
              <p className="mb-4">
                U.S. State laws may give you the right to request that we disclose the personal information we have collected about you over the past 12 months.
              </p>

              <h3 className="text-xl font-semibold mb-2">Right to Correct</h3>
              <p className="mb-4">
                You may have the right to request correction of your personal information.
              </p>

              <h3 className="text-xl font-semibold mb-2">Right to Delete</h3>
              <p className="mb-4">
                You may have the right to request erasure of your personal information, subject to certain exceptions.
              </p>

              <h3 className="text-xl font-semibold mb-2">Right to Opt-Out</h3>
              <p className="mb-4">
                Some US states provide residents with the right to opt out of the "selling" or "sharing" of their personal information, or of "targeted advertising" based on their personal information.
              </p>

              <p>
                To exercise these rights, please contact us at <a href="mailto:info@getroyaltyservices.com" className="text-accent hover:underline">info@getroyaltyservices.com</a> or call <a href="tel:+19519994546" className="text-accent hover:underline">(951) 999-4546</a>.
              </p>
            </section>

            <section id="your-choices" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Your Choices</h2>
              <p>
                We respect your right to make choices about the ways we collect, use, and disclose the information you provide. You may change previously expressed preferences regarding how we use information you provide. For example, if you receive periodic emails from us, you may decide to stop receiving those emails by clicking the "unsubscribe" link.
              </p>
            </section>

            <section id="manage" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. How to Manage Your Information</h2>
              <p>
                If you need to access, update, or correct your information, please contact us by email at <a href="mailto:info@getroyaltyservices.com" className="text-accent hover:underline">info@getroyaltyservices.com</a> or call us at <a href="tel:+19519994546" className="text-accent hover:underline">(951) 999-4546</a>. We will respond to all validated requests within 45 days.
              </p>
            </section>

            <section id="safeguard" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">13. Steps We Take to Safeguard Your Information</h2>
              <p>
                We take the security of your personal information seriously and follow industry-standard practices to protect the data we collect and process. We maintain commercially reasonable administrative, physical, and technological measures to safeguard and secure the personal information that Royalty collects. Access to personal information will be restricted to our authorized personnel who require the information to perform their duties properly.
              </p>
              <p className="mt-4">
                Remember, the safety and security of your information also depends on you. Where you have chosen, or where we have given you a username and password, you are responsible for keeping your login credentials confidential.
              </p>
            </section>

            <section id="share" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">14. How We Share Information</h2>
              <p className="mb-4">
                Royalty does not sell or rent any of your personal information for monetary consideration, and we do not share your personal information publicly without your consent. However, we may disclose your information to certain trusted third-party services to help us provide, improve, promote, or protect our Services. Examples include:
              </p>
              
              <h3 className="text-xl font-semibold mb-2">With Third-Party Vendors</h3>
              <p className="mb-4">
                We may use third-party vendors to operate the Site, store our data, process payments, or help with promotional efforts. These vendors may need information about you to perform their obligations.
              </p>

              <h3 className="text-xl font-semibold mb-2">In Aggregate or De-Identified Form</h3>
              <p className="mb-4">
                We use information collected through the Site to create a compiled, aggregate view of usage patterns. We may share aggregate information with third parties, but this information is not personally identifiable.
              </p>

              <h3 className="text-xl font-semibold mb-2">To Comply With Laws</h3>
              <p>
                We may disclose your information when we, in good faith, believe disclosure is appropriate to comply with the law, prevent fraud or identity theft, protect the security of the Site, or protect our rights or property.
              </p>
            </section>

            <section id="children" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">15. Children Under the Age of Thirteen</h2>
              <p>
                The Site is not intended for children or minors under the age of thirteen (13) years without the permission of a parent or guardian. Royalty does not knowingly solicit or collect any personal information from anyone under 13 years of age. If we become aware that a child under the age of 13 has provided us with personal information, we will delete it.
              </p>
            </section>

            <section id="changes" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">16. This Policy May Change</h2>
              <p>
                We are continually improving and adding to the features and functionality of the Site and Services. As a result of these changes (or changes in the law), we may need to update or revise this Policy from time to time. If we do, we'll let you know about any material changes, either by notifying you on the Site or by sending you an email. Your continued use of the Site or Services after we have posted the revised Policy constitutes your agreement to be bound by the revised Policy.
              </p>
            </section>

            <section id="contact" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">17. Contact Us</h2>
              <p className="mb-4">
                If you have any questions regarding this Policy, or if you are not completely satisfied with this Policy or its application by us, please contact us at:
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

export default PrivacyPolicy;