export default function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-red-500">
          {project.category}
        </span>
        <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">
          {project.status}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.name}</h3>

      <p className="text-gray-600 leading-relaxed mb-6">
        {project.description}
      </p>

      <a
        href={project.playStoreLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-red-500 font-semibold hover:gap-3 transition-all"
      >
        View on Play Store →
      </a>
    </div>
  );
}
