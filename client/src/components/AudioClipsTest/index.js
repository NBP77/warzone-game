import React, { Component } from 'react'; 
import { Howl, Howler } from 'howler';
import Kilo from "../../audioclips/Kilo.mp3";
import Fal from "../../audioclips/FAL.mp3";
import M4 from "../../audioclips/M4.mp3";
import Fr556 from "../../audioclips/FR-5.56.mp3";
import Oden from "../../audioclips/Oden.mp3";
import M13 from "../../audioclips/M13.mp3";
import Scar from "../../audioclips/Scar.mp3";
import AK47 from "../../audioclips/AK-47.mp3";
import RAM from "../../audioclips/RAM.mp3";
import Grau from "../../audioclips/GRAU.mp3";
import Amax from "../../audioclips/AMAX.mp3";
import AN94 from "../../audioclips/AN-94.mp3";
import ASVAL from "../../audioclips/AS-VAL.mp3";

const audioClips = [
    {sound: Kilo, label: "Kilo"},
    {sound: Fal, label: "FAL"},
    {sound: M4, label: "M4"},
    {sound: Fr556, label: "FR-5.56"},
    {sound: Oden, label: "Oden"},
    {sound: M13, label: "M13"},
    {sound: Scar, label: "Scar"},
    {sound: AK47, label: "AK-47"},
    {sound: RAM, label: "RAM"},
    {sound: Grau, label: "Grau"},
    {sound: Amax, label: "Amax"},
    {sound: AN94, label: "AN-94"},
    {sound: ASVAL, label: "AS VAL"},
]

class AudioClipsTest extends Component {
    SoundPlay = (src) => {
        const sound = new Howl({
            src 
        })
        sound.play()
    }

    RenderButtonAndSound = () => {
        return audioClips.map((soundObj, index) => {
            return( 
               <button key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
                   {soundObj.label}
               </button>
            )
        })
    }

    render() {
        Howler.volume(1.0) 
        return (
            <div className="clips">
                {this.RenderButtonAndSound()}

            </div>
        )

     

    
    }
}

export default AudioClipsTest;
