import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 container mx-auto py-7 flex justify-between">
      <img src="/img/logo.svg" alt="Logo" />
      <label className="inline-flex gap-2 text-gray-400 bg-gray-100 outline outline-gray-200 px-2.5 py-2 rounded-lg">
        <Search />
        <input type="text" placeholder="Search..." className="outline-none" />
      </label>
    </nav>
  );
}
