import styles from './Loader.module.css';
import { MoonLoader } from 'react-spinners';

function Loader({text}){
    return(
        <div className={styles.loaderWrapper}>
            <h2>Loading {text}</h2>
            <MoonLoader 
                size={80}
                color={"#3861fb"}
            />
        </div>
    )
}

export default Loader;