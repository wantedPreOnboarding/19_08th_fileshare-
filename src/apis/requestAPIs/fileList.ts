import { endPoints } from "apis/consts/endPoints";
import { FilesAPI } from "apis/models/fileList";
import requests from "../core";

export const get = {
  fileList: () =>
    requests.get<FilesAPI[]>(endPoints.links).catch(() => console.log("error")),
};
