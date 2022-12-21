
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Login() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (

        <>
            <Card className='m-auto' style={{ width: '450px', height: '500px', backgroundColor: '#040302', textAlign: 'left', padding: '30px' }}>
                <Card.Body>
                    <Card.Title className='text-left'>
                        <h1>Đăng nhập</h1>
                    </Card.Title>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button className='w-100' variant="danger" type="submit">
                            Đăng nhập
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default Login;