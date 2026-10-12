export default function DotTriangle({ rows = 8 }) {
  return (
    <div className="pointer-events-none absolute bottom-10 right-10 hidden flex-col items-end gap-3 lg:flex">
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="flex gap-3">
          {Array.from({ length: r + 1 }).map((_, c) => (
            <span key={c} className="h-1.5 w-1.5 rounded-full bg-[#ff4d6d]" />
          ))}
        </div>
      ))}
    </div>
  );
}