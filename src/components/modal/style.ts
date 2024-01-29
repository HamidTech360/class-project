// ------------ import external dependencies ------------
import styled from "styled-components";

export const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

export const ModalContent = styled.div.attrs({
  className: "rounded mt-3 mb-3",
})`
  background-color: white;
  padding: 20px 30px 40px 30px;
  min-width: 70vw;
  overflow-y: scroll;

  @media screen and (max-width: 768px) {
    min-width: 95vw;
  }
`;
