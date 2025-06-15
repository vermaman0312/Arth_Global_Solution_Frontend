import React from "react";
import MainFounder from "./components/main_founder";
import CustomTracingBeam from "../../../components/tracing_beam/component";
import Quotes from "./components/quote";

const dummyContent = [
  {
    title: "Board of Directors",
    description: (
      <>
        <p className="text-justify">
          Aman Verma spearheads the IT & Digital initiatives with a vision to
          integrate technology into every aspect of sustainable business growth.
          His leadership drives innovation, digital transformation, and
          strategic execution across all platforms.
        </p>
      </>
    ),
    badge: "Aman Verma",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Board of Directors",
    description: (
      <>
        <p className="text-justify">
          Raman Verma plays a crucial role in overseeing governance and
          strategic partnerships. His focus remains on aligning the
          organization’s mission with impactful collaborations and transparent
          decision-making frameworks.
        </p>
      </>
    ),
    badge: "Raman Verma",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Board of Directors",
    description: (
      <>
        <p className="text-justify">
          Rajat Verma brings a sharp strategic lens to the organization, with
          deep insights into compliance, finance, and risk management. He is
          dedicated to building a stable foundation that empowers innovation and
          scale.
        </p>
      </>
    ),
    badge: "Rajat Verma",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Board of Directors",
    description: (
      <>
        <p className="text-justify">
          Nitesh Raj focuses on operational excellence and internal systems
          development. His strength lies in building scalable structures that
          ensure smooth execution across departments and verticals.
        </p>
      </>
    ),
    badge: "Nitesh Raj",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Board of Directors",
    description: (
      <>
        <p className="text-justify">
          Sahil Simyani contributes as a key force in our digital roadmap,
          leading platform architecture, product innovation, and IT
          infrastructure. He ensures that technology remains an enabler of
          impact and efficiency.
        </p>
      </>
    ),
    badge: "Sahil Simyani",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Board of Directors",
    description: (
      <>
        <p className="text-justify">
          Raunak Verma plays a pivotal role in investor relations and financial
          strategy. His expertise strengthens our foundation for fundraising,
          audits, and long-term financial sustainability.
        </p>
      </>
    ),
    badge: "Raunak Verma",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const LeadershipLayoutTemplate = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full">
        <MainFounder />
      </div>
      <div className="w-full py-10">
        <Quotes />
      </div>
      <div className="w-full">
        <CustomTracingBeam items={dummyContent} />
      </div>
    </div>
  );
};

export default LeadershipLayoutTemplate;
