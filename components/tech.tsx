import Image from 'next/image';

import { stacks } from '@/lib/data/index';

export default async function Tech() {
  return (
    <section id="tecnologias" className="bg-port-gray-850">
      <div className="container mx-auto section-p">
        <h2 className="h2-variant mb-8 text-port-gray-50">Tecnologias que uso</h2>

        <ul className="grid grid-cols-2 gap-5 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {stacks.map((stack, index) => (
            <li
              key={index}
              tabIndex={0}
              className="group relative w-40 max-w-50 outline-none lg:w-50"
            >
              <div className="relative z-10 flex flex-col items-center justify-center rounded-2xl bg-port-gray-800 py-6 shadow-sm">
                <Image src={stack.img} alt={stack.title} width={110} height={110} />
              </div>
              <p
                aria-hidden="true"
                className="p-medium pointer-events-none absolute inset-x-0 top-full mt-2 -translate-y-full text-center text-port-white opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none"
              >
                {stack.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
