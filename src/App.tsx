import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import Navbar from "./Navbar";
import type { Card } from "./types/Card.ts";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState<Array<Card>>(() => {
    const saved = localStorage.getItem("data");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <Navbar />
      <NoteForm setData={setData} data={data} />
      <NoteList setData={setData} data={data} />
    </>
  );
}
