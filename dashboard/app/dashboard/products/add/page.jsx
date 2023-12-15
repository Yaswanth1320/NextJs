import "../../../Styles/AddProduct.css";

export default function AddProductPage() {
  return (
    <div className="add-product">
      <form action="" className="product-form">
        <input type="text" name="title" placeholder="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="computer">Computer</option>
          <option value="mobile">Mobile</option>
        </select>
        <input type="number" name="price" placeholder="price" />
        <input type="number" name="stock" placeholder="stock" />
        <input type="text" name="color" placeholder="color" />
        <input type="text" name="size" placeholder="size" />
        <textarea
          name="desc"
          id="desc"
          rows="7"
          placeholder="Description"
        ></textarea>
        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  );
}
