import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    const previousTitle = document.title;
    const robots = document.querySelector('meta[name="robots"]');
    const previousRobots = robots?.getAttribute("content") ?? "";
    document.title = "Page Not Found | Revive Event Center";
    robots?.setAttribute("content", "noindex, follow");
    return () => {
      document.title = previousTitle;
      robots?.setAttribute("content", previousRobots);
    };
  }, []);
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-foreground" aria-hidden="true" />
            <h1 className="text-2xl font-bold text-foreground">Page not found</h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            This page may have moved. Explore Revive Event Center or contact us about your event.
          </p>
          <a className="inline-flex items-center min-h-12 mt-4 underline font-medium" href={import.meta.env.BASE_URL}>Return to the homepage</a>
        </CardContent>
      </Card>
    </main>
  );
}
