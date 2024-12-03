import { splitColumnsIntoArray } from "../utils.js";
import { input } from "./data.js";

const leftList = [3, 4, 2, 1, 3, 3];
const rightList = [4, 3, 5, 3, 9, 3];

const getDistance = (leftList, rightList) => {
  const leftListSorted = leftList.sort((a, b) => a - b);
  const rightListSorted = rightList.sort((a, b) => a - b);

  let total = 0;

  if (leftListSorted.length !== rightListSorted.length)
    throw `lists do not have equal amount of items`;

  for (let i = 0; i < leftListSorted.length; i++) {
    total += Math.abs(leftListSorted[i] - rightListSorted[i]);
  }
  return total;
};

const [col1, col2] = splitColumnsIntoArray(input);
const totalDistance = getDistance(col1, col2);
console.log({ totalDistance });

const getOccurrenceMap = (list) => {
  const map = {};
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const mapItem = map[item];
    map[item] = mapItem ? mapItem + 1 : 1;
  }
  return map;
};

const calculateSimilarityScore = (leftList, rightList) => {
  const map = getOccurrenceMap(rightList);
  let total = 0;
  for (let i = 0; i < leftList.length; i++) {
    const item = leftList[i];
    const occurrence = map[item];
    if (occurrence) {
      total += item * occurrence;
    }
  }
  return total;
};

const total = calculateSimilarityScore(col1, col2);
console.log({ total });
