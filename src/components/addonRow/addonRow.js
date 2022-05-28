import { AddonBox } from '../addonBox/addonBox'

import './addonRow.css'

export function AddonRow(props){

    const addons = [1, 2, 3, 4, 5, 6, 6, 6  ]

    return (
        <div>
            <p class="title">{props.title}</p>
            <div class="row">
                {addons.map(e => <div class="item"><AddonBox/></div>)}
            </div>
            <div class="link"><a class="more_link" href={props.link}>Посмотреть больше...</a></div>
        </div>
    )
}