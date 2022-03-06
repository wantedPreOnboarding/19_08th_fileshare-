import React, { FC } from "react";
//icons&styles
import * as S from "./index.style";
import Download from "assets/icons/download.svg";
import { ReactComponent as Delete } from "assets/icons/trash.svg";
import imageDefault from "assets/icons/default.svg";
//utils
import {
  printFileSize,
  formatDate,
  printRemainTime,
  fileDownload,
} from "utils";
//router
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
//redux
import { useAppDispatch, useAppSelector } from "hooks/useStore";
import * as selector from "redux/selectors";
import { deleteFile } from "redux/slices/fileList";
import { get } from "apis/requestAPIs/fileList";

const DetailPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const data = id && useAppSelector(selector.fileSelectorById(id));

  const isExpired =
    data && printRemainTime(data.expires_at) === "만료됨" ? true : false;

  const downloadHandler = (url: string, fileName: string) => {
    const a = document.createElement("a");

    get
      .downloadFile(url)
      .then((res) => URL.createObjectURL(res))
      .then((imageURL) => {
        fileDownload(imageURL, fileName);
        alert("성공적으로 다운로드가 됐습니다! ");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteBtnHandler = () => {
    id && dispatch(deleteFile(id));
    navigate("/");
  };

  const errorHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = event.target as HTMLImageElement;
    target.src = imageDefault;
  };

  return (
    <>
      {data && (
        <>
          <S.Header>
            <S.LinkInfo>
              <S.Title>{data.summary}</S.Title>
              {isExpired ? (
                <S.Url isExpired={isExpired}>{data.thumbnailUrl}</S.Url>
              ) : (
                <S.Url href={data.thumbnailUrl} isExpired={isExpired}>
                  {data.thumbnailUrl}
                </S.Url>
              )}
            </S.LinkInfo>
            {!isExpired ? (
              <S.BtnGroup>
                <S.DownloadButton
                  onClick={() =>
                    downloadHandler(data.thumbnailUrl, data.summary)
                  }
                >
                  <img
                    referrerPolicy="no-referrer"
                    src={Download}
                    alt="downloadbtn"
                  />
                  받기
                </S.DownloadButton>
                <S.DeleteButton onClick={deleteBtnHandler}>
                  <Delete />
                </S.DeleteButton>
              </S.BtnGroup>
            ) : (
              <S.DownloadButton disabled> 만료됨</S.DownloadButton>
            )}
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
                <img
                  src={data.thumbnailUrl}
                  onError={(event) => errorHandler(event)}
                />
              </S.LinkImage>
            </S.Descrition>
            {!isExpired && (
              <>
                <S.ListSummary>
                  <div>총 {data.count}개의 파일</div>
                  <div>{printFileSize(data.size)}</div>
                </S.ListSummary>
                <S.FileList>
                  {data.files &&
                    data.files.map((file) => {
                      return (
                        <S.FileListItem key={file.key}>
                          <S.FileItemInfo>
                            <img
                              src={file.thumbnailUrl}
                              onError={(event) => errorHandler(event)}
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
        </>
      )}
    </>
  );
};

export default DetailPage;
