import React, { FC } from "react";
import styled from "styled-components";
import * as S from "./index.style"
import Download from 'assets/icons/download.svg';
import { useParams } from "react-router";
import datas from "components/data.json";
import {printFileSize,formatDate,printRemainTime} from "utils"
import imageDefault from "assets/icons/default.svg"

const DetailPage: FC = () => {
  const { id } = useParams();
  const index= datas.findIndex(data=>data.key===id)
  const data=datas[index];
  const isExpired=printRemainTime(data.expires_at)==="만료됨"?true:false
  
  const checkImage=(path:string)=>{
    return path.substring(path.length-3)!=="svg" ? path :imageDefault
  }
  const sendBtnHandler=()=>{
    alert("성공적으로 다운로드가 됐습니다! ")
  }

  return (
    <>
      <S.Header>
        <S.LinkInfo>
          <S.Title>{data.summary}</S.Title>
          {isExpired?
          <S.Url isExpired={isExpired}>{data.thumbnailUrl}</S.Url>:<S.Url href={data.thumbnailUrl}isExpired={isExpired} >{data.thumbnailUrl}</S.Url>}
        </S.LinkInfo>
        {!isExpired?
        <S.DownloadButton onClick={sendBtnHandler} >  
         <img referrerPolicy="no-referrer" src={Download} alt="downloadbtn" />받기
          </S.DownloadButton>:   <S.DownloadButton  disabled>  만료됨</S.DownloadButton >}
      </S.Header>
      <S.Article>
        <S.Descrition>
          <S.Texts>
            <S.Top>링크 생성일</S.Top>
            <S.Bottom>{formatDate(data.created_at)}</S.Bottom>
            <S.Top>메세지</S.Top>
            <S.Bottom>{data.sent?.content}</S.Bottom>
            <S.Top>다운로드 횟수</S.Top>
            <S.Bottom>{data.download_count}</S.Bottom>
          </S.Texts>
          <S.LinkImage>
            <S.Image thumbnailUrl={checkImage(data.thumbnailUrl)} />
          </S.LinkImage>
        </S.Descrition>
        {!isExpired && <>
        <S.ListSummary>
          <div>총 {data.count}개의 파일</div>
          <div>{printFileSize(data.size)}</div>
        </S.ListSummary>
        <S.FileList >
          {data.files&&data.files.map(file=>{
            return(
          <S.FileListItem key={file.key}>
            <S.FileItemInfo>
              <S.FileItemImage thumbnailUrl={checkImage(file.thumbnailUrl)} />
              <span>{file.name}</span>
            </S.FileItemInfo>
            <S.FileItemSize>{printFileSize(file.size)}</S.FileItemSize>
          </S.FileListItem>)})}
        </S.FileList></>}
      </S.Article>
    </>
  );
};



export default DetailPage;
