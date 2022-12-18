import React, { useState } from 'react'

const StripeFeeCalculator = () => {
    const [amount, setAmount] = useState("");
    const [totalFees, setTotalFees] = useState("");
    const [receive, setReceive] = useState("");
    const [asked, setAsked] = useState("");
    const calculateFee = () => {
        const payPalFees = Number(amount) * 0.029 + 0.30;
        setTotalFees(payPalFees);
        setAsked((Number(amount) + 0.3) / 0.971);
        setReceive(Number(amount) - payPalFees);
    }

    return (
        <div id="#">
            <div className='px-2 py-3 bg-slate-50 shadow max-w-4xl mx-auto rounded my-5'>
                <h1 className='text-2xl my-2 text-center text-[#D09CFA]'>Welcome to Stripe fee Calculator 🦄</h1>
                <hr />
                <div className="mb-3 py-3 space-y-5 md:space-y-0 flex flex-col md:flex-row  items-center justify-center  ">
                    <input type="number" placeholder="Enter amount in $" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full max-w-xs" value={amount}
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
                <h2 className='text-center text-lg font-semibold text-[#D09CFA]'>Stripe fee calculation result</h2> <hr />
                <div className='w-full py-5 md:flex items-start md:justify-evenly'>
                    <div className='md:w-1/3 text-center my-5'>
                        <h3 className='text-lg font-bold'>Total fees</h3>
                        <p className='text-xl'>{totalFees ? "$" + totalFees.toLocaleString() : "-"}</p>
                    </div>
                    <div className='md:w-1/3 text-center my-5'>
                        <h3 className='text-lg font-bold'>You will receive</h3>
                        {
                            amount ? <div> <p className='text-xl'>{receive ? "$" + receive.toLocaleString() : "-"}</p>
                                <p className='text-sm'>if you invoice for ${amount.toLocaleString()}</p></div> : <p>-</p>
                        }

                    </div>
                    <div className='md:w-1/3 text-center my-5'>
                        <h3 className='text-lg font-bold'>You should asked for</h3>
                        {asked ? <div><p className='text-xl'>{asked ? "$" + asked.toLocaleString() : "-"}</p>
                            <p className='text-sm'>if you need ${amount.toLocaleString()}</p></div> : <p>-</p>}
                    </div>


                </div>



            </div>


            {/* add  */}

            <div id='stepstocalculatepaypalfee' className='px-2 py-3 my-5 bg-slate-50 shadow max-w-4xl mx-auto rounded '>
                <h1 className='text-xl font-semibold text-center text-[#D09CFA]'>Steps to Calculate Stripe fee 🪜</h1>
                <hr />
                <ol className='p-2'>
                    <li className='text-lg '> 1.First of all Enter the amount (in $) in input box which says Enter amount</li>
                    <li className='text-lg '>2.Click Calculate button</li>
                    <li className='text-lg '>3.Click reset button to reset the amount.</li>
                    <li className='text-lg '>4.Congratus🎉,Now the Stripe fee result will appear</li>
                </ol>
            </div>

            {/* about  */}



        </div>
    )
}

export default StripeFeeCalculator
