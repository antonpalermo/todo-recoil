import { atom, atomFamily } from 'recoil'

type Note = {
  id?: number
  title: string
}

const notesState = atom<Note[]>({
  key: 'notesState',
  default: []
})

export const noteState = atomFamily<Note, number>({
  key: 'noteState',
  default: {
    title: 'Untitled'
  }
})

export default notesState
