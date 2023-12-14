import '../Styles/Transaction.css'
import Image from 'next/image'

export default function Transactions() {
  return (
    <div className="transaction">
      <h2>Lastest Transctions</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="user">
                <Image
                  src="/user2.jpg"
                  width={50}
                  height={50}
                  className="user-image"
                />
                Jasen Morphy
              </div>
            </td>
            <td>
              <span className="status done">Done</span>
            </td>
            <td>03.01.2024</td>
            <td>$3.520</td>
          </tr>
          <tr>
            <td>
              <div className="user">
                <Image
                  src="/user3.jpg"
                  width={50}
                  height={50}
                  className="user-image"
                />
                Daniel Smith
              </div>
            </td>
            <td>
              <span className="status success">success</span>
            </td>
            <td>15.02.2024</td>
            <td>$5.900</td>
          </tr>
          <tr>
            <td>
              <div className="user">
                <Image
                  src="/user4.jpg"
                  width={50}
                  height={50}
                  className="user-image"
                />
                Terasa Jain
              </div>
            </td>
            <td>
              <span className="status pending">Pending</span>
            </td>
            <td>05.03.2024</td>
            <td>$4.290</td>
          </tr>
          <tr>
            <td>
              <div className="user">
                <Image
                  src="/user5.jpg"
                  width={50}
                  height={50}
                  className="user-image"
                />
                Emilia Clark
              </div>
            </td>
            <td>
              <span className="status pending">Pending</span>
            </td>
            <td>21.05.2024</td>
            <td>$9.290</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
