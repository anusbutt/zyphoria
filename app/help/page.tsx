"use client";

import Footer from "@/app/components/Footer";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.",
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 5-7 business days. Expedited options are available at checkout.",
  },
  {
    question: "Can I return a product if I don't like it?",
    answer: "Yes, we offer a 30-day money-back guarantee. Please see our full return policy for details.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within the United States and Canada. We are working to expand our shipping destinations soon.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order has shipped, you will receive an email with a tracking number. You can use this number on our website or the carrier's site.",
  },
  {
    question: "Are your fragrances cruelty-free?",
    answer: "Yes, all of our fragrances are proudly cruelty-free and vegan.",
  },
  {
    question: "How do I find the right fragrance for me?",
    answer: "We recommend trying our fragrance quiz or exploring our \"Shop by Notes\" section to discover scents that match your preferences.",
  },
];

export default function HelpAndFAQsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main>
      <section className="bg-background py-12 min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-foreground mb-10 text-center leading-tight">
            Help &amp; Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, returns, and more.
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-lg shadow-md p-6">
                <button
                  className="flex justify-between items-center w-full text-left font-semibold text-lg text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  {faq.question}
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      openFAQ === index ? "rotate-180" : "rotate-0"
                    )}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={cn(
                    "mt-4 text-muted-foreground transition-all duration-300 ease-in-out overflow-hidden",
                    openFAQ === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                  )}
                  style={openFAQ === index ? { maxHeight: 'fit-content' } : {maxHeight: 0}}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
