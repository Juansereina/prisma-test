'use client';

export default function Form() {
  return (
    <form
      onClick={(e) => {
        e.preventDefault();
        console.log('entra');
      }}
      className="grid gap-2 text-black w-96 mt-4 mx-auto"
    >
      <h1 className="text-white text-xl">User form</h1>
      <input
        className="rounded p-2"
        type="email"
        name="email"
        id="email"
        placeholder="email"
      />
      <input
        className="rounded p-2"
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <button className="bg-white rounded p-2" type="submit">
        send
      </button>
    </form>
  );
}
