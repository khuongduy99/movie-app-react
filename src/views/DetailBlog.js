import { useParams } from "react-router";
import useFetch from '../components/useFetch';

function DetailBlog() {

    let { id } = useParams();

    const { data, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    console.log(data.id, data.title, data.userId);

    return (<h1>DetailBlog {id}</h1>)
}

export default DetailBlog;