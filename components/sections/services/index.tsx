"use client";

import React, { useState } from "react";
import Section from "@/components/layout/section";
import Heading from "../../atoms/heading";
import { brainwaveServices, brainwaveServicesIcons, images } from "@/constants";
import Generating from "../../atoms/generating";
import { PhotoChatMessage, VideoBar, VideoChatMessage, Gradient } from "@/components/design/services";
import { cn } from "@/lib/utils";

type Props = {};

const Services = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState<number>(2);

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Unveiling Our Smart Tools."
          text="Acadeo , Ai Tools for Smarter Learning"
        />

        <div className="relative bg-gradient-to-b from-n-8 to-n-9 rounded-3xl">
          {/* Content Wrapper */}
          <div className="relative z-1 mb-5 flex h-[39rem] items-center overflow-hidden rounded-3xl border border-n-1/10 p-8 lg:p-20 xl:h-[46rem]">
            {/* GIF Section */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-3xl overflow-hidden">
              <img
                src="/assets/summarygif.gif"
                alt="AI Generating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Secondary Sections */}
        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <div className="relative min-h-[39rem] overflow-hidden rounded-3xl border border-n-1/10">
            <div className="absolute inset-0">
              <img
                src={images.service2}
                className="w-full h-full object-cover"
                alt="Photo editing"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-n-8/0 to-n-8/90 p-8 lg:p-15">
              <h4 className="h4 mb-4">Summarize and Speak</h4>
              <p className="body-2 mb-12 text-n-3">
                Instant summaries, voiced for you.
              </p>
            </div>
            <PhotoChatMessage />
          </div>

          <div className="overflow-hidden rounded-3xl bg-n-7 p-4 lg:min-h-[46rem]">
            <div className="px-4 py-12 xl:px-8">
              <h4 className="h4 mb-4">Quiz & Flash</h4>
              <p className="body-2 mb-8 text-n-3">
                Test your knowledge, review concepts, and master topics effortlessly with interactive quizzes and flashcards.
              </p>
              <ul className="flex items-center justify-between">
                {brainwaveServicesIcons.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedItem(index)}
                    className={cn(
                      "flex items-center justify-center rounded-2xl cursor-pointer",
                      index === selectedItem
                        ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                        : "w-10 h-10 bg-n-6 md:w-15 md:h-15"
                    )}
                  >
                    <div
                      className={cn(
                        index === selectedItem &&
                          "flex size-full items-center justify-center rounded-2xl bg-n-7"
                      )}
                    >
                      <img src={item} alt="icon" className="w-6 h-6" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 overflow-hidden rounded-xl bg-n-8 md:h-[25rem]">
              <img
                src="/assets/summarygif.gif"
                alt="AI Generating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;