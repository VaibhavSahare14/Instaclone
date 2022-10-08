import React, { useState } from "react";
import "./Upload.css";
import { useNavigate } from 'react-router-dom';

const Upload = () => {
    const navigate = useNavigate();
    let [data, setData] = useState({
        name: "",
        description: "",
        image: "",
        location: "",
        date: ""
    })
    let [error, seterror] = useState("");
    const { name, description, location } = data;

    const handleChange = (e) => {
        const { name } = e.target;
        const value = name === "image" ? e.target.files[0] : e.target.value;
        setData({ ...data, [name]: value })
    }

    const handleSubmit = async (e) => {
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        e.preventDefault();
        // console.log(data)

        let d = new Date();
        let mon = month[d.getMonth()];
        let date = d.getDate();
        let year = d.getUTCFullYear();
        let finalDate = date + "-" + mon + "-" + year;

        // console.log("d", finalDate)

        const form = new FormData();
        form.append("name", data.name);
        form.append("description", data.description);
        form.append("location", data.location);
        form.append("file", data.image);
        form.append("date", finalDate);
        form.append("likes", Math.ceil(Math.random() * 100));
        //console.log(form);

        //console.log("data", formData);
        try {
            fetch("https://instaclone-vaibhav-api.herokuapp.com/post", {
                method: "POST",
                body: form
            }).then(resp => resp.json()).then(response => {
                // console.log(response)
                if (response.ok) {
                    console.log(response)
                    navigate("/postview")
                }
                else {
                    seterror("*PLEASE FILL ALL FIELDS")
                }
            })
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="box">
            <form encType="multipart/form-data">
                <div className='line line1'>
                    <input
                        className="inputcontainer"
                        type="file"
                        name="image"
                        onChange={handleChange}
                    />
                </div>

                <div className='line line2'>
                    <input
                        type="text"
                        placeholder=" Author"
                        className="author"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder=" Location"
                        className="location"
                        name="location"
                        value={location}
                        onChange={handleChange}
                    />
                </div>

                <div className='line line3'>
                    <input
                        type="text"
                        placeholder=" Description"
                        name="description"
                        className="description"
                        value={description}
                        onChange={handleChange}
                    />
                </div>

                <div className='line line4'>
                    <input
                        type="submit"
                        className="post"
                        onClick={handleSubmit}
                        value="Post"
                    />
                </div>
                <div className="error">{error}</div>

            </form>
        </div>
    )
}
export default Upload;