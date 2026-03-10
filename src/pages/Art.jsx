import Poem from '../components/Poem'
import poems from "../assets/poems.json";
import '../styles/pages/Art.css'

export function Art() {
    return (
        <div className="art">
            <div className="page">
                <p id="art-text">
                    For me art with all its domains showcases the innate craving humans have to create, express and communicate

                </p>
                <p id="art-text">
                    I think when we look back at our own art, we get reminded of who we are
                </p>
                <h1><em>poetry</em></h1>
                {poems.map((poem) => {
                    return (
                        <Poem date={poem.date} title={poem.title}>
                            {poem.lines.map((line, i) => (
                                <div key={i}>{line}</div>
                            ))}
                        </Poem>
                    )
                })}
            </div>
        </div>
    )
}
