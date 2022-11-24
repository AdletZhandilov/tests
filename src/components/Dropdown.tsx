import styled from "styled-components";

type DropDownProps = {
  index: number;
  show: boolean;
  isOpen?: () => void;
};

const DropDown = styled.div<DropDownProps>`
  position: relative;
  display: ${(p: { show: boolean }) => (p.show ? "block" : "none")};

  & > ul {
    border: 1px solid #dadde0;
    box-sizing: border-box;
    filter: drop-shadow(0px 2px 20px rgba(0, 0, 0, 0.08));
    border-radius: 0px 0px 4px 4px;
    background-color: #fff;
    position: absolute;
    top: 0;
    padding: 0;
    width: calc(100% / 7);
    max-height: 40vh;
    list-style: none;
    overflow-y: auto;
    overflow-x: hidden;
    & > li {
      padding: 16px;
      color: #11161e;
      font-size: 16px;
      line-height: 24px;
      cursor: pointer;

      &:hover {
        background-color: #f6f8fa;
      }

      &.selected {
        background-color: #dadde0;
        font-weight: 600;
      }
    }
  }
`;
// const DropDown =

export default DropDown;
