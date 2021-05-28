// 글로벌 라우터에서 쓰이는 중
export const trending = (req, res) => res.send("Trending Videos");

// 비디오 라우터에서 쓰이는 중
export const watch = (req, res) => res.send("Watch Videos");
export const edit = (req, res) => res.send("Edit Videos");
