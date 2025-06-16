import React from "react";
import HeroSection from '@/components/all/hero-section';

const journey = [
  {
    year: "September 2014",
    desc: "We began our journey on September 26, 2014, with the goal of providing the best CRM solutions to corporates and began trying to identify the region of the problem that needed to be solved in order to give effective solutions.",
    side: "left"
  },
  {
    year: "September 2014",
    desc: "We identified the problem area and began drafting the problem statement so that we could create a better platform to meet the needs of the customer. Drafting the problem statement provided us with an efficient method to begin developing a better platform for potential customers.",
    side: "right"
  },
  {
    year: "January 2015",
    desc: "We decided to build the CRM Suite, which initially included Dialer, Ticketing and IP-PBX products to help large corporate sectors to streamline their customer relationship management (CX) processes. We assembled the finest team possible to get this project off to a good start.",
    side: "left"
  },
  {
    year: "October 2015",
    desc: "We had started Market Research to determine which product we should focus on initially. We chose to talk with current CRM users, and we learned from them and decided that we should first focus on building Dialer and Ticketing. Following that, we sat down with the team and began planning to develop both products.",
    side: "right"
  },
  {
    year: "January 2016",
    desc: "We met various CRM users again to learn about the features of current products. Along with this, we wanted to know that where these products were lacking since we wanted to provide the best products to the customers by enhancing all existing features.",
    side: "left"
  },
  {
    year: "May 2016",
    desc: "We continued developing and enhancing more process and features to the Dialer, Ticketing, and IP-PBX products by adding all of the necessary functionality based on market research. We had a good-to-go direction after market research since we knew how we should begin the task.",
    side: "right"
  },
  {
    year: "January 2017",
    desc: "We returned to the market again to get inputs on our newly developed products, which included Dialer, Ticketing system, and IP-PBX. We received positive comments on these products. Along with this, we received a fresh concept for developing Sales CRM and also, we learned that which features should be incorporated in Sales CRM.",
    side: "left"
  },
  {
    year: "March 2017",
    desc: "We began planning for the Sales CRM and intended to test additional products alongside it, such as the Dialer, Ticketing, and IP-PBX. We created the entire strategy and began working with total commitment in order to accomplish this assignment as soon as feasible.",
    side: "right"
  },
  {
    year: "July 2017",
    desc: "We had developed the entire CRM Suite, and one new and powerful product, the Sales CRM, had been added to our list. We now had a comprehensive list of successful CRM solutions, including Dialer, Ticketing, IP-PBX, and Sales CRM. Following that, we intended to put the products in the market. However, before releasing, we wanted to deeply evaluate each product to ensure that we were providing the best products to our customers.",
    side: "left"
  },
  {
    year: "November 2017",
    desc: "We recruited a testing team of 5-10 individuals and began evaluating each product independently as well as their compatibility with one another in order to complete this work successfully and make all of the products market ready.",
    side: "right"
  },
  {
    year: "March 2018",
    desc: "We had successfully finished the products testing phase. Now we wanted to put all of the products through their paces in the context of major corporations. As a result, we began providing the products to CRM users from various companies for testing purposes.",
    side: "left"
  },
  {
    year: "August 2018",
    desc: "With the commitment of our staff, we were able to resolve all of the concerns reported by CRM users from various organizations. We had now put all of our products in the market. As a result, couple of customers such as Suzuki Motorcycles, Quest Diagnostic, JP Hospital, BPTP Ltd and Harton Communication Ltd were among have been added to our customers list.",
    side: "right"
  },
  {
    year: "January 2019",
    desc: "We discovered a new demand of the CRM market, which was a Chatbot and Social Media integration solutions, because both platforms were popular for providing excellent Sales and Customer Support services.",
    side: "left"
  },
  {
    year: "January 2019",
    desc: "Despite many ups and downs, we were able to develop the Chatbot and Social Media integration system thanks to the devotion of our team. Now, the most difficult issue for us was to introduce the entire developed system into the market because we had no idea how potential customers would react to this system.",
    side: "right"
  },
  {
    year: "April 2019",
    desc: "To evaluate its efficacy, we began evaluating each product independently and their compatibility with one another once again. We accomplished this with the assistance of our testing team and CRM users from many organizations. The aim was to find any faults or problems in order to make our system bug-free.",
    side: "left"
  },
  {
    year: "July 2019",
    desc: "With the commitment of our team, we were able to address all of the minor issues that had previously gone unnoticed. As a outcome, we acquired more confidence and peace of mind in the efficiency of our system.",
    side: "right"
  },
  {
    year: "October 2019",
    desc: "We considered putting the name of our entire created suite because we had a variety of effective products. We wished to give the entire suite a single name. We named the entire system Noble-Omnichannel CRM after a mutual consensus with our team.",
    side: "left"
  },
  {
    year: "December 2019",
    desc: "Now, we had released three CRM model solutions in the market, included A la Carte CRM Model, CRM Suite Model and Omnichannel CRM Model and started incorporating the solutions in the corporates as per their needs.",
    side: "right"
  },
  {
    year: "January 2020",
    desc: "Our team's commitment was the same even throughout the Covid-19 Pandemic. The different customers from different verticals had deeply evaluated and used each module of each product, giving us more confidence in the overall efficiency of Noble-Omnichannel CRM.",
    side: "left"
  },
  {
    year: "March 2020",
    desc: "We acquired more confidence in integrating our products into all of the major corporates after ensuring high production and efficiency prior to, during, and after the Covid-19 pandemic lockdown. Today we can proudly say that we have achieved many milestones in just a short span of existence as we not just have developed complete CRM suite NobleCRM - Omni Channel, but has deployed the range of products to many verticals like: BPO's, Call Centers, Automobiles, Manufacturing, Media, Retail, Builder, Pharma, Healthcare, Insurance and Legal to streamline their Customer Support Process (CX). The product has reached to new horizons and our company has been awarded as among Best CRM's.",
    side: "right"
  },
  {
    year: "Year 2021",
    desc: "We acquired more confidence in integrating our products into all of the major corporates after ensuring high production and efficiency prior to, during, and after the Covid-19 pandemic lockdown. Today we can proudly say that we have achieved many milestones in just a short span of existence as we not just have developed complete CRM suite NobleCRM - Omni Channel, but has deployed the range of products to many verticals like: BPO's, Call Centers, Automobiles, Manufacturing, Media, Retail, Builder, Pharma, Healthcare, Insurance and Legal to streamline their Customer Support Process (CX). The product has reached to new horizons and our company has been awarded as among Best CRM's.",
    side: "left"
  }
];

