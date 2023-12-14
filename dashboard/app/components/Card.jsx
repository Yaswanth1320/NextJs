import { MdSupervisedUserCircle } from 'react-icons/md'
import '../Styles/dashboard.css'

export default function Card() {
  return (
    <div className='card'>
        <MdSupervisedUserCircle/>
        <div className='data'>
            <p>Total Users</p>
            <h3>11.23</h3>
            <span><span className='Success'>12%</span> Increased this week</span>
        </div>
    </div>
  )
}
