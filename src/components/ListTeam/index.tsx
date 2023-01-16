import { responseTeamProps } from '../../App';
import styles from './styles.module.scss';

interface ListTeamProps{
  data:responseTeamProps
}
export function TeamItem({data}:ListTeamProps ){
  return(
    <div className={styles.container}>
      <div className={styles.containerTeam}>
        <div className={styles.logoTeam}>
          <img src={data.logo} alt={data.name} />
        </div>
        <div className={styles.nameTeam}>
          {data.name}
        </div>
        <div className={styles.contryTeam}>
          {data.country.name}
          <img src={data.country.flag}/>
        </div>
      </div>
    </div>
  )
}