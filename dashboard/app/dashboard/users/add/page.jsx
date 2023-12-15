import "../../../Styles/Adduser.css";

export default function AddUserPage() {
  return (
    <div className="add-user">
      <form action="" className="user-form">
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
          <option value={false} selected>
            Is Admin
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>
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
