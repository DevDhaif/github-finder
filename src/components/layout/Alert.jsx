import { useContext } from "react";
import { FaClosedCaptioning, FaDoorClosed, FaTimes, FaTimesCircle, FaXing ,FaXmark} from "react-icons/fa";
import AlertContext from '../../context/alert/AlertContext';


function Alert() {
    const {alert}=useContext(AlertContext)

  return alert !== null &&(
      <p className="flex items-start mb-4 space-x-2 ">
        {alert.type==="error" &&(
            <FaTimesCircle size={20} color="green" className="mt-3 bg-red-700  rounded-full fill-rose-200"/>
        )}
        <strong className="  alert-sm bg-transparent">{alert.msg}</strong>
      </p>
  )
}

export default Alert;
