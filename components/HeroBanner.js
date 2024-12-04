import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="p-2">
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {/* Summer styles are finally here */}
                New appearial clothes are finally here.
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new groom collection will shelter you from the
                harsh elements of a world that doesnt care if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <Image
                            width={300}
                            height={300}
                            src="/UMANG_IMAGES/imgpsh_fullsize_anim (1).jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}
                            src="/UMANG_IMAGES/imgpsh_fullsize_anim (2).jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}

                            // src="/UMANG_IMAGES/Janhvi_Kapoor_Lehenga_High_res_20-09-2024-04-38_650x900.avif"
                            src="/UMANG_IMAGES/group.png"
                            // src="/UMANG_IMAGES/Image_1.jpeg"


                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}
                            src="/UMANG_IMAGES/image_4.jpeg"
                            alt="asdf"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}
                            src="/UMANG_IMAGES/image_2.jpeg"


                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}
                            src="/UMANG_IMAGES/Image_1.jpeg"

                            alt="asdf"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            width={300}
                            height={300}
                            // src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            src="/UMANG_IMAGES/Janhvi_Kapoor_Lehenga_High_res_20-09-2024-04-38_650x900.avif"

                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const phoneNumber = "8003096082"; // Replace with your WhatsApp number
                    const message = encodeURIComponent("Hello! I would like to get in touch.");
                    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
                  }}
                  className="inline-block rounded-md border border-transparent bg-[#2a2e33] px-8 py-3 text-center font-medium text-white hover:bg-[#12171d]"
                >
                  Contact Us 
                </button>


                {/* <Link
                  href="/products"
                  className="inline-block rounded-md border border-transparent bg-[#2a2e33] px-8 py-3 text-center font-medium text-white hover:bg-[#12171d]"
                >
                  Contact Us Via Whatsapp
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
