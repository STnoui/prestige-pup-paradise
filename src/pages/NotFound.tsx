
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="mb-8">
          <div className="text-8xl mb-4">🐕</div>
          <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-slate-700 mb-6">
            Oops! This pup ran away
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            The page you're looking for doesn't exist, but our amazing dogs are waiting for you at home!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary px-8 py-3 inline-block">
            Return Home
          </Link>
          <Link to="/#our-dogs" className="btn-secondary px-8 py-3 inline-block">
            Meet Our Dogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
