import ChecklistItem from '../ChecklistItem';

export default function ChecklistItemExample() {
  return (
    <div className="space-y-4 p-4">
      <ChecklistItem
        id="1"
        text="Visit Paris together"
        description="See the Eiffel Tower at sunset"
        priority="high"
        targetDate="2025-06-15"
        completed={false}
        onToggle={(id) => console.log('Toggled item:', id)}
        onDelete={(id) => console.log('Deleted item:', id)}
      />
      <ChecklistItem
        id="2"
        text="Learn to cook pasta from scratch"
        priority="medium"
        completed={true}
        onToggle={(id) => console.log('Toggled item:', id)}
        onDelete={(id) => console.log('Deleted item:', id)}
      />
    </div>
  );
}
