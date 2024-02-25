import React from 'react';
const Contact = () => {
    return(
      <div>
        
         <div class="flex flex-row grow h-14 ... ">
          <img src='src/assets/contactUs.png' className='h-96 pt-7.5' alt="contact us page image" />
          <div class="flex flex-col w-10/12  ">
          <label className="form-control w-full max-w-xs mx-3 ">
              <div className="label ">
                <span className="label-text text-5xl font-black font-serif mb-4 ">Contact Us</span>
              </div>
            </label>
          <label className="form-control w-full max-w-xs mx-3  ">
              <div className="label">
                <span className="label-text">Full name</span>
              </div>
              <input
                type="text"
                placeholder=""
                className='bg-stone-200 h-9'
              />
            </label>
            <label className="form-control w-full max-w-xs mx-3">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                placeholder=""
                className='bg-stone-200 h-9'
              />
            </label>
            <label className="form-control w-full max-w-xs mx-3">
              <div className="label">
                <span className="label-text">Message</span>
              </div>
              <textarea name="message" id="" cols="30" rows="10" className='bg-stone-200'></textarea>
            </label>
            <div className='w-8/12 pb-52'> <button className="w-10/12 bg-red-600 mt-4 py-3 rounded-xl text-white font-bold mt-6">
              Send Message
            </button></div>
           
          </div>
        </div>
      </div>
       
    );
};
export default Contact;