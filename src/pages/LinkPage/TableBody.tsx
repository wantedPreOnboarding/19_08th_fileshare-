import React, { useState, useEffect } from "react";
//styles
import Avatar from "components/Avatar";
import * as S from "./index.style";
import useInterval from "hooks/useInterval";
import imageDefault from "assets/icons/default.svg";
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

const TableBody = ({ item }: PropsWithChildren<dataProps>) => {
  const EMAILS = item.sent?.emails[0];
  const URL_ADDRESS = "http://localhost";
  const navigate = useNavigate();

  const [updateTime, setUpdateTime] = useState<number>(0);
  const [expiration, setExpiration] = useState<boolean>(false);
  useInterval(() => {
    setUpdateTime(updateTime + 1);
  }, 60000);

  useEffect(() => {
    const expires = new Date(item.expires_at * 1000).getTime();
    const currentTime = new Date().getTime();
    const gap = expires - currentTime;
    gap > 0 ? setExpiration(true) : setExpiration(false);
  }, [updateTime]);

  const errorHandler= (event:React.SyntheticEvent<HTMLImageElement, Event>)=>{
    const target = event.target as HTMLImageElement
    target.src=imageDefault;
  }
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
            <img src={item.thumbnailUrl} onError={(event)=>errorHandler(event)}/>
            </S.LinkImage>
            <S.LinkTexts>
              <S.LinkTitle>{item.summary}</S.LinkTitle>
              <S.LinkUrl
                expiration={expiration}
                onClick={(event) => {
                  event.stopPropagation();
                  expiration && copyClipboard(`${URL_ADDRESS}${item.key}`);
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
