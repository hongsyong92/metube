// 글로벌 라우터에서 쓰이는 중
// trending -> 메인에서 보여줄 트렌드 영상들
export const trending = (req, res) => res.send("Trending Videos");

// 비디오 라우터에서 쓰이는 중
export const see = (req, res) => {
  return res.send(`Watch Videos #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send("Edit Videos");
};
export const search = (req, res) => res.send("Search Videos");
export const upload = (req, res) => res.send("Upload Videos");
export const deleteVideo = (req, res) => {
  return res.send("Delete Videos");
};
