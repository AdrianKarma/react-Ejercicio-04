import { Button, Form } from "react-bootstrap";
import { useState } from "react";
//import Form from 'react-bootstrap/Form';
import ListaTareas from "./ListaTareas";

const FormularioTareas = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('desde el submit');
    setTareas([...tareas, tarea])
    //limpiar el formulario, como tiene pocos elementos uso un string vacio
    //sino deberia usar el reset del formulario
    setTarea("");
    
  };



  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Ingresa tus Tareas:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tarea1"
            minLength={3}
            maxLength={50}
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button className="mx-3" type="submit" variant="info">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas}></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
