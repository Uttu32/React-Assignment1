export default function Challenge (){
    return(
        <>
            <One />
            <Two />
            <Three />
            <Four />
        </>
    )
}

function One(){
    return (
        <h1>I am heading one ...from component one</h1>
    )
}

function Two(){
    return(
        <h2>I am heading two ...from component two </h2>
    )
}

function Three(){
    return(
        <h3>I am heading three ...from component three </h3>
    )
}
function Four(){
    return(
        <button> Click Me !!</button>
    )
}