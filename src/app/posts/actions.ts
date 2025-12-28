'use server';
import { revalidatePath } from 'next/cache';

export type FormState = {
  message: string;
  errors?: {
    title?: string;
    body?: string;
  };
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

  console.log('Server Action: creating post...', { title, body });

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to create post');
    }

    console.log('Server Action: successfully created!');

    revalidatePath('/posts');
    return { message: 'Post created successfully!' };
  } catch (error) {
    console.error(error);
    return { message: 'Failed to create post' };
  }
};
