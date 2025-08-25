import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  MessageSquare,
  Users,
  Headphones,
  Contact,
} from "lucide-react";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+234 801 234 5678", "+234 901 234 5678"],
      description: "Mon-Fri: 8AM-6PM, Weekends: 10AM-4PM",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@autoflex.ng", "support@autoflex.ng"],
      description: "We respond within 2 hours",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["123 AutoFlex Avenue", "Ikeja, Lagos, Nigeria"],
      description: "Visit our showroom",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Mon-Fri: 8AM-6PM", "Sat: 10AM-4PM, Sun: Closed"],
      description: "Public holiday hours may vary",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      color: "hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      color: "hover:bg-sky-500",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      color: "hover:bg-pink-600",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:bg-blue-700",
    },
  ];

  return (
    <section className="padding-x padding-y bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-bold text-zinc-700 text-4xl mb-6">
            Contact <span className="text-blue-600">AutoFlex</span>
          </h1>
          <p className="font-light text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our car rental services? We're here to help!
            Get in touch with us and we'll respond as quickly as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto">
          <div className="lg:col-span-2 lg:row-span-2 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Send us a Message
              </h2>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Car Booking Inquiry</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="support">Customer Support</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 transform hover:scale-105 shadow-lg hover:shadow-xl"
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {contactInfo.slice(0, 2).map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm font-medium">
                      {detail}
                    </p>
                  ))}
                  <p className="text-gray-500 text-xs mt-2">
                    {info.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="lg:col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Need Immediate Help?
                </h2>
                <p className="text-blue-100">
                  For urgent inquiries or roadside assistance, call our 24/7
                  hotline.
                </p>
              </div>
            </div>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Call Now: +234 801 234 5678
            </button>
          </div>

          {contactInfo.slice(2).map((info, index) => (
            <div
              key={index + 2}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm font-medium">
                      {detail}
                    </p>
                  ))}
                  <p className="text-gray-500 text-xs mt-2">
                    {info.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Follow Us</h2>
                <p className="text-gray-600 text-sm">Stay connected!</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className={`h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 transition-all duration-300 ${social.color} hover:text-white hover:scale-105`}
                  aria-label={social.name}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500">
            <div className="h-48  flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-10"></div>
              <div className="text-center z-10">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <p className="text-gray-700 font-semibold">
                  Visit Our Location
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  123 AutoFlex Avenue
                </p>
                <p className="text-gray-500 text-sm">Ikeja, Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactInfo;
