import "../../../Styles/newUser.css";
import Image from "next/image";
import { fetchUser } from "../../../api/data";
import { updateUser } from "../../../api/actions";

export default async function SingleUserPage({ params }) {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div className="singleuser">
      <div className="infoContainer">
        <div className="imgContainer">
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className="formContainer">
        <form action={updateUser} className="singleUserForm">
          <input type="hidden" value={user.id} name="id" />
          <label htmlFor="">Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label htmlFor="">Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label htmlFor="">Password</label>
          <input type="password" name="password" placeholder={user.password} />
          <label htmlFor="">Phone</label>
          <input type="phone" name="phone" placeholder={user.phone} />
          <label htmlFor="">Address</label>
          <input type="text" name="address" placeholder={user.address} />
          <label htmlFor="">Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label htmlFor="">Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
