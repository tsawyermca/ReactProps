

const fakeData = [
    {
        fname: "Scott",
        lname: "Syverson",
        transportation: "car",
        age: 50,
        old: false
    },
    {
        fname: "Nicole",
        lname: "Torres",
        transportation: "car",
        age: 32,
        old: false
    },
    {
        fname: "Caleb",
        lname: "Straily",
        transportation: "home",
        age: 24,
        old: false
    }
]


function ArrayMap(){

    const nums = [1,2,3,4,5]

    // First Method
    // nums.map(
    //     function square(x){
    //         return console.log(x * x)
    //     }
    // )

    // Second Method
    nums.map((x) => {return console.log(x * x)});

    const names = ['alice','bob','charlie','danielle'];

    const capitalize = names.map((currentName) => {
        return currentName.charAt(0).toUpperCase() + currentName.substring(1)
    })

    const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle']

    const pokemonTags = pokemon.map(
        (currentPoke) => {
            return <p>{currentPoke}</p>
        }
    )

    console.log(pokemonTags)

    const listComponents = fakeData.map(
        (currentItem) => {
            return <TempItem firstName={currentItem.fname} lastName={currentItem.lname} transpo={currentItem.transportation} ageNum={currentItem.age} />
        }
    )

    return(
        <div className="row">
            <div className="col-12">
                <h1>Array Mapping Section</h1>
            </div>
            <div className="col-12">
                {capitalize}
            </div>
            <div className="col-12">
                {pokemonTags}
            </div>
            {listComponents}
        </div>
    )
}

function TempItem(props){
    console.log(props)

    return(
        <div className="col-3">
            <p>First Name: {props.firstName} Last Name: {props.lastName}</p>
            <p>Transportation: {props.transpo}</p>
            <h2>Age: {props.ageNum}</h2>
        </div>
    )
}

export default ArrayMap