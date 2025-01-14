import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is an EEG chip?",
    answer:
      "An EEG (Electroencephalography) chip is a small device that detects electrical activity in your brain. It allows us to measure and interpret brain waves, providing insights into cognitive processes and mental states.",
  },
  {
    question: "How accurate is your technology?",
    answer:
      "Our EEG chips are highly accurate, with a precision rate of over 95% in detecting brain wave patterns. However, interpretation of these patterns can vary based on individual differences and environmental factors.",
  },
  {
    question: "Is it safe for everyday use?",
    answer:
      "Yes, our EEG technology is completely non-invasive and safe for daily use. It simply reads the electrical activity naturally produced by your brain without emitting any signals or radiation.",
  },
  {
    question: "Who can benefit from it?",
    answer:
      "Our technology can benefit a wide range of users, including individuals looking to improve focus and productivity, researchers studying brain activity, and enterprises implementing wellness programs. It's also useful for people interested in meditation, stress management, and cognitive enhancement.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
