import { JSX } from "react";

export const OurStorySection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center py-15 px-10">
      <div className="max-w-[1438px] grid grid-cols-2 gap-[110px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[7px] pt-[20px]">
            <h3 className="text-[#219653] font-bold text-[14px]">Our Story</h3>
            <h2 className="max-w-[467px] text-[32px] [font-family:'Ubuntu',Helvetica] font-bold tracking-[0] leading-[47px]">
              <span className="text-[#4a0a0a]">Building a </span>
              <span className="text-[#219653]">sustainable future</span>
              <span className="text-[#4a0a0a]">
                {" "}
                through integrated farming
              </span>
            </h2>
          </div>
          <p>
            At Integrated Farm in Gawe – Bana, we practice a holistic approach
            where every element supports another. Our pigs, fish, ducks,
            rabbits, and crops work together in harmony, creating a zero-waste
            ecosystem that produces premium quality products while protecting
            our environment.
          </p>
        </div>
        <div>
          <img
            className="w-auto h-auto max-w-[620px] max-h-[383px] object-cover"
            alt="Ferme Intégrée Gawe Logo"
            src="/cattle-rearers.svg"
          />
        </div>
      </div>
    </section>
  );
};
