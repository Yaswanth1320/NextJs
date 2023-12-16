import "../../Styles/Users.css";
import Search from "../../components/Search.jsx";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../../components/Pagination";
import { fetchUsers } from "../../api/data";
import { deleteUser } from "../../api/actions"

const Users = async ({ searchParams }) => {
   const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className="users">
      <div className="top">
        <Search placeholder="Search for user" />
        <Link href="/dashboard/users/add">
          <button className="addButton">Add New</button>
        </Link>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="user">
                  <Image
                    width={40}
                    height={40}
                    src={user.img || "/noavatar.png"}
                    className="user-image"
                    alt="user"
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "Active" : "Not Active"}</td>
              <td>
                <div className="update">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className="add-btn">View</button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button className="del-btn">Delete</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Users
