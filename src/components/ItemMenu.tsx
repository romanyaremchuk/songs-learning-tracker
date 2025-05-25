import style from "./ItemMenu.module.css";

interface Props {
  onRemove: () => void;
  onSongNameRename: () => void;
  onSongURLEdit: () => void;
  onChangeStatus: () => void;
}

const ItemMenu = ({ onRemove, onSongNameRename, onSongURLEdit }: Props) => {
  return (
    <div>
      <button onClick={onSongNameRename}>Rename</button>
      <button onClick={onSongURLEdit}>Edit URL</button>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default ItemMenu;
