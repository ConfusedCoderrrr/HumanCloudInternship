import Main from "./Main"
import './App.css'
import info from "./info";
import CarouselFade from "./CarouselFade"
import Sample from "./sample";

function App() {
    const containerStyle = {
        position: 'relative',
        height: '100vh', // Adjust the height based on your design
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    };
    return (
        <div style={containerStyle} className="ddf">
            <Main style={overlayStyle} className="dfdf"/>
            <CarouselFade />
            {/* <Sample  clasName="dfsf"/> */}
        </div>
    )
}

export default App
