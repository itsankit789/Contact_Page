import React from "react";
import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  return (
    <section>
    <div className="grid grid-cols-2 ">  
      <div className=" flex flex-col justify-center items-center">
        <div className="grid grid-rows-2 gap-6">
          {/* First row with two buttons */}
          <div className="flex justify-center items-center gap-4">
            <Button
              icons={<MdMessage />}
              text="VIA MESSAGE"
              className="flex-1 max-w-xs  hover:bg-gray-500"
            />
            <Button
              icons={<IoCallOutline />}
              text="VIA CALL"
              className="flex-1 max-w-xs  hover:bg-gray-500"
            />
          </div>

          {/* Second row with one button */}
          <div className="flex justify-center items-center">
            <Button
              icons={<HiMail />}
              text="VIA EMAIL"
              className="w-[calc(50%+1rem)] border-2 bg-transparent border-blue-800 bg-blue-500 hover:text-white hover:bg-blue-400"
            />
          </div>
        </div>
       
    

      <div className="sm:col-span-2 p-2">
        <label for="company" className="block text-sm/6 font-semibold text-gray-900">NAME</label>
        <div className="mt-2.5">
          <input type="text" name="company" id="company" autocomplete="organization" className="block w-full rounded-md bg-white px-10 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"/>
        </div>
        </div>

        <div className="sm:col-span-2 p-2">
        <label for="company" className="block text-sm/6 font-semibold text-gray-900">E-Mail</label>
        <div className="mt-2.5">
          <input type="text" name="company" id="company" autocomplete="organization" className="block w-full rounded-md bg-white px-10 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"/>
        </div>
        </div>




        <div className="sm:col-span-2">
        <label for="message" className="block text-sm/6 font-semibold text-gray-900">Message</label>
        <div className="mt-2.5">
          <textarea name="message" id="message" rows="4" className="block w-full rounded-md bg-white px-10 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"></textarea>
        </div>
      </div>
   <div className="py-3"><Button text="SUBMIT"  className=" hover:bg-gray-500"/></div>
      </div>
      <div>
        <img src="./images/contact.svg" alt="contact image" />
      </div>
      </div>
    </section>
  );
};

export default ContactForm;
