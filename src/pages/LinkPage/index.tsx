import React, { FC } from "react";
import TableBody from "./TableBody";
import data from "components/data.json";
import * as S from "./index.style";

const LinkPage: FC = () => {
  return (
    <>
      <S.Title>마이 링크</S.Title>
      <S.Table>
        <S.TableHead>
          <S.TableRow>
            <S.TableCell>제목</S.TableCell>
            <S.TableCell>파일개수</S.TableCell>
            <S.TableCell>크기</S.TableCell>
            <S.TableCell>유효기간</S.TableCell>
            <S.TableCell>받은사람</S.TableCell>
          </S.TableRow>
        </S.TableHead>
        {data.map((item) => {
          return <TableBody key={item.key} item={item} />;
        })}
      </S.Table>
    </>
  );
};

export default LinkPage;
