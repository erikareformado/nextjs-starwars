
import { toast } from 'react-toastify'

const notify = (message, type) => {
  toast(message, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    type,
    progress: undefined,
    theme: 'colored'
  })
}

export default notify
