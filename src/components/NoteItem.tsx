import { Archive, Trash2 } from "lucide-react";
import { twMerge } from "tailwind-merge";
import type { Note } from "../types/Note";
export default function NoteItem({
  item,
  del,
  archive,
}: {
  item: Note;
  del: (note: Note) => void;
  archive: (note: Note) => void;
}) {
  return (
    <div className="rounded-lg drop-shadow-xl bg-white">
      <div
        className={twMerge(
          "w-full h-3 rounded-t-lg",
          item.active ? "bg-blue-400" : "bg-gray-300",
        )}
      />
      <div className="p-5 space-y-4 text-gray-800 grid sm:grid-cols-[1fr_auto] grid-rows[repeat(3,auto)] sm:grid-rows-[repeat(2,auto)]">
        <div className="w-full">
          <p className="font-medium text-xl">{item.title}</p>
          <p className="text-sm text-gray-500">~{item.date}</p>
        </div>
        <div className="flex gap-2 sm:w-fit row-start-3 sm:row-start-1 sm:col-start-2">
          <button
            className="flex justify-center items-center gap-2 rounded-lg border border-red-600 bg-red-600/20 text-red-600 w-full h-10 sm:size-10 cursor-pointer"
            onClick={() => del(item)}
          >
            <Trash2 size={18} />
            <p className="sm:hidden">Delete</p>
          </button>
          <button
            className="flex justify-center items-center gap-2 rounded-lg border border-orange-600 bg-orange-600/20 text-orange-600 w-full h-10 sm:size-10 cursor-pointer"
            onClick={() => archive(item)}
          >
            <Archive size={18} />
            <p className="sm:hidden">Archive</p>
          </button>
        </div>
        <p className="min-h-12 sm:col-span-2">{item.desc}</p>
      </div>
    </div>
  );
}
