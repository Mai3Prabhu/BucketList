import { Switch, Route, Link, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import Dashboard from "@/pages/Dashboard";
import Completed from "@/pages/Completed";
import Activity from "@/pages/Activity";
import Analytics from "@/pages/Analytics";
import Settings from "@/pages/Settings";
import { Heart, CheckCircle2, Clock, TrendingUp, Settings as SettingsIcon } from "lucide-react";

const navItems = [
  { path: "/", label: "Bucket List", icon: Heart },
  { path: "/completed", label: "Completed", icon: CheckCircle2 },
  { path: "/activity", label: "Activity", icon: Clock },
  { path: "/analytics", label: "Analytics", icon: TrendingUp },
  { path: "/settings", label: "Settings", icon: SettingsIcon },
];

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/completed" component={Completed} />
      <Route path="/activity" component={Activity} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/settings" component={Settings} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <Link href="/">
                  <a className="flex items-center" data-testid="link-home">
                    <Logo />
                  </a>
                </Link>

                <div className="flex items-center gap-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location === item.path;
                    
                    return (
                      <Link key={item.path} href={item.path}>
                        <a data-testid={`link-${item.label.toLowerCase()}`}>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative px-3 py-2 rounded-lg transition-colors ${
                              isActive
                                ? "text-primary font-medium"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Icon className="h-4 w-4" />
                              <span className="hidden sm:inline text-sm">
                                {item.label}
                              </span>
                            </div>
                            {isActive && (
                              <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                                transition={{ type: "spring", duration: 0.5 }}
                              />
                            )}
                          </motion.div>
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </nav>

          <main className="pb-8">
            <Router />
          </main>

          <motion.div
            className="fixed bottom-0 right-0 p-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
          >
            <Heart className="h-32 w-32 text-primary/20 fill-current" />
          </motion.div>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
