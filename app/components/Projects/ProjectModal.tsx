import getToolIcon from "@/app/utilities/getToolIcon";
import {
  Button,
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
  writeup: string;
  toolIcons: string[];
  link: string;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const ProjectModal = (props: ProjectModalProps) => {
  return (
    <Modal
      size="5xl"
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      scrollBehavior="outside"
      motionProps={{
        variants: {
          enter: {
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
            <ModalHeader className="flex flex-col gap-1">
              <motion.div
                className="w-fit"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  type: "tween",
                  ease: "easeOut",
                }}
              >
                <h1 className="font-montserrat font-bold text-3xl">{props.title}</h1>
                <h2 className="font-playfairDisplay text-lg">{props.description}</h2>
              </motion.div>
            </ModalHeader>
            <ModalBody>
              <motion.div
                className="w-full sm:w-1/2 mx-auto mb-4 space-y-4"
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
                  className="rounded-md object-cover shadow-md shadow-[hsl(var(--nextui-primary-100))]"
                />

                <div className="flex justify-around">
                  {props.toolIcons.map((icon, index) => {
                    return getToolIcon(icon); // Ensure you wrap the returned SVG in a JSX element with a key
                  })}
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p>{props.writeup}</p>
                <p>{props.writeup}</p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                className="text-[hsl(var(--nextui-primary-100))] mb-4"
                onPress={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
