import React from 'react'

const Text = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-11 py-10'>
            <div className='flex flex-col justify-center items-center gap-2 px-4'>
                <h1 className='text-4xl font-encode font-semibold text-[#a28f64]'>JR HOLLAND FOOD SERVICES</h1>
                <h1 className='text-[#a87b3f] font-encode text-2xl'>MORE THAN JUST FRUIT AND VEG</h1>
            </div>
            <div className='w-full px-5 lg:w-[50%] flex flex-col justify-center items-center gap-6 text-center font-Opens text-lg text-[#545454]'>
                <p>Tribeca Wholesale are a leading food service provider to all sectors of the catering industry within Czech Republic and the EU. We are a Wholesale Fruit and Veg supplier providing fresh produce delivered via our chilled distribution network.</p>
                <p>Founded in 2012 JR Tribeca Wholesale supplies some of the biggest names in catering across the EU with fresh produce six days a week from our distribution depot in Brno.</p>
            </div>
        </div>
    )
}

export default Text