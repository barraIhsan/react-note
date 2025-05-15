export default function NoteForm({
  add,
}: {
  add: (formData: FormData) => void;
}) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    add(new FormData(e.currentTarget));
    e.currentTarget.reset();
  }

  return (
    <section className="px-5 max-w-xl mx-auto mt-32 py-16">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-1.5">
          Title
          <input
            name="title"
            type="text"
            placeholder="Type here"
            className="rounded-sm outline outline-gray-400 p-3"
            autoComplete="off"
            required
          />
        </label>
        <label className="flex flex-col gap-1.5">
          Content
          <textarea
            name="desc"
            placeholder="Type here"
            className="resize-y min-h-14 rounded-sm outline outline-gray-400 p-3"
            autoComplete="off"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-400 text-white font-semibold rounded-lg py-4 cursor-pointer"
        >
          Add note
        </button>
      </form>
    </section>
  );
}
