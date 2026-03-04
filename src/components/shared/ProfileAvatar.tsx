"use client";

import Image from "next/image";
import Button from "../ui/Button";

interface ProfileAvatarProps {
  id: string;
  name: string;
  photoUrl?: string; // opcional porque tus mocks no la tienen
}

export default function ProfileAvatar({
  id,
  name,
  photoUrl,
}: ProfileAvatarProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="w-90 rounded-2xl shadow-md border bg-white p-6 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow">
      <div className="relative w-24 h-24">
        {/* Imagen circular */}
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-2xl font-semibold text-gray-600">
          {photoUrl ? (
            <Image
              src={photoUrl}
              alt={name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          ) : (
            <span>{initials}</span>
          )}
        </div>

        {/* Botón cambiar foto */}
        <div className="absolute bottom-0 right-0">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full bg-white shadow-md hover:bg-gray-100 px-2 py-1 text-xs"
            onClick={() => console.log("Cambiar foto")}
          >
            ✎
          </Button>
        </div>
      </div>

      {/* Info */}
      <div className="text-center">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{id}</p>
      </div>
    </div>
  );
}
