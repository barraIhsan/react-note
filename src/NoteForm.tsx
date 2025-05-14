export default function NoteForm() {
  return (
    <section className="max-w-xl mx-auto mt-32 py-16">
      <form action="#" className="flex flex-col gap-4">
        <label className="flex flex-col gap-1.5">
          Title
          <input
            type="text"
            placeholder="Type here"
            className="rounded-sm outline outline-gray-400 p-3"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          Content
          <textarea
            placeholder="Type here"
            className="resize-y min-h-14 rounded-sm outline outline-gray-400 p-3"
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
