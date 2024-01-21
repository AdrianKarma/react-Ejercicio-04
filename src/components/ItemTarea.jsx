import ListGroup from 'react-bootstrap/ListGroup';


const ItemTarea = ({nombreTarea}) => {
    return (
        <ListGroup.Item>{nombreTarea}</ListGroup.Item>
    );
};

export default ItemTarea;