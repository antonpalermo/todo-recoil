import { useRecoilValue } from 'recoil'
import { titleAtom } from '../store'

export default function Navbar() {
  const title = useRecoilValue(titleAtom)

  return (
    <nav>
      <h1>{title}</h1>
    </nav>
  )
}
