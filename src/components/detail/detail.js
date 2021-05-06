import React from 'react'
import './detail.css'
import maleIcon from '../../assets/icons/male.png'
import femaleIcon from '../../assets/icons/female.png'
import robotIcon from '../../assets/icons/robot.png'
import mammalIcon from '../../assets/icons/mammal.png'
import sentientIcon from '../../assets/icons/sentient.png'
import gastropodIcon from '../../assets/icons/gastropod.png'
import artificialIcon from '../../assets/icons/artificial.png'

const Detail = (props) => {

    let speciesInfo = {
        icon: '',
        species: '',
        classification: '',
        language: '',
        skinColor: '',
        lifespan: '',
        designation: '',
        key: ''
    }
    let peopleInfo = {
        icon: '',
        species: '',
        classification: '',
        language: '',
        skinColor: '',
        lifespan: '',
        designation: '',
        key: ''
    }

    if (props.type === 'people') {
        if (props && props.item) {
            peopleInfo.name = props.item.name;
            switch (props.item.gender) {
                case 'male':
                    peopleInfo.icon = maleIcon;
                    break;
                case 'female':
                    peopleInfo.icon = femaleIcon;
                    break;
                default:
                case 'n/a':
                    peopleInfo.icon = robotIcon;
                    break;
            }
        }
    } else {
        if (props && props.item) {
            speciesInfo.key = props.item.key;
            speciesInfo.name = props.item.name;
            speciesInfo.classification = props.item.classification;
            speciesInfo.language = props.item.language;
            speciesInfo.skinColor = props.item.skin_colors;
            switch (props.item.classification) {
                default:
                case 'mammal':
                    speciesInfo.icon = mammalIcon;
                    break;
                case 'sentient':
                    speciesInfo.icon = sentientIcon;
                    break;
                case 'gastropod':
                    speciesInfo.icon = gastropodIcon;
                    break;
                case 'artificial':
                    speciesInfo.icon = artificialIcon;
                    break;
            }
        }
    }

    return (
        <div className="detail-card">
            {props.item &&
                <div className='details'>
                    <img alt="Icon" className="detail-icon" src={(props.type === 'people') ? peopleInfo.icon : speciesInfo.icon} />
                    <div className="detail-name">{(props.type === 'people') ? peopleInfo.name : speciesInfo.name}</div>
                    <div className="detail-classification">
                        <span>Classification:</span>&nbsp;
                        {(props.type === 'people') ? peopleInfo.classification : speciesInfo.classification}
                    </div>
                    <div>
                        <span>Language:</span>&nbsp;
                        {(props.type === 'people') ? peopleInfo.language : speciesInfo.language}
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-auto p-0">
                                <span>Skin color:</span>&nbsp;
                            </div>
                            <div className="col-5 p-0">
                                {(props.type === 'people') ? peopleInfo.skinColor : speciesInfo.skinColor}
                            </div>
                        </div>
                    </div>
                </div>

            }
            {!props.item &&
                <span>Non c'è</span>
            }
            {props.loading &&
                <lottie-player class="small-lottie-loading" src="https://assets5.lottiefiles.com/packages/lf20_uwVsdi.json"
                    background="transparent" speed="1" loop autoplay></lottie-player>
            }
        </div>
    )
}

export default Detail