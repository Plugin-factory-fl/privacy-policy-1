import React from 'react';
import { Shield, Code, Zap, Mail, Globe, Lock, Eye, Users, Database, Settings } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center space-x-3">
            <div className="bg-pink-500 p-2 rounded-lg">
              <Code className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold">Plugin Factory</h1>
          </div>
          <p className="mt-2 text-gray-300">Building the future, one extension at a time</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-pink-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Innovative Micro-Niche Chrome Extensions
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We leverage cutting-edge AI technology to rapidly develop high-quality browser extensions 
            that solve specific problems and enhance your digital experience in targeted ways.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Development</h3>
              <p className="text-gray-600 text-sm">AI-powered development for rapid iteration and deployment</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Privacy First</h3>
              <p className="text-gray-600 text-sm">User privacy and data security are our top priorities</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-black w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Micro-Niche Focus</h3>
              <p className="text-gray-600 text-sm">Extensions designed to solve specific, targeted problems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="py-16 bg-white" id="privacy-policy">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-pink-600" />
            </div>
            <h2 className="text-3xl font-bold text-black mb-4">Privacy Policy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your privacy is fundamental to our mission. This policy outlines how we handle data 
              across all Plugin Factory products and services.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl mb-8">
            <p className="text-sm text-gray-600 mb-4"><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
            <p className="text-gray-700 leading-relaxed">
              Plugin Factory ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you use our browser 
              extensions, applications, and related services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-pink-100 p-2 rounded-lg mr-4">
                <Database className="w-5 h-5 text-pink-600" />
              </div>
              <h3 className="text-2xl font-semibold text-black">Information We Collect</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-3 text-black">Automatically Collected Information</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Browser type and version</li>
                  <li>Operating system information</li>
                  <li>Extension usage statistics and performance metrics</li>
                  <li>Error logs and crash reports</li>
                  <li>General location information (country/region level only)</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-3 text-black">Information You Provide</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Settings and preferences you configure within our extensions</li>
                  <li>Feedback, support requests, and communications with us</li>
                  <li>Account information (if applicable for specific products)</li>
                  <li>Custom configurations and user-defined data</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-3 text-black">Web Content and Interaction Data</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>URLs and webpage content (only when necessary for extension functionality)</li>
                  <li>Form data and text selections (processed locally when possible)</li>
                  <li>Video and media metadata (for media-related extensions)</li>
                  <li>Search queries and browsing patterns (anonymized and aggregated)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-2 rounded-lg mr-4">
                <Settings className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="text-2xl font-semibold text-black">How We Use Your Information</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-3 text-black">Core Functionality</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Provide and maintain extension features</li>
                  <li>Process and analyze content as requested</li>
                  <li>Save user preferences and settings</li>
                  <li>Enable synchronization across devices</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-3 text-black">Improvement & Analytics</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Analyze usage patterns to improve features</li>
                  <li>Debug and fix technical issues</li>
                  <li>Develop new features and products</li>
                  <li>Generate anonymized usage statistics</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-3 text-black">Communication</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Respond to support requests</li>
                  <li>Send important updates about our services</li>
                  <li>Notify users of security issues</li>
                  <li>Provide customer service</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-3 text-black">Legal Compliance</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Comply with applicable laws and regulations</li>
                  <li>Respond to legal requests and court orders</li>
                  <li>Protect our rights and prevent fraud</li>
                  <li>Ensure platform security and integrity</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-black p-2 rounded-lg mr-4">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-black">Data Sharing and Disclosure</h3>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only in the following limited circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Service Providers:</strong> Trusted third-party services that help us operate our extensions (e.g., cloud storage, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Safety and Security:</strong> To protect the safety and security of our users and prevent fraud</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                <li><strong>Aggregated Data:</strong> Anonymized, aggregated data that cannot identify individual users</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-pink-100 p-2 rounded-lg mr-4">
                <Shield className="w-5 h-5 text-pink-600" />
              </div>
              <h3 className="text-2xl font-semibold text-black">Data Security</h3>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your information:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data centers and infrastructure</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                  <li>Regular backup and disaster recovery</li>
                  <li>Compliance with industry standards</li>
                </ul>
              </div>
            </div>
          </div>

          {/* User Rights */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-2 rounded-lg mr-4">
                <Eye className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="text-2xl font-semibold text-black">Your Rights and Choices</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-3 text-black">Data Control</h4>
                <p className="text-gray-700 mb-3">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Access and review the personal information we have collected</li>
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Data portability (receive your data in a structured format)</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-3 text-black">Extension Settings</h4>
                <p className="text-gray-700">
                  Most of our extensions provide settings and preferences that allow you to control what 
                  information is collected and how it's used. You can typically access these settings 
                  through the extension's options or settings page.
                </p>
              </div>
            </div>
          </div>

          {/* Retention */}
          <div className="mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-black mb-4">Data Retention</h3>
              <p className="text-gray-700 mb-4">
                We retain personal information only for as long as necessary to fulfill the purposes outlined 
                in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
              <p className="text-gray-700">
                When you uninstall our extensions or request deletion of your data, we will delete or anonymize 
                your personal information within a reasonable timeframe, subject to legal and technical constraints.
              </p>
            </div>
          </div>

          {/* International Transfers */}
          <div className="mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-black mb-4">International Data Transfers</h3>
              <p className="text-gray-700">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure that such transfers are conducted in accordance with applicable data protection 
                laws and implement appropriate safeguards to protect your information.
              </p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-black mb-4">Changes to This Privacy Policy</h3>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. When we make changes, we will:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Update the "Last Updated" date at the beginning of this policy</li>
                <li>Notify users of material changes through our extensions or via email</li>
                <li>Provide a prominent notice on our website</li>
                <li>Maintain previous versions for reference when required by law</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-pink-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy or our data practices, 
            please don't hesitate to contact us.
          </p>
          <div className="bg-gray-800 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-gray-300 mb-2">Email us at:</p>
            <p className="text-white font-semibold text-lg">soulmedia.agency.fl@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-pink-500 p-1.5 rounded">
              <Code className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold">Plugin Factory</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Plugin Factory. All rights reserved. 
            Building innovative micro-niche solutions with privacy and security at the forefront.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;