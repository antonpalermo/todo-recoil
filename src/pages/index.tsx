import { useRecoilValue } from 'recoil'

import notesState from '@stores/notes'
import Navbar from '@components/Navbar'

export default function Home() {
  const notes = useRecoilValue(notesState)

  return (
    <div>
      <Navbar />
      <h1>Notes</h1>
      {notes.map(note => (
        <div key={note.id}>
          <h2>{note.title}</h2>
        </div>
      ))}
    </div>
  )
}
