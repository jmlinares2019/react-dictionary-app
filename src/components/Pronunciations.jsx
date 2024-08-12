import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Pronunciations(props){
    
    let entry = props.entry; 

    return (
        <div className="card">
            <h4 className="section-heading">Pronunciation</h4>
            <ol className="pronunciations-list">
            {entry.phonetics.map((item, index) => (
                <div className="pronunciation-item">
                <li 
                    key={index}
                    className="pronunciation-transcription">
                    {item.text}
                </li>
                <AudioPlayer 
                    className="pronunciation-audio"
                    src={item?.audio}
                    onPlay={e => console.log("playing")}
                />
                </div>
            ))}
            </ol>
        </div>
    )
}

export default Pronunciations