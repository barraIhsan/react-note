import { Archive, StickyNote } from "lucide-react";
import NoteItem from "./NoteItem";
import type { Note } from "../types/Note";

export default function NoteList({
  data,
  search,
  del,
  archive,
}: {
  data: Array<Note>;
  search: string;
  del: (note: Note) => void;
  archive: (note: Note) => void;
}) {
  function notes(active: string) {
    return data.filter(
      (a) =>
        a.active == (active == "active") &&
        (a.title.includes(search) || a.desc.includes(search)),
    );
  }

  return (
    <main className="container mx-auto px-5 space-y-16 mb-24">
      <section className="space-y-8">
        <h2 className="inline-flex items-center gap-2 text-lg font-medium">
          <StickyNote /> Active
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {notes("active").length > 0 ? (
            notes("active").map((item) => (
              <NoteItem
                key={item.uuid}
                item={item}
                del={del}
                archive={archive}
              />
            ))
          ) : (
            <p className="col-span-4 text-center">
              {search ? "No notes found" : "No notes are active"}
            </p>
          )}
        </div>
      </section>
      <section className="space-y-8">
        <h2 className="inline-flex items-center gap-2 text-lg font-medium">
          <Archive /> Archive
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {notes("archive").length > 0 ? (
            notes("archive").map((item) => (
              <NoteItem
                key={item.uuid}
                item={item}
                del={del}
                archive={archive}
              />
            ))
          ) : (
            <p className="col-span-4 text-center">
              {search ? "No notes found" : "No notes are archived"}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
