import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Navbar from "./components/Navbar";
import type { Note } from "./types/Note";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function App() {
  const [data, setData] = useState<Array<Note>>(() => {
    const saved = localStorage.getItem("data");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function addData(formData: FormData) {
    setData([
      ...data,
      {
        uuid: uuid(),
        title: formData.get("title") as string,
        date: new Date().toLocaleString(),
        desc: formData.get("desc") as string,
        active: true,
      },
    ]);
  }

  function deleteData(note: Note) {
    setData(data.filter((a) => a.uuid != note.uuid));
  }

  function archiveData(note: Note) {
    setData(
      data.map((a) => (a.uuid == note.uuid ? { ...a, active: !a.active } : a)),
    );
  }

  return (
    <>
      <Navbar />
      <NoteForm add={addData} />
      <NoteList data={data} del={deleteData} archive={archiveData} />
    </>
  );
}
