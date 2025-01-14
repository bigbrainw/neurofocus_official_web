import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Unleash the Power of Your Mind
          </h1>
          <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
            We develop cutting-edge EEG chips and programs to help individuals
            engage and unlock the full potential of their brains.
          </p>
          <div className="space-x-4">
            <Button variant="outline" className="text-black">
              Learn More
            </Button>
            <Button>Join the Waitlist</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
