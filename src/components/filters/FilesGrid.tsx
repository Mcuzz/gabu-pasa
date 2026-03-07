import FileCard from "@/components/cards/FileCard";
import { AcademicFile } from "@/types/file";
import { Tutor } from "@/types/tutor";

type Props = {
  files: AcademicFile[];
  tutors: Tutor[];
};

export default function FilesGrid({ files, tutors }: Props) {
  return (
    <section className="bg-white p-4 rounded-xl shadow text-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {files.map((file) => (
          <FileCard key={file.id} file={file} tutors={tutors} />
        ))}
      </div>
    </section>
  );
}