import EmptyState from '../EmptyState';

export default function EmptyStateExample() {
  return (
    <div className="space-y-8">
      <EmptyState
        title="No dreams yet"
        description="Start adding your bucket list items and make your dreams come true together!"
        icon="heart"
      />
    </div>
  );
}
