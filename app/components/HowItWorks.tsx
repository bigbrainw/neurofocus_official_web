export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          How It Works
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-2">Wear the device</h3>
            <p>Put on the device with our EEG chip.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-2">Engage with the program</h3>
            <p>Use our app to interact with the EEG data.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-2">Track your progress</h3>
            <p>Monitor your improvements and gain new insights.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
