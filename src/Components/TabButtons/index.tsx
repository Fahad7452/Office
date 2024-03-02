"use client"
import React, { useState } from 'react'

function TabButtons() {
    const [activeTab, setActiveTab] = useState('Employees')

    const tabs = [
      'Employees',
      'Bank',
      'Project',
      'Talent',
      'Invoices',
      'Salary',
      'Tax',
      'Clients',
      'Invoicing',
      'Meeting',
    ];
  
    return (
      <div className='bg-[#F4F8FE] py-10 px-5 lg:px-16 pt-14 '>
<div className='bg-white py-3 lg:py-5 flex justify-center xl:justify-around flex-wrap gap-2 md:gap-2 lg:gap-4 xl:gap-0 rounded-lg shadow-md'>
  {tabs.map((tab) => (
    <button
      key={tab}
      className={`text-[#0D1D3A] py-[4px] md:py-[12px] px-2 md:px-6 text-[10px] sm:text-sm   md:text-base  lg:text-lg font-semibold rounded-[3px] ${
        activeTab === tab ? 'bg-[#0D1D3A] text-white' : 'bg-white hover:bg-gray-100'
      } transition-colors duration-300 ease-in-out`}
      onClick={() => setActiveTab(tab)}
    >
      {tab}
    </button>
  ))}
</div>
        <div className='mt-10 bg-white rounded-lg py-10 '>
        {(activeTab === 'Employees' || activeTab === 'Bank' || activeTab === 'Project'  || activeTab === 'Talent'  || activeTab === 'Invoices' || activeTab === 'Salary' || activeTab === 'Tax' || activeTab === 'Clients' || activeTab === 'Invoicing' || activeTab === 'Meeting') && ( <div className="flex flex-col md:flex-row justify-center md:justify-between px-5 h-auto lg:px-6 flex-wrap lg:flex-nowrap items-center">
  <img
    src="/62d5c4032b9246f259fce258_Get A Birds Eye View-p-1080.png"
    alt="error"
    className="mt-5 xl:mt-0 shadow-2xl h-auto w-full md:w-[40%]"
  />
  <div className="w-full md:w-[50%] md:ml-5 mt-5 md:mt-0">
    <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
      View Statistics about Your Product
    </h2>
    <p className="text-sm text-gray-800 font-medium lg:text-base mt-6">
      The product dashboard is your one-stop-shop for product management. It shows
      cost per unit, manufacturing process status, and supply chain information.
      Also, you can track sales data to make informed decisions.
    </p>
    <p className="text-sm text-[#366bff] font-semibold lg:text-base mt-6">
      Learn More About Creating Products
    </p>
  </div>
</div>
) }
        </div>
      </div>
    );
}

export default TabButtons