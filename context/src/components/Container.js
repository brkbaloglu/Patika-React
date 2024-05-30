import Button from './Button'
import Header from './Header'
import Profile from './Profile'
import { useTheme } from '../context/ThemeContext'

function Container() {
    const {theme} = useTheme()
  return (
    <div className={`App ${theme === "dark" ? "dark": "light"}`}>
        <Header></Header>
        <hr />
        <Button></Button>
        <hr />
        <Profile></Profile>
    </div>
  )
}
                         
export default Container