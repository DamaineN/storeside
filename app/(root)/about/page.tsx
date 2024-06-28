"use client"

import React from 'react';

const AboutUs = () => {
  return (
    <div className="h-screen items-center justify-center space-y-7 py-8 px-24">
      <style jsx>{`
        .custom-height {
          height: 300px;
        }
        .half-height {
          height: 150px;
        }
      `}</style>
      <div>
        <center>
          <p className="py-3 text-heading1-bold">
            Welcome to Medi Grab Solution!
          </p>
        </center>
      </div>

      <div className="text-body-small">
        <p>
          Medi Grab Solution is a premier eCommerce company specializing in
          providing top-notch medical and healthcare products. We are committed
          to enhancing the healthcare experience by offering a wide range of
          innovative and high-quality products that meet the diverse needs of
          healthcare providers and patients.
        </p>
      </div>

      <div>
        <center>
          <p className="py-3 text-heading2-bold">Vision</p>
        </center>
      </div>

      <div className="text-body-small text-center">
        <p>
          The warm and high quality services given to our customers make the basis of the solid foundation of our company.
          Thanks to these solid foundations, we have achieved a well-structured growth during the last years at the company
          levels as much as in terms of turnover and geographical expansion within the field of distributing products to
          hospitals and clinics.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-full lg:w-1/3">
          <img src="/pic1.png" alt="Vision 1" className="w-full custom-height h-auto rounded-lg shadow-md" />
        </div>
        <div className="w-full lg:w-1/3">
          <img src="/pic2.png" alt="Vision Image 2" className="w-full custom-height h-auto rounded-lg shadow-md" />
        </div>
        <div className="w-full lg:w-1/3">
          <img src="/pic3.png" alt="Vision Image 3" className="w-full custom-height h-auto rounded-lg shadow-md" />
        </div>
      </div>

      <hr className="border-t border-gray-300 my-12" />

      <div>
        <center>
          <p className="py-3 text-heading2-bold">Your Healthcare Solution Partner</p>
        </center>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center text-center">
        <div className="w-full lg:w-1/2 p-8">
        <p className="text-lg">
            "Our organization is focused on satisfying and catering to the needs of our customers, working hand in hand
            with them to improve patient experience and enhance patient recovery. Our personal motivation consists in
            offering the best solutions to our customers. As our slogan well reflects, what gives meaning to 'MEDI GRAB SOLUTION.'"
          </p>
          <p className="mt-4 font-semibold">— Adam Neoh, Founder of Medi Grab Solution</p>
        </div>
        <div className="w-full lg:w-1/2">
        <img src="/pic4.png" alt="Adam Neoh" className="w-86 h-auto rounded-full mx-auto mb-4" />
        </div>
      </div>


      <hr className="border-t border-gray-300 my-12" />

      <div>
        <center>
          <p className="py-3 text-heading2-bold">Our Values</p>
        </center>
      </div>

      <div className="flex flex-col items-center text-center text-lg">
        <img src="/pic6.png" alt="Values Image" className="w-full custom-height lg:w-1/2 h-auto rounded-lg shadow-md mb-8" />
        <div className="w-full lg:w-1/2">
          <p className="font-semibold py-3">Quality:</p>
          <p>We are committed to offering only the best products that meet the highest standards of quality and safety.</p>

          <p className="font-semibold py-3">Innovation:</p>
          <p>We continuously seek new ways to improve our services and product offerings to better serve our customers.</p>

          <p className="font-semibold py-3">Customer Focus:</p>
          <p>Our customers are at the heart of everything we do. We aim to exceed their expectations with every interaction.</p>

          <p className="font-semibold py-3">Integrity:</p>
          <p>We conduct our business with the utmost honesty and transparency, building trust with our customers and partners.</p>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-12" />

      <div>
        <center>
          <p className="py-3 text-heading2-bold">Our Team</p>
        </center>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center text-center">
        <div className="w-full lg:w-1/2 p-8">
          <p className="text-lg">
            Our team at Medi Grab Solution is comprised of dedicated professionals with extensive experience in the healthcare and eCommerce sectors. We work tirelessly to ensure that our platform is user-friendly, our product range is comprehensive, and our customer service is unparalleled. Together, we are committed to making a positive impact on healthcare delivery through our innovative solutions and exceptional service.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img src="/pic5.png" alt="Team Image" className="w-full custom-height h-auto rounded-lg shadow-md" />
        </div>
      </div>

      <hr className="border-t border-gray-300 my-12" />

      <div>
        <center>
          <p className="py-3 text-heading2-bold">Our Story</p>
        </center>
      </div>

      <div className="flex flex-wrap justify-center items-center px-8">
        <div className="w-full lg:w-1/2 ">
          <img src="/pic7.png" alt="Story Image 1" className="w-full custom-height rounded-lg shadow-md" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
        <img src="/pic8.png" alt="Story Image 1" className="w-full custom-height rounded-lg shadow-md" />
        </div>
        <div className="w-full lg:w-2/3 text-lg mt-8">
          <p>Founded with a vision to revolutionize the healthcare supply chain, Medi Grab Solution has rapidly grown to become a trusted name in the industry. Our journey began with a passion for improving healthcare delivery through reliable and efficient access to essential medical supplies. Over the years, we have built strong partnerships with leading manufacturers and suppliers to ensure that our customers receive only the best products.</p>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-12" />

      <div>
        <center>
          <p className="py-3 text-heading2-bold">Contact Us</p>
        </center>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center text-center py-8">
        <div className="w-full lg:w-1/2 p-8">
        <p className="pb-24">
          We are always here to help! If you have any questions or need assistance, please feel free to reach out to us. We value your feedback and look forward to serving you.
        </p>
        </div>
        <div className="w-full lg:w-1/2">
        <img src="/pic9.png" alt="Contact Us" className="rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;