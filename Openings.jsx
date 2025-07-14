
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Openings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { toast } = useToast();

  const handleApply = (jobTitle) => {
    toast({
      title: "🚧 Application feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleSearch = () => {
    toast({
      title: "🚧 Search feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const categories = ['All', 'Voice Process', 'Non-Voice Process', 'Healthcare', 'Management'];

  const jobs = [
    {
      id: 1,
      title: "Customer Service Representative - Voice",
      company: "IGT Solutions",
      location: "Gurgaon, Haryana",
      type: "Full-time",
      experience: "0-2 years",
      salary: "₹2.5-3.5 LPA",
      category: "Voice Process",
      description: "Handle customer inquiries via phone calls, provide excellent customer service, and resolve issues efficiently.",
      requirements: ["Excellent English communication", "Basic computer skills", "Customer service orientation"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Data Entry Specialist",
      company: "Globiva Technologies",
      location: "Gurgaon, Haryana",
      type: "Full-time",
      experience: "0-1 years",
      salary: "₹2.0-2.8 LPA",
      category: "Non-Voice Process",
      description: "Accurate data entry, document processing, and maintaining database records with high attention to detail.",
      requirements: ["Fast typing skills", "Attention to detail", "MS Office proficiency"],
      posted: "1 day ago"
    },
    {
      id: 3,
      title: "Medical Coding Specialist",
      company: "TaskUs",
      location: "Gurgaon, Haryana",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹4.0-6.0 LPA",
      category: "Healthcare",
      description: "Review medical records and assign appropriate codes for billing and insurance purposes.",
      requirements: ["Medical coding certification", "Healthcare knowledge", "Analytical skills"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Team Leader - Customer Support",
      company: "Tech Mahindra",
      location: "Gurgaon, Haryana",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹5.5-7.5 LPA",
      category: "Management",
      description: "Lead a team of customer support representatives, ensure quality standards, and drive performance metrics.",
      requirements: ["Leadership experience", "Team management", "Performance tracking"],
      posted: "1 week ago"
    },
    {
      id: 5,
      title: "Technical Support Executive",
      company: "Epicenter Technologies",
      location: "Gurgaon, Haryana",
      type: "Full-time",
      experience: "1-2 years",
      salary: "₹3.0-4.5 LPA",
      category: "Voice Process",
      description: "Provide technical assistance to customers, troubleshoot issues, and ensure customer satisfaction.",
      requirements: ["Technical aptitude", "Problem-solving skills", "Communication skills"],
      posted: "4 days ago"
    },
    {
      id: 6,
      title: "Healthcare Claims Processor",
      company: "IGT Solutions",
      location: "Gurgaon, Haryana",
      type: "Full-time",
      experience: "0-2 years",
      salary: "₹3.5-4.5 LPA",
      category: "Healthcare",
      description: "Process healthcare insurance claims, verify information, and ensure compliance with regulations.",
      requirements: ["Healthcare knowledge", "Attention to detail", "Regulatory compliance"],
      posted: "5 days ago"
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-lg">Current Opportunities</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
            Find Your
            <span className="gradient-text"> Dream Job</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore exciting career opportunities with leading BPO and healthcare companies. 
            Join our talent network and take the next step in your career.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search jobs by title or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? 
                      "bg-gradient-to-r from-blue-600 to-purple-600" : 
                      "border-gray-300 hover:border-blue-600"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <Button onClick={handleSearch} className="bg-gradient-to-r from-blue-600 to-purple-600 h-12 px-6">
                <Filter className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900 mb-2">{job.title}</CardTitle>
                      <div className="text-blue-600 font-semibold">{job.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{job.posted}</div>
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-1">
                        {job.category}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      {job.type} • {job.experience}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                      {job.salary}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      onClick={() => handleApply(job.title)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Apply Now
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => handleApply(job.title)}
                      className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Don't See the Perfect Role?</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join our talent pool and be the first to know about new opportunities that match your skills and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleApply('Talent Pool')}
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8"
            >
              Join Talent Pool
            </Button>
            <Button 
              onClick={() => handleApply('Contact')}
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8"
            >
              Contact Recruiter
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Openings;
