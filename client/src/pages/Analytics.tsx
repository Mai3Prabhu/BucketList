import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import StatsCard from "@/components/StatsCard";
import { Heart, CheckCircle2, TrendingUp, Target, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BucketListItem } from "@shared/schema";

export default function Analytics() {
  const { data: items = [], isLoading } = useQuery<BucketListItem[]>({
    queryKey: ["/api/bucket-list"],
  });

  const completed = items.filter((item) => item.completed).length;
  const total = items.length;
  const active = total - completed;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  if (isLoading) {
    return (
      <div className="min-h-full flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin">
            <Sparkles className="h-8 w-8 text-primary mx-auto" />
          </div>
          <p className="text-muted-foreground">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full">
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <TrendingUp className="h-8 w-8 text-primary" />
            Analytics
          </h1>
          <p className="text-muted-foreground">
            Track your progress and celebrate achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Total Dreams"
            value={total}
            icon={Heart}
            gradient="from-pink-500 to-rose-500"
            delay={0}
          />
          <StatsCard
            title="Completed"
            value={completed}
            icon={CheckCircle2}
            gradient="from-green-500 to-emerald-500"
            delay={0.1}
          />
          <StatsCard
            title="Active"
            value={active}
            icon={Target}
            gradient="from-blue-500 to-cyan-500"
            delay={0.2}
          />
          <StatsCard
            title="Progress"
            value={`${percentage}%`}
            icon={TrendingUp}
            gradient="from-purple-500 to-pink-500"
            delay={0.3}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary fill-current" />
                Overall Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Completion Rate</span>
                  <span className="font-semibold text-foreground">{percentage}%</span>
                </div>
                <Progress value={percentage} className="h-3" />
              </div>
              
              <p className="text-sm text-muted-foreground text-center pt-4">
                {completed > 0
                  ? `Amazing! You've completed ${completed} ${completed === 1 ? 'dream' : 'dreams'} together!`
                  : "Start completing your dreams to track your progress!"}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
