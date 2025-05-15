import { Archive, StickyNote } from "lucide-react";
import NoteItem from "./NoteItem";
import type { Card } from "./types/Card.ts";

export default function NoteList({
  setData,
  data,
}: {
  setData: React.Dispatch<Array<Card>>;
  data: Array<Card>;
}) {
  return (
    <main className="container mx-auto space-y-16 mb-24">
      <section className="space-y-8">
        <h2 className="inline-flex items-center gap-2 text-lg font-medium">
          <StickyNote /> Active
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {data.filter((a) => a.active == true).length > 0 ? (
            data
              .filter((a) => a.active == true)
              .map((item) => (
                <NoteItem
                  key={item.uuid}
                  data={data}
                  item={item}
                  setData={setData}
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
          {data.filter((a) => a.active == false).length > 0 ? (
            data
              .filter((a) => a.active == false)
              .map((item) => (
                <NoteItem
                  key={item.uuid}
                  data={data}
                  item={item}
                  setData={setData}
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
