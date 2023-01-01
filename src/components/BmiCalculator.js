import React, {  useState } from 'react'

const BmiCalculator = () => {
    const [weight,setWeight]=useState("");
    const [height,setHeight]=useState("");
    const [age,setAge]=useState("");
    const [bmi,setBmi]=useState("");
    const [bmiText,setBmiText]=useState("");
    
    const calculateBmi=()=>{
        const heightInNumberFormate=Number(height)/100;
        const weightInNumberFormate=Number(weight);
        const bmi = weightInNumberFormate / heightInNumberFormate ** 2;
        setBmi(bmi);
   
    // logic for bmiTextMessage 
        console.log(age)
        if (age>="20"){
            if (bmi < 16) {
                setBmiText ( "Severe Thinness");
            } else if (16 <= bmi < 17) {
                setBmiText  ("Moderate Thinness");
            } else if (17 <= bmi < 18.5) {
                setBmiText  ("Mild Thinness");
            }
            else if (18.5 <= bmi < 25) {
                setBmiText  ("Normal");

            } else if (25 <= bmi < 30) {
                setBmiText  ("Overweight");

            } else if (30 <= bmi < 35) {
                setBmiText  ("Obese Class |");

            } else if (35 <= bmi < 40) {
                setBmiText  ("Obese Class ||");
            } else if (bmi >= 40) {
                setBmiText  ("Obese Class |||");
            } else {
                setBmiText ("🐶Oops! something went wrong...");
            }
        }
    }


  return (
   <div id="#">
          <div className='px-2 py-3 bg-slate-50 shadow max-w-4xl mx-auto rounded my-5'>
              <h1 className='text-2xl my-2 text-center text-[#D09CFA]'>Welcome BMI (Body Mass Index) Calculator 🧮</h1>
              <hr />
              <div className=" mb-3 py-3 space-y-5 flex flex-col  items-center justify-center ">
                <p>for age greater than or equal to 20</p>
                 <div className="md:space-x-5 flex  flex-col md:flex-row items-center justify-evenly">
                      <input type="number" placeholder="age" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring" value={age}
                          onChange={(e) => setAge(e.target.value)} />
                      <input type="number" placeholder="weight (in kg)" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring " value={weight}
                          onChange={(e) => setWeight(e.target.value)} />
                      <input type="number" placeholder="height (in cm)" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring " value={height}
                          onChange={(e) => setHeight(e.target.value)} />
                 </div>
                  <div className='flex items-center justify-center'>
                      <button className="text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150" type="button"
                          onClick={calculateBmi}
                      >
                          Calculate
                      </button>
                      <button className="text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150" type="button"
                          onClick={() => {
                              setBmi("");
                              setHeight("");
                              setWeight("");
                              setBmiText("")
                          }}
                      >
                          reset
                      </button>
                  </div>
              </div>
              <h2 className='text-center text-lg font-semibold text-[#D09CFA]'>BMI calculation result</h2> <hr />
              <div className='w-full py-5 md:flex items-start md:justify-evenly'>
                  <div className='md:w-1/3 text-center my-5'>
                      <h3 className='text-lg font-bold'>YOUR BMI</h3>
                      <p className='text-xl'>{bmi ? bmi.toLocaleString() +"kg/m^2":"-"}</p>
                      <p className='text-xl'>{bmiText ? bmiText : "-"}</p>
                  </div>
              </div>



          </div>


          {/* add  */}

          <div id='stepstocalculatepaypalfee' className='px-2 py-3 my-5 bg-slate-50 shadow max-w-4xl mx-auto rounded '>
              <h1 className='text-xl font-semibold text-center text-[#D09CFA]'>Steps to Calculate BMI 🪜</h1>
              <hr />
              <ol className='p-2'>
                  <li className='text-lg '> 1.First of all Enter the age,weight (in kg),height (in cm).</li>
                  <li className='text-lg '>2.Click Calculate button</li>
                  <li className='text-lg '>3.Click reset button to reset the amount.</li>
                  <li className='text-lg '>4.Congratus🎉,Now the BMI(Body Mass Index) result will appear</li>
              </ol>
          </div>

          {/* about  */}

          
          
   </div>
  )
}

export default BmiCalculator
