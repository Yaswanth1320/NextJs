import { LiaSpinnerSolid } from "react-icons/lia";

function loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <LiaSpinnerSolid className="h-12 w-12 animate-spin" />
    </div>
  )
}

export default loading
