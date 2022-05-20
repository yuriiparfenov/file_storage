import { ButtonsText } from '../const';
import Button from '../Button/Button';

const RenameDirComponent = ({ onClick }) => {
  return <Button title={ButtonsText.rename} onClick={onClick} />
}

export default RenameDirComponent;