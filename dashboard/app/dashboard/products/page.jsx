"use client";
import "../../Styles/Products.css";
import Link from "next/link";
import Image from "next/image";
import Search from "../../components/Search";
import Pagination from "../../components/Pagination";

export default function Products() {
  return (
    <div className="products">
      <div className="top">
        <Search placeholder="Search for products" />
        <Link href="/dashboard/products/add">
          <button className="addButton">Add New</button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="product">
                <Image
                  width={40}
                  height={40}
                  src="/noproduct.jpg"
                  className="product-image"
                />
                MacBook
              </div>
            </td>
            <td>Description</td>
            <td>$$1200</td>
            <td>05.04.2024</td>
            <td>29</td>
            <td>
              <div className="update">
                <Link href="/dashboard/user/test">
                  <button className="add-btn">view</button>
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
