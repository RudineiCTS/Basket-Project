import { FormEvent, useEffect, useState } from "react"
import { api } from "./service/api"

import {FaSearch} from 'react-icons/fa'
import styles from './app.module.scss';
import { InputSearch } from "./components/InputSearch";
import { TeamItem } from "./components/ListTeam";


export interface responseTeamProps{
  name: string,
  logo: string,
  id:number,
  country:{
    id:number,
    code: string,
    name: string,
    flag: string
  }
}

function App() {
  const [teams, setTeams] = useState('');
  const [buscar, setBuscar] = useState(false)
  const [listTeams, setListTeams] = useState<responseTeamProps[]>()

  function handleSubmit(event: FormEvent){
    event.preventDefault();
    setBuscar(!buscar)
  }
  useEffect(()=>{
    api.get(`https://v1.basketball.api-sports.io/teams?search=${teams}`)
    .then(response => {
      setListTeams(response.data.response)
      //  console.log('esse o state',listTeams)
      })
  },[buscar])


  return (
    <div className={styles.container}>
      <div className={styles.containerSearch}>
        <h1 className={styles.contentTitle}>Search one time of basket</h1>

        <form className={styles.containerButton} onSubmit={handleSubmit}>
          <InputSearch  placeholder='Grizzlies' value={teams} setTeams={setTeams}/>
          <FaSearch />
        </form>

        <div className={styles.containerTeams}>     
            {
              listTeams?.map((team)=>{
                return (
                  <TeamItem key={team.id} data={team}/>
                )
              })
            }
        </div>
      </div>
    </div>
  )
}

export default App
