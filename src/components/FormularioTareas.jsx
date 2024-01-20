import { Button , Form} from 'react-bootstrap';
//import Form from 'react-bootstrap/Form';
import ListaTareas from './ListaTareas';


const FormularioTareas = () => {
    return (
        <section>
            <Form>
      <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
        <Form.Label>Ingresa tus Tareas:</Form.Label>
        <Form.Control type="text" placeholder="Tarea1" minLength={3} maxLength={50} />
        <Button className='mx-3' type='submit' variant='info'>Enviar</Button>
      </Form.Group>
      
    </Form>
    <ListaTareas></ListaTareas>
        </section>
    );
};

export default FormularioTareas;