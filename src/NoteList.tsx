import { Archive, StickyNote } from "lucide-react";
import NoteItem from "./NoteItem";

export default function NoteList() {
  return (
    <main className="container mx-auto space-y-16 mb-24">
      <section className="space-y-8">
        <h2 className="inline-flex items-center gap-2 text-lg font-medium">
          <StickyNote /> Active
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <NoteItem
              key={i}
              active
              title="Ide Konten"
              date="Selasa, 13 Mei 2025"
              desc="Tips belajar React untuk pemula."
            />
          ))}
        </div>
      </section>
      <section className="space-y-8">
        <h2 className="inline-flex items-center gap-2 text-lg font-medium">
          <Archive /> Archive
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <NoteItem
              key={i}
              active
              title="Ide Konten"
              date="Selasa, 13 Mei 2025"
              desc="Tips belajar React untuk pemula."
            />
          ))}
        </div>
      </section>
    </main>
  );
}
