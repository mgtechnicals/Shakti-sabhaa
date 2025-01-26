import React from 'react';

const HistoryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          History of Women Empowerment
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Early Movements</h2>
            <p className="text-gray-600">
              The women&apos;s rights movement began in the 19th century with the fight for suffrage and basic legal rights.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mid-20th Century</h2>
            <p className="text-gray-600">
              The 1960s and 70s saw significant progress in workplace rights, reproductive rights, and educational opportunities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Modern Era</h2>
            <p className="text-gray-600">
              Today&apos;s movement focuses on equality in leadership, closing the wage gap, and addressing gender-based discrimination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;