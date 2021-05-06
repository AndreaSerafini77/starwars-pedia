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
        hair: '',
        eye: '',
        birth: '',
        key: '',
        height: '',
        mass: ''
    }

    if (props.type === 'people') {
        if (props && props.item) {
            peopleInfo.key = props.item.key;
            peopleInfo.name = props.item.name;
            peopleInfo.hair = props.item.hair_color;
            peopleInfo.eye = props.item.eye_color;
            peopleInfo.birth = props.item.birth_year;
            peopleInfo.mass = props.item.mass;
            peopleInfo.height = props.item.height;
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
            speciesInfo.lifespan = props.item.average_lifespan;
            speciesInfo.designation = props.item.designation;
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
            <div className="detail-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 px-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12 px-0 footer-value">
                                        {(props.type === 'people') ? peopleInfo.height : speciesInfo.lifespan}
                                    </div>
                                    <div className="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12 px-0 footer-label">
                                        <span>{(props.type === 'people') ? 'Height' : 'Lifespan'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 px-0 col-xl-6">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12 px-0 footer-value">
                                        {(props.type === 'people') ? peopleInfo.mass : speciesInfo.designation}
                                    </div>
                                    <div className="col-6 col-sm-6 col-md-6 col-lg-12 col-xl-12 px-0 footer-label">
                                        <span>{(props.type === 'people') ? 'Mass' : 'Designation'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {props.item &&
                <div className='detail-body'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <img alt="Icon" className="detail-icon" src={(props.type === 'people') ? peopleInfo.icon : speciesInfo.icon} />
                            </div>
                            <div className="col-12">
                                <div className="detail-name">{(props.type === 'people') ? peopleInfo.name : speciesInfo.name}</div>
                            </div>
                            <div className="col-12">
                                <div className="detail-classification">
                                    <span>{(props.type === 'people') ? 'Hair:' : 'Classification:'}</span>&nbsp;
                        {(props.type === 'people') ? peopleInfo.hair : speciesInfo.classification}
                                </div>
                            </div>
                            <div className="col-12">
                                <div>
                                    <span>{(props.type === 'people') ? 'Eye:' : 'Language:'}</span>&nbsp;
                        {(props.type === 'people') ? peopleInfo.eye : speciesInfo.language}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-auto p-0">
                                            <span>{(props.type === 'people') ? 'Birth year:' : 'Skin color:'}</span>&nbsp;
                                        </div>
                                        <div className="col-5 p-0">
                                            {(props.type === 'people') ? peopleInfo.birth : speciesInfo.skinColor}
                                        </div>
                                    </div>
                                </div>
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