import Image from "next/image";
import styles from "./page.module.css"
import Login from "./Login";
export default function Home() {
  return (
    <div style={{width:"500px", margin:"0 auto", paddingTop:"30px"}}>
    <h3>LOGIN WEBSITE</h3>
    <Login />
    </div>
  );
}
