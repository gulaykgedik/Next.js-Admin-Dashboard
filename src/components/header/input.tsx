import { GoSearch } from "react-icons/go";

export default function Input() {
  return (
    <form className="flex gap-2 items-center text-gray-500">
      <button className="cursor-pointer">
        <GoSearch />
      </button>

      <input type="text" className="p-1 outline-none" placeholder="Ara" />
    </form>
  );
}
