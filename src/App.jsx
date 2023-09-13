import React, { useEffect, useState } from 'react'
import data from './components/data'
import data2 from './components/data2'

export default function App() {
  let [allData,setAllData]=useState(data)
  let [allData2,setAllData2]=useState(data2)

  let [firstName,setFirstName]=useState("")
  let [lastName,setLastName]=useState("")
  
  
  let [day,setDay]=useState(new Array(32))
  let [dayStore,setDayStore]=useState([])
  let [dayInput,setDayInput]=useState("") 

  let [month,setMonth]=useState(new Array(13))
  let [monthStore,setMonthStore]=useState([])
  let [monthInput,setMonthInput]=useState("") 

  let [year,setYear]=useState(new Array(2006))
  let [yearStore,setYearStore]=useState([])
  let [yearInput,setYearInput]=useState("") 

  let [gender,setGender]=useState(new Array(4))
  let [genderStore,setGenderStore]=useState([])
  let [genderInput,setGenderInput]=useState("") 

  let [totalYear,setTotalYear]=useState("")
  
  
  let [division,setDivision]=useState("") 
  let [districthandle,setDistricthandle]=useState("") 

  let [para,setPara]=useState(false)
  let [district,setDistrict]=useState(false)
  let [genders,setGenders]=useState(false)
  let [name,setName]=useState(true)
  let [mainHeading,setMainHeading]=useState("Create an Account")
  let [heading,setHeading]=useState("Enter Your Name!")
  let [first,setFirst]=useState("")
  let [last,setLast]=useState("")




  useEffect(()=>{

    let arr=[]
    for(let i=1;i<day.length;i++){
    arr.push(i);}
    setDayStore(arr)

    let arr2=[]
    for(let i=1;i<month.length;i++){
      arr2.push(i);}
    setMonthStore(arr2)

    let arr3=[]
    for(let i=1900;i<year.length;i++){
      arr3.push(i);}
    setYearStore(arr3)

    let arr4=[]
    for(let i=1;i<gender.length;i++){
      arr4.push(i);}
      setGenderStore(arr4)

  },[])


  
  let handleName=(e)=>{
    e.preventDefault()
   
    if(firstName.length<=0){
      setFirst("Invild");
    }
    else if(lastName.length<=0){
      setLast("Invild");
    }
    else if(!isNaN(firstName)){
      setFirst("String");
    }
    else if(!isNaN(lastName)){
      setLast("String");
    }else{
   
    setGenders(true)
    setName(false)
    setHeading("Enter your Birthday and Gender!")
    }
  }



  let handleGender=(e)=>{
    e.preventDefault()
    if(dayInput.length<=0){
      console.log("day");
    }
    else if(monthInput.length<=0){
      console.log("month");
    }
    else if(yearInput.length<=0){
      console.log("yeat");
    }
    else if(genderInput.length<=0){
      console.log("gender");
    }else{
      let now=new Date().getTime()
      let deadline=new Date(`${monthInput} ${dayInput},${yearInput} 00:00:00`).getTime()
      let total=now-deadline
      let s=Math.floor(total/1000)
      let m=Math.floor(s/60)
      let h=Math.floor(m/60)
      let d=Math.floor(h/24)
    
      let y=(d/365)
      setTotalYear(y);
      setDistrict(true)
      setGenders(false)
      setHeading("Enter your Location!")
      
      

    }
  
   
  }


  
   console.log(totalYear);

  

   let handleDivisionButton=()=>{
    if(division.length<=0){
      console.log("Divition");
    }else if(districthandle.length<=0){
      console.log("District");
    }else{
      setPara(true)
    setDistrict(false)
    setMainHeading("Welcome!")
    setHeading(`<span class="text-red-500 font-semibold">${firstName} ${lastName}</span>`)
    console.log(firstName);
    console.log(lastName);
    
    }
   }
   

  return (
   <div className='bg-[#f1f5f8] h-screen py-[100px]'>
    <div className='max-w-[700px] mx-auto  bg-white py-[60px] px-[100px]'>
      <h1 className='text-center text-4xl font-bold pb-[15px]'>{mainHeading}</h1>
      <h4 className='text-center text-xl font-normal pb-[50px] italic' dangerouslySetInnerHTML={{__html: heading}}></h4>
      
    <div  >
    {name&&<form onSubmit={handleName}>
   <div className='relative'>
   <label className='text-xl mr-[14px]' htmlFor="first">First Name: </label>
    <input className='bg-[#f1f5f6] outline-0 text-xl font-semibold py-[6px] px-[10px] w-[370px] rounded-[2px] mb-[10px]' type="name" id="first" name="first" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
    <span className='text-red-500 font-semibold absolute top-[7px] right-[24px]'>{first}</span>
   </div>

   <div className='relative'>
   <label className='text-xl mr-4' htmlFor="last">Last Name: </label>
    <input className='bg-[#f1f5f8] outline-0 text-xl font-semibold py-[6px] px-[10px] w-[370px] rounded-[2px] mb-[10px]' type="name" id="last" name="last" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
    <span className='text-red-500 font-semibold absolute top-[7px] right-[24px]'>{last}</span>
   </div>
   <button className='flex mx-auto bg-[#001428] text-purple-500 font-semibold py-2 px-10  text-xl  rounded-[4px] mt-12' type="submit">Submit</button>
   </form>
}
   
   {genders&&<form onSubmit={handleGender}>

<div className='flex justify-between'>
<select onChange={(e)=>{e.target.value!="Select Year"&&setYearInput(e.target.value)}}className='bg-[#f1f5f8] py-3 px-5 text-lg rounded-[4px]'>
      <option>Select Year</option>
       {yearStore.map((item,index)=>(
       <option key={index}>{item}</option>
       ))}
</select> 


<select onChange={(e)=>{e.target.value!="Select Month"&&setMonthInput(e.target.value)}}className='bg-[#f1f5f8] py-3 px-5 text-lg rounded-[4px]'>
      <option>Select Month</option>
       {monthStore.map((item,index)=>(
       <option key={index}>{item==1 && "January" || item==2 && "February" || item==3 && "March" || item==4 && "April" || item==5 && "May" || item==6 && "June" || item==7 && "July" || item==8 && "August" || item==9 && "September" || item==10 && "October" || item==11 && "November" || item==12 && "December" }</option>
       ))}
</select>

<select onChange={(e)=>{e.target.value!="Select Day"&&setDayInput(e.target.value)}}className='bg-[#f1f5f8] py-3 px-5 text-lg rounded-[4px]'>
      <option>Select Day</option>
       {dayStore.map((item,index)=>(
       <option key={index}>{item}</option>
       ))}
</select>
</div>



<select  onChange={(e)=>{e.target.value!="Gender"&&setGenderInput(e.target.value)}} className='block bg-[#f1f5f8] p-3 text-lg mt-7 w-full rounded-[4px]'>
<option>Gender</option>
{genderStore.map((item,index)=>(
  <option key={index}>{item==1&& "Male"|| item==2&& "Female"||item==3&&"Customs"}</option>
))}
    
</select>
<button className='flex mx-auto bg-[#001428] text-purple-500 font-semibold py-2 px-10  text-xl  rounded-[4px] mt-12' type="submit">Submit</button>

</form>}

   {district&&<div>
    {totalYear<52.48219178082192?
    <div>
    <div className='flex justify-evenly'>
    <select onChange={(e)=>{e.target.value!="Select Division"&&setDivision(e.target.value)}} className='bg-[#f1f5f8] py-3 px-10 text-lg rounded-[4px]'>
      <option>Select Division</option>
      {allData.map((item,index)=>(
        <option key={index}>{item.name}</option>
      ))}
     </select>
  
  
     <select onChange={(e)=>{e.target.value!="Select District"&&setDistricthandle(e.target.value)}} className='bg-[#f1f5f8] py-3 px-10 text-lg rounded-[4px]'>
      <option>Select District</option>
      {allData.map((item,index)=>(
        item.name==division&&
        item.district.map(item2=>(
        <option key={index}>{item2.name}</option>
        ))
      ))}
     </select>

    </div>
     <button className='flex mx-auto bg-[#001428] text-purple-500 font-semibold py-2 px-10  text-xl  rounded-[4px] mt-12' onClick={handleDivisionButton}>Submit</button>
   </div>
   :
   <div>
    <div  className='flex justify-evenly'>
    <select onChange={(e)=>{e.target.value!="Select Division"&&setDivision(e.target.value)}} className='bg-[#f1f5f8] py-3 px-10 text-lg rounded-[4px]'>
    <option>Select Division</option>
    {allData2.map((item,index)=>(
      <option key={index}>{item.name}</option>
    ))}
   </select>


   <select onChange={(e)=>{e.target.value!="Select District"&&setDistricthandle(e.target.value)}}  className='bg-[#f1f5f8] py-3 px-10 text-lg rounded-[4px]'>
    <option>Select District</option>
    {allData2.map((item,index)=>(
      item.name==division&&
      item.district.map(item2=>(
      <option key={index}>{item2.name}</option>
      ))
    ))}
   </select>
    </div>
   <button className='flex mx-auto bg-[#001428] text-purple-500 font-semibold py-2 px-10  text-xl  rounded-[4px] mt-12' onClick={handleDivisionButton}>Submit</button>
 </div>
   }</div>}

   {para&& <div>

    {totalYear<65?
    <p>Your account has been successfully created.</p>
    :
    <p>Your account has been Successfully Created .But your age over <span className='text-black font-bold text-lg '>65</span> , That's Why you don't have allow to adult content</p>
    }
   
   </div>
   }
    </div>
    </div>
   </div>
  )
}
