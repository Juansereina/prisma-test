'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUserState } from './store';

export default function Form() {
  const { register, handleSubmit } = useForm<UserT>();
  const onSubmit: SubmitHandler<UserT> = async (data) => {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const user = await response.json();
    setUser(user);
  };
  const { user, setUser } = useUserState(({ setUser, user }) => ({
    setUser,
    user,
  }));

  if (user) {
    return (
      <h1 className="text-white text-xl text-center mt-4">
        Ready to create a post
      </h1>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-2 text-black w-96 mt-4 mx-auto"
    >
      <h1 className="text-white text-xl">User form</h1>
      <input
        className="rounded p-2"
        {...register('email')}
        placeholder="email"
      />
      <input className="rounded p-2" {...register('name')} placeholder="name" />
      <button className="bg-white rounded p-2" type="submit">
        send
      </button>
    </form>
  );
}
