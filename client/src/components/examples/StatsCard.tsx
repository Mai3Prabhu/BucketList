import StatsCard from '../StatsCard';
import { Heart, CheckCircle2, TrendingUp } from 'lucide-react';

export default function StatsCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <StatsCard
        title="Total Dreams"
        value={24}
        icon={Heart}
        gradient="from-pink-500 to-rose-500"
        delay={0}
      />
      <StatsCard
        title="Completed"
        value={12}
        icon={CheckCircle2}
        gradient="from-purple-500 to-pink-500"
        delay={0.1}
      />
      <StatsCard
        title="Progress"
        value="50%"
        icon={TrendingUp}
        gradient="from-blue-500 to-purple-500"
        delay={0.2}
      />
    </div>
  );
}
