// @flow strict
import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode, SiStackoverflow } from "react-icons/si";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 lg:py-12">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#16f2b3]">
              {personalData.name}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {personalData.designation} passionate about building innovative
              solutions with modern technologies.
            </p>
            <div className="flex flex-col space-y-2 py-5 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#16f2b3]" />
                <Link
                  href={`mailto:${personalData.email}`}
                  className="hover:text-[#16f2b3] transition-colors"
                >
                  {personalData.email}
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-[#16f2b3]" />
                <Link
                  href={`tel:${personalData.phone}`}
                  className="hover:text-[#16f2b3] transition-colors"
                >
                  {personalData.phone}
                </Link>
              </div>
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#16f2b3]">Quick Links</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link
                href="#about"
                className="text-gray-300 hover:text-[#16f2b3] transition-colors"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="text-gray-300 hover:text-[#16f2b3] transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#skills"
                className="text-gray-300 hover:text-[#16f2b3] transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-gray-300 hover:text-[#16f2b3] transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#education"
                className="text-gray-300 hover:text-[#16f2b3] transition-colors"
              >
                Education
              </Link>
              <Link
                href="/blog"
                className="text-gray-300 hover:text-[#16f2b3] transition-colors"
              >
                LinkedIn Posts
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#16f2b3]">
              Connect With Me
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href={personalData.github}
                target="_blank"
                className="flex items-center gap-2 text-gray-300 hover:text-[#16f2b3] transition-colors"
              >
                <BsGithub size={20} />
                <span className="text-sm">GitHub</span>
              </Link>
              <Link
                href={personalData.linkedIn}
                target="_blank"
                className="flex items-center gap-2 text-gray-300 hover:text-[#16f2b3] transition-colors"
              >
                <BsLinkedin size={20} />
                <span className="text-sm">LinkedIn</span>
              </Link>
              
            </div>
            <div className="pt-4">
              <Link
                href={personalData.resume}
                target="_blank"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-200"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-[#353951]">
          <div className="flex items-center justify-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} {personalData.name}. All rights
              reserved.
            </p>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
