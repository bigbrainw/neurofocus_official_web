import Image from "next/image";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    bio: "Neuroscientist with 10+ years of experience in EEG technology.",
    image: "/placeholder.svg",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    bio: "Software engineer specializing in brain-computer interfaces.",
    image: "/placeholder.svg",
  },
  {
    name: "Mike Johnson",
    role: "Head of Research",
    bio: "PhD in Cognitive Neuroscience, focusing on brain plasticity.",
    image: "/placeholder.svg",
  },
];

export default function Team() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Team
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-zinc-500 mb-2">{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
