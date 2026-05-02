import { MessageSquare, X } from 'lucide-react';
import { CONTACT_CONFIG } from '../config';
import './EnquiryBar.css';

const EnquiryBar = ({ packageName, onClear }) => {
  if (!packageName) return null;

  return (
    <div className="enquiry-bar-container fade-in-up">
      <div className="container enquiry-bar-flex">
        <div className="enquiry-info">
          <span className="enquiry-label">Enquiring for:</span>
          <span className="package-name">{packageName}</span>
        </div>
        <div className="enquiry-actions">
          <a 
            href={`https://wa.me/${CONTACT_CONFIG?.WHATSAPP_NUMBER}?text=Hi, I'm interested in ${packageName}. Please share details.`}
            className="btn btn-whatsapp btn-sm ripple"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare size={16} /> Book on WhatsApp
          </a>
          <button className="clear-enquiry" onClick={onClear}>
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnquiryBar;
