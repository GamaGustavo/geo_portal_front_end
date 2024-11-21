import {NavBar} from "../../components";

function LinhaDoTempo() {
    return (
        <div>      
            <NavBar />
            <div style={{marginLeft: "85px", overflowX: "auto", width: "100vw - 85px" }}>
                <iframe
                    src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1DF-EKDW7NKIpTYXuI-Zy5vBEuOzcjisawwwrNVAPJfg&font=Default&lang=en&initial_zoom=2&height=650"
                    style={{maxWidth: "100%", display: "block"}}
                    width="100%"
                    height="650"
                    
                    title="Timeline"
                ></iframe>
            </div>
        </div>
    );
}


export default LinhaDoTempo;
