import Video from "../models/Video";

// 글로벌 라우터에서 쓰이는 중
// home -> 메인에서 보여줄 트렌드 영상들
export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};

// 비디오 라우터에서 쓰이는 중
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching`, video });
};

// getEdit은 edit 화면을 보여주는(render) 함수
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing`, video });
};
// postEdit은 edit 화면에서의 변경사항을 저장해주는 함수
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  // 이 함수에서 업로드한 비디오를 videos 배열에 추가
  const { title } = req.body;
  return res.redirect("/");
};
