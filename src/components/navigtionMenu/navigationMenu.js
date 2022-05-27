import { NavigationMenuItem } from "./navigationMenuButton"

export function NavigationMenu(){


    return (
        <div class="menu">
            <NavigationMenuItem active={true} label="Новости"/>
            <NavigationMenuItem active={false} label="Моды"/>
            <NavigationMenuItem active={false} label="Текстуры"/>
            <NavigationMenuItem active={false} label="Датапаки"/>
            <NavigationMenuItem active={false} label="Осуждения"/>
        </div>
    )
}