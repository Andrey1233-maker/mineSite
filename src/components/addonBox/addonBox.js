import like from '../../images/like.jpg'
import down from '../../images/down.png'

import './addonBox.css'

export function AddonBox(){


    return (
        <div class="addon_box">
            <img class="image" src="https://it-tehnik.ru/wp-content/uploads/1-no-plugin-in-browser.jpg" alt="обложка"/>
            <div class="addon_info">
                <p>Название мода</p>
                <p>Это описание мода, но оно краткое ибо это превью...</p>
                <div class="grade">
                    <span class="like_count"><img class="icon" src={like} atl="лайк"/>1234</span>
                    <span class="dislike_count"><img class="icon" src={down} atl="лайк"/>1234</span>
                </div>
            </div>
        </div>
    )
}