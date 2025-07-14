import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Clients = () => {
  const clients = [
    {
      name: "IGT Solutions",
      logo: "IGT",
      description: "Leading provider of gaming technology and services",
      placements: "150+",
      satisfaction: "98%"
    },
    {
      name: "Globiva Technologies",
      logo: "GT",
      description: "Global technology solutions and consulting",
      placements: "120+",
      satisfaction: "96%"
    },
    {
      name: "Epicenter Technologies",
      logo: "ET",
      description: "Innovative software development company",
      placements: "80+",
      satisfaction: "97%"
    },
    {
      name: "TaskUs",
      logo: "TU",
      description: "Digital customer experience solutions",
      placements: "200+",
      satisfaction: "99%"
    },
    {
      name: "Tech Mahindra",
      logo: "TM",
      description: "Global technology consulting services",
      placements: "180+",
      satisfaction: "95%"
    }
  ];

  const testimonials = [
    {
      quote: "SkySeaConsulting has been instrumental in helping us scale our operations. Their understanding of our requirements and quality of candidates is exceptional.",
      author: "Sarah Johnson",
      position: "HR Director, IGT Solutions",
      rating: 5
    },
    {
      quote: "The team at SkySeaConsulting consistently delivers top-tier talent for our healthcare processes. Their efficiency and professionalism are unmatched.",
      author: "Michael Chen",
      position: "Operations Manager, TaskUs",
      rating: 5
    },
    {
      quote: "Working with SkySeaConsulting has transformed our hiring process. They understand our culture and find candidates who are the perfect fit.",
      author: "Priya Sharma",
      position: "Talent Acquisition Lead, Tech Mahindra",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-lg">Our Trusted Partners</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
            Leading Companies
            <span className="gradient-text"> Trust Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built strong partnerships with industry leaders, delivering exceptional 
            talent solutions that drive their success and growth.
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-0 shadow-lg bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{client.logo}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{client.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{client.description}</p>
                  <div className="flex justify-between text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-blue-600">{client.placements}</div>
                      <div className="text-gray-500">Placements</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-green-600">{client.satisfaction}</div>
                      <div className="text-gray-500">Satisfaction</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-lg text-gray-600">Real feedback from our valued partners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Partnership Success Metrics</h3>
            <p className="text-lg text-gray-600">Measurable results that speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">730+</div>
              <div className="text-gray-600">Total Placements</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">97%</div>
              <div className="text-gray-600">Average Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">48h</div>
              <div className="text-gray-600">Avg. Response Time</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;