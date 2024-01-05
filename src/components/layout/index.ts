const getList = (category: string, url?: string) => {
  let navData = {
    name: category,
    cateUrl: url || category.toLowerCase(),
  };
  return navData;
};

const FE = [
  getList("HTML"),
  getList("CSS"),
  getList("JavaScript"),
  getList("TypeScript"),
  getList("Redux"),
  getList("React"),
  getList("Nextjs"),
];
const BE = [getList("Nestjs")];
const CS = [getList("정보처리기사", "sw")];
const ETC = [getList("Simple Memo", "github")];

export const CATEGORYS = [FE, BE, CS, ETC];
export const NameList = ["FE", "BE", "CS", "ETC"];
