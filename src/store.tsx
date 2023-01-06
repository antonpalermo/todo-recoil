import { atom } from 'recoil'

export const titleAtom = atom<string>({
  key: 'titleAtom',
  default: '',
})
