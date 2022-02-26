import React, { FC } from "react";
import Download from "assets/icons/download.svg";
import  { ReactComponent as Delete }  from "assets/icons/trash.svg";
import * as S from "./index.style";
import { useParams } from "react-router";
import { printFileSize, formatDate, printRemainTime } from "utils";
import imageDefault from "assets/icons/default.svg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/useStore";
import * as selector from "redux/selectors";
import { deleteFile } from "redux/slices/fileList";
const DetailPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const file = id && useAppSelector(selector.fileSelectorById(id));

  const isExpired =
    file&&printRemainTime(file.expires_at) === "만료됨" ? true : false;

  const checkImage = (path: string) => {
    return path.substring(path.length - 3) !== "svg" ? path : imageDefault;
  };
  const sendBtnHandler = () => {
    alert("성공적으로 다운로드가 됐습니다! ");
  }
  const deleteBtnHandler=()=>{
    id&&dispatch(deleteFile(id));
    navigate("/");
  }

  return (
    <>
    {file&&
    <>
      <S.Header>
        <S.LinkInfo>
          <S.Title>{file.summary}</S.Title>
          {isExpired ? (
            <S.Url isExpired={isExpired}>{file.thumbnailUrl}</S.Url>
          ) : (
            <S.Url href={file.thumbnailUrl} isExpired={isExpired}>
              {file.thumbnailUrl}
            </S.Url>
          )}
        </S.LinkInfo>
        {/* {!isExpired ? ( */}
          <S.BtnGroup>
          <S.DownloadButton onClick={sendBtnHandler}>
            <img
              referrerPolicy="no-referrer"
              src={Download}
              alt="downloadbtn"
            />
            받기
          </S.DownloadButton>
          <S.DeleteButton onClick={deleteBtnHandler}>
            <Delete/>
          </S.DeleteButton></S.BtnGroup>
        {/* ) : (
          <S.DownloadButton disabled> 만료됨</S.DownloadButton>
        )} */}
      </S.Header>
      <S.Article>
        <S.Descrition>
          <S.Texts>
            <S.Top>링크 생성일</S.Top>
            <S.Bottom>{formatDate(file.created_at)}</S.Bottom>
            <S.Top>메세지</S.Top>
            <S.Bottom>{file.sent?.content}</S.Bottom>
            <S.Top>다운로드 횟수</S.Top>
            <S.Bottom>{file.download_count}</S.Bottom>
          </S.Texts>
          <S.LinkImage>
            <S.Image thumbnailUrl={checkImage(file.thumbnailUrl)} />
          </S.LinkImage>
        </S.Descrition>
        {!isExpired && (
          <>
            <S.ListSummary>
              <div>총 {file.count}개의 파일</div>
              <div>{printFileSize(file.size)}</div>
            </S.ListSummary>
            <S.FileList>
              {file.files &&
                file.files.map((file) => {
                  return (
                    <S.FileListItem key={file.key}>
                      <S.FileItemInfo>
                        <S.FileItemImage
                          thumbnailUrl={checkImage(file.thumbnailUrl)}
                        />
                        <span>{file.name}</span>
                      </S.FileItemInfo>
                      <S.FileItemSize>
                        {printFileSize(file.size)}
                      </S.FileItemSize>
                    </S.FileListItem>
                  );
                })}
            </S.FileList>
          </>
        )}
      </S.Article>
    </>}</>
  );
};

export default DetailPage;
