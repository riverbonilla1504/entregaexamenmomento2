import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full max-w-[800px] mx-auto min-h-screen flex items-center justify-center p-4 bg-emerald-400">
      <article className="overflow-hidden relative divide-y-4 divide-dashed divide-emerald-400">


        <section className="rounded-3xl bg-white relative">
          <aside className="flex flex-row">
            <span className="h-16 w-2 bg-red-500 absolute left-0 top-5.5" />
          </aside>

          <header className="flex justify-between items-start p-6 pb-0 pt-3">

            <address className="not-italic">
              <p className="text-xl font-bold text-black">LOS</p>
              <p className="text-xs text-gray-300">LAGOS</p>
              <p className="text-lg font-semibold text-black">01:45 PM</p>
            </address>


            <section className="mx-4 text-black mt-2" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
              </svg>
            </section>


            <address className="text-right not-italic">
              <p className="text-xl font-bold text-black">ABV</p>
              <p className="text-xs text-gray-300">ABUJA</p>
              <p className="text-lg font-semibold text-black">02:45 PM</p>
            </address>
          </header>

          <footer className="text-center text-xs text-gray-300 mb-2">
            27 JULY 2016
          </footer>
        </section>


        <section className="p-6 pt-4 bg-white rounded-2xl flex-col">
          <article className="flex flex-col gap-5">


            <header className="flex justify-between items-start">
              <section>
                <span className="text-xs text-gray-500">NAME</span>
                <p className="font-bold text-black">MR ESU G</p>
              </section>
              <figure>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/002/557/391/original/qr-code-for-scanning-free-vector.jpg"
                  alt="QR Code"
                  className="w-16 h-16"
                />
              </figure>
            </header>


            <section className="flex justify-between items-start">
              <section>
                <span className="text-xs text-gray-500">FLIGHT</span>
                <p className="font-bold text-black">AR124</p>
              </section>
              <section>
                <span className="text-xs text-gray-500 text-right">BOOKING REF</span>
                <p className="font-bold text-right text-black">7ABC123</p>
              </section>
            </section>


            <section className="flex justify-between gap-6">
              <section className="flex flex-col">
                <span className="text-xs text-gray-500">BOARDING</span>
                <p className="font-bold text-black">MMIA</p>
              </section>
              <p className="font-bold text-black flex items-end justify-start">GATE 3</p>
              <p className="font-bold text-black flex items-end justify-start">01:05 PM</p>
            </section>
          </article>

          <footer className="flex justify-between mt-2">
            <section className="flex items-center mt-4 text-black">
              <svg
                className="w-12 h-12"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h-2v-6h2v6zm-1-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 8h-2v-6h2v6z" />
              </svg>
              <span className="ml-2 text-xs text-gray-500">www.gabair.ng</span>
            </section>

            <aside className="border border-black p-2 w-16 h-16">
              <p className="text-xs text-center text-gray-500">SEAT</p>
              <p className="text-xl font-bold text-center text-black">12B</p>
            </aside>
          </footer>
        </section>
      </article>
    </main>
  );
}
