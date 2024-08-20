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

interface ProjectModalProps {
  title: string;
  description: string;
  image: string;
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
            opacity: 1,
            y: 15,
            transition: { duration: 0.3, ease: "easeOut" },
          },
        },
        exit: { opacity: 0, y: 100 },
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
                  className="h-[400px] mx-auto mb-10 px-4 space-y-4"
                  initial={{ scale: 0.98 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    type: "tween",
                    ease: "easeOut",
                  }}
                >
                  <img
                    src={props.image}
                    className="w-full h-full rounded-md object-cover shadow-md shadow-[hsl(var(--nextui-primary-100))]"
                  />

                  <div className="flex justify-around">
                    {props.toolIcons.map((icon, index) => {
                      return getToolIcon(icon); // Ensure you wrap the returned SVG in a JSX element with a key
                    })}
                  </div>
                </motion.div>
                {props.writeup.map((writeup, index) => (
                  <p>{writeup}</p>
                ))}
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
