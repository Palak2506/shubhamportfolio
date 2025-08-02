import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to drive revenue growth and exceed your sales targets? 
            Let's discuss how my expertise in B2B sales and lead generation can benefit your organization.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/30">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Email</div>
                    <a 
                      href="mailto:komaljoshi2000@outlook.com"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      komaljoshi2000@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Phone</div>
                    <a 
                      href="tel:+353894145256"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      +353 894145256
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Location</div>
                    <div className="text-gray-400">Dublin, Ireland</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">LinkedIn</div>
                    <a 
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/30">
              <h3 className="text-xl font-semibold text-white mb-6">Let's Connect</h3>
              
              <div className="space-y-4">
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  onClick={() => window.open('mailto:komaljoshi2000@outlook.com?subject=Business Opportunity - Let\'s Connect')}
                >
                  <Mail size={20} />
                  <span>Send Email</span>
                </button>
                
                <button 
                  className="w-full border border-blue-500 text-blue-400 hover:bg-blue-600/10 py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                  onClick={() => window.open('tel:+353894145256')}
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <div className="text-sm text-gray-400 mb-4">
                  Open to opportunities in:
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-500/20">B2B Sales</span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-500/20">Business Development</span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-500/20">Account Management</span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-500/20">Lead Generation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Status */}
          <div className="bg-blue-600/10 backdrop-blur-sm rounded-lg p-6 text-center border border-blue-500/20">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400 font-medium">
                Available for new opportunities
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Ready to start immediately and contribute to your team's success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;