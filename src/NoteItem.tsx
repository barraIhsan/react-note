import { Archive, Trash2 } from "lucide-react";
import { twMerge } from "tailwind-merge";
export default function NoteItem({
  active,
  title,
  date,
  desc,
}: {
  active: boolean;
  title: string;
  date: string;
  desc: string;
}) {
  return (
    <div className="rounded-lg drop-shadow-xl bg-white">
      <div
        className={twMerge(
          "w-full h-3 rounded-t-lg",
          active ? "bg-blue-400" : "bg-gray-300",
        )}
      />
      <div className="p-5 space-y-4 text-gray-800">
        <div className="flex">
          <div className="w-full">
            <p className="font-medium text-xl">{title}</p>
            <p className="text-sm text-gray-500">~{date}</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button className="flex justify-center items-center rounded-lg border border-red-600 bg-red-600/20 text-red-600 size-10 cursor-pointer">
              <Trash2 size={18} />
            </button>
            <button className="flex justify-center items-center rounded-lg border border-orange-600 bg-orange-600/20 text-orange-600 size-10 cursor-pointer">
              <Archive size={18} />
            </button>
          </div>
        </div>
        <p className="min-h-12">{desc}</p>
      </div>
    </div>
  );
}
