import "../styles/components/timeline.css"
export function Timeline({height="500px"}){
    return <div className="timeline" style={{
        height: height
          }}>
        <div id="tree">
            <div className="branch" branch="1" side="right" >
                <div className="text">Born</div>
                <div className="date">10th sep 2002</div>
            </div>
            <div className="branch" branch="2" side="left" >
                <div className="text">Birthday</div>
            </div>
        </div>
    </div>
}