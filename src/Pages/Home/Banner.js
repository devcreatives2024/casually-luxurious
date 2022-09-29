import React from "react";

const Banner = () => {
  return (
    <div>
      {/* section 1 */}
      <div className="relative">
        <video
          autoPlay
          muted
          loop
          src="https://cdn.shopify.com/videos/c/o/v/92802701dccf4361a419933bc9fbf17b.mp4"
        ></video>
        <div className="lg:absolute lg:text-white mt-5 lg:mt-0 bottom-5 mx-6 text-2xl font-light">
          <h1>Introducing:</h1>
          <h1>Lorem ipsum dolor sit.</h1>
          <div className="flex items-center gap-2">
            <h1 className="text-[9.5px] font-sans font-medium uppercase">
              New From Casually Luxurious
            </h1>
            <img
              src="https://alabamachanin.com/assets/cta-arrow-white.png"
              className="hidden lg:block"
              alt=""
            />
            <img
              src="https://alabamachanin.com/assets/cta-arrow@2x.png"
              className="w-3.5 lg:hidden"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* section 2  */}
      <div>
        <div className="flex items-center mt-32 mb-16">
          <div className="w-full">
            <img
              src="https://cdn.shopify.com/s/files/1/0411/9864/9508/files/alabama-chanin--j.hannah--self-care--2022.jpg"
              alt=""
              className="lg:h-96 h-60 mx-auto"
            />
          </div>
          <div className="w-full">
            <img
              src="https://cdn.shopify.com/s/files/1/0411/9864/9508/files/alabama-chanin--homepage--waffle-wrap--self-care.jpg"
              alt=""
              className="lg:h-96 h-60 mx-auto"
            />
          </div>
        </div>
        <div className="mx-6 text-2xl font-light">
          <h1>Self Care Collection:</h1>
          <h1>Lorem ipsum dolor sit.</h1>
          <div className="flex items-center gap-2">
            <h1 className="text-[9.5px] font-sans font-medium uppercase">
              Discover
            </h1>
            <img
              src="https://alabamachanin.com/assets/cta-arrow@2x.png"
              className="w-3.5"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* section 3  */}
      <div className="lg:flex items-center gap-6 mx-5 border-b pb-5 border-[#CBD5E0]">
        <div className="w-full">
          <img
            src="https://cdn.shopify.com/s/files/1/0411/9864/9508/files/alabama-chanin--homepage--lola-top--mariposa-skirt_2a6d119f-b9e1-40de-9a4a-4f956a09a92a.jpg"
            alt=""
          />
        </div>
        <div className="w-full hidden lg:block">
          <img
            src="https://cdn.shopify.com/s/files/1/0411/9864/9508/files/alabama-chanin--homepage--ines-tunic--concrete--taos-coat_4e783e71-cd65-4bff-b4e8-c4cebda9af27.jpg"
            alt=""
          />
        </div>
      </div>
      {/* section 4 */}
      <div className="lg:flex items-start my-5">
        <div className="w-full mx-6 text-2xl font-light">
          <h1>Hand Crafted in CLuxurious:</h1>
          <h1>Lorem ipsum dolor sit.</h1>
          <div className="flex items-center gap-2">
            <h1 className="text-[9.5px] font-sans font-medium uppercase">
              Discover
            </h1>
            <img
              src="https://alabamachanin.com/assets/cta-arrow@2x.png"
              className="w-3.5"
              alt=""
            />
          </div>
        </div>
        <div className="w-full lg:mx-0">
          <div className="flex lg:flex-row flex-col gap-4 border-b border-[#CBD5E0] pb-5">
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0411/9864/9508/files/alabama-chanin--book---embroidery-threads-_-stories---natalie-chanin---7_e8639f83-e756-42e0-bdb6-9282454673ab.jpg"
                className="w-72 mx-auto"
                alt=""
              />
            </div>
            <div className="w-full text-sm flex flex-col justify-between mx-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                molestiae.
              </p>
              <p className="text-xs hidden lg:block">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-4 border-b border-[#CBD5E0] py-5">
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0411/9864/9508/files/alabama-chanin--hand-loomed-potholder--organic-cotton--navy--sustainable-home--cook-dine--detail.jpg"
                className="w-72 mx-auto"
                alt=""
              />
            </div>
            <div className="w-full text-sm flex flex-col justify-between mx-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                molestiae.
              </p>
              <p className="text-xs hidden lg:block">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-4 border-b border-[#CBD5E0] py-5">
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0411/9864/9508/files/alabama-chanin--the-factory-store--storefront-and-trees--carousel.jpg"
                className="w-72 mx-auto"
                alt=""
              />
            </div>
            <div className="w-full text-sm flex flex-col justify-between mx-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                molestiae.
              </p>
              <p className="text-xs hidden lg:block">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-4 pt-5">
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0411/9864/9508/files/alabama-chanin--our-mission--about-us.jpg"
                className="w-72 mx-auto"
                alt=""
              />
            </div>
            <div className="w-full text-sm flex flex-col justify-between mx-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                molestiae.
              </p>
              <p className="text-xs hidden lg:block">Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className="relative">
        <img
          src="https://cdn.shopify.com/s/files/1/0411/9864/9508/files/alabama-chanin--homepage-update--rachel-carson--magnolia--journal-2.jpg"
          alt=""
        />
        <div className="lg:absolute bottom-0 w-full mx-6 text-2xl font-light">
          <h1>#ThoseWholInspire:</h1>
          <h1>Lorem ipsum dolor sit.</h1>
          <div className="flex items-center gap-2">
            <h1 className="text-[9.5px] font-sans font-medium uppercase">
              Read + Explore
            </h1>
            <img
              src="https://alabamachanin.com/assets/cta-arrow@2x.png"
              className="w-3.5"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* section 5 */}
      <div className="relative">
        <img
          src="https://cdn.shopify.com/s/files/1/0411/9864/9508/files/Homepage---Fabric-Swatch-Banner-anna_s-dream.jpg"
          alt=""
        />
        <div className="lg:absolute mt-5 lg:mt-0 bottom-0 w-full mx-6 text-2xl font-light">
          <h1>The School Of Making:</h1>
          <h1>Lorem ipsum dolor sit.</h1>
          <div className="flex items-center gap-2">
            <h1 className="text-[9.5px] font-sans font-medium uppercase">
              Subscribe By The Month Or Year
            </h1>
            <img
              src="https://alabamachanin.com/assets/cta-arrow@2x.png"
              className="w-3.5"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* section 6  */}
      <div>
        <div className="flex items-center mt-32 mb-16">
          <div className="w-full">
            <img
              src="https://cdn.shopify.com/s/files/1/0411/9864/9508/files/the-school-of-making--geometry-of-hand-sewing--book--natalie-chanin--algerian-eye-stitch_ac0543d9-09e4-493b-b247-760895fc3523.jpg"
              alt=""
              className="lg:h-96 w-40 lg:w-fit mx-auto"
            />
          </div>
          <div className="w-full">
            <img
              src="https://cdn.shopify.com/s/files/1/0411/9864/9508/files/the-school-of-making--keyhole-dress--tunic--anna_s-garden--inked-and-quilted--kit-contents--bright-white_2c0428ca-9cee-4286-bb4f-e3e669463a39.jpg"
              alt=""
              className="lg:h-96 w-40 lg:w-fit mx-auto"
            />
          </div>
        </div>
        <div className="mx-6 text-2xl font-light">
          <h1>The School Of Making:</h1>
          <h1>Lorem ipsum dolor sit.</h1>
          <div className="flex items-center gap-2">
            <h1 className="text-[9.5px] font-sans font-medium uppercase">
              Explore The Categories
            </h1>
            <img
              src="https://alabamachanin.com/assets/cta-arrow@2x.png"
              className="w-3.5"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
