'use client';

export default function Form() {
  return (
    <form
      onClick={(e) => {
        e.preventDefault();
        console.log('entra');
      }}
    >
      <button type="submit">send</button>
    </form>
  );
}
