import Logo from "@/assets/Logo";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {

    return (
        <div className="flex items-center justify-between gap-3 text-lg">
            <div className="flex items-center gap-5">
                <div className="flex items-center">
                    <Logo></Logo>
                    <h2><span className="font-bold">Task</span>Master</h2>
                </div>
                <Link to={"tasks"}>Tasks</Link>
                <Link to={"users"}>Users</Link>
            </div>
            <div>
                <ModeToggle></ModeToggle>
            </div>
        </div>
    );
};

export default Navbar;