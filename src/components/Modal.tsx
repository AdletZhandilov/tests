import React, { FC, useState, useEffect } from "react";

import styled from "styled-components";

interface Props {
  isOpen: boolean;
  values?: any;
  closeModal: () => void;
  onDelete?: () => void;
  onInputChange?: (value: any) => any;
}

type ModalProps = {
  show: boolean;
};

const Input = styled.input`
  width: 160px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #c1c1c1;
  border-radius: 8px;
`;

const ModalDiv = styled.div<ModalProps>`
  background-color: #fff;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  width: 240px;
  top: 0;
  height: auto;
  position: relative;
  padding: 16px;
  display: ${(p: { show: boolean }) => (p.show ? "block" : "none")};
`;

const Modal: FC<Props> = ({
  isOpen,
  values,
  closeModal,
  onDelete,
  onInputChange,
}) => {
  const objVal = values ? (
    Object.keys(values).map((el: any) => (
      <>
        <p>{values[el]}</p>
        <button onClick={() => (onDelete ? onDelete() : null)}>Delete</button>
      </>
    ))
  ) : (
    <></>
  );

  const handleClose = () => {
    closeModal();
  };
  return (
    <>
      <ModalDiv show={isOpen}>
        {values ? <>{objVal}</> : <></>}

        <Input
          onChange={(e: any) =>
            onInputChange ? onInputChange(e.target.value) : null
          }
        />
        <button onClick={() => handleClose()}>Delete</button>
        <button onClick={() => handleClose()}>Close</button>
      </ModalDiv>
    </>
  );
};
export default Modal;
