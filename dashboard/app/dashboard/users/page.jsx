"use client";
import "../../Styles/Users.css";
import Search from "../../components/Search.jsx";
import Link from "next/link";
import Image from "next/image";
import Pagination from '../../components/Pagination'

export default function Users() {
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
          <tr>
            <td>
              <div className="user">
                <Image
                  width={40}
                  height={40}
                  src="/user1.jpg"
                  className="user-image"
                />
                John Smith
              </div>
            </td>
            <td>John@gmail.com</td>
            <td>13.01.2024</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className="update">
                <Link href={`/dashboard/users/test`}>
                  <button className="add-btn">View</button>
                </Link>
                <Link href="/dashboard/user/add">
                  <button className="del-btn">Delete</button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
