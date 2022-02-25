import styled from "styled-components";
import Button from "components/Button";
import {thumbnailUrlProps} from "./index.type"

export const Header = styled.header`
  display: flex;
  color:${({ theme }) => theme.colors.grey600};
  margin-bottom: 32px;
  width:100%;
  justify-content:space-between;
`;

export const LinkInfo = styled.div`
  overflow: hidden;
  width:70%;
`;

export const Title = styled.h3`
  margin: 0; 
  overflow: hidden;
  white-space: nowrap;
  word-break: break-all;
  text-overflow: ellipsis;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.grey700};
  font-size: 20px;
  
`;

export const Url = styled.a`
  overflow: hidden;
  display: block;
  white-space: nowrap;
  word-break: break-all;
  text-overflow: ellipsis;
  margin: 0;
  cursor: pointer;
  text-decoration: underline;
  width:100%;
  line-height: 20px;
  font-size: 14px;
  :hover {
    color: ${({ theme }) => theme.colors.teal700};
  }
`;

export const DownloadButton = styled(Button)`
  font-size: 16px;
  cursor:pointer;
  img {
    margin-right: 8px;
  }
`;

export const Article = styled.article`
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.grey200};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0 0 0 1px rgb(0 20 61 / 8%), 0 3px 3px 0 rgb(0 20 61 / 4%);
  background-color:${({ theme }) => theme.colors.white};
  color:${({ theme }) => theme.colors.grey600};
  font-size: 14px;
  font-weight: 400;
`;

export const Descrition = styled.div`
  display: flex;
  padding: 36px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 24px;
  }
`;

export const Texts = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Top = styled.label`
  font-weight: 600;
  line-height: 20px;
`;

export const Bottom = styled.p`
  color:${({ theme }) => theme.colors.grey700};
  margin: 8px 0 24px;
`;

export const LinkImage = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  border-radius: 4px;
  justify-content: center;
  background:${({ theme }) => theme.colors.grey50};


  @media (max-width: 768px) {
    margin-bottom: 32px;
    max-width: 100%;
  }
`;

export const Image = styled.span<thumbnailUrlProps>`
  width: 100%;
  display: inline-block;
  background-image:   ${props => `url(${props.thumbnailUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  padding-bottom: 100%;
`;

export const ListSummary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 36px;
  font-weight: 600;
  border-top: 1px solid ${({ theme }) => theme.colors.grey200};
  @media (max-width: 768px) {
    padding: 12px 24px;
  }
`;

export const FileList = styled.ul`
  border-top: 1px solid ${({ theme }) => theme.colors.grey200};
  padding: 0 36px;
  margin: 0;
  color: ${({ theme }) => theme.colors.grey700};

  @media (max-width: 768px) {
    padding: 0 24px;
  }

  & > li + li {
    border-top: 1px solid ${({ theme }) => theme.colors.grey200};
  }
`;

export const FileListItem = styled.li`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FileItemImage = styled.span<thumbnailUrlProps>`
    background-image: ${props => `url(${props.thumbnailUrl})`};
    width: 40px;
    height: 40px;
    min-width:40px;
    min-height:40px;
    margin-right: 12px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    `;

export const FileItemInfo = styled.div`
    max-width: 70%;
    display: flex;
    align-items: center;
    span{
      word-break: break-all;
      max-height:40px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
`;

export const FileItemSize = styled.div``;