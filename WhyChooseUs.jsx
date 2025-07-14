import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, Award, Clock, Target, TrendingUp, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "5+ years of specialized experience in BPO and healthcare recruitment with proven track record.",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Average placement time of 72 hours with our streamlined recruitment process.",
      color: "yellow"
    },
    {
      icon: Users,
      title: "Quality Talent Pool",
      description: "Access to pre-screened, skilled candidates ready for voice, non-voice, and healthcare roles.",
      color: "green"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "95% client satisfaction rate and partnerships with top-tier companies like TaskUs and Tech Mahindra.",
      color: "purple"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure seamless recruitment experience for both clients and candidates.",
      color: "orange"
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "Advanced screening process ensures perfect candidate-role fit, reducing turnover by 40%.",
      color: "red"
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      number: "500+",
      label: "Successful Placements",
      description: "Across BPO and healthcare sectors"
    },
    {
      icon: Users,
      number: "50+",
      label: "Partner Companies",
      description: "Including industry leaders"
    },
    {
      icon: Award,
      number: "95%",
      label: "Client Satisfaction",
      description: "Consistently high ratings"
    },
    {
      icon: Heart,
      number: "72h",
      label: "Average Placement",
      description: "From requirement to hire"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      yellow: "bg-yellow-100 text-yellow-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      red: "bg-red-100 text-red-600"
    };
    return colorMap[color] || "bg-blue-100 text-blue-600";
  };

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
          <span className="text-blue-600 font-semibold text-lg">Why Choose SkySeaConsulting</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
            Your Success is
            <span className="gradient-text"> Our Priority</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine industry expertise, cutting-edge technology, and personalized service 
            to deliver recruitment solutions that exceed expectations.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${getColorClasses(reason.color)}`}>
                    <reason.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Track Record Speaks</h3>
            <p className="text-lg text-gray-600">Numbers that demonstrate our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Proven Process</h3>
            <p className="text-blue-100 text-lg">A systematic approach that delivers results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Requirement Analysis</h4>
              <p className="text-blue-100 text-sm">Deep dive into your specific needs and company culture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Talent Sourcing</h4>
              <p className="text-blue-100 text-sm">Access our extensive network of pre-screened candidates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Rigorous Screening</h4>
              <p className="text-blue-100 text-sm">Multi-level assessment to ensure perfect fit</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Seamless Placement</h4>
              <p className="text-blue-100 text-sm">Smooth onboarding and ongoing support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;