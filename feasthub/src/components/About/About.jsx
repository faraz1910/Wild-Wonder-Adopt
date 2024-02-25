import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  // Sample feature data
  const features = [
    { id: 1, image: 'src/assets/About1.png', title: 'Home made Goodness' },
    { id: 2, image: 'src/assets/About2.png', title: 'Choose from the best tiffin service providers' },
    { id: 3, image: 'src/assets/About3.png', title: 'Customizable meal plans' },
  ];

  return (
    <div className="container mx-auto my-10 p-8 bg-white shadow-lg">
       {/* Our Story section */}
       <div className="text-center mb-8">
        <h1 className="text-5xl font-black font-serif mb-4">Our Story</h1>
      </div>
       <div className="bg-gray-200 p-8 rounded-md mb-8">
          <p class="text-lg font-light">FeastHub is a game-changer for day scholars at VIT Bhopal University. It connects them with local tiffin services, making meal discovery and ordering easy and enjoyable. With a user-friendly interface, it's a seamless experience for both customers and tiffin providers. Say goodbye to hassle and hello to delicious meals!
</p>
      </div>
      {/* Features section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-black font-serif mb-4">About Us</h1>
      </div>
      <div className="bg-gray-200 p-8 rounded-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center p-4">
              <img src={feature.image} alt={feature.title} className="w-48 h-48 mx-auto mb-4" />
              <p className="text-gray-600 font-light text-xl">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Contact Us section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-black font-serif mb-4">Contact Us</h1>
      </div>
      <div className="bg-gray-200 p-8 rounded-md text-center ">
        <p className="text-gray-600">
          Email: support@yourcompany.com <br />
          Phone: +91-XXXXXXXXXX (General inquiries) <br />
          Business Hours: Monday to Friday: 9:00 AM - 6:00 PM IST <br />
          Visit Us: FeastHub, Kotri Kalan, Ashta, Near, Indore Road, Bhopal, Madhya Pradesh 466114
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
