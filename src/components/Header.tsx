import { ReactNode } from 'react'

type HeaderProps = {
  children: ReactNode
  image: {
    src: string
    alt: string
  }
}

function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  )
}

export default Header
