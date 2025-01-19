"use client"

import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    setShowConsent(!hasCookie("localConsent"));
  }, []);

  const acceptCookie = (): void => {
    setShowConsent(false);
    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });

    sendGTMEvent({
      event: 'consent_update',
      consent_state: 'granted'
    });
  };

  const declineCookie = (): void => {
    setShowConsent(false);
    setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
    
    sendGTMEvent({
      event: 'consent_update',
      consent_state: 'denied'
    });
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[9999]">
      <Card className="max-w-lg w-full shadow-lg m-4">
        <CardContent className="p-6 flex flex-col items-center">
          <p className="text-center text-sm sm:text-base mb-4">
            This website uses cookies to improve your experience. We use:
            <br />
            - Essential cookies for site functionality
            <br />
            - Analytics cookies to understand site usage
            <br />
            - Marketing cookies to provide relevant content
          </p>
          <p className="text-center text-xs mb-4">
            By using our site, you consent to cookies in accordance with our{' '}
            <Link href="/cookie-policy" className="text-primary hover:underline" aria-label="See Cookie policy">
              Cookie Policy
            </Link>{' '}
            and{' '}
            <Link href="/privacy-policy" className="text-primary hover:underline" aria-label="See Privacy policy">
              Privacy Policy
            </Link>.
          </p>
          <div className="flex gap-4">
            <Button
              variant="destructive"
              onClick={declineCookie}
              aria-label="Decline Cookies"
            >
              Decline All
            </Button>
            <Button
              onClick={acceptCookie}
              aria-label="Accept Cookies"
            >
              Accept All
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;