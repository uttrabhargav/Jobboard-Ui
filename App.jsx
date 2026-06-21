import React from 'react'
import { Bookmark } from 'lucide-react';
import Card from './04cardsproject/Card'

const App = () => {
 const jobOpenings = [

  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcRbaJvhBgd0YgBp_8nLiSylsEjA-79JncguHiPaRBw&s",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$25/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop&resSharp=1",
    companyName: "Microsoft",
    datePosted: "2 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  { brandLogo : "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/amazon-icon.png",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "UI Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$20/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTMzLW5lb24tMDExLnBuZw.png",
    companyName: "Spotify",
    datePosted: "6 days ago",
    post: "Web Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$35/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/adobe-logo-1.jpg?width=662&height=441&name=adobe-logo-1.jpg",
    companyName: "Adobe",
    datePosted: "4 days ago",
    post: "JavaScript Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$30/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Meta_Inc._logo.jpg",
    companyName: "Meta",
    datePosted: "1 day ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_HZ99AiW3cUNe_YP1-BnuqRaGKWK290XNqXppXoKyF8V-lwfvmtmZY-D&s=10",
    companyName: "TCS",
    datePosted: "2 weeks ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$15/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://brandlogovector.com/wp-content/uploads/2021/03/Infosys-Limited-Logo-Small.png",
    companyName: "Infosys",
    datePosted: "3 days ago",
    post: "React JS Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$22/hr",
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wqA9Eb6_tldv2MPX5r-ChcCTAjI6z_SqAcQvPT09bO1F2lEALkc7yy4&s=10",
    companyName: "Wipro",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$18/hr",
    location: "Ahmedabad, India"
  }
];
return (
  <div className=" parent">
    {jobOpenings.map(function(elem,idx){
      return <Card company = {elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandlogo ={elem.brandLogo} datePosted={elem.datePosted}/>

    })}
  </div>
)
 }


export default App