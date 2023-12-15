import "../../../Styles/AddUser.css";
import Image from "next/image";

export default function SingleUserPage() {
  return (
    <div className="singleuser">
      <div className="infoContainer">
        <div className="imgContainer">
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John smith
      </div>
      <div className="formContainer">
        <form action="" className="singleUserForm">
          <label htmlFor="">Username</label>
          <input type="text" name="username" placeholder="john Doe" />
          <label htmlFor="">Email</label>
          <input type="email" name="email" placeholder="john@gmail.com" />
          <label htmlFor="">Password</label>
          <input type="password" name="password" placeholder="1234" />
          <label htmlFor="">Phone</label>
          <input type="phone" name="phone" placeholder="+1234567" />
          <label htmlFor="">Address</label>
          <input type="text" name="address" placeholder="New York" />
          <label htmlFor="">Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label htmlFor="">Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
