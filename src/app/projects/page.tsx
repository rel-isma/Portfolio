// src/app/projects/page.tsx

import Link from "next/link";

const ProjectsPage = () => {
  const projects = [
    { id: 1, slug: "project_one", name: "Project One" },
    { id: 2, slug: "project_two", name: "Project Two" },
    { id: 3, slug: "project_three", name: "Project Three" },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-5">All Projects</h1>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              href={`/projects/${project.slug}`}
              className="text-blue-500 underline"
            >
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
