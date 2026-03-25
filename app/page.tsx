import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] text-white min-h-screen">
      <section className="relative h-screen w-full">
        <Image
          src="/sofa1.jpg"
          alt="Pietta sofa"
          fill
          className="object-cover opacity-70"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-start px-10">
          <h1 className="text-5xl md:text-7xl font-light mb-4">Pietta</h1>

          <p className="text-lg md:text-xl text-zinc-300 max-w-md">
            Muebles para habitar el exterior
          </p>
        </div>
      </section>

      <section className="px-10 py-20">
        <h2 className="text-3xl mb-10">Colección</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/mesa1.jpg"
              alt="Mesa"
              width={500}
              height={500}
              className="mb-4"
            />
            <p>Mesa</p>
          </div>

          <div>
            <Image
              src="/sofa1.jpg"
              alt="Sofá"
              width={500}
              height={500}
              className="mb-4"
            />
            <p>Sofá</p>
          </div>

          <div>
            <Image
              src="/detalle1.jpg"
              alt="Detalle"
              width={500}
              height={500}
              className="mb-4"
            />
            <p>Detalle</p>
          </div>
        </div>
      </section>
    </main>
  );
}
