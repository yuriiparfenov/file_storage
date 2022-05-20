import Button from '../Button/Button';
import { ButtonsText } from '../const';

const CreateDirComponent = ({ onClick }) => {
  return <Button title={ButtonsText.createDir} onClick={onClick} />
}

export default CreateDirComponent;