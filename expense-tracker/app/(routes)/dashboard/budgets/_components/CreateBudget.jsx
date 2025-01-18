"use client";
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "./dialog";
import EmojiPicker from 'emoji-picker-react';
import { Input } from '@/components/ui/input';

function CreateBudget() {
  const [emojiIcon, setEmojiIcon] = useState(null);
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const onCreateBudget = async () => {
    // Add your logic to create a budget here
    console.log("Creating budget with:", { name, amount, emojiIcon });
    // Example:
    // const result = await db.insert(Budgets).values({
    //   name: name,
    //   amount: amount,
    //   emoji: emojiIcon,
    //   createdby: session.user.id
    // }).one();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className='bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md'>
            <h2 className='text-3xl'>+</h2>
            <h2>Create New Budget</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
            <DialogDescription>
              <div className='mt-5'>
                <button variant="outline" onClick={() => setOpenEmojiPicker(!openEmojiPicker)}>{emojiIcon}</button>
                {/*<EmojiPicker/>*/}
              </div>
              <div className='mt-5'>
                <h2 className='text-black font font-medium my-1'>Budget Name</h2>
                <Input placeholder='e.g. Transportation' onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='mt-5'>
                <h2 className='text-black font font-medium my-1'>Budget Amount</h2>
                <Input type='number' placeholder='e.g. Rs.5000' onChange={(e) => setAmount(e.target.value)} />
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <button
                disabled={!name || !amount}
                onClick={onCreateBudget}
                className='mt-5 w-full'
              >
                Create Budget
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateBudget;