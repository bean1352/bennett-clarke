// components/TeamMemberCard.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail, Phone } from "lucide-react";
import Image from 'next/image';
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

interface TeamMemberProps {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  linkedInUrl: string;
  contactInfo?: {
    type: 'email' | 'phone';
    value: string;
  };
}

export function TeamMemberCard({ 
  name, 
  title, 
  description, 
  imageSrc,
  linkedInUrl,
  contactInfo 
}: TeamMemberProps) {
  return (
    <Card>
      <Suspense
        fallback={
          <CardHeader>
            <div className="w-32 h-32 mx-auto mb-4">
              <Skeleton className="w-full h-full rounded-full" />
            </div>
          </CardHeader>
        }
      >
        <CardHeader>
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
            <Image 
              src={imageSrc} 
              alt={name} 
              className="w-full h-full object-cover" 
              width={128} 
              height={128}
            />
          </div>
          <CardTitle className="text-center">{name}</CardTitle>
          <p className="text-center text-primary font-medium">
            {title}
          </p>
        </CardHeader>
      </Suspense>
      <CardContent>
        <p className="text-muted-foreground text-center mb-4">
          {description}
        </p>
        <div className="flex justify-center space-x-4">
          <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          {contactInfo && (
            <Link 
              href={contactInfo.type === 'email' ? `mailto:${contactInfo.value}` : `tel:${contactInfo.value}`}
            >
              <Button variant="ghost" size="icon">
                {contactInfo.type === 'email' ? 
                  <Mail className="h-5 w-5" /> : 
                  <Phone className="h-5 w-5" />
                }
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}