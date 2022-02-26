import styled from "styled-components";

const ToastWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 65px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  margin: 12px 0px 0px;
  padding: 20px 50px 20px 24px;
  display: block;
  box-sizing: border-box;
  opacity: 1;
  transition: all 0.3s ease-in-out 0s;
  will-change: transform, opacity;
  border: 1px solid rgb(56, 217, 169);
  background-color: rgb(230, 252, 245);
  color: rgb(18, 184, 134);
  box-shadow: rgb(0 20 61 / 8%) 0px 21px 21px 0px,
    rgb(0 20 61 / 4%) 0px 3px 3px 0px, rgb(0 20 61 / 12%) 0px 11px 13px 0px;
  line-height: 1.43;
  letter-spacing: -0.43px;
  right: 0px;

  > button {
    border: none;
    cursor: pointer;
    font-family: Arial;
    font-size: 17px;
    position: absolute;
    top: 8px;
    right: 8px;
    line-height: 21px;
    background-color: rgb(32, 201, 151);
    color: rgb(240, 245, 234);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-weight: 400;
    text-align: center;
    margin: 14px;
    padding: 0 0 0 0.5px;
  }
`;

const Base = styled.div`
  font-family: inherit;
  position: fixed;
  width: 100%;
  padding: 36px 48px 0px 0px;
  z-index: 9998;
  box-sizing: border-box;
  height: auto;
  inset: 0px 0px auto auto;
  max-width: 460px;
`;

export { ToastWrapper, Base };
