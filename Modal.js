import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example() {
    
  const [title,setTitle] =useState("")
  const [description,setDescription] =useState("")
  const [immage,setImmage]=useState("")
  const [rating,setRating] =useState(0)
  const [trailer,setTrailer]=useState("")
  

  const newmovie={title:title,description:description,poster:immage,rating:rating,trailer:trailer}
console.log(newmovie)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addmovie=()=>{
    localStorage.setItem("movie",JSON.stringify(newmovie))
    handleClose()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        add movies
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie title</Form.Label>
              <Form.Control
                type="text"
                placeholder="put your movie title"

                autoFocus
                onChange={(event)=>setTitle(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie description</Form.Label>
              <Form.Control
                type="text"
                placeholder="put your movie description"
                autoFocus
                onChange={(event)=>setDescription(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie images</Form.Label>
              <Form.Control
                type="text"
                placeholder="put your movie immage"
                autoFocus
                onChange={(event)=>setImmage(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="put your movie rating"
                autoFocus
                onChange={(event)=>setRating(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie trailer</Form.Label>
              <Form.Control
                type="text"
                placeholder="put your movie trailer"
                autoFocus
                onChange={(event)=>setTrailer(event.target.value)}
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addmovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;