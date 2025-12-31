'use server';
import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';

export type FormState = {
  message: string;
  errors?: {
    title?: string;
    body?: string;
  };
  successKey?: number; // Used to reset the form
};

export const createPost = async (
  _prevState: FormState,
  data: FormData
): Promise<FormState> => {
  const title = data.get('title') as string;
  const body = data.get('body') as string;

  if (!title || title.length < 3) {
    return {
      message: 'Validation Failed',
      errors: { title: 'Title must be at least 3 characters' },
    };
  }

  try {
    await db.post.create({
      data: {
        title,
        body,
      },
    });

    revalidatePath('/posts');
    return {
      message: 'Post created successfully!',
      successKey: Date.now(), // Trigger form reset
    };
  } catch (error) {
    console.error(error);
    return { message: 'Failed to create post' };
  }
};
