import React from 'react'
import './card.css'
import maleIcon from '../../assets/icons/male.png'
import femaleIcon from '../../assets/icons/female.png'
import robotIcon from '../../assets/icons/robot.png'
import mammalIcon from '../../assets/icons/mammal.png'
import sentientIcon from '../../assets/icons/sentient.png'
import gastropodIcon from '../../assets/icons/gastropod.png'
import artificialIcon from '../../assets/icons/artificial.png'

const Card = (props) => {

    let cardInfo = {
        icon: '',
        name: props.item.name,
        additionalInfo: '',
        key: props.item.key
    }

    if (props.type === 'people') {
        cardInfo.additionalInfo = props.item.gender;
        switch (props.item.gender) {
            case 'male':
                cardInfo.icon = maleIcon;
                break;
            case 'female':
                cardInfo.icon = femaleIcon;
                break;
            default:
            case 'n/a':
                cardInfo.icon = robotIcon;
                break;
        }
    } else {
        cardInfo.additionalInfo = props.item.classification;
        switch (props.item.classification) {
            default:
            case 'mammal':
                cardInfo.icon = mammalIcon;
                break;
            case 'sentient':
                cardInfo.icon = sentientIcon;
                break;
            case 'gastropod':
                cardInfo.icon = gastropodIcon;
                break;
            case 'artificial':
                cardInfo.icon = artificialIcon;
                break;
        }
    }

    return (
        <div className={"card-wrapper " + (props.selected === cardInfo.key ? 'selected' : '')}>
            <div className="card-content">
                <img alt={props.type === 'people' ? 'gender' : 'classification'} className="gender-icon" src={cardInfo.icon} />
                <div className="text-center">
                    <span className="item-name">
                        {cardInfo.name}
                    </span>
                </div>
                <div className="text-center">
                    <span className="item-gender">
                        {cardInfo.additionalInfo}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card