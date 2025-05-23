"use client";

import { deleteProduct } from "@/utils/service";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteButton({ id }: { id: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleDelete = async () => {
    if (!confirm("Bu ürünü silmek istediğinize emin misiniz?")) return;

    try {
      setIsLoading(true);
      await deleteProduct(id);
      router.refresh();
      alert("İşlem başarılı.");
    } catch (error) {
      alert("İşlem Başarısız!");
      setIsLoading(false);
    }
  };
  return (
    <button
      disabled={isLoading}
      onClick={handleDelete}
      className={`bg-red-500 text-white px-3 py-1 rounded text-sm transition-colors w-19 hover:bg-red-600 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed`}
    >
      {isLoading ? "Siliniyor.." : "Sil"}
    </button>
  );
}
