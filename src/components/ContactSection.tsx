
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";

interface ContactSectionProps {
  handleEmailContact: () => void;
  handleWhatsAppContact: () => void;
  handlePhoneCall: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  handleEmailContact,
  handleWhatsAppContact,
  handlePhoneCall
}) => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-purple-100 text-lg">We'd love to hear from you! Contact us for any inquiries.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information Card */}
            <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold text-center">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <div className="bg-blue-500 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-blue-600 font-medium">techtonic792@gmail.com</p>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-blue-500 hover:text-blue-700"
                        onClick={handleEmailContact}
                      >
                        Send Email →
                      </Button>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <div className="bg-green-500 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-green-600 font-medium">+254 741 645 021</p>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-green-500 hover:text-green-700"
                        onClick={handlePhoneCall}
                      >
                        Call Now →
                      </Button>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                    <div className="bg-emerald-500 p-3 rounded-full">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                      <p className="text-emerald-600 font-medium">+254 741 645 021</p>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-emerald-500 hover:text-emerald-700"
                        onClick={handleWhatsAppContact}
                      >
                        Message on WhatsApp →
                      </Button>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  {/* Working Hours */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-purple-500 p-2 rounded-full">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-800 text-lg">Working Hours</h3>
                    </div>
                    <div className="space-y-2 ml-11">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday:</span>
                        <span className="font-medium text-purple-600">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday:</span>
                        <span className="font-medium text-purple-600">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday:</span>
                        <span className="font-medium text-red-500">Closed</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <Button
                      onClick={handleEmailContact}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </Button>
                    <Button
                      onClick={handleWhatsAppContact}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form Card */}
            <Card className="bg-white/95 backdrop-blur border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold text-center">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                      <Input id="name" className="mt-2 border-2 border-purple-200 focus:border-purple-500" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                      <Input id="email" type="email" className="mt-2 border-2 border-purple-200 focus:border-purple-500" placeholder="your.email@example.com" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                    <Input id="phone" type="tel" className="mt-2 border-2 border-purple-200 focus:border-purple-500" placeholder="+254 XXX XXX XXX" />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium">Subject</Label>
                    <Input id="subject" className="mt-2 border-2 border-purple-200 focus:border-purple-500" placeholder="What can we help you with?" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="mt-2 w-full px-3 py-2 border-2 border-purple-200 rounded-md focus:border-purple-500 focus:outline-none resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg py-3">
                    Send Message
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
