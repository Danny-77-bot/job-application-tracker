"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "Is the Job Application Tracker free?",
    answer:
      "Yes. You can start with the free plan and upgrade whenever you need additional features.",
  },
  {
    question: "Can I track unlimited applications?",
    answer:
      "Yes. The Pro plan allows you to manage unlimited job applications.",
  },
  {
    question: "Can I upload different resumes?",
    answer:
      "Absolutely. You can store multiple resumes and use the right one for each application.",
  },
  {
    question: "Will my data be secure?",
    answer:
      "Yes. Your information is securely stored and only accessible to you.",
  },
  {
    question: "Can I access my dashboard on mobile devices?",
    answer:
      "Yes. The application is fully responsive and works on phones, tablets, and desktops.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleFAQ(index: number) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <section
      id="faq"
      className="bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-4xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            FAQ
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Everything you need to know before getting started.
          </p>

        </div>

        {/* Questions */}

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <Minus className="text-blue-600" />
                ) : (
                  <Plus className="text-blue-600" />
                )}
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}