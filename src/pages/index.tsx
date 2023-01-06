import { useRecoilState } from 'recoil'
import { titleAtom } from '../store'

export default function Home() {
  const [title, setTitle] = useRecoilState(titleAtom)

  return (
    <div>
      <h1>Home</h1>
      <input
        type={'text'}
        placeholder={'insert title'}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </div>
  )
}
