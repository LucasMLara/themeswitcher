import { Container } from "./styles"
import Switch from 'react-switch'
import { useContext } from "react"
import { ThemeContext } from "styled-components"

interface HeaderProps {
  name: string
  changeTheme: () => void
}

export default function Header(props: HeaderProps) {
  const {colors, name} = useContext(ThemeContext)
  const {changeTheme} = props
  return (
    <Container>
      <h3>{props.name}</h3>
      <Switch
      height={20}
      width={50}
      checkedIcon={false}
      handleDiameter={30}
      uncheckedIcon={false}
      checked={name === 'light'}
      onChange={changeTheme}
      offColor={colors.secondary}
      onColor={colors.secondary}
      />
    </Container>
  )
}
