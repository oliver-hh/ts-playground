
const getFirstCommonEntry = async (
  firstArray: string[],
  secondArray: string[],
): Promise<string | null> => {
  let commonEntry:string | null = null;

  for (const first of firstArray) {
    if (secondArray.includes(first)) {
      commonEntry = first;
      break;
    }
  }

  return commonEntry;
};

const first = ['R08.01.02', 'R08.01', 'R08', 'Dev'];
const second = ['R08.02.03', 'R08.02', 'R08', 'Dev'];

getFirstCommonEntry(first, second).then((result) => {
  console.log(result);
});
