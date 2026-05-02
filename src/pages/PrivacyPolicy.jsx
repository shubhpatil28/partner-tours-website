import React from 'react';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Effective Date: May 02, 2026</p>
        </div>
      </section>

      <section className="legal-content section-padding">
        <div className="container">
          <div className="legal-text-wrapper">
            <h2>1. Introduction</h2>
            <p>
              At Partner's Tours & Travels ("we", "our", or "us"), we respect your privacy and are committed to protecting it through our compliance with this policy. 
              This policy describes the types of information we may collect from you or that you may provide when you visit our website partnertours.in.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect several types of information from and about users of our Website, including:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number when you fill out a contact form or enquire about a tour.</li>
              <li><strong>Usage Data:</strong> Information about your internet connection, the equipment you use to access our Website, and usage details.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use information that we collect about you or that you provide to us:</p>
            <ul>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To notify you about changes to our Website or any products or services we offer.</li>
            </ul>

            <h2>4. Cookies and Web Beacons</h2>
            <p>
              Like any other website, partnertours.in uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>

            <h2>5. Google DoubleClick DART Cookie</h2>
            <p>
              Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to partnertours.in and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">https://policies.google.com/technologies/ads</a>
            </p>

            <h2>6. Our Advertising Partners</h2>
            <p>
              Some of advertisers on our site may use cookies and web beacons. Our advertising partners include:
            </p>
            <ul>
              <li><strong>Google AdSense</strong></li>
            </ul>
            <p>
              These third-party ad servers or ad networks use technology in their respective advertisements and links that appear on partnertours.in, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
            </p>

            <h2>7. Third Party Privacy Policies</h2>
            <p>
              Partner's Tours & Travels' Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>

            <h2>8. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
            <p>Under the CCPA, among other rights, California consumers have the right to:</p>
            <ul>
              <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
              <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
            </ul>

            <h2>9. GDPR Data Protection Rights</h2>
            <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
            <ul>
              <li>The right to access – You have the right to request copies of your personal data.</li>
              <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
            </ul>

            <h2>10. Children's Information</h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Partner's Tours & Travels does not knowingly collect any Personal Identifiable Information from children under the age of 13.
            </p>

            <h2>11. Contact Information</h2>
            <p>
              To ask questions or comment about this privacy policy and our privacy practices, contact us at:
              <br />
              <strong>Partner's Tours & Travels</strong>
              <br />
              {CONTACT_CONFIG.ADDRESS}
              <br />
              Email: {CONTACT_CONFIG.EMAIL}
              <br />
              Phone: {CONTACT_CONFIG.PHONE_NUMBER}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
