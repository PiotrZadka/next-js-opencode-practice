import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-4 py-2 bg-foreground text-background rounded-md hover:opacity-90 disabled:opacity-50"
    >
      {pending ? 'Saving...' : 'Create Post'}
    </button>
  );
}
