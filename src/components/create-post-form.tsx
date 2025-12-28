'use client';

import { useActionState } from 'react';
import { createPost, FormState } from '@/app/posts/actions';

const initialState: FormState = {
  message: '',
};

export default function CreatePostForm() {
  const [state, formAction, isPending] = useActionState(
    createPost,
    initialState
  );

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-foreground"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="mt-1 block w-full border border-[var(--border)] rounded-md shadow-sm p-2 bg-[var(--card)] text-foreground placeholder:text-foreground/50"
        />
        {state.errors?.title && (
          <p className="text-red-500 text-sm mt-1">{state.errors.title}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="body"
          className="block text-sm font-medium text-foreground"
        >
          Body
        </label>
        <textarea
          id="body"
          name="body"
          required
          className="mt-1 block w-full border border-[var(--border)] rounded-md shadow-sm p-2 bg-[var(--card)] text-foreground placeholder:text-foreground/50"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="px-4 py-2 bg-foreground text-background rounded-md hover:opacity-90 disabled:opacity-50"
      >
        {isPending ? 'Creating...' : 'Create Post'}
      </button>
      {state.message && (
        <p aria-live="polite" className="mt-4 text-sm font-medium">
          {state.message}
        </p>
      )}
    </form>
  );
}
