import "../../../Styles/AddProduct.css";
import Image from "next/image";

export default function SingleproductPage() {
  return (
    <div className="singleproduct">
      <div className="infoContainer">
        <div className="imgContainer">
          <Image src="/noavatar.png" alt="" fill />
        </div>
        macbook
      </div>
      <div className="formContainer">
        <form action="" className="singleproductForm">
          <label htmlFor="">Title</label>
          <input type="text" name="productname" placeholder="macbook" />
          <label htmlFor="">Price</label>
          <input type="number" name="price" placeholder="2345" />
          <label htmlFor="">Stocks</label>
          <input type="number" name="stock" placeholder="24" />
          <label htmlFor="">Colour</label>
          <input type="text" name="color" placeholder="red" />
          <label htmlFor="">Size</label>
          <input type="text" name="Size" placeholder="Large" />
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
            placeholder="Description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
