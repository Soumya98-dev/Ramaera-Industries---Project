import React from 'react';
import SpicesPic from '../images/spicesList.png';
import PeopleInterested from '../images/Group 39.png';

export default function GaramMasala() {
    return (
        <>
            <div id="garammasala-page">
                <div id="gm-part-1">
                    <h2>Garam Masala <div></div>
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pretium, mi sed id dui sed orci,
                        tempor. Pellentesque egestas odio enim, accumsan, cursus. Fermentum in bibendum aliquet est
                        viverra eu vitae in nibh. Leo, feugiat amet neque, quis. Amet, eget vulputate cursus in eu sit
                        pulvinar et.
                        Nibh at sem viverra pellentesque hac odio duis a. Urna vitae, at ac et rhoncus. Mauris sit
                        accumsan vitae, nibh netus. In elementum pharetra in lacinia nibh. Non est eget egestas eu et
                        purus amet. Vitae aliquam sit tincidunt pellentesque netus suspendisse vulputate. Dui justo, ac
                        maecenas pharetra.
                    </p>
                </div>
                <div id="gm-part-2">
                    <img src={SpicesPic} alt="" className="spices-img"/>
                    <div className="people">
                        <img src={PeopleInterested} alt=""/>
                        <div className="people-1">
                            <span>500+</span>
                            <p>People are interested</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gm-pg-end-part">
                <div className="gm-pg-end-part-1">
                    <p>Total ₹1.5cr-------------------------------Now ₹80 lac</p>
                    <div className="graph">
                        <div>
                            <div></div>
                        </div>
                        <span>80%</span>
                    </div>
                </div>
                <button>Place bid</button>
            </div>
        </>
    )
}
