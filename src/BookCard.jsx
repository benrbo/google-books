import React, { useState } from 'react';
import { Modal, Card, CardImg, CardBody, CardHeader, Button } from 'reactstrap';
const BookCard = ({
  thumbnail,
  title,
  description,
}) => {


  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Card style={{ width: '350px' }} className='m-auto '>
      <CardImg
        top
        style={{ width: '100%', height: '233px' }}
        src={thumbnail}
        alt={title}
      />
      <CardBody>
        <CardHeader tag="h3">{title}</CardHeader><br></br>
        <Button color="primary" onClick={toggle}>More info</Button>
      </CardBody>
      <Modal isOpen={modal} toggle={toggle}>
        <div className='modal-header d-flex justify-content-center'>
          <h5 className='modal-title text-center' id='exampleModalLabel'>
            {title}
          </h5>
          <button
            aria-label='Close'
            className='close'
            type='button'
            onClick={toggle}
          >
            <span aria-hidden={true}>X</span>
          </button>
        </div>
        <div className='modal-body'>
          <div className='d-flex justify-content-between ml-3'>
            <img src={thumbnail} alt={title} style={{ height: '233px' }} />
            <div>
              <p>{description}</p>
            </div>
          </div>
          <div className='mt-3'>{description}</div>
        </div>
      </Modal>
    </Card>

  );
};

export default BookCard;
