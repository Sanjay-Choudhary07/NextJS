import Notification from "./@notification/page";
import Revenue  from "./@revenue/page";
import Users from "./@users/page";
export default function DashboardLayout({children,users,notification,revenue}){
    return(
      <div>
      <div>{children}</div>
      <div>
      <div>{users}</div>
      <div>{notification}</div>
      <div>{revenue}</div>
      </div>
      </div>
    )
};