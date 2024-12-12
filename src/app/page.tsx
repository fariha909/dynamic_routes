import Link from "next/link";

export default function Home(){
  return(
    <ul>
      <h1 style={{textAlign:"center", padding:50, fontSize:44, fontFamily:"algerian", textDecorationLine: "underline"}}>HOME PAGE</h1>
      <div style={{backgroundColor: "rgb(178, 224, 213)", border:"solid", width: 600, paddingTop:100, paddingBottom:100, paddingLeft:20, paddingRight:20, marginLeft:450}}>
        <li style={{fontSize:28,textAlign:"center", borderStyle: "hidden", fontWeight:"bold"}}>Information about Countries</li>
        <li style={{textAlign:"center", fontSize: 24, color: "blue"}}><Link href="/country">Click here.. </Link></li>
        </div>
       
    </ul>
  )
}