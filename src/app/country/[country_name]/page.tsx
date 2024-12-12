const CountryName = ({params}: {params:{country_name:string}}) => {

    const CountryInfo: CountryInfo[]= [
        {
            name: "Pakistan",
            capital: "Islamabad",
            population:  252375283 
        },
        {
            name: "India",
            capital: "New Delhi",
            population:  1454568339 
        },
        {
            name: "China",
            capital: "Beijing",
            population: 1418410125 
        }
    ];
    const country= CountryInfo.find(
        (c)=> c.name.toLowerCase() === params.country_name.toLowerCase()
    )
    if (!country){
        return(
            <h1>COUNTRY NOT FOUND!</h1>
        )
    }

    return(
        <div style={{backgroundColor: "rgb(178, 224, 213)", border:"solid", width: 600, paddingTop:90, paddingBottom:100, paddingLeft:150, paddingRight:100, marginTop:200, marginLeft:450, fontSize: 30, fontFamily: "times new roman", fontWeight:"bold"}}>
            <h1>Name:   {country.name}</h1>
            <h1>Capital:    {country.capital}</h1>
            <h1>Population: {country.population}</h1>
        </div>
    )
}
export default CountryName;