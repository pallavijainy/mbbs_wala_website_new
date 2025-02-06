import React from 'react'

const CutOffTable = () => {
    const cutoff=[
        {programName:"Aerospace Engineering" , round1Rank:1469,round5Rank:2815},
        {programName:"Aerospace Engineering" , round1Rank:1469,round5Rank:2815},
        {programName:"Aerospace Engineering" , round1Rank:1469,round5Rank:2815},
        {programName:"Aerospace Engineering" , round1Rank:1469,round5Rank:2815},
        {programName:"Aerospace Engineering" , round1Rank:1469,round5Rank:2815},
        {programName:"Aerospace Engineering" , round1Rank:1469,round5Rank:2815},
    ]
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">
        IIT Madras Cutoff 2024
      </h2>
      <p className="text-[#4D5156] mb-5">IIT Madras JEE Advanced Cutoff 2024 is out. The table given below shows Round 1 Opening Rank & Round 5 Closing Rank.</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#1F3152] text-white">
            <tr>
              <th className="py-2 px-4 text-left border border-[#CCDCFF]">Academic Program Name</th>
              <th className="py-2 px-4 text-left border border-[#CCDCFF]">Round 1 Opening Rank</th>
              <th className="py-2 px-4 text-left border border-[#CCDCFF]">Round 5 Closing Rank</th>
            </tr>
          </thead>
          <tbody className='text-[#4D5156]'>
            {cutoff.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4 border border-[#CCDCFF]">{item.programName}</td>
                <td className="py-2 px-4 border border-[#CCDCFF]">{item.round1Rank}</td>
                <td className="py-2 px-4 border border-[#CCDCFF]">{item.round5Rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CutOffTable
