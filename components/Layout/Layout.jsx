import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
}