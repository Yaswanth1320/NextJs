import "../../../Styles/AddProduct.css";
import Image from "next/image";
import { fetchProduct } from "../../../api/data";
import { updateProduct } from "../../../api/actions";

export default async function SingleproductPage({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className="singleproduct">
      <div className="infoContainer">
        <div className="imgContainer">
          <Image src={product.img || "/noavatar.png"} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className="formContainer">
        <form action={updateProduct} className="singleproductForm">
          <input type="hidden" name="id" value={product.id} />
          <label htmlFor="">Title</label>
          <input type="text" name="productname" placeholder={product.title} />
          <label htmlFor="">Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label htmlFor="">Stocks</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label htmlFor="">Colour</label>
          <input type="text" name="color" placeholder={product.color} />
          <label htmlFor="">Size</label>
          <input type="text" name="Size" placeholder={product.size} />
          <label htmlFor="">Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
            <option value="mobile">Mobile</option>
          </select>
          <label htmlFor="">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="5"
            placeholder={product.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
