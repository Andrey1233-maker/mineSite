import './navigationMenu.css'

export function NavigationMenuItem(props){

    return (
        <div class={props.active ? "active_button" : "dis_button"}>
            {props.label}
        </div>
    )
}
