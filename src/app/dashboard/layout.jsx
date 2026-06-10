import { DashBoardSidebar } from "@/components/dashboard/DashboardSidebar";
import RecruiterDashboardDetails from "./details/page";

const DashBoardLayout = ({ children }) => {
    return (

        <div>
            <div className="flex min-h-screen">
                <DashBoardSidebar />
                <div className={"flex-1"}>
                    {children}
                    <RecruiterDashboardDetails/>
                </div>

            </div>
        </div>
    )
}
export default DashBoardLayout;