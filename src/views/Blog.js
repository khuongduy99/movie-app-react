import { Link } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../components/useFetch';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NewBlog from './NewBlog';

function Blog() {

    const { data, isLoading, isError } = useFetch('https://jsonplaceholder.typicode.com/posts');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let newData = [];
    if (data && data.length > 0) {
        newData = data.slice(0, 9);
    }



    return (

        <>

            <Button variant="primary" onClick={handleShow}>
                Add New Blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <NewBlog />
                </Modal.Body>

            </Modal>
            {
                !isLoading && newData && newData.length > 0 &&
                newData.map(item => {
                    return (
                        <div className="card" key={item.id}>
                            <div className="container">
                                <h4><b>{item.title}</b></h4>
                                <p>{item.body}</p>
                                <Link to={`/blog/${item.id}`} >View detaile</Link>
                            </div>
                        </div>
                    )
                })
            }
            {
                isLoading &&
                <h1>Loading...</h1>
            }


        </>
    )
}

export default Blog;