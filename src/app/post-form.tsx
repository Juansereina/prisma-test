'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUserState } from './store';
import { postSchema } from './schema';

export default function Form() {
  const user = useUserState((state) => state.user);
  const { register, handleSubmit } = useForm<PostT>({
    defaultValues: {
      authorId: user?.id,
    },
    resolver: zodResolver(postSchema),
  });
  const onSubmit: SubmitHandler<PostT> = async (data) => {
    await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

  if (!user) {
    return (
      <h1 className="w-96 mt-4 mx-auto text-center">
        Create a user to be able to create a Post!
      </h1>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-2 text-black w-96 mt-4 mx-auto"
    >
      <h1 className="text-white text-xl">Post form</h1>
      <input
        className="rounded p-2"
        {...register('title')}
        placeholder="title"
      />
      <input
        className="rounded p-2"
        {...register('content')}
        placeholder="content"
      />
      <fieldset>
        <label className="text-white mr-4" htmlFor="published">
          published
        </label>
        <input
          type="checkbox"
          className="rounded p-2"
          {...register('published')}
          placeholder="published"
        />
      </fieldset>
      <button className="bg-white rounded p-2" type="submit">
        send
      </button>
    </form>
  );
}
