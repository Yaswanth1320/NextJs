import '../Styles/Users.css'

export default function Pagination() {
  return (
    <div className="pagination">
        <button className="page-btn" disabled>pervious</button>
        <button className="page-btn">next</button>
    </div>
  );
}
