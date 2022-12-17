import React, { useState } from 'react'

const PayPalFeeCalculator = () => {
    const [amount,setAmount]=useState("");
    const [totalFees,setTotalFees]=useState("");
    const [receive,setReceive]=useState("");
    const [asked,setAsked]=useState("");
    const calculateFee=()=>{
        const payPalFees = Number(amount) * 0.044 + 0.30;
        setTotalFees(payPalFees);
        setAsked((Number(amount) + 0.3) / 0.956);
        setReceive(Number(amount) - payPalFees);
    }
    console.log(totalFees,receive,asked)
  return (
    <div className='px-2 py-3 bg-slate-50 shadow max-w-4xl mx-auto rounded'>
      <h1 className='text-2xl my-2 text-center'>PayPal fee Calculator</h1>
      <hr />
          <div className="mb-3 py-3 space-y-5 md:space-y-0 flex flex-col md:flex-row  items-center justify-center  ">
              <input type="number" placeholder="Enter amount" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full max-w-xs" value={amount}
                  onChange={(e) => setAmount(e.target.value)} />
              <div className='flex items-center justify-center'>
                  <button className="text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150" type="button"
                      onClick={calculateFee}
                  >
                      Calculate
                  </button>
                  <button className="text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150" type="button"
                      onClick={() => {
                          setAmount("");
                          setAsked("");
                          setReceive("");
                          setTotalFees("")
                      }}
                  >
                      reset
                  </button>
              </div>
          </div>
     <h2 className='text-center text-lg font-semibold'>PayPal fee calculation result</h2>
     <div className='w-full py-5 md:flex items-start md:justify-evenly'>
        <div className='md:w-1/3 text-center my-5'>
                  <h3 className='text-lg font-bold'>Total fees</h3>
                  <p>{totalFees ? "$"+totalFees.toLocaleString() :"-" }</p>
        </div>
        <div className='md:w-1/3 text-center my-5'>
                  <h3 className='text-lg font-bold'>You will receive</h3>
                  {
                      amount ? <div> <p>{receive ? "$"+receive.toLocaleString() :"-" }</p>
                          <p className='text-sm'>if you invoice for ${amount.toLocaleString()}</p></div> :<p>-</p>
                  }
                 
        </div>
        <div className='md:w-1/3 text-center my-5'>
                  <h3 className='text-lg font-bold'>You should asked for</h3>
                  {asked ? <div><p>{asked ? "$"+asked.toLocaleString() : "-"}</p>
                      <p className='text-sm'>if you need ${amount.toLocaleString()}</p></div> :<p>-</p> }
        </div>
        
        
     </div>

    </div>
  )
}

export default PayPalFeeCalculator
