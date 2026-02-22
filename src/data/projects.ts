export type Project = {
  title: string;
  subtitle: string;
  tech: string[];
  highlights: string[];
  demoUrl?: string;
  repoUrl?: string;
  imageUrl?: string;

  /** controls preview framing */
  imageFit?: "cover" | "contain";
  imagePos?: string;
};

export const projects: Project[] = [
  {
    title: "Job Tracker",
    subtitle: "Track job applications with search + status filtering.",
    tech: ["React", "TypeScript", "State", "Local Storage"],
    highlights: [
      "Add, edit, and delete jobs",
      "Search and status filtering",
      "Clean responsive UI",
    ],
    demoUrl: "https://job-tracker-react-two.vercel.app/",
    repoUrl: "https://github.com/Mohamedt19/job-tracker-react",
    imageUrl: "/previews/job-tracker.png",
    imageFit: "contain",
    imagePos: "center 28%",
  },

  {
    title: "GitHub Explorer",
    subtitle:
      "Search GitHub users and browse repositories with advanced filtering.",
    tech: ["React", "TypeScript", "Fetch", "Hooks"],
    highlights: [
      "Debounced search for performance",
      "Repository filtering & sorting",
      "Skeleton loading + language indicators",
    ],
    demoUrl: "https://github-explorer-seven-woad.vercel.app/",
    repoUrl: "https://github.com/Mohamedt19/github-explorer",
    imageUrl: "/previews/github-explorer.png",
    imageFit: "cover",
    imagePos: "center 12%",
  },

  {
    title: "Kanban Lite",
    subtitle: "Drag-and-drop task board for workflow organization.",
    tech: ["React", "TypeScript", "Reducer", "Drag & Drop"],
    highlights: [
      "Tab-based workflow management",
      "Drag & drop between columns",
      "Animated empty states",
    ],
    demoUrl: "https://kanban-lite-ashy.vercel.app/",
    repoUrl: "https://github.com/Mohamedt19/kanban-lite",
    imageUrl: "/previews/kanban-lite.png",
    imageFit: "cover",
    imagePos: "center 36%",
  },
];