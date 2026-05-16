import React from 'react';
import './Legal.css';
import updateMetaTags from '../utils/updateMetaTags';

const CancellationPolicy = () => {
  React.useEffect(() => {
    updateMetaTags({
      title: 'Cancellation & Refund Policy | Partner\'s Bus Service',
      description: 'Review the cancellation and refund policy for Partner\'s Bus Service. Learn about timelines, charges, and process for booking cancellations.',
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page section-padding">
      <div className="container">
        <h1 className="mb-40">Cancellation & <span>Refund Policy</span></h1>
        <div className="legal-content">
          <p className="last-updated">Last Updated: May 16, 2026</p>
          
          <section className="legal-section">
            <h2>1. Cancellation Timelines</h2>
            <p>At Partner's Bus Service, we understand that plans can change. Our cancellation charges are based on the time remaining before the scheduled departure:</p>
            <ul>
              <li><strong>More than 24 hours before departure:</strong> 10% cancellation charge.</li>
              <li><strong>Between 12 to 24 hours before departure:</strong> 25% cancellation charge.</li>
              <li><strong>Between 6 to 12 hours before departure:</strong> 50% cancellation charge.</li>
              <li><strong>Less than 6 hours before departure:</strong> No refund / 100% cancellation charge.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. Refund Process</h2>
            <p>Refunds are processed through the original payment method used during booking. For cash bookings, refunds will be issued via UPI or bank transfer.</p>
            <ul>
              <li>Refund processing time: 5-7 working days.</li>
              <li>Transaction fees (if any) are non-refundable.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Bus Cancellation by Operator</h2>
            <p>In the rare event that Partner's Bus Service cancels a trip due to technical reasons, weather, or other unforeseen circumstances, a 100% refund will be issued to all passengers. Alternatively, passengers may opt for a seat on the next available bus at no extra cost.</p>
          </section>

          <section className="legal-section">
            <h2>4. No-Show Policy</h2>
            <p>Passengers who fail to report at the boarding point at least 15 minutes before the scheduled departure time will be considered a "No-Show." No refunds will be provided for No-Shows.</p>
          </section>

          <section className="legal-section">
            <h2>5. Contact for Cancellations</h2>
            <p>To cancel your booking, please contact our support team at:</p>
            <p><strong>Phone:</strong> +91 84215 14348</p>
            <p><strong>Email:</strong> partners.tours@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
