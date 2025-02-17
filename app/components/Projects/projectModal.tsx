import getToolIcon from "@/app/utilities/getToolIcon";
import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import ModalSwiper from "./projectModalSwiper";

interface ProjectModalProps {
  title: string;
  description: string;
  images: string[];
  writeup: string[];
  toolIcons: string[];
  link: string;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const ProjectModal = (props: ProjectModalProps) => {
  return (
    <Modal
      size="3xl"
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      scrollBehavior="outside"
      motionProps={{
        variants: {
          enter: {
            zIndex: 50,
            transition: { duration: 5, ease: "easeIn" },
          },
        },
        exit: { opacity: 0, y: 200, transition: { ease: "easeIn" } },
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              <motion.div
                className="w-fit"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  type: "tween",
                  ease: "easeOut",
                }}
              >
                <h1 className="font-montserrat font-bold text-3xl">
                  {props.title.toUpperCase()}
                </h1>
                <h2 className="font-playfairDisplay text-lg">
                  {props.description}
                </h2>
              </motion.div>
            </ModalHeader>
            <ModalBody>
              <motion.div
                className="w-full h-full mx-auto"
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  type: "tween",
                  ease: "easeOut",
                }}
              >
                <ModalSwiper images={props.images} />

                <div className="flex justify-around mt-2 mb-4">
                  {props.toolIcons.map((icon, index) => {
                    return getToolIcon(icon); // Ensure you wrap the returned SVG in a JSX element with a key
                  })}
                </div>

                <div className="w-[85%] mx-auto space-y-4">
                  {props.writeup.map((writeup, index) => (
                    <p key={index}>{writeup}</p>
                  ))}
                </div>
              </motion.div>
            </ModalBody>
            <ModalFooter className="space-x-8">
              <Button
                variant="faded"
                className=" font-bold bg-[hsl(var(--nextui-secondary-100))]"
              >
                <Link
                  href={props.link}
                  target="_blank"
                  className="text-lg text-[hsl(var(--nextui-primary-100))] font-playfairDisplay"
                >
                  <p>VISIT</p>
                </Link>
              </Button>
              <Button
                className="text-[hsl(var(--nextui-primary-100))] mb-4"
                onPress={onClose}
              >
                <p>Close</p>
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
