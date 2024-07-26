import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

interface ProjectModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const ProjectModal = ({ isOpen, onOpenChange }: ProjectModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="outside">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">STUFF</ModalHeader>
            <ModalBody>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                asperiores facilis, labore sed eos qui similique esse quas.
                Aliquam corrupti maxime aliquid quam accusantium et odit natus
                voluptatibus fugiat expedita. Repudiandae sed molestiae maxime
                maiores excepturi similique repellendus tenetur voluptatem quia
                adipisci. Assumenda impedit autem commodi suscipit ullam, veniam
                explicabo possimus cumque reiciendis hic deserunt, ad, mollitia
                quas? Aliquam, maxime! Rerum at libero accusantium iusto
                tenetur, mollitia unde voluptates. Corporis enim voluptates qui
                quo? Voluptatem, qui minus. Ullam cum ea maiores provident!
                Distinctio nostrum tempore reiciendis nemo incidunt esse
                veritatis? Quam maiores dolorum perspiciatis voluptates
                doloribus architecto. Exercitationem impedit fugiat, molestiae
                laboriosam accusantium eius sapiente earum quam modi, id,
                reiciendis quia minima aliquid optio suscipit excepturi commodi
                esse nesciunt amet? Recusandae, quidem veniam expedita id
                consectetur dicta odio repudiandae eum animi reprehenderit culpa
                ducimus aliquam tenetur autem reiciendis unde nostrum repellat
                nisi sapiente! Voluptatum incidunt itaque, odit voluptate natus
                in.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                className="text-[hsl(var(--nextui-primary-100))]"
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
