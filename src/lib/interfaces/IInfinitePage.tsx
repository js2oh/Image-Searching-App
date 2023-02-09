import IPhoto from "./IPhoto";

export default interface IInfinitePage {
  nextCursor: number | undefined;
  photoData: IPhoto[];
}