const OurStory = () => {
  return (
    <>
      <HeroSection
        title="Our Story"
        description="From a bold idea in Dubai to a leading force in customer engagement—discover the journey, the people, and the passion behind Infonoble."
        imageSrc="/banner/story.jpg"
      />
      {/* Who We Are - concise intro */}
      <section className="max-w-2xl mx-auto px-4 mt-8 mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--primary))] mb-3">Who We Are</h2>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">
          Infonoble is a team of innovators, dreamers, and doers dedicated to transforming customer engagement in the GCC and beyond. We empower businesses with cutting-edge solutions, a human touch, and a relentless commitment to excellence.
        </p>
      </section>
      {/* Tagline/Stat */}
      <section className="max-w-2xl mx-auto px-4 mt-4 mb-12 text-center">
        <div className="inline-block bg-cyan-100 text-cyan-800 font-semibold px-4 py-2 rounded-full text-base shadow">
          Trusted by 500+ businesses across 7 countries
        </div>
      </section>
      {/* Modern Timeline */}
      <section className="relative max-w-4xl mx-auto px-4 pb-24">
        {/* Decorative background blob */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-100 opacity-30 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="relative z-10 flex flex-col items-center">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-2 bg-gradient-to-b from-[hsl(var(--primary))] to-cyan-200 rounded-full z-0" />
          <ol className="w-full space-y-0">
            {journey.map((item, i) => {
              const isLeft = item.side === 'left';
              return (
                <li key={i} className={`relative w-full mb-20 md:mb-0 flex flex-col md:flex-row md:items-center`}>
                  {/* Left Side (Card for left), Spacer for right */}
                  <div className={`md:w-1/2 flex ${isLeft ? 'justify-end pr-8' : 'justify-end pr-8 md:invisible md:block'}`}> 
                    {isLeft && (
                      <div className={`bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-[hsl(var(--border))] p-8 min-w-0 max-w-lg transition-transform hover:-translate-y-2 hover:shadow-3xl ml-auto`}
                        style={{
                          background: 'linear-gradient(135deg, #fff 80%, #e0f7fa 100%)',
                          boxShadow: '0 8px 32px 0 rgba(0, 188, 212, 0.10)',
                        }}
                      >
                        <div className="font-bold text-lg text-orange-600 mb-2">{item.year}</div>
                        <p className="text-[hsl(var(--muted-foreground))] text-lg mb-2">{item.desc}</p>
                      </div>
                    )}
                  </div>
                  {/* Center Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:top-auto top-0 md:-translate-y-1/2 z-20 flex justify-center items-center">
                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-orange-500 shadow-2xl border-4 border-white text-white text-base font-bold relative animate-fade-in">
                    </span>
                  </div>
                  {/* Right Side (Card for right), Spacer for left */}
                  <div className={`md:w-1/2 flex ${!isLeft ? 'justify-start pl-8' : 'justify-start pl-8 md:invisible md:block'}`}> 
                    {!isLeft && (
                      <div className={`bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-[hsl(var(--border))] p-8 min-w-0 max-w-lg transition-transform hover:-translate-y-2 hover:shadow-3xl mr-auto`}
                        style={{
                          background: 'linear-gradient(135deg, #fff 80%, #e0f7fa 100%)',
                          boxShadow: '0 8px 32px 0 rgba(0, 188, 212, 0.10)',
                        }}
                      >
                        <div className="font-bold text-lg text-orange-600 mb-2">{item.year}</div>
                        <p className="text-[hsl(var(--muted-foreground))] text-lg mb-2">{item.desc}</p>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
      {/* What's Next / Mission */}
      <section className="max-w-2xl mx-auto px-4 pb-24 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--primary))] mb-4">Our Mission</h3>
        <p className="text-lg text-[hsl(var(--muted-foreground))] mb-4">
          To empower every business with the tools, technology, and support they need to deliver unforgettable customer experiences—today and tomorrow.
        </p>
        <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-6 py-3 rounded-full shadow-lg">
          The journey continues...
        </div>
      </section>
    </>
  );
};

export default OurStory;