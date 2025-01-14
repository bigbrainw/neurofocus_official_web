export default function AboutUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Us
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our Vision: We believe in making brain technology accessible to
            everyone, empowering people to enhance focus, productivity, and
            well-being.
          </p>
          <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our Mission: To create innovative EEG technology and applications
            that bridge the gap between science and everyday life.
          </p>
        </div>
      </div>
    </section>
  );
}
