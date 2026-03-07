"use client";

import Button from "@/components/ui/Button";
import type { AcademicFile } from "@/types/file";

interface NoteCardHorizontalProps {
  file: AcademicFile;
  onEdit?: () => void;
}

export default function NoteCardHorizontal({ file, onEdit }: NoteCardHorizontalProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between mb-4">

      <div className="flex items-center gap-3">
        <span className="text-2xl">🗒️</span>

        <div>
          <p className="text-sm font-semibold text-gray-800">
            {file.name}
          </p>
          <p className="text-xs text-gray-500">
            Apunte del tutor
          </p>
        </div>
      </div>

      <Button onClick={onEdit}>
        Modificar apunte
      </Button>

    </div>
  );
}