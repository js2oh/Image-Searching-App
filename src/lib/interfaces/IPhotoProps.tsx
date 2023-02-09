export default interface IPhotoProps {
  photoURL: string;
  toggle: () => void;
  setModalSrc: React.Dispatch<React.SetStateAction<string>>;
}
