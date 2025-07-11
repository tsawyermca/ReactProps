

function PropsInfo(props){
    console.log(props.name)

    let foo = "test";

    function addTwoNums(a,b){
        return console.log(a + b)
    }

    let date = new Date();
    let hours = date.getHours();
    let timeofDay;

    if(hours < 12){
        timeofDay = 'morning'
    } else if(hours >= 12 && hours < 17){
        timeofDay = 'afternoon'
    } else {
        timeofDay = 'night'
    }


    return(
        <div className="row">
            <div className="col-12 text-center">
                <h1>Props info Header</h1>
            </div>
            <div className="col-12">
                <p>{props.name}</p>
                <a href=""></a>
                <img src="" alt="" />
                <input type="text" />
            </div>
            <div className="col-12">
                <h2>Good {timeofDay}</h2>
            </div>
        </div>
    )
}

export default PropsInfo