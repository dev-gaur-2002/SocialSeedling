import "@/styles/globals.css";
import Header from "../../components/Header";
import styles from "../styles/Home.module.css";

function App({ Component, pageProps }) {
    return (
        <div className={styles.backdrop}>
            <Header />
            <Component {...pageProps} />
        </div>
    );
}
export default App;
