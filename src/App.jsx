import React, { useState } from "react";
import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col, Form, Modal } from "react-bootstrap";

function App() {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Not Completed"); // Initial status
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTodoId, setEditTodoId] = useState(0);
  const [filterStatus, setFilterStatus] = useState("All"); // Filter status

  const addTodo = () => {
    if (taskName.trim() === "") {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      taskName,
      description,
      status,
    };
    setTodos([...todos, newTodo]);
    setTaskName("");
    setDescription("");
    setStatus("Not Completed");
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const openEditModal = (id) => {
    setEditTodoId(id);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const editTodo = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editTodoId) {
        todo.taskName = taskName;
        todo.description = description;
        todo.status = status;
      }
      return todo;
    });
    setTodos(updatedTodos);
    closeEditModal();
  };


  const filteredTodos = filterStatus === "All" ? todos : todos.filter(todo => todo.status === filterStatus);

  return (
    <Container className="App">
      <h1 className="text-center">My Todo</h1>
      <Row>
        <Col xs={4}>
          <Form.Control
            type="text"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </Col>
        <Col xs={6}>
          <Form.Control
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Col>
        
        <Col xs={2}>
          <Button variant="success" onClick={addTodo}>
            Add Todo
          </Button>
        </Col>
      </Row>
      <br/>
      <Row className="mb-3 ">
  <Col xs={12} sm={6}>
    <h1>My Todos</h1>
  </Col>
  <Col xs={12} sm={6} className="d-flex justify-content-end align-items-center">
    <Form.Label className="mb-0 me-2">Status Filter:</Form.Label>
    <Form.Select
    className="form-select-sm w-25" 
      value={filterStatus}
      onChange={(e) => setFilterStatus(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Not Completed">Not Completed</option>
      <option value="Completed">Completed</option>
    </Form.Select>
  </Col>
</Row>

      <Row>
      {filteredTodos.map((todo) => (
          <Col xs={4} key={todo.id}>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Name: {todo.taskName}</Card.Title>
                <Card.Text>Description: {todo.description}</Card.Text>
                <Card.Text>Status: {todo.status}</Card.Text>

                <Button
                  variant="primary"
                  onClick={() => openEditModal(todo.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="ms-2"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={showEditModal} onHide={closeEditModal} >
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="mb-4"/>
          <Form.Control
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-4"/>
          <Form.Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeEditModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={editTodo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;