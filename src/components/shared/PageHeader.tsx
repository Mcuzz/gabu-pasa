interface Props {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="space-y-2">
      <h1 className="text-3xl font-semibold text-amber-400">
        {title}
      </h1>

      {subtitle && (
        <p className="text-blue-950">
          {subtitle}
        </p>
      )}
    </section>
  )
}