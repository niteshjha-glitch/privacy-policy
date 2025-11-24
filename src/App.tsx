import { useState } from "react";
import { PrivacyPolicy } from "./components/privacy/PrivacyPolicy";
import { Button } from "./components/ui/button";
import { Shield } from "lucide-react";

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted/30">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-3">
          <div className="flex justify-center">
            <div className="p-4 rounded-2xl bg-primary/10">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl">KharchaPal</h1>
          <p className="text-muted-foreground">
            Your privacy-first expense tracking app
          </p>
        </div>
        
        <Button 
          onClick={() => setIsPrivacyOpen(true)}
          size="lg"
          className="w-full sm:w-auto"
        >
          View Privacy Policy
        </Button>

        <p className="text-xs text-muted-foreground">
          100% local storage • No tracking • Complete privacy
        </p>
      </div>

      <PrivacyPolicy 
        open={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
    </div>
  );
}
