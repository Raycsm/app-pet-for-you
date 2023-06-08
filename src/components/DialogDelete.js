import React from "react";
import { AlertDialog, Button, Center} from "native-base";

export const DialogDelete = ({isOpen, setIsOpen, onPress}) => {
  
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);
  return <Center>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose} >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Deletar</AlertDialog.Header>
          <AlertDialog.Body>
            Você tem certeza que deseja deletar?
            Essa ação não pode ser desfeita.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray"  onPress={onClose} ref={cancelRef}>
                Cancelar
              </Button>
              <Button backgroundColor={'#b00202'} onPress={onPress} borderRadius={20} width={100}>
                Deletar
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>;
};
    