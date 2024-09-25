import {  check } from "../assets";
import { collabContent } from "../constants";
import Button from "./Button";
import Section from "./Section";
import {benefitsBanner} from '../assets'
import { BackgroundCircles } from "./design/Header";

const Collaboration = () => {
  return (
    <Section id="why-us" crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            Why Choose Us?
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>Start Now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                  <img
                    src={benefitsBanner}
                    className="rounded-md w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                    width={1024}
                    height={490}
                    alt="AI"
                  />
                </div>
              </div>
          </div>
          <BackgroundCircles />
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
