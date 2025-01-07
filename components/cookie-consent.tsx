"use client"

import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = React.useState<boolean>(false);

  React.useEffect(() => {
    setShowConsent(!hasCookie("localConsent"));
  }, []);

  const acceptCookie = (): void => {
    setShowConsent(false);
    setCookie("localConsent", "true", {});
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[9999]">
      <Card className="max-w-lg w-full shadow-lg">
        <CardContent className="p-6 flex flex-col items-center">
          <p className="text-center text-sm sm:text-base mb-4">
            This website uses cookies to improve your experience. By using our
            site, you consent to all cookies in accordance with our Cookie
            Policy.
          </p>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary-dark"
            onClick={acceptCookie}
          >
            Accept
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
