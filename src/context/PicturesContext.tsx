import { createContext, useState } from "react";
export const PicturesContext = createContext<{
  pictures?: string[],
  setPictures: React.Dispatch<React.SetStateAction<string[]>>
  title: string,
  anchor: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  setAnchor: React.Dispatch<React.SetStateAction<string>>
}>({ pictures: [], setPictures: (() => { }), title: '', setTitle: (() => { }), setAnchor: (() => { }), anchor: '' })

const PicturesProvider = ({ children }: { children: React.ReactNode }) => {
  const [pictures, setPictures] = useState<string[]>([])
  const [title, setTitle] = useState<string>('')
  const [anchor, setAnchor] = useState('')
  return (
    <PicturesContext.Provider value={{ pictures, setPictures, title, setTitle, setAnchor, anchor }}>
      {children}
    </PicturesContext.Provider>
  )

}
export default PicturesProvider