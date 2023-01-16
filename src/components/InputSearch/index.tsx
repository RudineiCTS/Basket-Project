interface InputSearchProps extends React.InputHTMLAttributes<HTMLInputElement>{
  placeholder: string,
  value: string,
  setTeams: (value:string)=> void,
}

export function InputSearch({placeholder, value, setTeams, ...props}: InputSearchProps) {
  return (
    <input {...props} placeholder={placeholder} value={value} onChange={e => setTeams(e.target.value)}/>
  )
  
}