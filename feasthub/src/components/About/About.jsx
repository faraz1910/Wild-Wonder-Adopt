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
    <div className="container mx-auto my-10 p-8 bg-white shadow-lg font-sans">
       {/* Our Story section */}
       <div className="text-center mb-8">
        <h1 className="text-5xl font-black font-sans mb-4">About Us</h1>
      </div>
       <div className="bg-gray-200 p-8 rounded-md mb-8">
          <p class="text-lg font-light text-justify">Van Vihar National Park and Zoo is one of the most revered National Parks and Zoo in Central India. It has become a shining beacon in the field of conservation and is an ideal example of eco-restoration. It is a national park situated within the city limits of Bhopal and presents a perfect picture of grandeur and tranquillity of a forest area. It is, in true sense, a real treasure trove of nature and wildlife to be explored by both the wildlife enthusiasts as well as a casual tourist.
<br /><br />

Van Vihar National Park and Zoo has an enriching assortment of various fascinating feathered creatures, mesmerising mysterious reptiles, free ranging herbivores and captive carnivores encompassed by greenery. The park which is more popularly known as just “Van Vihar” is considered as a “must see” destination for tourists visiting Bhopal, the capital city of Madhya Pradesh.
<br /><br />

The typical combination of rich wetland areas, meadows, pools of water at different places, rugged slopes, mixed bamboo vegetation along with grass covered plateau and areas of mixed plantations support the rich floral and faunal diversity of Van Vihar. This green oasis amidst the city of lakes also plays a very vital role as a carbon sink contributing to environmental health of Bhopal.
<br /><br />

It is situated right next to the famous Upper Lake of Bhopal also known as the “Bada Talab” which is a Ramsar Site and one of the two lakes of Bhoj Wetland. Van Vihar is a part of Upper Lake catchment area which checks siltation and contributes to pollution free water in the lake, one of the major sources of water for the city.
</p>
      </div>
      {/* Features section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-black font-sans mb-4">History</h1>
      </div>
      <div className="bg-gray-200 p-8 rounded-md mb-8 text-justify">
      Van Vihar National Park and Zoo is located adjacent to Upper Lake of Bhopal and was created on a denuded and depleted revenue area. About three and a half decades back major portion of this area was under the control of Revenue department and the remaining portion belonged to private agricultural land owners of Prempura, Dharampuri and Amkheda villages.
<br /><br />
Even though the area was quite serene and beautiful, having a little vegetation and root stock, it was prone to severe encroachment and a lot of biotic pressure from surrounding human habitation. Quite a few numbers of illegal stone quarries were operational in the area and a constant threat of the area being seized by many commercial organizations loomed large.
<br /><br />
An assessment of the location and condition of the area which was facing the above mentioned problems led to the realization of the importance of conservation and the protection of this area. An urgent need for the protection this of such an important landmass which was a part of the catchment of Upper Lake was foreseen. The given protection would lend a better life to Upper Lake.
<br /><br />
In order to achieve in-situ and ex-situ conservation of the flora and fauna, it was decided to provide a legal umbrella to this area under the Wildlife (protection) Act, 1972 and a committee was formed to understand the complete situation and recommend the due course to realize the goal of conservation of the area and its constituent flora & fauna.
<br /><br />
Soon after, as per the committee’s recommendation, 388.89 hectares of government revenue land and 56.92 hectares of area belonging to villagers of Prempura, Darahmpuri and Amkheda were combined to constitute a - total area of 445.81 hectares which was later notified as the Van Vihar National Park in the year 1983 effective from 26th January of that year.
<br /><br />
Once the National Park was constituted the area was slowly but surely secured over a period of time, with stonewall and chain link fence from all sides. Planned efforts for protection of wildlife and habitat improvement measures were taken up. Proper management and vigil by the forest department resulted in improvement of biodiversity of this area in a very short period of time.
<br /><br />
Van Vihar is considered to be one of the best examples of improvement of bio-diversity on a denuded land and its eco-restoration. Over the time period of last three and a half decades, because of the planned and efficient habitat development measures taken by the park management Van Vihar’s flora and fauna has improved considerably thereby enhancing the overall biodiversity of the park. It is a typical amalgamation of in-situ and ex-situ conservation activities and to cover both the facets of conservation, the Central Zoo Authority further empowered this area and recognized it as a medium sized Zoo on 24.11.94.
      </div>
      {/* Contact Us section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-black font-sans mb-4">Contact Us</h1>
      </div>
      <div className="bg-gray-200 p-8 rounded-md text-center ">
        <p className="text-gray-600">
          Email: fdvanvnp.bpl@mp.gov.in <br />
          Phone: 0755 - 2674278 (General inquiries) <br />
            Visit Us: Director, Van Vihar National Park and Zoo,
          Bhadbhada Road, Bhopal – 462003
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
