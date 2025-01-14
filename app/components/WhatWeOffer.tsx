import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function WhatWeOffer() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          What We Offer
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>EEG Chips</CardTitle>
              <CardDescription>
                Compact, accurate, and powerful EEG chips designed to detect and
                interpret brain activity.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Engagement Programs</CardTitle>
              <CardDescription>
                Interactive programs and tools to help you harness the power of
                your mind.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Custom Solutions</CardTitle>
              <CardDescription>
                Tailored EEG solutions for research, healthcare, and personal
                development.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
