import React from 'react';
import './Legal.css';
import { CONTACT_CONFIG } from '../config';
import updateMetaTags from '../utils/updateMetaTags';

const Terms = () => {
  React.useEffect(() => {
    updateMetaTags({
      title: 'Terms & Conditions | Partner\'s Tours & Travels',
      description: 'Read the terms and conditions for booking tours and rentals with Partner\'s Tours & Travels.',
    });
  }, []);
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <h1>Terms & Conditions</h1>
          <p>Last Updated: May 02, 2026</p>
        </div>
      </section>

      <section className="legal-content section-padding">
        <div className="container">
          <div className="legal-text-wrapper">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website of <strong>Partner's Tours & Travels</strong> (partner-tour.site), you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement.
            </p>

            <h2>2. Provision of Services</h2>
            <p>
              Partner's Tours & Travels provides travel-related services including but not limited to tour package bookings, luxury bus rentals, and flight ticket facilitation. We act as an intermediary between the traveler and the end service providers (hotels, airlines, transport operators). While we strive for excellence, the final service delivery is subject to the terms and conditions of these third-party providers.
            </p>

            <h2>3. Booking and Payment Policy</h2>
            <p>
              All bookings are subject to availability at the time of reservation. A booking is considered "Confirmed" only after the receipt of the specified booking amount and the issuance of a formal confirmation voucher from our Chalisgaon office. For international tours, full payment must be settled at least 30 days prior to the departure date unless specified otherwise.
            </p>

            <h2>4. Cancellation and Refund Policy</h2>
            <p>
              We understand that plans can change. However, our cancellation policies are dictated by our partners. 
              <br/>- Cancellations made 30 days or more before departure: 90% refund.
              <br/>- 15 to 29 days before departure: 50% refund.
              <br/>- Less than 15 days: No refund.
              <br/>Please note that flight tickets and certain promotional packages are often non-refundable.
            </p>

            <h2>5. User Responsibilities</h2>
            <p>
              Users are responsible for providing accurate information during the booking process. This includes legal names as per passports/Aadhar for flight bookings. Partner's Tours & Travels will not be responsible for any issues arising from incorrect data provided by the user. Users must also ensure they have valid travel documents (Visas, Passports, ID proofs) required for their specific journey.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              The content, logo, and design of this website are the intellectual property of Partner's Tours & Travels. Unauthorized reproduction or distribution of any material from this site is strictly prohibited and may result in legal action.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              Partner's Tours & Travels shall not be held liable for any injury, loss, claim, damage, or any special, exemplary, punitive, indirect, incidental or consequential damages of any kind which arises out of or is in any way connected with any use of this site or any failure or delay. This includes, but is not limited to, delays caused by weather, technical failures of airlines, or local strikes.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts in Chalisgaon, District Jalgaon, Maharashtra.
            </p>

            <h2>9. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at our Chalisgaon office or via email at {CONTACT_CONFIG.EMAIL}.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
