import ActivityFeedItem from '../ActivityFeedItem';

export default function ActivityFeedItemExample() {
  return (
    <div className="space-y-4 p-4">
      <ActivityFeedItem
        type="added"
        text="Visit Paris together"
        timestamp={new Date().toISOString()}
        delay={0}
      />
      <ActivityFeedItem
        type="completed"
        text="Learn to cook pasta"
        timestamp={new Date(Date.now() - 3600000).toISOString()}
        delay={0.1}
      />
      <ActivityFeedItem
        type="deleted"
        text="Old bucket list item"
        timestamp={new Date(Date.now() - 7200000).toISOString()}
        delay={0.2}
      />
    </div>
  );
}
