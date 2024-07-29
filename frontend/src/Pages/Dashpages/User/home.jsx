import React, { useEffect, useState } from 'react';
import Graph from '../../../components/charts/chart';

const DashboardHome = () => {
  const [groupCount, setGroupCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [ groupRes, userRes] = await Promise.all([
          fetch('/api/group/groupcount'),
          fetch('/api/auth/userCount')
        ]);

        const groupData = await groupRes.json();
        const userData = await userRes.json();

        setGroupCount(groupData.count);
        setUserCount(userData.count);
      } catch (error) {
        console.error("Error fetching counts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="">
      <div className="gap-[5%] flex mb-4">
        <div className="w-[160px] h-[90px] border-white border bg-gray-900 text-center pt-4">
          <h1 className="text-xl font-bold text-white">Total<span className='mr-1'></span>Expenses</h1>
          <h1 className="text-green-500 text-2xl mt-2">rs</h1>
        </div>

        <div className="w-[160px] h-[90px] border-white border bg-gray-900 text-center pt-4 ">
          <h1 className="text-xl font-bold text-white">You Owe</h1>
          <h1 className="text-green-500 text-2xl mt-2">rs</h1>
        </div>

        <div className="w-[160px] h-[90px] bg-gray-900 border-white border text-center pt-4 ">
          <h1 className="text-xl font-bold text-white">You are Owed</h1>
          <h1 className="text-green-500 text-2xl mt-2">rs</h1>
        </div>

        <div className="w-[160px] h-[90px] bg-gray-900 border-white border text-center pt-4">
          <h1 className="text-xl font-bold text-white">Groups</h1>
          <h1 className="text-green-500 text-2xl mt-2">{loading ? 'Loading...' : groupCount}</h1>
        </div>
        
        <div className="w-[160px] h-[90px] bg-gray-900 border-white border text-center pt-4 ">
          <h1 className="text-xl font-bold text-white">Users</h1>
          <h1 className="text-green-500 text-2xl mt-2">{loading ? 'Loading...' : userCount}</h1>
        </div>
      </div>
      <div className='flex mt-[3%]'>
        <div className='flex-col'>
          <div className='w-[700px] h-[200px]'>
            <Graph/>
          </div>
          <div className='w-[800px] h-[300px] border mt-[27%]'>
          </div>
        </div>
        <div className=''>
          {/* Uncomment and add your recent activity and button code here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
