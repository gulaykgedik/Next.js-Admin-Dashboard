"use client";

import { deleteUser } from "@/utils/service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSpinner, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const BanButton = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Bu kullanıcıyı silmek istediğinize emin misiniz?")) return;
    setIsLoading(true);
    deleteUser(id)
      .then(() => {
        toast.success("Kullanıcı silindi");
        router.refresh();
      })

      .catch((err) => {
        toast.error("Kullanıcı silinemedi");
        err;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <button
      disabled={isLoading}
      className="button hover:bg-red-200 text-red-500 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
      onClick={handleDelete}
    >
      {isLoading ? <FaSpinner className="animate-spin" /> : <FaTrash />}
    </button>
  );
};

export default BanButton;
