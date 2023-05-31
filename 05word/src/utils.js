export const removeTagDIV = (str) => {
  const reg = /<div[^>]*?>|<\/div>/gi;
  return str.replace(reg, "");
};

export const escape2Html = (str) => {
  const arrEntities = { lt: "<", gt: ">", nbsp: " ", amp: "&", quot: '"' };
  return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (_, t) {
    // @ts-ignore
    return arrEntities[t];
  });
};

export const trimHtml = (str) => {
  return removeTagDIV(escape2Html(str));
};
