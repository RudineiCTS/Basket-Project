import { useEffect } from "react"
import { api } from "./service/api"

import {FaSearch} from 'react-icons/fa'
import styles from './app.module.scss';


function App() {
  useEffect(()=>{
    api.get(`https://v1.basketball.api-sports.io/teams?search=Denver`)
    .then(response => console.log(response.data))
  },[])
  return (
    <div className={styles.container}>
      <div className={styles.containerSearch}>
        <h1 className={styles.contentTitle}>Search one time of basket</h1>
        <div className={styles.containerButton}>
          <input  placeholder='Grizzlies'/>
          <FaSearch/>
        </div>

      </div>
    </div>
  )
}

export default App
