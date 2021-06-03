import express from "express";
import {
  getEdit,
  watch,
  postEdit,
  getUpload,
  postUpload
} from "../controllers/videoController";

const videoRouter = express.Router();

// (\\d+) 는 숫자만 가져오는 정규식
videoRouter.get("/:id(\\d+)", watch);

// 아래는 ~~edit url 에 접근했을 때, get method면 getEdit 함수 사용,
// post method면 postEdit 함수 사용한다는 것.
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
