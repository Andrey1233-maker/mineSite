import { AddonRow } from '../../components/addonRow/addonRow'
import { Header } from '../../components/header/header'
import { NavigationMenu } from '../../components/navigtionMenu/navigationMenu'

import './addonPage.css'


export function AddonPage(){

    const themes = [1,1,1,1,1,1,1,1,1,1]

    return (
        <div>
            <Header/>
            <div class="free_space"/>
            <NavigationMenu/>
            {themes.map(e => <div class="row"><AddonRow title="kekw"/></div>)}
        </div>
    )
}