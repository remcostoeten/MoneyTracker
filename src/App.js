import React from "react";
import {Button, Stack } from "react-bootstrap" 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
        <Container className="my-4">
            <Stack direction="horizontal" gap="2" className="mb-4">
                <h1 className="me-auto">budget</h1>
                <Button variant="primary">Add Budget</Button>
                <Button variant="outline-primary">Add expense</Button>
            </Stack>
            <div className="card-container">

            </div>
        </Container>
    </>
    );
}

export default App;
