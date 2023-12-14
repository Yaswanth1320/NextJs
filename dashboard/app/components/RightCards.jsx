import { MdPlayCircleFilled } from "react-icons/md";
import "../Styles/Right.css";
import Image from "next/image";

export default function RightCards() {
  return (
    <div className="right">
      <div className="item">
        <div className="bgcontainer">
          <Image src="/astronaut.png" alt="" className="bg" fill />
        </div>
        <div className="context">
          <p>🔥 Available Now</p>
          <h4>How to use the admin dashboard?</h4>
          <h5>Take 10mins to learn</h5>
          <h6>
            Lorem ipsum dolor sit amet consec adipisicing elit. Numquam
            odio inventore at architecto commodi.
          </h6>
          <button className="watch">
            <MdPlayCircleFilled size={12} />
            Watch
          </button>
        </div>
      </div>

      <div className="item">
        <div className="context">
          <p>🚀 Next update</p>
          <h4>Update 2.0.3 new features</h4>
          <h5>Easy tips & guide</h5>
          <h6>
            Lorem ipsum dolor sit amet consec adipisicing elit. Numquam
            odio inventore at architecto commodi.
          </h6>
          <button className="watch">
            <MdPlayCircleFilled size={12} />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}
