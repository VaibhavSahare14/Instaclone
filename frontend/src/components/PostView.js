import Logo from "../images/icon.svg";
import Camera from "../images/Camera-Icon.png";
import { useEffect, useState } from "react";
import "./PostView.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import Card from "./Card";

const PostView = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            //const response = await axios.get('./data.json');

            const response = await axios.get("https://instaclone-backend-pyig.onrender.com/post");
            //console.log(data)
            response.data.reverse()

            setData(response.data);
            //console.log(response.data)
        };
        getData();

    }, []);

    return (
        <>
            <div className="main-container">
                <header>
                    <div className="nav">
                        <section className="first-image">
                            <img className="instaclone-img" src={Logo} alt="InstaClone-logo"></img>
                            <span>Instaclone</span>
                        </section>
                        <section className="second-image">
                            <Link to="/Upload">
                                <img className="camera-img" src={Camera} alt="camera-Icon" />
                            </Link>
                        </section>
                    </div>
                </header>
                <hr />

                {
                    data.map((dat, i) => {
                        //console.log(i)
                        return (
                            <Card userInfo={dat} key={i} />
                        )
                    })
                }
            </div>
        </>
    )
}
export default PostView;