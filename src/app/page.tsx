import Image from "next/image";
export default function Home() {
  return (

    <div className="w-full max-w-[800px] mx-auto min-h-screen flex items-center justify-center p-4 bg-emerald-400">

      <div className="  overflow-hidden relative divide-y-4 divide-dashed divide-emerald-400">
        {/* Red accent bar */}

        {/* Top section of the boarding pass */}
        <div className=" rounded-3xl bg-white relative">
          <section className="flex flex-row">
            <div className="h-16 w-2 bg-red-500  absolute left-0 top-5.5"></div>
          </section>
          <div className="flex justify-between items-start p-6 pb-0 pt-3">

            <div>
              <div className="text-xl font-bold text-black">LOS</div>
              <div className="text-xs text-gray-300">LAGOS</div>
              <div className="text-lg font-semibold text-black">01:45 PM</div>
            </div>


            <div className="mx-4 text-black mt-2">
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
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-black">ABV</div>
              <div className="text-xs text-gray-300">ABUJA</div>
              <div className="text-lg font-semibold text-black">02:45 PM</div>
            </div>
          </div>
          <div className="text-center text-xs text-gray-300 mb-2">27 JULY 2016</div>
        </div>

        {/* Bottom section */}
        <div className="p-6 pt-4 bg-white rounded-2xl flex-col" >
          <div className="flex flex-col gap-5">
            < div className="flex justify-between items-start">
              <div>
                <div className="text-xs text-gray-500">NAME</div>
                <div className="font-bold text-black">MR ESU G</div>
              </div>
              <div className="">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/002/557/391/original/qr-code-for-scanning-free-vector.jpg"
                  alt="QR Code"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs text-gray-500">FLIGHT</div>
                <div className="font-bold text-black">AR124</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 text-right">BOOKING REF</div>
                <div className="font-bold text-right text-black">7ABC123</div>
              </div>
            </div>
            <div></div>
            <div className="flex justify-between gap-6" >
              <div className="flex flex-col">
                <div className="text-xs text-gray-500">BOARDING</div>
                <div className="font-bold text-black ">MMIA</div>
              </div>
              <div className="font-bold text-black flex items-end justify-start"> GATE 3</div>
              <div className="font-bold text-black flex items-end justify-start ">01:05 PM</div>
            </div>
            <div className="flex flex-row justify-between mt-2">
              <div>

              </div>
              <div className="text-right">

              </div>
            </div>

          </div>


          <div className="flex justify-between mt-2">
            <div className="flex items-center mt-4 text-black">
              <svg
                className="w-12 h-12"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h-2v-6h2v6zm-1-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 8h-2v-6h2v6z" />
              </svg>
              <span className="ml-2 text-xs text-gray-500">www.gabair.ng</span>
            </div>
            <div className="border border-black p-2 w-16 h-16">
              <div className="text-xs text-center text-gray-500">SEAT</div>
              <div className="text-xl font-bold text-center text-black">12B</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};