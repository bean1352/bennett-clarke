import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

interface ContactSectionProps {
    email: string;
    phone: string;
    address: string;
  }
  
  const ContactSection = ({ email, phone, address }: ContactSectionProps) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phone}`;
  };

  const handleWhatsAppClick = () => {
    // Remove any non-numeric characters from phone number
    const cleanPhone = phone.replace(/\D/g, '');
    window.location.href = `https://wa.me/${cleanPhone}`;
  };

  const handleAddressClick = () => {
    window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-24">
          <div 
            onClick={handleEmailClick}
            className="text-center p-6 sm:p-8 bg-secondary rounded-lg overflow-hidden cursor-pointer hover:bg-secondary/80 transition-colors"
          >
            <Mail className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Email Us</h3>
            <p className="text-base sm:text-lg text-muted-foreground break-all">{email}</p>
          </div>

          <div 
            onClick={handlePhoneClick}
            className="text-center p-6 sm:p-8 bg-secondary rounded-lg overflow-hidden cursor-pointer hover:bg-secondary/80 transition-colors"
          >
            <Phone className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Call Us</h3>
            <p className="text-base sm:text-lg text-muted-foreground">{phone}</p>
          </div>

          <div 
            onClick={handleWhatsAppClick}
            className="text-center p-6 sm:p-8 bg-secondary rounded-lg overflow-hidden cursor-pointer hover:bg-secondary/80 transition-colors"
          >
            <MessageCircle className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">WhatsApp</h3>
            <p className="text-base sm:text-lg text-muted-foreground">{phone}</p>
          </div>

          <div 
            onClick={handleAddressClick}
            className="text-center p-6 sm:p-8 bg-secondary rounded-lg overflow-hidden cursor-pointer hover:bg-secondary/80 transition-colors"
          >
            <MapPin className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Visit Us</h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              {address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;