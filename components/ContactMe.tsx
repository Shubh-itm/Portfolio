import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid";
import {useForm, SubmitHandler} from "react-hook-form"

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {}

function ContactMe({}: Props) {
  const { register, handleSubmit,} = useForm<Inputs>();
  const onSubmit:SubmitHandler<Inputs> = (formData) => {
    window.location.href = 'mailto:csshubh09@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message} (${formData.email})'; {/*Sending an email after submitting info */}
  };
  return (
    <div className="h-screen w-screen flex relative flex-col space-y-20 text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
      ContactMe
      </h3>

     <div className="flex flex-col space-y-10">
        <h4 className="text-2xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="#decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

       <div className="space-y-10">
        <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
          <div className="text-2xl">+91-9026229162</div>
        </div>

        
        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
          <div className="text-2xl">csshubh09@gmail.com</div>
        </div>

        
        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
          <div className="text-2xl">A-2003 Ajnara Le Garden, Noida-201009</div>
        </div>
      
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
        <div className="flex space-x-2">

          <input {...register('name')} placeholder="Name" className="contactInput" type="text"/>

          <input {...register('email')} placeholder="Email" className="contactInput" type="email"/>

        </div>

        <input {...register('subject')} placeholder="Subject" className="contactInput" type="text"/>

        <textarea {...register('message')} placeholder="Message" className="contactInput"/>   

        <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
          Submit
        </button>

      </form>

      </div>

    </div>
    
  );
}

export default ContactMe;