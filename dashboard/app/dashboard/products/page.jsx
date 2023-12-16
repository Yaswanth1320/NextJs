import "../../Styles/Products.css";
import Link from "next/link";
import Image from "next/image";
import Search from "../../components/Search";
import Pagination from "../../components/Pagination";
import { searchParams } from "next/navigation";
import { fetchProducts } from "../../api/data";
import { deleteProduct } from '../../api/actions'

export default async function Products({searchParams}) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);

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
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className="product">
                  <Image
                    width={40}
                    height={40}
                    src={product.img || "/noproduct.jpg"}
                    className="product-image"
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>{product.price}</td>
              <td>{product.createdAt.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className="update">
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className="add-btn">view</button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
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
}
