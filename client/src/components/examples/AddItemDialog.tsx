import AddItemDialog from '../AddItemDialog';

export default function AddItemDialogExample() {
  return (
    <div className="p-4">
      <AddItemDialog
        onAdd={(item) => console.log('Added item:', item)}
      />
    </div>
  );
}
