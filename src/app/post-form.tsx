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
      <h1 className="text-white text-xl">Post form</h1>
      <input
        className="rounded p-2"
        type="text"
        name="title"
        id="title"
        placeholder="title"
      />
      <input
        className="rounded p-2"
        type="text"
        name="content"
        id="content"
        placeholder="content"
      />
      <fieldset>
        <label className="text-white mr-4" htmlFor="published">
          published
        </label>
        <input type="checkbox" name="published" id="published" />
      </fieldset>
      <button className="bg-white rounded p-2" type="submit">
        send
      </button>
    </form>
  );
}
