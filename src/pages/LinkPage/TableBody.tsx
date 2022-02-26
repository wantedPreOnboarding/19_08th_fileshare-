import React, { useState, useEffect } from "react";
//styles
import Avatar from "components/Avatar";
import Default from "assets/icons/default.svg";
import * as S from "./index.style";
import useInterval from "hooks/useInterval";
//router
import { useNavigate } from "react-router-dom";
//utils
import {
  printRemainTime,
  copyClipboard,
  printFilteredUrl,
  printFileSize,
} from "utils";
//types
import { dataProps } from "types/data.type";
import { PropsWithChildren } from "types/props";

import { useAppDispatch } from "hooks/useStore";
import { addToast } from "redux/slices/toasts";
import { add } from "date-fns";

const TableBody = ({ item }: PropsWithChildren<dataProps>) => {
  const EMAILS = item.sent?.emails;
  const URL_ADDRESS = "http://localhost";
  const navigate = useNavigate();

  const [updateTime, setUpdateTime] = useState<number>(0);
  const [expiration, setExpiration] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useInterval(() => {
    setUpdateTime(updateTime + 1);
  }, 60000);

  useEffect(() => {
    const expires = new Date(item.expires_at * 1000).getTime();
    const currentTime = new Date().getTime();
    const gap = expires - currentTime;
    gap > 0 ? setExpiration(true) : setExpiration(false);
  }, [updateTime]);

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
                expiration={expiration}
                onClick={(event) => {
                  event.stopPropagation();
                  expiration && copyClipboard(`${URL_ADDRESS}${item.key}`);
                  expiration && dispatch(addToast("Copied"));
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
            {EMAILS && <Avatar emails={EMAILS} />}
          </S.LinkReceivers>
        </S.TableCell>
      </S.TableRow>
    </S.TableBody>
  );
};

export default TableBody;
