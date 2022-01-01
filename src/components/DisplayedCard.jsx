import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function CardName(props) {
  return (<p className='text-3xl'>{props.text}</p>);
}

function EditIcon(props) {
  return <FontAwesomeIcon icon={faEdit} size={'1x'} aria-hidden />;
}
function CardContent() {}
function SaveButton() {}
function CancelButton() {}

export default function DisplayedCard(props) {
  const { data } = props;
  if (data === null) {return <p>Error: Cannot find any data of this card</p>}
  const [isEditing, setIsEditing] = useState(false);
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  
  const handleClick = () => {}

  return (
    <>
      <CardName text={data.title} />
      <EditIcon onClick={() => setIsEditing(!isEditing)} />
      <DeleteIcion onClick={() => setIsDialogOpened(true)}/>
      <CardContent>{data.content}</CardContent>
      {isEditing ? (
        <>
          <SaveButton onClick={handleClick} /> <CancelButton />
        </>
      ) : (
        <CloseButton />
      )}
      {isDialogOpened ? <DeleteConfirm /> : null}
    </>
  );
}
