
import '../styles/pages/Art.css'

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
                <h1>poetry</h1>

                <div className="pdf-container">
                    <iframe
                        src="/pdfs/Poetry.pdf#page=2&zoom=100&toolbar=0&navpanes=0&scrollbar=0"

                        title="Poetry PDF"
                        allowFullScreen
                        loading="lazy"
                        className="pdf-iframe"
                    ></iframe>
                </div>
                <div className="gallery">

                </div>
            </div>
        </div>
    )
}
