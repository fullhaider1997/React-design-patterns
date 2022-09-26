import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`;

const ButtonModal = styled.button`
  background-color: rgba(255, 9, 9, 0.5);
`;

//shouldShow is bolean
//onReactClose request to close down modal from parent

export const ControlledModal = ({
  shouldShow,
  onRequestClose,
  children,
}: any) => {
  return (
    <>
      {shouldShow && (
        <ModalBackground onClick={onRequestClose}>
          <ModalBody>
            {children}
            <ButtonModal onClick={onRequestClose}>close</ButtonModal>
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};
