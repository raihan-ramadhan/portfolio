import {
  DesignerSkills,
  DeveloperSkills,
  designerSkills,
  developerSkills,
} from "@/lib/data";
import { motion } from "framer-motion";

type SkillItemProps = {
  title: string;
  arraySkill: DesignerSkills | DeveloperSkills;
};

const fadeInAnimationVariants = {
  initial: {
    backgroundColor: "hsla(var(--cream)/85%)",
  },
  animate: (delay: number) => ({
    backgroundColor: "hsla(var(--cream)/50%)",
    transition: { delay },
  }),
};

const List = ({ title, arraySkill }: SkillItemProps) => {
  return (
    <div className="flex flex-col gap-[10px] w-full md:hidden">
      <p className="text-cream underline tracking-widest text-[16px] selection:bg-cream selection:text-black">
        {title}
      </p>
      <ul className="flex flex-wrap justify-center gap-2 text-lg">
        {arraySkill.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={0.05 * index}
            className="text-[16px] px-[5px] hover:!bg-cream text-black selection:bg-transparent transition-colors"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

const SkillsListMobile: React.FC = () => {
  return (
    <>
      <List title="Fullstack Developer" arraySkill={developerSkills} />
      <List title="UI/UX & Graphic Designer" arraySkill={designerSkills} />
    </>
  );
};

export default SkillsListMobile;
