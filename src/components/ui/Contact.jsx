import React from 'react'
import Nav from './Nav'
import Background from './Background'
import { Input } from './input'
import { Button } from './button'

const Contact = () => {

  return (
     <div className='bg-white'>
      <Nav></Nav>
     
       <div className='flex items-center w-screen h-screen justify-center absolute '>
            <form  className='shadow-lg flex flex-col gap-5 p-8 bg-white'>
                <div className='my-4'>
                    <h1 className='text-center font-bold text-xl'>Contact Us</h1>
                    <p className='text-sm text-center'>Contact us for any queries or donations</p>
                </div>
                <div>
                    <span className='font-medium'>Email</span>
                    <Input
                        type="email"
                        name="email"
                   
                
                        className="focus-visible:ring-transparent my-2"
                    />
                </div>
                <div>
                    <span className='font-medium'>Name</span>
                    <Input
                        type="name"
                        name="name"
                      
                        className="focus-visible:ring-transparent my-2"
                    />
                </div>
               
               
                        <Button className='bg-stone-300' type='submit'>Submit</Button>
                 
            </form>
        </div>
        <Background>
      </Background>
    </div>
  )
}

export default Contact
