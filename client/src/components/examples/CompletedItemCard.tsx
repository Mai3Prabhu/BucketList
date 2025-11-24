import CompletedItemCard from '../CompletedItemCard';

export default function CompletedItemCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <CompletedItemCard
        id="1"
        text="Visit Paris together"
        description="We saw the Eiffel Tower at sunset - it was magical!"
        completedAt={new Date().toISOString()}
        priority="high"
        delay={0}
      />
      <CompletedItemCard
        id="2"
        text="Learn to cook pasta from scratch"
        completedAt={new Date(Date.now() - 86400000).toISOString()}
        priority="medium"
        delay={0.1}
      />
      <CompletedItemCard
        id="3"
        text="Watch sunrise together"
        description="Early morning adventure at the beach"
        completedAt={new Date(Date.now() - 172800000).toISOString()}
        priority="low"
        delay={0.2}
      />
    </div>
  );
}
