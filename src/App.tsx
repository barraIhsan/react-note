import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import Navbar from "./Navbar";
import type { Card } from "./types/Card.ts";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function App() {
  const [data, setData] = useState<Array<Card>>(() => {
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

  function deleteData(card: Card) {
    setData(data.filter((a) => a.uuid != card.uuid));
  }

  function archiveData(card: Card) {
    setData(
      data.map((a) => (a.uuid == card.uuid ? { ...a, active: !a.active } : a)),
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
