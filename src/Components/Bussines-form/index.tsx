import React from 'react'

function BussinesForm() {
  return <>
  
  <div className="max-w-2xl  bg-white  p-6 xl:p-16 shadow-2xl">
<h1 className='text-3xl mb-8 font-mono font-semibold'>Create a Preregistration <br /> For Business</h1>
	<form>
       
    <div className="mb-8">
    <h1 className="block text-xl font-axiforma font-medium">First Name</h1>
    <input 
        type="text"  
        className="border-b border-gray-300 focus:border-black focus:outline-none text-sm block w-full py-2"
        placeholder="Enter Your First Name"
        required
    />
</div>

<div className="mb-8">
    <h1 className="block text-xl font-axiforma font-medium">Last Name</h1>
    <input 
        type="text"  
        className="border-b border-gray-300 focus:border-black focus:outline-none text-sm block w-full py-2"
        placeholder="Enter Your Last Name"
        required
    />
</div>

<div className="mb-8">
    <h1 className="block text-xl font-axiforma font-medium">Email</h1>
    <input 
        type="text"  
        className="border-b border-gray-300 focus:border-black focus:outline-none text-sm block w-full py-2"
        placeholder="Your Email Goes Here"
        required
    />
</div>

<div className="mb-8">
    <h1 className="block text-xl font-axiforma font-medium">Phone Number</h1>
    <input 
        type="text"  
        className="border-b border-gray-300 focus:border-black focus:outline-none text-sm block w-full py-2"
        placeholder=" Enter Your Phone Number"
        required
    />
</div>

<div className="mb-8">
    <h1 className="block text-xl font-axiforma font-medium">Company Name</h1>
    <input 
        type="text"  
        className="border-b border-gray-300 focus:border-black focus:outline-none text-sm block w-full py-2"
        placeholder=" Enter Your Company Name"
        required
    />
</div>
    <div className="flex  items-center mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <label htmlFor="remember" className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" className="text-blue-600 underline hover:no-underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
    <button type="submit" className="text-white bg-[#366bff]    font-medium rounded-md text-lg w-full sm:w-auto px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

	<p className="mt-5 text-xs">Already have an account? <a className="text-blue-600  text-xs hover:underline"
			href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Log In</a>.
	</p>
</div>
  
  </>
}
export default BussinesForm