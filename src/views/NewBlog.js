import { useState } from "react";


function NewBlog() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");



    const handleSubmitBtn = () => {
        if (!title) {
            alert("emty title");
            return;
        }
        if (!content) {
            alert("emty content");
            return;
        }

        console.log("title: ", title, "content: ", content);
    }

    return (
        <>
            <div className="container" style={{ margin: "auto", textAlign: "left" }}>
                <form action="/action_page.php">
                    <label htmlFor="firstname" style={{ color: "black" }}>First Name</label>
                    <input type="text" id="fname" placeholder="Your name.." value={title} onChange={(event) => setTitle(event.target.value)} />

                    <label htmlFor="lname" style={{ color: "black" }}>Last Name</label>
                    <input type="text" id="lname" placeholder="Your last name.." value={content} onChange={(event) => setContent(event.target.value)} />


                    <input htmlFor="button" value="Submit" onClick={handleSubmitBtn} />
                </form>
            </div>

        </>
    )
}

export default NewBlog;