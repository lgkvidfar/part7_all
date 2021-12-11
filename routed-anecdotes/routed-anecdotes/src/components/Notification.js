import React from "react"

const Notification = ({notification, setNotification}) => {
 if(notification === null) {
     return null
 } else {
     return (
     <div>
         {notification}
     </div>
     )
 }
}
export default Notification