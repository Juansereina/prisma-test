import UserForm from './user-form';
import PostForm from './post-form';

export default function Home() {
  return (
    <main className="grid gap-8">
      <UserForm />
      <PostForm />
    </main>
  );
}
