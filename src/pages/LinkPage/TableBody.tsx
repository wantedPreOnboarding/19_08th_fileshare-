import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  printRemainTime,
  inputClipBoard,
  printFilteredUrl,
  printFileSize,
} from "utils";
import { dataProps } from "types/data.type";
import { PropsWithChildren } from "types/props";
import useInterval from "hooks/useInterval";
import Avatar from "components/Avatar";
import Default from "assets/icons/default.svg";
import * as S from "./index.style";

const TableBody = ({ item }: PropsWithChildren<dataProps>) => {
  const EMAILS = item.sent?.emails[0];
  const navigate = useNavigate();

  const [updateTime, setUpdateTime] = useState<number>(0);
  useInterval(() => {
    setUpdateTime(updateTime + 1);
  }, 60000);

  return (
    <S.TableBody
      role="button"
      onClick={() => {
        navigate(`/${item.key}`);
      }}
    >
      <S.TableRow>
        <S.TableCell>
          <S.LinkInfo>
            <S.LinkImage>
              <img referrerPolicy="no-referrer" src={Default} alt="" />
            </S.LinkImage>
            <S.LinkTexts>
              <S.LinkTitle>{item.summary}</S.LinkTitle>
              <S.LinkUrl
                onClick={(event) => {
                  event.stopPropagation();
                  if (
                    new Date(item.expires_at * 1000).getTime() -
                      new Date().getTime() >
                    0
                  ) {
                    inputClipBoard(`http://localhost/${item.key}`);
                  }
                }}
              >
                {printFilteredUrl(item.key, item.expires_at)}
              </S.LinkUrl>
            </S.LinkTexts>
          </S.LinkInfo>
          <span />
        </S.TableCell>
        <S.TableCell>
          <span>파일개수</span>
          <span>{item.count}</span>
        </S.TableCell>
        <S.TableCell>
          <span>파일사이즈</span>
          <span>{printFileSize(item.size)}</span>
        </S.TableCell>
        <S.TableCell>
          <span>유효기간</span>
          <span id={updateTime.toString()}>
            {printRemainTime(item.expires_at)}
          </span>
        </S.TableCell>
        <S.TableCell>
          <span>받은사람</span>
          <S.LinkReceivers>
            {EMAILS && <Avatar text={EMAILS} />}
          </S.LinkReceivers>
        </S.TableCell>
      </S.TableRow>
    </S.TableBody>
  );
};

export default TableBody;
