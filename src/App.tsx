import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProfileProvider } from "@/contexts/ProfileContext";
import LandingPage from "./pages/LandingPage";
import Auth from "./pages/Auth";
import Onboarding from "./pages/Onboarding";
import Profile from "./pages/dashboard/Profile";
import GovernmentSchemes from "./pages/dashboard/GovernmentSchemes";
import Budget from "./pages/dashboard/Budget";
import TaxCalculator from "./pages/dashboard/TaxCalculator";
import GreenInvestment from "./pages/dashboard/GreenInvestment";
import Resources from "./pages/dashboard/Resources";
import NotFound from "./pages/NotFound";
import { useAuth } from "@/contexts/AuthContext";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <ProfileProvider>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<Auth />} />
              
              {/* Protected routes */}
              <Route path="/onboarding" element={
                <ProtectedRoute>
                  <Onboarding />
                </ProtectedRoute>
              } />
              
              <Route path="/dashboard/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              
              <Route path="/dashboard/schemes" element={
                <ProtectedRoute>
                  <GovernmentSchemes />
                </ProtectedRoute>
              } />
              
              <Route path="/dashboard/budget" element={
                <ProtectedRoute>
                  <Budget />
                </ProtectedRoute>
              } />
              
              <Route path="/dashboard/tax-calculator" element={
                <ProtectedRoute>
                  <TaxCalculator />
                </ProtectedRoute>
              } />
              
              <Route path="/dashboard/green-investment" element={
                <ProtectedRoute>
                  <GreenInvestment />
                </ProtectedRoute>
              } />
              
              <Route path="/dashboard/resources" element={
                <ProtectedRoute>
                  <Resources />
                </ProtectedRoute>
              } />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ProfileProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
