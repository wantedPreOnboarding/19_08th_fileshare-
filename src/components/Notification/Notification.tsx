import React from "react";
import Portal from "portal/Portal";
import { useAppSelector } from "hooks/useStore";
import * as S from "./Notification.styled";
import ToastProps from "./Notification.type";

const Toast = ({ message }: ToastProps) => {
  return (
    <S.ToastWrapper>
      <div>{message}</div>
      <button>×</button>
    </S.ToastWrapper>
  );
};

const Notification = () => {
  const toasts = useAppSelector((state) => state.toasts);

  return (
    <Portal id="#notification">
      <S.Base>
        {toasts.map((toast) => (
          <Toast key={toast.id} message={toast.message} />
        ))}
      </S.Base>
    </Portal>
  );
};

export default Notification;
