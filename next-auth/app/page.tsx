import { getServerSession } from "next-auth"
import { authOptions } from "./utils/auth"


export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="p-10">
      <h1>Home page public access</h1>
      {
        session? (<h1>Logged In</h1>): (<h1>Please LogIn</h1>)
      }
    </div>
  )
}
