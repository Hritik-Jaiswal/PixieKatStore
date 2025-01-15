"use client"

export default function AboutContent() {
  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "24/7", label: "Customer Support" },
    { number: "100%", label: "Secure Transactions" },
    { number: "5⭐", label: "Customer Rating" },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Mission Statement */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-nonphoto-600">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At PixieKat Store, we strive to provide gamers with a seamless and secure top-up experience. 
            Our mission is to be the most trusted platform for mobile game top-ups, ensuring instant delivery 
            and exceptional customer service.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-nonphoto2-100 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-lightcyan-500 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-nonphoto-300">Why Choose Us?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-nonphoto-600">Instant Delivery</h3>
                <p className="text-gray-600">
                  Our automated system ensures that your top-ups are processed and delivered instantly 
                  to your game account.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-nonphoto-600">Secure Payments</h3>
                <p className="text-gray-600">
                  We use industry-standard encryption and secure payment gateways to protect your 
                  transactions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-nonphoto-600">24/7 Support</h3>
                <p className="text-gray-600">
                  Our dedicated support team is available around the clock to assist you with any 
                  questions or concerns.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-nonphoto-300">Our Values</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-nonphoto-600">Customer First</h3>
                <p className="text-gray-600">
                  Your satisfaction is our top priority. We continuously improve our services based 
                  on your feedback.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-nonphoto-600">Transparency</h3>
                <p className="text-gray-600">
                  We believe in clear communication and transparent pricing. No hidden fees or 
                  surprise charges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-nonphoto-600">Innovation</h3>
                <p className="text-gray-600">
                  We stay ahead of the curve by continuously updating our platform with the latest 
                  security features and user-friendly improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
