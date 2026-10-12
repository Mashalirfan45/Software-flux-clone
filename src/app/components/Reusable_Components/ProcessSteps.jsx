export default function ProcessSteps({ title, steps }) {
  if (!steps?.length) return null;

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-[#1a1a6e]">{title}</h2>
      <ol className="mt-6 space-y-6">
        {steps.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#8a2a9b] to-[#c13bb0] text-sm font-bold text-white">
              {i + 1}
            </span>
            <p className="text-[17px] leading-7 text-[#444]">
              <strong className="text-[#1a1a6e]">{step.title}:</strong> {step.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}