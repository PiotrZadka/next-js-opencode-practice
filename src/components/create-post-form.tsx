'use client';

import { useActionState } from 'react';
import { FormState } from '@/app/posts/actions';
import SubmitButton from './submit-button';
import { createPost } from '@/app/posts/actions';
import { usePostsContext } from './posts-provider';

const initialState: FormState = {
  message: '',
  successKey: undefined,
};

export default function CreatePostForm() {
  const { addOptimisticPost } = usePostsContext();
  const [state, formAction] = useActionState(createPost, initialState);

  const handleSubmit = async (formData: FormData) => {
    const title = formData.get('title') as string;
    const body = formData.get('body') as string;

    // Add optimistic post immediately
    addOptimisticPost({
      id: -Date.now(), // Negative ID for optimistic posts
      title,
      body,
      createdAt: new Date(),
    });

    // Then call the server action
    formAction(formData);
  };

  return (
    <form
      key={state.successKey} // Resets the form when successKey changes
      action={handleSubmit}
      className="space-y-4"
    >
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
      <SubmitButton />
      {state.message && (
        <p aria-live="polite" className="mt-4 text-sm font-medium">
          {state.message}
        </p>
      )}
    </form>
  );
}
