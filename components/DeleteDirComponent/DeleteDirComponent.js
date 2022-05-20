import Button from '../Button/Button';
import { ButtonsText } from '../const';


const DeleteDirComponent = ({ onClick }) => {
  return (
    <Button title={ButtonsText.deleteDir} onClick={onClick} />
  )
}

export default DeleteDirComponent;