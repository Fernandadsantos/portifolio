import { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import './floatingBtn.css';


function FloatingBtn() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);


    return (
        <div
            className="floating-btn"
            style={{ display: isVisible ? "flex" : "none", zIndex: 1 }}
        >
            <Fab
                sx={{ backgroundColor: "#ab8df0" }}
                aria-label="add"
                onClick={() => scrollToTop()}
            >
                <KeyboardArrowUpIcon sx={{ height: "30px", width: "30px" }} />
            </Fab>
        </div>
    );
}

export default FloatingBtn;
