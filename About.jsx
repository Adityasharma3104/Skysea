import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Specialized Expertise",
      description: "Deep focus on BPO and healthcare recruitment with industry-specific knowledge and networks."
    },
    {
      icon: Users,
      title: "Quality Talent Pool",
      description: "Access to pre-screened candidates for voice, non-voice, and healthcare processes."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "500+ successful placements with 95% client satisfaction rate across all sectors."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "End-to-end recruitment solutions with quick placement times and efficient processes."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-lg">About SkySeaConsulting</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
                Your Gateway to 
                <span className="gradient-text"> Exceptional Talent</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Based in Gurgaon, we are a dynamic recruitment firm with 50-200 dedicated professionals 
                specializing in BPO and healthcare hiring. Our strong partnerships with industry leaders 
                like IGT Solutions, Globiva Technologies, Epicenter Technologies, TaskUs, and Tech Mahindra 
                position us as the go-to recruitment partner for quality talent delivery.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To bridge the gap between exceptional talent and leading companies through 
                    innovative recruitment solutions and personalized service.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To become the most trusted recruitment partner in the BPO and healthcare 
                    sectors, known for our commitment to excellence and client success.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Impact in Numbers</h3>
            <p className="text-blue-100 text-lg">Delivering excellence through measurable results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">72h</div>
              <div className="text-blue-100">Average Placement Time</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;