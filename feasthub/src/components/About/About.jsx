import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  // Sample feature data
  const features = [
    { id: 1, image: 'src/assets/About1.png', title: 'Home made Goodness' },
    { id: 2, image: 'src/assets/About2.png', title: 'Choose from the best tiffin service providers' },
    { id: 3, image: 'src/assets/About3.png', title: 'Customizable meal plans' },
  ];

  // Sample review data
  const reviews = [
    { id: 1, rating: '★★★★★', content: 'Amazing Variety and Convenience!' },
    { id: 2, rating: '★★★★★', content: 'Best Blessing for Busy Lives!' },
    { id: 3, rating: '★★★★★', content: 'Authentic Flavors, Every Time!' },
  ];

  return (
    <div className="container mx-auto my-10 p-8 bg-white shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black font-serif mb-4">About Us</h1>

      </div>

      {/* Features section */}
      <div className="bg-gray-100 p-8 rounded-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center p-4">
              <img src={feature.image} alt={feature.title} className="w-48 h-48 mx-auto mb-4" />
              <p className="text-gray-800 font-light">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews section */}
      <div className="text-center mb-8">
       <h1 className="text-4xl font-black font-serif mb-4">Customer Reviews</h1>
      </div>
      <div className="bg-gray-100 p-8 rounded-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="text-center p-4">
              <p className="text-4xl font-normal mb-2">{review.rating}</p>
              <p className="text-gray-800">{review.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black font-serif mb-4">Contact Us</h1>
      </div>
      <div className="bg-gray-100 p-8 rounded-md">
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
