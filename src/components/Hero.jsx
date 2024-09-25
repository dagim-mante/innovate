import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { companyLogos as logoList } from "../constants";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-10 lg:mb-[1.25rem]">
          <h1 className="h1 mb-6">
            Empowering Digital Innovators with&nbsp;High Quality&nbsp;
            <span className="inline-block relative">
              Tranings.{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            We work with internationally recognized organizations to equip you with the essential knowledge and skills required to excel in your respective industry.
          </p>
          <Button href="#" white>
            Get started
          </Button>
        </div>

        <CompanyLogos logoList={logoList} showTag className="hidden relative z-10 mt-0 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
