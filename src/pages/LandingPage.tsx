
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, BarChart, Calculator, Leaf, BookOpen, User } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent">
      {/* Header */}
      <header className="container mx-auto py-6 px-0 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-4xl font-bold text-primary">Aarthik Saathi</span>
        </div>
        <Button variant="outline" onClick={() => navigate('/auth')}>
          Sign In
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-5xl font-bold mb-6 text-primary">
          Your Financial Companion
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-12 text-foreground/80">
          Navigate government schemes, budget provisions, and investment opportunities 
          personalized to your financial profile.
        </p>
        <Button
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg"
          onClick={() => navigate('/auth')}
        >
          Get Started
        </Button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-16 text-primary">
          What Aarthik Saathi Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Government Schemes</h3>
            <p className="text-gray-600">
              Access 150+ government schemes filtered based on your profile, location, and eligibility criteria.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <BarChart className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Budget Impact Analysis</h3>
            <p className="text-gray-600">
              Understand how the latest union budget affects you with 
              personalized impact analysis across different sectors.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <Calculator className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Income Tax Calculator</h3>
            <p className="text-gray-600">
              Comprehensive tax planning tool for both individuals and businesses
              with detailed deduction options.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <Leaf className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Green Investment</h3>
            <p className="text-gray-600">
              Discover 25+ eco-friendly investment opportunities across India
              to grow your wealth sustainably.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Educational Resources</h3>
            <p className="text-gray-600">
              Access 100+ articles, blogs and videos to improve your financial 
              literacy and make informed decisions.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <User className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Personalized Dashboard</h3>
            <p className="text-gray-600">
              Your financial companion that adapts to your profile, providing
              relevant information tailored just for you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Ready to take control of your finances?
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-12 text-foreground/80">
          Join Aarthik Saathi today and unlock personalized financial insights,
          government schemes, and investment opportunities.
        </p>
        <Button
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg"
          onClick={() => navigate('/auth')}
        >
          Get Started Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Aarthik Saathi</h3>
              <p className="text-primary-foreground/70">
                Your trusted companion in navigating financial decisions and government schemes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/70 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/70 hover:text-white">Financial Planning</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-white">Government Schemes</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-white">Tax Guide</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/70 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-white">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/50">
            <p>© {new Date().getFullYear()} Aarthik Saathi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
