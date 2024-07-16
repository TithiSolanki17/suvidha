import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
 function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          // header={item.header}
          icon={item.icon}
          className={i === 3 || i === 5 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100">
  </div>

);
const items = [
  {
    title: "Healthy Food",
    description: "By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need.",
    // header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Social Awareness",
    description: "We provide resources, conduct awareness campaigns, and facilitate access to hygiene facilities, aiming to create a healthier environment and prevent the spread of diseases.",
    // header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tree Plantation",
    description: "Through community engagement and active participation, we successfully planted thousands of trees, fostering a greener and healthier ecosystem for future generations.",
    // header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Health Care",
    description:
      "We believe that access to healthcare is a fundamental right, and we work tirelessly to ensure that healthcare services are accessible, affordable, and of high quality for those in need",
    // header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Primary Education",
    description: "By collaborating with local communities and educators, we aim to empower children with the knowledge and skills they need for a brighter future.",
    // header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Social Care",
    description: "Our programs encompass a range of support services, including counseling, vocational training, and advocacy, with the goal of empowering individuals",
    // header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    // header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
export default BentoGridDemo;