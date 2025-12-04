import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Shield, Lock, Database, Eye, FileText, ChevronLeft, Server, Wifi, Smartphone } from "lucide-react";

interface PrivacyPolicyProps {
    open: boolean;
    onClose: () => void;
}

export function PrivacyPolicy({ open, onClose }: PrivacyPolicyProps) {
    return (
        <Sheet open={open} onOpenChange={onClose}>
            <SheetContent side="right" className="w-[420px] max-w-[90vw] h-[90vh] flex flex-col">
                <SheetHeader className="flex-none p-6 border-b flex items-center gap-2 relative">

                    <div className="flex flex-col gap-1 min-w-0 flex-1">
                        <SheetTitle className="flex items-center gap-2 text-base">
                            <Shield className="h-5 w-5 flex-shrink-0" />
                            Privacy Policy
                        </SheetTitle>
                        <SheetDescription className="text-xs">
                            How KharchaPal handles your data
                        </SheetDescription>
                    </div>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-w-3 scrollbar-thumb-primary/60 scrollbar-track-transparent scrollbar-thumb-rounded-full hover:scrollbar-thumb-primary pr-4">
                    <div className="p-6 space-y-6 [&>div]:max-w-none min-h-full">
                        {/* Introduction */}
                        <section>
                            <h3 className="text-lg font-semibold mb-2">Your Privacy Matters</h3>
                            <p className="text-sm text-muted-foreground">
                                KharchaPal is designed with your privacy as a top priority. This policy explains exactly what data we collect, how we use it, and where it's stored.
                            </p>
                        </section>

                        {/* Data Storage Architecture */}
                        <section className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Database className="h-5 w-5 text-primary" />
                                <h3 className="text-lg font-semibold">Data Storage</h3>
                            </div>
                            <div className="bg-muted/50 border-2 border-primary/20 rounded-lg p-4 space-y-3">
                                <div>
                                    <p className="text-sm font-medium mb-1">Local Storage (IndexedDB)</p>
                                    <p className="text-xs text-muted-foreground">
                                        All your financial data is stored locally on your device using IndexedDB:
                                    </p>
                                    <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1 ml-2 mt-1">
                                        <li>Expenses and income records</li>
                                        <li>Budget information</li>
                                        <li>Debt/IOU records</li>
                                        <li>Goals and savings</li>
                                        <li>Family member information</li>
                                        <li>Custom categories and tax sections</li>
                                        <li>Recurring transactions</li>
                                        <li>Account details</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-sm font-medium mb-1">Browser Storage (localStorage)</p>
                                    <p className="text-xs text-muted-foreground">
                                        We use browser localStorage only for:
                                    </p>
                                    <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1 ml-2 mt-1">
                                        <li>Authentication tokens (secure session management)</li>
                                        <li>User preferences (language, theme)</li>
                                        <li>Notification settings</li>
                                        <li>Last sync timestamps</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Backend Communication */}
                        <section className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Server className="h-5 w-5 text-primary" />
                                <h3 className="text-lg font-semibold">Backend Communication</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                KharchaPal uses a backend server for:
                            </p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                                <li><strong>Authentication:</strong> Secure login and signup</li>
                                <li><strong>Family Management:</strong> Creating and joining family groups</li>
                                <li><strong>Data Sync:</strong> Syncing data across family members</li>
                                <li><strong>Real-time Updates:</strong> Notifying family members of changes</li>
                            </ul>
                            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3 mt-2">
                                <p className="text-xs text-amber-900 dark:text-amber-100">
                                    <strong>Important:</strong> Your financial data is transmitted to our backend server for family sync features. All communication is encrypted using HTTPS.
                                </p>
                            </div>
                        </section>

                        {/* Real-time Features */}
                        <section className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Wifi className="h-5 w-5 text-primary" />
                                <h3 className="text-lg font-semibold">Real-time Sync (WebSocket)</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                We use WebSocket connections (Socket.IO) to provide real-time updates when family members:
                            </p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                                <li>Add or edit expenses</li>
                                <li>Update budgets or goals</li>
                                <li>Settle debts</li>
                                <li>Make changes to family data</li>
                            </ul>
                            <p className="text-xs text-muted-foreground mt-2">
                                WebSocket connections are authenticated using your session token and only transmit data relevant to your family group.
                            </p>
                        </section>

                        {/* Mobile App Permissions */}
                        <section className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Smartphone className="h-5 w-5 text-primary" />
                                <h3 className="text-lg font-semibold">Mobile App Permissions</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                The mobile app uses Capacitor plugins that may request the following permissions:
                            </p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                                <li><strong>Haptic Feedback:</strong> Provides tactile feedback for actions (no data collected)</li>
                                <li><strong>Status Bar:</strong> Customizes the status bar appearance (no data collected)</li>
                                <li><strong>Device Info:</strong> Detects device type for responsive UI (no data transmitted)</li>
                                <li><strong>Keyboard:</strong> Manages keyboard behavior (no data collected)</li>
                            </ul>
                            <p className="text-xs text-muted-foreground mt-2">
                                These permissions are used solely for app functionality and do not collect or transmit any personal data.
                            </p>
                        </section>

                        {/* No Analytics */}
                        <section className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Eye className="h-5 w-5 text-primary" />
                                <h3 className="text-lg font-semibold">No Analytics or Tracking</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                We do not use any third-party analytics, tracking, or advertising services. We don't know:
                            </p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                                <li>How you use the app</li>
                                <li>What features you access</li>
                                <li>How much you spend or earn</li>
                                <li>Any personal or financial information beyond what's needed for app functionality</li>
                            </ul>
                        </section>

                        {/* Data We Collect */}
                        <section className="space-y-3">
                            <div className="flex items-center gap-2">
                                <FileText className="h-5 w-5 text-primary" />
                                <h3 className="text-lg font-semibold">What Data We Collect</h3>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <p className="text-sm font-medium">Account Information:</p>
                                    <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1 ml-2">
                                        <li>Email address (for authentication)</li>
                                        <li>Name and phone number (optional, for family identification)</li>
                                        <li>Password (encrypted and hashed)</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Financial Data:</p>
                                    <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1 ml-2">
                                        <li>Transactions (expenses and income)</li>
                                        <li>Budgets, goals, and accounts</li>
                                        <li>Debt/IOU records</li>
                                        <li>Custom categories and tax information</li>
                                        <li>Family group information</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Data Security */}
                        <section className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Lock className="h-5 w-5 text-primary" />
                                <h3 className="text-lg font-semibold">Data Security</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                We implement industry-standard security measures:
                            </p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                                <li>HTTPS encryption for all data transmission</li>
                                <li>Secure password hashing (bcrypt)</li>
                                <li>JWT token-based authentication</li>
                                <li>Local device security (your data is as secure as your device)</li>
                            </ul>
                            <p className="text-sm text-muted-foreground mt-2">
                                <strong>Recommendations:</strong>
                            </p>
                            <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1 ml-2">
                                <li>Use a strong, unique password</li>
                                <li>Enable device lock/password protection</li>
                                <li>Keep your device software updated</li>
                                <li>Be cautious when using public Wi-Fi</li>
                            </ul>
                        </section>

                        {/* Data Backup */}
                        <section className="space-y-3">
                            <h3 className="text-lg font-semibold">Data Backup & Export</h3>
                            <p className="text-sm text-muted-foreground">
                                Your data is stored on our backend server for family sync purposes. You can:
                            </p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                                <li>Export your data using the "Export Data" feature (CSV/PDF format)</li>
                                <li>Delete your account and all associated data at any time</li>
                                <li>Request a copy of your data by contacting us</li>
                            </ul>
                            <p className="text-xs text-muted-foreground mt-2">
                                <strong>Note:</strong> Clearing browser data will delete local IndexedDB storage but not backend data.
                            </p>
                        </section>

                        {/* Third-Party Services */}
                        <section className="space-y-3">
                            <h3 className="text-lg font-semibold">Third-Party Services</h3>
                            <p className="text-sm text-muted-foreground">
                                KharchaPal uses the following open-source libraries (no data collection):
                            </p>
                            <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1 ml-2">
                                <li>React (UI framework)</li>
                                <li>Radix UI (UI components)</li>
                                <li>Socket.IO (real-time communication)</li>
                                <li>Capacitor (mobile app framework)</li>
                                <li>Lucide Icons (icon library)</li>
                            </ul>
                            <p className="text-xs text-muted-foreground mt-2">
                                None of these libraries collect or transmit your personal data.
                            </p>
                        </section>

                        {/* Data Sharing */}
                        <section className="space-y-3">
                            <h3 className="text-lg font-semibold">Data Sharing</h3>
                            <p className="text-sm text-muted-foreground">
                                We do NOT sell, rent, or share your personal data with third parties, except:
                            </p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                                <li><strong>Within your family group:</strong> Data you add is visible to all family members</li>
                                <li><strong>Legal requirements:</strong> If required by law or to protect our rights</li>
                            </ul>
                        </section>

                        {/* Your Rights */}
                        <section className="space-y-3">
                            <h3 className="text-lg font-semibold">Your Rights</h3>
                            <p className="text-sm text-muted-foreground">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                                <li>Access your personal data</li>
                                <li>Correct inaccurate data</li>
                                <li>Delete your account and data</li>
                                <li>Export your data</li>
                                <li>Opt-out of notifications</li>
                            </ul>
                        </section>

                        {/* Changes to Policy */}
                        <section className="space-y-3">
                            <h3 className="text-lg font-semibold">Changes to This Policy</h3>
                            <p className="text-sm text-muted-foreground">
                                We may update this privacy policy from time to time. We will notify you of any significant changes via email or in-app notification.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Last updated: December 4, 2025
                            </p>
                        </section>

                        {/* Contact Us / Web Link */}
                        <section className="space-y-3">
                            <h3 className="text-lg font-semibold">Contact Us</h3>
                            <p className="text-sm text-muted-foreground">
                                For questions about this privacy policy or your data, please visit our website:
                            </p>
                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={() => window.open('https://kharchpal02.vercel.app/privacy-policy', '_blank')}
                            >
                                View Full Privacy Policy
                            </Button>
                            <p className="text-xs text-muted-foreground text-center">
                                Opens in a new tab: <a href="https://kharchpal02.vercel.app/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://kharchpal02.vercel.app/privacy-policy</a>
                            </p>
                        </section>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
