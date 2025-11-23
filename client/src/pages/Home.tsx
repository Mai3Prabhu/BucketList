import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, CheckCircle2, TrendingUp } from "lucide-react";
import hugGif from "@assets/Hug_1763906645911.gif";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col items-center justify-center py-8"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="mb-8"
          >
            <img 
              src={hugGif} 
              alt="Cute couple hugging" 
              className="w-64 h-64 object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Our Dreams Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A cute, romantic space to track your bucket list as a couple.
              Make your dreams come true, one adventure at a time.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/bucket-list">
            <a>
              <Button size="lg" className="gap-2 text-lg" data-testid="button-get-started">
                <Heart className="h-5 w-5 fill-current" />
                Get Started
              </Button>
            </a>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12"
        >
          <div className="space-y-3">
            <div className="inline-flex p-3 rounded-full bg-pink-100 dark:bg-pink-900/30">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">Track Your Dreams</h3>
            <p className="text-sm text-muted-foreground">
              Add bucket list items with descriptions, priorities, and target dates
            </p>
          </div>

          <div className="space-y-3">
            <div className="inline-flex p-3 rounded-full bg-purple-100 dark:bg-purple-900/30">
              <CheckCircle2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">Celebrate Together</h3>
            <p className="text-sm text-muted-foreground">
              Mark items complete with confetti celebrations and track your progress
            </p>
          </div>

          <div className="space-y-3">
            <div className="inline-flex p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">See Your Journey</h3>
            <p className="text-sm text-muted-foreground">
              View analytics, activity feed, and completed dreams all in one place
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="pt-8"
        >
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary fill-current" />
            <span>All data stored locally in your browser</span>
            <Sparkles className="h-4 w-4 text-primary fill-current" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
