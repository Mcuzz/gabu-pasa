import ProgressCircle from "@/components/feedback/ProgressCircle";

export default function StatsSection() {
  return (
    <section className="grid grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-sm font-semibold text-gray-500">Tutorías completadas</h3>
        <p className="text-amber-200 text-5xl font-bold">12</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-sm font-semibold text-gray-500">Tutorías pendientes</h3>
        <p className=" text-amber-200 text-5xl font-bold ">3</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center justify-center">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Progreso académico</h3>
        <ProgressCircle value={70} max={100} />
      </div>
    </section>
  );
}