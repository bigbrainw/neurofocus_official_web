export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Features
        </h2>
        <div className="flex justify-around">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Key Features of Our EEG Chips
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Ultra-compact and lightweight</li>
              <li>Accurate detection of brain waves</li>
              <li>Easy integration with modern devices</li>
              <li>Low power consumption</li>
              <li>Customizable APIs for developers</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Key Features of Our Programs
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Brain activity visualization</li>
              <li>Focus and productivity enhancement tools</li>
              <li>Gamified exercises for mental clarity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
