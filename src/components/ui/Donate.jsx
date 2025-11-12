import React from 'react'
import { Dialog, DialogContent, DialogHeader } from './dialog'
import { Button } from './button'
import { Input } from './input'

const Donate = ({open,setOpen}) => {
  return (
 
    <Dialog open={open}>
      <DialogContent onInteractOutside={() => setOpen(false)} className='bg-white'>
        <DialogHeader className='text-center font-semibold bg-white'>Donations</DialogHeader>
        
        <div className='flex gap-3 items-center'>
            <div>
                    <span className='font-medium'>Email</span>
                    <Input
                        type="email"
                        name="email"
                   
                
                        className="focus-visible:ring-transparent my-2"
                    />
                </div>
          
          <span className='font-medium'>
            Donate Amount 
          </span>
          <Input
                        type="email"
                        name="email"
                   
                
                        className="focus-visible:ring-transparent my-2"
                    />
        </div>
        <span className='font-medium'>Name</span>
        <Input
                        type="email"
                        name="email"
                   
                
                        className="focus-visible:ring-transparent my-2"
                    />
        
              <Button  type="submit" className="w-full bg-stone-300">Thank you!</Button>
           
      </DialogContent>
    </Dialog>
   
  )
}


export default Donate
