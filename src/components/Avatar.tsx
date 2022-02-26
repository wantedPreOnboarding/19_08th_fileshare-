import React, { HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLDivElement> {
  emails: string[];
}

const Avatar = ({ emails, ...rest }: Props) => {
  return (
    <>
      {emails &&
        emails.map((item, index) => {
          return (
            <>
              {index < 5 && (
                <>
                  <Base key={index} {...rest}>
                    <Text num={index} data-text={item}>
                      {item.substring(0, 1)}
                    </Text>
                  </Base>
                </>
              )}
            </>
          );
        })}
      <span>{emails.length > 5 ? `+${emails.length - 5}` : ""}</span>
    </>
  );
};

export default Avatar;

const Base = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 24px;
  & + div {
    margin-left: -8px;
  }
`;

const Text = styled.span<{ num: number }>`
  color: ${({ theme }) => theme.colors.white};
  /* background: ${({ theme }) => theme.colors.teal500}; */
  background: #${(props) => Math.round(Math.random() * 0xffffff).toString(16)};
  border-radius: 100%;
  text-align: center;
  width: 100%;
  font-size: 12px;
`;
