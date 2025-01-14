import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Applications() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Applications
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>For Personal Use</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Focus and productivity improvement</li>
                <li>Stress management</li>
                <li>Meditation and mindfulness enhancement</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>For Researchers and Developers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Neurofeedback training</li>
                <li>Cognitive performance monitoring</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>For Enterprises</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Employee productivity tools</li>
                <li>Wellness initiatives</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
