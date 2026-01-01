import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaGooglePlay,
  FaWhatsapp,
} from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-5 mt-6">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/2130group/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="
          h-10 w-12 rounded-full border
          flex items-center justify-center
          text-lg
          hover:bg-blue-600 hover:text-white
          transition
        "
      >
        <FaLinkedinIn />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/1CJoXEHbdk/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="
          h-10 w-12 rounded-full border
          flex items-center justify-center
          text-lg
          hover:bg-blue-500 hover:text-white
          transition
        "
      >
        <FaFacebookF />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/aapni.dairy?igsh=MWxpbXYzNmdsanN3Ng=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="
          h-10 w-12 rounded-full border
          flex items-center justify-center
          text-lg
          hover:bg-pink-500 hover:text-white
          transition
        "
      >
        <FaInstagram />
      </a>

      {/* WhatsApp */}
      <a
        href="https://whatsapp.com/channel/0029VbB4m2b5PO0uSvtgbJ43"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="
          h-10 w-12 rounded-full border
          flex items-center justify-center
          text-lg
          hover:bg-green-500 hover:text-white
          transition
        "
      >
        <FaWhatsapp />
      </a>

      {/* Play Store */}
      <a
        href="https://play.google.com/store/apps/details?id=com.aapnidairy.app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Play Store"
        className="
          h-10 w-12 rounded-full border
          flex items-center justify-center
          text-lg
          hover:bg-green-600 hover:text-white
          transition
        "
      >
        <FaGooglePlay />
      </a>
    </div>
  );
}
