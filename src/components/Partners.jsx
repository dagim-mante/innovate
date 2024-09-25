import CompanyLogos from "./CompanyLogos";
import Heading from "./Heading";
import Section from "./Section"; 
import { partnersLogos as logoList } from "../constants";

const Partners = () => (
  <Section className="overflow-hidden" id="partners">
    <div className="container md:pb-10">
      <Heading title="Our Partners" />
          <div className="relative z-10 mt-0 lg:block">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {logoList.map((logo, index) => (
              <li
                className="flex flex-col items-center text-center h-[7rem]"
                key={index}
              >
                <img src={logo} width={134} height={28} alt={logo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
  </Section>
);

export default Partners