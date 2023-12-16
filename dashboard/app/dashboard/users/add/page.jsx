import "../../../Styles/Adduser.css";
import { addUser } from "../../../api/actions";

export default function AddUserPage() {
  return (
    <div className="add-user">
      <form action={addUser} className="user-form">
        <input type="text" name="username" placeholder="username" required />
        <input type="text" name="email" placeholder="email" required />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <input type="phone" name="phone" placeholder="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>
            Is Admin
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>
            Is Active
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="7"
          placeholder="Address"
        ></textarea>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
