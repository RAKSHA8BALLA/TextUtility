import React from 'react'

function About(props) {

    let myStyle = {
        color: props.mode ==='dark'? 'white':'#373c45',
        backgroundColor:  props.mode === 'dark'? '#373c45': 'white'
    }
// const[myStyle, setmyStyle]= useState({
//     color: '#373c45',
//     backgroundColor: 'white'
// }) 

// const [btnText, setBtnText] = useState("Enable dark mode")

//  const toggleStyle= () =>{
//     if(myStyle.color === '#373c45'){
//         setmyStyle({
//             color: 'white',
//             backgroundColor:  '#373c45',
//             border: '1px solid white'

//         })
//         setBtnText("Enable light mode")
//     } else {
//        setmyStyle({
//         color: '#373c45',
//         backgroundColor: 'white'
//        })
//        setBtnText("Enable dark mode")
//     }
//  }
    return (
        <>
       
        <div className="container" style={myStyle}>
            <h1 className="my-3">About</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyse your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.                        </div>
                    </div>
                </div>
            </div>
            {/* <button onClick={toggleStyle} type="button" className="btn btn-primary my-3" >{btnText}</button>         */}
            </div>
        </>
    );
}

export default About;