"use client";

import { useEffect, useCallback } from 'react';
import Script from 'next/script';

interface ReCaptchaV3Props {
  onVerified: (token: string) => void;
}

export default function ReCaptchaV3({ onVerified }: ReCaptchaV3Props) {
  const executeRecaptcha = useCallback(async () => {
    if (window.grecaptcha) {
      try {
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_V3!,
          { action: 'submit' }
        );
        onVerified(token);
      } catch (error) {
        console.error('reCAPTCHA error:', error);
      }
    }
  }, [onVerified]);

  useEffect(() => {
    // Initialize reCAPTCHA when component mounts
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        executeRecaptcha();
      });
    }
  }, [executeRecaptcha]);

  return (
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_V3}`}
      strategy="afterInteractive"
      onReady={() => {
        window.grecaptcha.ready(() => {
          executeRecaptcha();
        });
      }}
    />
  );
}