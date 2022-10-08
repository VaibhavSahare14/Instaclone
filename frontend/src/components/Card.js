import "./Card.css"
import More_icon from "../images/more_icon.svg";
import Heart_icon from "../images/heart.png";
import Share_icon from "../images/share.png";

const Card = (Props) => {
    //console.log(Props);

    return (
        <div className="card">
            <div className="imageHeader">
                <div className="details">
                    <div><b>{Props.userInfo.name}</b></div>
                    <div>{Props.userInfo.location}</div>
                </div>
                <div className="ellipsis">
                    <img src={More_icon} alt="" />
                </div>
            </div>

            <div className="image-container">
                <img className="image" src={Props.userInfo.image.url} alt=""></img>
            </div>

            <div className="reaction-container">

                <div className="reactions">
                    <div>
                        <img className="heart" src={Heart_icon} alt="" />
                        <span>
                            <img src={Share_icon} alt="" />
                        </span>
                    </div>

                    <div className="likes">
                        {Props.userInfo.likes}  likes
                    </div>
                </div>

                <div className="date">
                    <b>{Props.userInfo.date}</b>
                </div>
            </div>

            <div className="descriptionContainer">
                <b>{Props.userInfo.description}</b>
            </div>

        </div>
    )
}
export default Card;