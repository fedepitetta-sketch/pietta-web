type Pieza = {
  nombre: string;
  descripcion: string;
  img: string;
};

const piezas: Pieza[] = [
  {
    nombre: "Sillón exterior",
    descripcion:
      "Estructura en lapacho con almohadones desmontables y proporciones pensadas para un uso cómodo y duradero.",
    img: "/sofa1.jpg",
  },
  {
    nombre: "Banco",
    descripcion:
      "Una pieza sobria y versátil, con líneas limpias y presencia sólida para galerías, decks o jardines.",
    img: "/banco1.jpg",
  },
  {
    nombre: "Mesa",
    descripcion:
      "Diseño sereno para acompañar la vida al aire libre con la calidez natural del lapacho.",
    img: "/mesa1.jpg",
  },
];

const cuidados = [
  "Para conservar su color original, aplicar aceite protector para madera exterior una o dos veces al año.",
  "Si se prefiere un mantenimiento mínimo, la madera puede dejarse sin tratar y desarrollará una pátina gris plateada natural.",
  "Este proceso es completamente natural y no afecta la resistencia ni la vida útil del material.",
  "Para la limpieza habitual, utilizar agua y jabón neutro, evitando productos abrasivos.",
];

const cuidadosAlmohadones = [
  "Guardar en un lugar cubierto cuando no estén en uso por períodos prolongados.",
  "Limpiar con paño húmedo y jabón neutro ante suciedad superficial.",
  "Si se mojan, dejar secar completamente antes de volver a usar o guardar.",
  "Con el uso y el sol, es normal que puedan presentar ligeras variaciones de color.",
];

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[#8a7a6e]">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold leading-tight text-[#2e241d] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f544a]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  description,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group block rounded-[1.8rem] border border-[#e4dace] bg-white p-7 shadow-[0_8px_30px_rgba(47,36,30,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_42px_rgba(47,36,30,0.10)]"
    >
      <div className="mb-4 text-[#4b3a2f]">{icon}</div>
      <div className="text-[11px] uppercase tracking-[0.22em] text-[#8a7a6e]">
        {label}
      </div>
      <div className="mt-2 text-lg font-medium text-[#2e241d]">{value}</div>
      <p className="mt-3 text-sm leading-7 text-[#64584e]">{description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#2e241d]">
        Abrir
        <ArrowRightIcon className="transition duration-300 group-hover:translate-x-1" />
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f2eb] text-[#2e241d]">
      <header className="sticky top-0 z-20 border-b border-[#e8ddd1] bg-[#f6f2eb]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div>
            <div className="text-[2rem] font-semibold uppercase tracking-[0.22em] leading-none">
              Pietta
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-[#817265]">
              Muebles de exterior en lapacho
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#5e5146] md:flex">
            <a href="#coleccion" className="transition hover:text-[#2e241d]">
              Colección
            </a>
            <a href="#cuidados" className="transition hover:text-[#2e241d]">
              Cuidados
            </a>
            <a href="#contacto" className="transition hover:text-[#2e241d]">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
        <div>
          <div className="mb-6 text-[11px] uppercase tracking-[0.30em] text-[#8a7a6e]">
            Uruguay · Diseño y producción
          </div>

          <h1 className="max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#2e241d] md:text-6xl lg:text-7xl">
            Muebles para habitar el exterior.
          </h1>

          <p className="mt-8 max-w-lg text-[1.05rem] leading-8 text-[#5f544a]">
            Diseñamos y producimos muebles en lapacho, pensados para acompañar
            la vida al aire libre con una estética serena, materiales nobles y
            una relación honesta con el tiempo.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#cuidados"
              className="inline-flex items-center gap-2 rounded-full bg-[#2e241d] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:opacity-90"
            >
              Ver cuidados <ArrowRightIcon />
            </a>

            <a
              href="#coleccion"
              className="inline-flex items-center rounded-full border border-[#cfc1b3] px-6 py-3 text-sm font-medium text-[#2e241d] transition duration-300 hover:bg-[#efe6db]"
            >
              Ver colección
            </a>
          </div>
        </div>

        <div className="relative h-[640px] overflow-hidden rounded-[2.5rem] border border-[#e3d8cc] bg-[linear-gradient(180deg,#f4efe8_0%,#ece4d9_100%)] shadow-[0_24px_80px_rgba(47,36,30,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_35%)]" />

          <img
            src="/detalle1.jpg"
            alt="Detalle de madera Pietta"
            className="absolute left-8 top-8 h-[210px] w-[250px] rounded-[1.7rem] object-cover shadow-[0_22px_55px_rgba(47,36,30,0.14)] transition duration-500 hover:-translate-y-1"
          />

          <img
            src="/sofa1.jpg"
            alt="Sillón exterior Pietta"
            className="absolute bottom-0 right-0 h-[520px] w-[78%] rounded-tl-[2.2rem] object-cover object-center shadow-[0_30px_70px_rgba(47,36,30,0.18)] transition duration-500 hover:scale-[1.01]"
          />

          <div className="absolute bottom-8 left-8 max-w-[250px] rounded-[1.6rem] border border-white/40 bg-white/60 p-6 backdrop-blur-md">
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#8a7a6e]">
              Pietta
            </div>
            <p className="mt-3 text-sm leading-6 text-[#4f4339]">
              Lapacho, proporción y una forma serena de vivir el exterior.
            </p>
          </div>
        </div>
      </section>

      <section id="coleccion" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Colección"
            title="Piezas concebidas desde la materia y la calma."
            description="Una primera familia de muebles para exterior donde estructura, veta y proporción construyen una presencia sobria y duradera."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {piezas.map((p) => (
              <article
                key={p.nombre}
                className="group overflow-hidden rounded-[2rem] border border-[#e4dace] bg-white shadow-[0_12px_35px_rgba(47,36,30,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(47,36,30,0.09)]"
              >
                <div className="overflow-hidden bg-[#f8f4ee]">
                  <img
                    src={p.img}
                    alt={p.nombre}
                    className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-medium text-[#2e241d]">
                    {p.nombre}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#64584e]">
                    {p.descripcion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cuidados"
        className="border-y border-[#e6ddd3] bg-[#fbf8f3] px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Cuidados"
            title="Indicaciones simples para preservar cada pieza."
            description="El lapacho está pensado para acompañar el uso exterior durante muchos años. Algunos cuidados básicos ayudan a conservar su apariencia y extender su vida útil."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-[#e4dace] bg-white p-8 shadow-[0_10px_35px_rgba(47,36,30,0.04)]">
              <h3 className="text-xl font-medium text-[#2e241d]">Madera</h3>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-[#64584e]">
                {cuidados.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#7f6756]" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#e4dace] bg-white p-8 shadow-[0_10px_35px_rgba(47,36,30,0.04)]">
              <h3 className="text-xl font-medium text-[#2e241d]">
                Almohadones
              </h3>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-[#64584e]">
                {cuidadosAlmohadones.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#7f6756]" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Contacto"
            title="Una vía simple para conversar con Pietta."
            description="Seguinos para ver novedades, piezas y nuevas incorporaciones, o escribinos por mail para consultas y proyectos especiales."
          />

          <div className="mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            <ContactCard
              icon={<InstagramIcon />}
              label="Instagram"
              value="@pietta.uy"
              description="Abrí el perfil real de Pietta y conocé la marca desde ahí."
              href="https://instagram.com/pietta.uy"
            />
            <ContactCard
              icon={<MailIcon />}
              label="Email"
              value="piettauy@gmail.com"
              description="Abrí tu mail y escribinos directo para consultas."
              href="mailto:piettauy@gmail.com?subject=Consulta%20desde%20la%20web%20de%20Pietta"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e6ddd3] bg-[#f6f2eb] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#76685c] md:flex-row md:items-center md:justify-between">
          <div>© 2026 Pietta. Diseño y producción en Uruguay.</div>
          <div className="flex gap-5">
            <a href="#coleccion" className="hover:text-[#2e241d]">
              Colección
            </a>
            <a href="#cuidados" className="hover:text-[#2e241d]">
              Cuidados
            </a>
            <a href="#contacto" className="hover:text-[#2e241d]">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
