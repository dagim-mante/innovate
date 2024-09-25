import Heading from "./Heading"
import Section from "./Section"

import images1 from "../assets/teams/team1.jpg"
import images2 from "../assets/teams/team2.webp"
import images3 from "../assets/teams/team3.webp"
import Button from "./Button"

const Teams = () => {
    const teamMembers = [
        {
            name: "Dereje Moges",
            role: "CEO",
            imageUrl: images1
        },
        {
            name: "Dheepak Sha",
            role: "ISO Management Systems",
            imageUrl: images2
        },
        {
            name: "Behailu Tadesse",
            role: "Trainer",
            imageUrl: images3
        },
    ]
    return (
        <Section className="overflow-hidden" id="our-team">
            <div className="container md:pb-10">
                <Heading tag="Meet the experts behind our success" title="Our Team" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                        <div className="mb-4">
                            <img
                            src={member.imageUrl}
                            alt={member.name}
                            width={200}
                            height={200}
                            className="rounded-full"
                            />
                        </div>
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-muted-foreground">{member.role}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
                    <Button href="/roadmap">See Full Team</Button>
                </div>
            </div>
        </Section>
    )
}

export default Teams