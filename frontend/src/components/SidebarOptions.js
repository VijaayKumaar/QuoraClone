import { Add } from "@material-ui/icons";
import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
        
        <div className="sidebarOption">
        <Add />
        <p className="text">Create Space</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-8X2rhPVlkXw2Ws0N3vj9vQSD-JsQeC_CAXrwT35Gj7SQZhFaKXz0y9aM8p5yV8cZHhA&usqp=CAU"
          alt=""
        />
        <p> phython</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://play-lh.googleusercontent.com/v6QrTUuYpUdAKaC3Nuezit0SpWuW0DA7OeR8Vk7jXxRuTvVnEk1-tAzpere4k93Ec50"
          alt=""
        />

        <p>Unboxing JEE</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://i0.wp.com/academiamag.com/wp-content/uploads/2022/05/shutterstock_1664708983.jpg?fit=860%2C573&ssl=1"
          alt=""
        />
        <p>COMPLETITIVE Exams</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://s.udemycdn.com/meta/default-meta-image-v2.png"
          alt=""
        />
        <p>Free udemy coursez</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn4.vectorstock.com/i/1000x1000/51/88/physics-mathematics-classes-cartoon-vector-18805188.jpg"
          alt=""
        />
        <p>Mathmetic and physics</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/1280587810/photo/healthy-eating-exercising-weight-and-blood-pressure-control.jpg?s=170667a&w=0&k=20&c=RLFvjiJ-cyfHq7CRGDZgxQEnaJXbbZjxPpZQxQRnddo="
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-700366096.jpg"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/03/03195739/Idioms-with-Examples-800x500.jpg"
          alt=""
        />
        <p>Daily Does of idioms</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg"
          alt=""
        />
        <p>Education</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
