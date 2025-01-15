import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-federal to-marian py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-nonphoto max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-federal mb-6">Send us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-federal mb-6">Get in Touch</h2>
            <ContactInfo />
          </div>
        </div>
      </div>
    </main>
  );
}
