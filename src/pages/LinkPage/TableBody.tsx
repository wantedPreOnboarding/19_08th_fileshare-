import React, { useState } from "react";

import printRemainTime from "utils/printRemainTime";
import Avatar from "components/Avatar";
import Default from "assets/icons/default.svg";
import * as S from "./index.style";
import printFilesize from "utils/printFileSize";
import useInterval from "hooks/useInterval";
import { dataProps } from "types/data.type";
import { PropsWithChildren } from "types/props";
import { sensitiveHeaders } from "http2";

const TableBody = ({ item }: PropsWithChildren<dataProps>) => {
  const EMAILS = item.sent.emails[0];

  const [updateTime, setUpdateTime] = useState<number>(0);
  useInterval(() => {
    setUpdateTime(updateTime + 1);
  }, 60000);

  return (
    <S.TableBody>
      <S.TableRow>
        <S.TableCell>
          <S.LinkInfo>
            <S.LinkImage>
              <img referrerPolicy="no-referrer" src={Default} alt="" />
            </S.LinkImage>
            <S.LinkTexts>
              <S.LinkTitle>{item.sent.subject}</S.LinkTitle>
              <S.LinkUrl>localhost/{item.key}</S.LinkUrl>
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
          <span>{printFilesize(item.size)}</span>
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
