import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import {
  Shield,
  Lock,
  Database,
  Eye,
  FileText,
  Server,
  Download,
  Mail,
  Calendar,
} from "lucide-react";
import { Button } from "../ui/button";

interface PrivacyPolicyProps {
  open: boolean;
  onClose: () => void;
}

export function PrivacyPolicy({
  open,
  onClose,
}: PrivacyPolicyProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-2xl lg:max-w-4xl p-0 overflow-hidden"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <SheetHeader className="px-4 sm:px-6 py-4 sm:py-6 border-b shrink-0">
            <SheetTitle className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <span>Privacy Policy</span>
            </SheetTitle>
            <SheetDescription className="text-left">
              How KharchaPal protects and handles your financial
              data
            </SheetDescription>
          </SheetHeader>

          {/* Content */}
          <ScrollArea className="flex-1 overflow-y-auto">
            <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-6 sm:space-y-8 max-w-3xl">
              {/* Introduction */}
              <section className="space-y-3">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                  Effective Date: November 24, 2025
                </div>
                <h2 className="text-2xl">
                  Your Privacy Matters
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  KharchaPal is designed with your privacy as
                  our top priority. We believe your financial
                  data should remain yours and yours alone. This
                  policy explains our commitment to protecting
                  your information.
                </p>
              </section>

              {/* Key Highlights */}
              <section className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 space-y-4">
                <h3 className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Privacy at a Glance
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 bg-background/50 rounded-lg p-3">
                    <Database className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm">
                        100% Local Storage
                      </p>
                      <p className="text-xs text-muted-foreground">
                        All data stays on your device
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-background/50 rounded-lg p-3">
                    <Lock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm">No Cloud Sync</p>
                      <p className="text-xs text-muted-foreground">
                        Never uploaded to servers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-background/50 rounded-lg p-3">
                    <Eye className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm">No Tracking</p>
                      <p className="text-xs text-muted-foreground">
                        Zero analytics or monitoring
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-background/50 rounded-lg p-3">
                    <Server className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm">
                        No Third Parties
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Completely self-contained
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Local Storage */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <h3>100% Local Storage</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">
                    All your data is stored locally on your
                    device only.
                  </strong>{" "}
                  This means every piece of information you
                  enter into KharchaPal stays on your device and
                  never leaves it.
                </p>
                <div className="bg-muted/50 rounded-lg p-5 space-y-3">
                  <p className="text-sm">
                    Data stored locally includes:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Expenses and income records
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Budget information
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Debt and IOU records
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Goals and savings
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Family member information
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Receipt images and attachments
                    </div>
                  </div>
                  <div className="pt-3 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">
                      Your data never leaves your device. There
                      is no cloud storage, no server uploads,
                      and no backups to external services.
                    </p>
                  </div>
                </div>
              </section>

              {/* No Cloud Sync */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <h3>No Cloud Sync or Remote Storage</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  KharchaPal does not sync your data to any
                  cloud service. Your financial information
                  stays on your device and is never transmitted
                  to our servers or any third-party services. We
                  don't have servers to store your data, because
                  we simply don't collect it.
                </p>
              </section>

              {/* No Analytics */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <h3>No Analytics or Tracking</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We do not collect any analytics, usage data,
                  or tracking information. We respect your
                  privacy completely and don't monitor your
                  activity within the app.
                </p>
                <div className="bg-muted/50 rounded-lg p-5">
                  <p className="text-sm mb-3">We don't know:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">
                        •
                      </span>
                      <span>
                        How you use the app or what features you
                        access
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">
                        •
                      </span>
                      <span>
                        How much you spend, earn, or save
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">
                        •
                      </span>
                      <span>
                        Any personal or financial information
                        whatsoever
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">
                        •
                      </span>
                      <span>
                        Your device information or location
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Data Collection */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3>What Data We Collect</h3>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                  <p className="text-lg">
                    Short answer: <strong>Nothing.</strong>
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  KharchaPal does not collect, store, or
                  transmit any of your data. All information you
                  enter into the app is stored locally in your
                  device's browser storage (IndexedDB) and never
                  leaves your device. We have no servers, no
                  databases, and no way to access your data.
                </p>
              </section>

              {/* Data Security */}
              <section className="space-y-4">
                <h3>Data Security & Your Responsibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Since all data is stored locally on your
                  device, the security of your data depends on
                  the security of your device. Here's what you
                  should know:
                </p>
                <div className="space-y-3">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm">
                      Your data is as secure as your device
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      We recommend using device lock, password
                      protection, and keeping your device secure
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm">
                      Clearing browser data will delete all app
                      data
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Be careful when clearing cache or site
                      data in your browser settings
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm">
                      Uninstalling will remove all stored
                      information
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Make sure to export your data before
                      uninstalling if you want to keep it
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Backup */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <h3>Data Backup & Export</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Since we don't store your data on any servers,{" "}
                  <strong className="text-foreground">
                    you are responsible for backing up your
                    data.
                  </strong>{" "}
                  KharchaPal provides built-in export
                  functionality to help you create backups.
                </p>
                <div className="bg-muted/50 rounded-lg p-5">
                  <p className="text-sm mb-2">
                    Available export options:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">
                        ✓
                      </span>
                      <span>
                        Export to JSON format (complete backup
                        with all data)
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">
                        ✓
                      </span>
                      <span>
                        Export to CSV format (for spreadsheet
                        analysis)
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">
                        ✓
                      </span>
                      <span>
                        Save to your preferred location (cloud
                        drive, local storage, etc.)
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Third-Party Services */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Server className="h-5 w-5 text-primary" />
                  </div>
                  <h3>Third-Party Services & SDKs</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  KharchaPal does not use any third-party
                  services, SDKs, analytics tools, or external
                  APIs. The app is completely self-contained and
                  offline-capable. No data is ever shared with
                  or sent to any third-party service.
                </p>
              </section>

              {/* Your Rights */}
              <section className="space-y-4">
                <h3>Your Rights & Control</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Since we don't collect any data about you,
                  there's no data for us to share, sell, or
                  manage. You have complete control over your
                  information at all times:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm">
                      Full Data Ownership
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      All data belongs to you and stays with you
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm">Complete Privacy</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      No one can access your financial
                      information
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm">Easy Deletion</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Delete all data anytime from app settings
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm">Export Anytime</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Take your data with you whenever you want
                    </p>
                  </div>
                </div>
              </section>

              {/* Children's Privacy */}
              <section className="space-y-4">
                <h3>Children's Privacy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  KharchaPal does not knowingly collect any
                  information from anyone, including children
                  under 13. Since we don't collect any data at
                  all, the app can be safely used by people of
                  all ages, though we recommend parental
                  guidance for financial learning.
                </p>
              </section>

              {/* Changes to Policy */}
              <section className="space-y-4">
                <h3>Changes to This Privacy Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If we ever change our privacy practices, we
                  will update this policy and notify users
                  through the app. The updated policy will be
                  effective immediately upon posting. However,
                  <strong className="text-foreground">
                    {" "}
                    our core principle of local-only storage
                    will never change.
                  </strong>{" "}
                  This is a fundamental commitment we make to
                  our users.
                </p>
              </section>

              {/* Contact */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h3>Contact Us</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy
                  Policy, how KharchaPal handles your data, or
                  any concerns about your privacy, please feel
                  free to contact us:
                </p>
                <div className="bg-muted/50 rounded-lg p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Email
                      </p>
                      <a
                        href="mailto:niteshjha1333@gmail.com"
                        className="text-primary hover:underline"
                      >
                        niteshjha1333@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Response Time
                      </p>
                      <p className="text-sm">
                        We typically respond within 24-48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <section className="pt-6 border-t space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Last updated
                    </p>
                    <p className="text-sm">November 24, 2025</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Version 1.0
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  KharchaPal is committed to transparency and
                  protecting your privacy. This policy may be
                  updated periodically, and we encourage you to
                  review it regularly.
                </p>
              </section>
            </div>
          </ScrollArea>

          {/* Footer Actions */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-t bg-muted/30 shrink-0">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <p className="text-xs text-muted-foreground text-center sm:text-left">
                Your data is safe with KharchaPal
              </p>
              <Button
                onClick={onClose}
                variant="default"
                className="w-full sm:w-auto"
              >
                I Understand
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}