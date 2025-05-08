import Image from "next/image";
import styles from "./page.module.css";
import ImageUpload from "./components/image-upload";

export default function Home() {
  return (
    <main className = {styles.main}>
      <ImageUpload />
    </main>
  );
}
