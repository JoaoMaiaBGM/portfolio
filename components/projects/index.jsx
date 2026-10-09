"use client";

import { projects } from "@/lib/data";
import Image from "next/image";
import { useRef, useState } from "react";
import Gallery from "./_components/gallery";

export default function Projects() {
  const [open, setOpen] = useState(null);
  const trigger = useRef(null);

  const close = () => {
    setOpen(null);
    trigger.current?.focus();
  };

  return (
    <section id="projetos" className="mx-auto bg-port-gray-800 w-full">
      <div className="container section-p">
        <h2 className="h2-variant text-port-white mb-8">Projetos</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className="flex flex-col">
              <button
                type="button"
                aria-label={`Ver ${project.gallery.length} telas do projeto ${project.title}`}
                onClick={(event) => {
                  trigger.current = event.currentTarget;
                  setOpen(index);
                }}
                className="group relative aspect-6/3 overflow-hidden rounded-lg border border-port-gray-200 bg-neutral-100 text-left"
              >
                <Image
                  src={project.gallery[0].src}
                  alt={`Capa do projeto ${project.title}`}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-2 right-2 rounded-md bg-port-black px-2 py-1 p-small text-white">
                  Ver {project.gallery.length} telas
                </span>
              </button>

              <h3 className="mt-4 p-large-bold text-port-white ">{project.title}</h3>
              <p className="mt-1 p-small leading-relaxed text-port-gray-200">{project.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-port-blue-800 px-2 py-1 p-caption text-port-blue-300">{tag}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-3 text-sm font-medium">
                <a href={project.live} className="rounded-lg text-port-blue-300 hover:text-port-blue-600">Ver projeto</a>
                <a href={project.code} className="rounded-lg text-port-blue-300 hover:text-port-blue-600">Código</a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open !== null && (
        <Gallery title={projects[open].title} shots={projects[open].gallery} onClose={close} />
      )}
    </section>
  );
}
