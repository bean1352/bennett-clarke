import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

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
                    <Card
                        onClick={handleEmailClick}
                        className="text-center cursor-pointer hover:bg-secondary/80 transition-colors"
                    >
                        <CardHeader>
                            <Mail className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto" />
                            <CardTitle className="text-xl sm:text-2xl">Email Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-base sm:text-lg text-muted-foreground break-all">{email}</p>
                        </CardContent>
                    </Card>

                    <Card
                        onClick={handlePhoneClick}
                        className="text-center cursor-pointer hover:bg-secondary/80 transition-colors"
                    >
                        <CardHeader>
                            <Phone className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto" />
                            <CardTitle className="text-xl sm:text-2xl">Call Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-base sm:text-lg text-muted-foreground">{phone}</p>
                        </CardContent>
                    </Card>

                    <Card
                        onClick={handleWhatsAppClick}
                        className="text-center cursor-pointer hover:bg-secondary/80 transition-colors"
                    >
                        <CardHeader>
                            <MessageCircle className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto" />
                            <CardTitle className="text-xl sm:text-2xl">WhatsApp</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-base sm:text-lg text-muted-foreground">{phone}</p>
                        </CardContent>
                    </Card>

                    <Card
                        onClick={handleAddressClick}
                        className="text-center cursor-pointer hover:bg-secondary/80 transition-colors"
                    >
                        <CardHeader>
                            <MapPin className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto" />
                            <CardTitle className="text-xl sm:text-2xl">Visit Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-base sm:text-lg text-muted-foreground">{address}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;