import s from './card.module.css'

import star from '/images/star.png'
export default function Card (props) {
    console.log(props.item.stats.rating)
    let badgeText

    if( props.item.openSpots === 0) {
        badgeText = 'sold out'
    }
    else if (props.item.location === 'Online') {
        badgeText = 'online'
    }
    return (
        <section className={s.card}>
            <div className={s.cardBadge}>{badgeText}</div>
            <img src={props.item.coverImg} alt='Picture of Katie Zaferes' className={s.cardImage}/>
            <div>
            <div className={s.cardStats}>
            <img src={star} alt='picture of red star' className={s.cardStar} />
            <span>{props.item.stats.rating}</span>
            <span className={s.grey}>({props.item.stats.reviewCount}) &#9679;  {props.item.location}</span>
            </div>
                <p className={s.cardTitle}>{props.item.title}</p>
                <p className={s.cardPrice}><span className={s.bold}>From ${props.item.price} / </span>person</p>
            </div>
        </section>
    )
}