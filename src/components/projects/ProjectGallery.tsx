type ProjectGalleryProps = {
  images: string[]
  title: string
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  if (!images.length) return null

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${title} — ${i + 1}`}
          loading="lazy"
          className="w-full rounded-[var(--radius-card)] border border-[var(--border-hairline)] object-cover"
        />
      ))}
    </div>
  )
}
