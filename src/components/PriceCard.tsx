import React from 'react'
import DefaultButton from './DefaultButton'

export const priceList = [
    {
        title: "Professional",
        subTitle: "Up to 50 Monthly Conversions",
        content: "Looking to ramp up a burgeoning program and gain more bran exposure? The Professional Plan is a good fit for smaller, but growing, affiliate or influencer programs",
        price: "$99/mo",
        btn : <DefaultButton className='bg-light-blue w-full'>Start Free Trial</DefaultButton>,
        background:'blue'
    },
    {
        title: "Enterprise",
        subTitle: "Unlimited Conversions Monthly",
        content: "Need advanced features to level up an established program? The Enterprise Plan is most popular for ecommerce brands with large or high-volume affiliate programs.",
        price: "Let's talk",
        btn : <DefaultButton className='bg-dark-green w-full'>Contact us</DefaultButton>,
        background:'green'
    },
    {
        title: "Enterprise Plus",
        subTitle: "Unlimited Conversions Monthly",
        content: "Want to streamline and cslae your program? The Enterprise Plus plan is built for thriving affiliate programs looking to simplify and automate their workflows.",
        price: "Let's talk",
        btn : <DefaultButton className='bg-blue-500 w-full'>Contact us</DefaultButton>,
        background:'purple'

    }
]
const PriceCard = () => {
  return (
    <div className='m-auto flex justify-center absolute top-[45%]'>
        <div className='block md:flex justify-center gap-8 w-full md:w-[70%] m-auto '>
        {
            priceList.map(({title, subTitle, content, price, btn, background})=>
            <div className='rounded-md px-4 py-3' style={{background: background === "purple" ? "#d5acd5" : background === "blue" ? "#9fc5e8" : background === "green" ? "#03c04a" :''}}>
                <h4 className='text-2xl font-semibold'>{title}</h4>
                <p className='text-sm font-semibold my-4'>{subTitle}</p>
                <p className='text-sm font-light'>{content}</p>
                <p className='pt-8 pb-4 text-3xl font-bold'>{price}</p>
                <div className='mb-4'>{btn}</div>

            </div>)
        }
    </div>

    </div>
  )
}

export default PriceCard