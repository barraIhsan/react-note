import { Archive, StickyNote } from "lucide-react";
import NoteItem from "./NoteItem";
import type { Card } from "./types/Card.ts";

export default function NoteList({
  data,
  del,
  archive,
}: {
  data: Array<Card>;
  del: (card: Card) => void;
  archive: (card: Card) => void;
}) {
  function cards(active: string) {
    return data.filter((a) => a.active == (active == "active"));
  }

  return (
    <main className="container mx-auto space-y-16 mb-24">
      <section className="space-y-8">
        <h2 className="inline-flex items-center gap-2 text-lg font-medium">
          <StickyNote /> Active
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {cards("active").length > 0 ? (
            cards("active").map((item) => (
              <NoteItem
                key={item.uuid}
                item={item}
                del={del}
                archive={archive}
              />
            ))
          ) : (
            <p className="col-span-4 text-center">No cards are active</p>
          )}
        </div>
      </section>
      <section className="space-y-8">
        <h2 className="inline-flex items-center gap-2 text-lg font-medium">
          <Archive /> Archive
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {cards("archive").length > 0 ? (
            cards("archive").map((item) => (
              <NoteItem
                key={item.uuid}
                item={item}
                del={del}
                archive={archive}
              />
            ))
          ) : (
            <p className="col-span-4 text-center">No cards are archived</p>
          )}
        </div>
      </section>
    </main>
  );
}
