import Link from "next/link";
import Image from "next/image";
import { getProjects, Project } from "@/lib/supabase";
import ProjectsClient from "./projects-client";

// Fallback static projects (for reliability)
const staticProjects: Project[] = [
  {
    id: "static-1",
    title: "Viron Gil Estrada - Personal Website",
    description: "A modern personal portfolio website showcasing professional experience, skills, and projects with elegant design and smooth animations.",
    tech_stack: "Next.js, TypeScript, Tailwind CSS",
    media_url: "/images/vironestrada-personal-website.png",
    media_type: "image" as const,
    live_url: "https://www.virongilestrada.online/",
    featured: true,
    order_index: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    thumbnail_url: null
  },
];

export default async function ProjectsPage() {
  const supabaseProjects = await getProjects();
  
  // Separate featured projects from community projects
  const featured = supabaseProjects.filter(p => p.featured === true);
  const community = supabaseProjects.filter(p => p.featured !== true);
  
  // Use static projects as fallback for community if empty
  const projects = community.length > 0 ? community : staticProjects;
  const featuredProjects = featured;
  
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
      {/* Featured Projects Section - 3 Column Grid */}
      {featuredProjects.length > 0 && (
        <div className="mb-14">
          <h1 className="text-3xl font-bold mb-2">
            Featured Projects
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            Innovative automation and tooling projects built by our community members.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p) => {
              const ProjectCard = (
                <div 
                  key={p.id} 
                  className="rounded-xl border overflow-hidden bg-card hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] group h-full flex flex-col"
                >
                  {/* Video Display */}
                  <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 flex-shrink-0">
                    {p.media_type === 'video' && p.media_url ? (
                      <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        preload="metadata"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      >
                        <source src={p.media_url} type="video/mp4" />
                      </video>
                    ) : (
                      <Image 
                        src={p.media_url || '/images/placeholder.jpg'} 
                        alt={p.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-violet-500 transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {p.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mt-auto">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 min-w-0 flex-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse flex-shrink-0" />
                        <p className="text-xs font-medium text-violet-600 dark:text-violet-400 truncate">
                          {p.tech_stack}
                        </p>
                      </div>
                      {p.live_url && (
                        <div className="flex items-center gap-1 text-xs text-violet-500 font-medium flex-shrink-0">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
              return p.live_url ? (
                <Link key={p.id} href={p.live_url} target="_blank" rel="noopener noreferrer" className="block">{ProjectCard}</Link>
              ) : ProjectCard;
            })}
          </div>
        </div>
      )}

      {/* Community Projects Section - Use Client Component for animations */}
      <ProjectsClient projects={projects} />
    </div>
  );
}

