import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="min-h-screen max-w-3xl mx-auto bg-background text-foreground p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">My Account</h1>
        <Button variant="ghost" size="icon">
          <X className="h-5 w-5" />
        </Button>
      </div>

      <Separator orientation="horizontal" className="h-full my-6" />

      {/* Settings Card */}
      <Card className="rounded-lg shadow-lg">
        <CardContent className="p-6 space-y-4">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="bg-muted rounded-lg p-4 hover:bg-muted/70 transition-colors"
            >
              <p className="text-sm font-medium">Demo Section {idx + 1}</p>
              <p className="text-xs text-muted-foreground">
                Settings description goes here.
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
