import { Outlet } from "react-router-dom";
import DinamicMenu from "./DinamicMenu";

export default function Layout() {
    return (
        <>
            <DinamicMenu/>

            <div className="content">
            <Outlet />
            </div>
        </>
    );
}