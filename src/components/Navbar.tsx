import { useSetRecoilState } from 'recoil'

import notesState from '@stores/notes'

export default function Navbar() {
  const setNote = useSetRecoilState(notesState)

  return (
    <nav>
      <button
        onClick={() =>
          setNote(notes => [
            ...notes,
            { id: notes.length, title: 'Untitled Note' },
          ])
        }>
        New Note
      </button>
    </nav>
  )
}
