'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

import { projects } from '@/lib/data';
import Gallery from './_components/gallery';

export default function Projects() {
  const [open, setOpen] = useState(null);
  const trigger = useRef(null);

  const close = () => {
    setOpen(null);
    trigger.current?.focus();
  };

  return (
    <section id="projetos" className="bg-port-gray-800 mx-auto w-full">
      <div className="section-p container">
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
                className="group border-port-gray-200 relative aspect-[1916/875] overflow-hidden rounded-lg border bg-neutral-100 text-left"
              >
                <Image
                  src={project.gallery[0].src}
                  alt={`Capa do projeto ${project.title}`}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="bg-port-black p-small absolute right-2 bottom-2 rounded-md px-2 py-1 text-white">
                  Ver {project.gallery.length} telas
                </span>
              </button>

              <h3 className="p-large-bold text-port-white mt-4">{project.title}</h3>
              <p className="p-small text-port-gray-200 mt-1 leading-relaxed">
                {project.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="bg-port-blue-800 p-caption text-port-blue-300 rounded-md px-2 py-1"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-3 text-sm font-medium">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-port-blue-300 hover:text-port-blue-600 rounded-lg"
                >
                  Ver projeto
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-port-blue-300 hover:text-port-blue-600 rounded-lg"
                >
                  Código
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open !== null && (
        <Gallery
          title={projects[open].title}
          projectImages={projects[open].gallery}
          onClose={close}
        />
      )}
    </section>
  );
}
