import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import FooterLinks from './FooterLinks';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosMailOpen } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";

const Footer = () => {
    return (
        <footer className="py-10 bg-white dark:bg-gray-950 sm:pt-16 lg:pt-24 border-t border-t-gray-200 dark:border-t-gray-800">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
          <div className="col-span-2 md:col-span-4 xl:pr-8">
            <div className="flex items-center gap-2">
              <img className="w-10 h-auto" src="https://i.ibb.co.com/XjzVKGf/icons8-training-100.png" alt="Tutor Book logo" />
              <strong className="text-2xl text-gray-900 dark:text-gray-300">
                TutorBook
              </strong>
            </div>

            <div className="text-gray-800 dark:text-gray-500 mt-5 space-y-2">
              <h4 className="font-semibold text-lg dark:text-gray-400">
                Support
              </h4>
              <p className="flex items-start gap-2">
                <GiRotaryPhone size={20} />
                <span className="text-sm">123 456 789</span>
              </p>
              <p className="flex items-start gap-2">
                <IoIosMailOpen size={20} />
                <span className="text-sm">support@tutorbook.com</span>
              </p>
            </div>
            <div className="text-gray-800 dark:text-gray-500 mt-5 space-y-2 mr-4">
              <h4 className="font-semibold text-lg dark:text-gray-400">
                Location
              </h4>
              <p className="flex items-start gap-2">
                <HiOutlineLocationMarker size={20} />
                <span className="text-sm">
                  329 Queensberry Street, North Melbourne VIC 3051, Australia.
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-400">
              Students
            </h4>

            <ul className="mt-6 space-y-5">
              <li>
                <FooterLinks linkText="Search Tutors" linkPath="/findTutors" />
              </li>

              <li>
                <FooterLinks linkText="Categories" linkPath="/" />
              </li>

              <li>
                <FooterLinks linkText="Booked Tutors" linkPath="/myBookedTutor" />
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-400">
              Tutors
            </h4>

            <ul className="mt-6 space-y-4">
              <li>
                <FooterLinks linkText="Tutors Dashboard" linkPath="/myTutorials" />
              </li>

              <li>
                <FooterLinks linkText="Add Tutorials" linkPath="/addTutorials" />
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-400">
              About Us
            </h4>

            <ul className="mt-6 space-y-5">
              <li>
                <FooterLinks linkText="Home" linkPath="/" />
              </li>

              <li>
                <FooterLinks linkText="About Us" linkPath="/aboutus" />
              </li>

              <li>
                <FooterLinks linkText="Contact Us" linkPath="/contactus" />
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-400">
              Resources
            </h4>

            <ul className="mt-6 space-y-5">
              <li>
                <FooterLinks linkText="Site Map" linkPath="/sitemap" />
              </li>

              <li>
                <FooterLinks linkText="Terms of Use" linkPath="/terms-of-use" />
              </li>

              <li>
                <FooterLinks linkText="Accessibility" linkPath="/accessibility" />
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200 dark:border-gray-800" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-500">
            © Copyright 2024, All Rights Reserved by TutorBook
          </p>

          <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
            <li>
              <a
                href="#"
                title=""
                className="flex items-center justify-center text-gray-800 dark:text-gray-500 bg-transparent w-7 h-7 group"
              >
                <FaTwitter className="w-full group-hover:text-green-500 transition-all duration-300" />
              </a>
            </li>

            <li>
              <a
                href="#"
                title=""
                className="flex items-center justify-center text-gray-800 dark:text-gray-500 bg-transparent w-7 h-7 group"
              >
                <FaLinkedin className="w-full group-hover:text-green-500 transition-all duration-300" />
              </a>
            </li>

            <li>
              <a
                href="#"
                title=""
                className="flex items-center justify-center text-gray-800 dark:text-gray-500 bg-transparent w-7 h-7 group"
              >
                <FaGithub className="w-full group-hover:text-green-500 transition-all duration-300" />
              </a>
            </li>

            <li>
              <a
                href="#"
                title=""
                className="flex items-center justify-center text-gray-800 dark:text-gray-500 bg-transparent w-7 h-7 group"
              >
                <FaInstagram className="w-full group-hover:text-green-500 transition-all duration-300" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    );
};

export default Footer;