import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component in your UI components folder

export default function NotFound() {
  return (
    <div className="min-h-[550px] flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-primary">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">Oops! This page either does not exist or was removed.</p>
        <div className="mt-6">
          <Link href="/" passHref>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Go Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
