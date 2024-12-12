import Link from "next/link";

export default function Country(){
    return(
        <div style={{backgroundColor: "rgb(178, 224, 213)", border:"solid", width: 600, paddingBottom:100, paddingTop:20,paddingLeft:50, marginLeft:450, marginTop: 200,}}>
            <h1 style={{fontSize:40, fontFamily:"times new roman", fontWeight:"bold"}}><u>List of Countries</u></h1>
            <div style={{fontFamily:"times new roman", fontSize: 30, fontWeight:"bold"}}>
            <li><Link href="/country/pakistan">Pakistan</Link></li>
            <li><Link href="/country/india">India</Link></li>
            <li><Link href="/country/china">China</Link></li>
            </div>
        </div>
    )
}