import { BiSolidBellRing } from "react-icons/bi";
import Input from "./input";
import Image from "next/image";
import avatar from "@/assets/images/woman.png";

export default function Header() {
  return (
    <header className="border-b border-zinc-300 px-5 py-2 md:px-8 bg-white text-black flex justify-between ">
      <Input />

      <div className="flex gap-5 items-center">
        <BiSolidBellRing className="text-xl cursor-pointer text-zinc-700" />
        <div className="flex">
          <Image
            className="rounded-full  "
            src={avatar}
            alt="avatar"
            width={50}
            height={50}
          />
        </div>

        <div>
          <p className="font-semibold">Gülay Kızılgedik</p>
          <p className="text-sm text-zinc-500">Admin</p>
        </div>
      </div>
    </header>
  );
}
