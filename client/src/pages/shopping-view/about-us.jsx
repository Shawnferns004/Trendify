import { useDispatch, useSelector } from 'react-redux';
import { subscribe } from './../../store/newsletter/index';
import { useToast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { RiDatabase2Line, RiFileTextLine } from 'react-icons/ri';
import { Check, Clock11, GitCommitVertical, Navigation, PhoneCall } from 'lucide-react';
import { submitContactForm } from '@/store/contact';

const ShoppingAboutUs = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { isLoading: isNewsletterLoading, error: newsletterError, success: newsletterSuccess } = useSelector((state) => state.subscription);
  const { loading: isContactLoading, error: contactError, success: contactSuccess } = useSelector((state) => state.contact);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    newsletter: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (Object.keys(newErrors).length === 0) {
      dispatch(submitContactForm(formData));
      toast({ title: 'Message sent successfully!' }); // Optional immediate feedback
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        newsletter: false,
      });
    } else {
      setErrors(newErrors);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    dispatch(subscribe(email));
    e.target.reset();
  };

  // Show success or error toast for newsletter
  useEffect(() => {
    if (newsletterSuccess) {
      toast({ title: 'Subscribed successfully' });
    } else if (newsletterError) {
      toast({ title: 'Already subscribed or invalid email' });
    }
  }, [newsletterSuccess, newsletterError, toast]);

  // Show success or error toast for contact form
  useEffect(() => {
    if (contactSuccess) {
      toast({ title: 'Message sent successfully!' });
    } else if (contactError) {
      toast({ title: 'Error sending message' });
    }
  }, [contactSuccess, contactError, toast]);

  return (
    <div className="bg-gray-50 py-8">
      {/* About Us Content */}
      

      <section class="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
  <div className="text-center mb-16">
    <p className="text-sm leading-7 text-gray-500 font-regular">
      Know
    </p>
    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
      About <span className="text-indigo-600">Us</span>
    </h3>
  </div>
  <section class="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
    <img class="xl:max-w-6xl" src="https://images.pexels.com/photos/5990153/pexels-photo-5990153.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1860" alt=""/>
    <div class="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
      <div class="flex justify-between font-bold text-sm">
        <p>Website Overview</p>
        <p class="text-gray-400">26th March, 2003</p>
      </div>
      <h2 class="text-3xl font-semibold mt-4 md:mt-10">Welcome to Trendify</h2>
      <p class="my-3 text-justify font-medium text-gray-700 leading-relaxed">
      At Trendify, we believe in making style accessible to everyone. Our rental platform allows you to explore a vast selection of trendy clothing and accessories without the hefty price tag. Whether you're dressing up for a special event or looking to refresh your wardrobe, we've got you covered.

      </p>
      <p class="my-3 text-justify font-medium text-gray-700 leading-relaxed">
      Our mission is to promote sustainability in fashion by encouraging the sharing of stylish pieces. We partner with top designers and brands to offer a unique selection that allows you to express your individuality while being environmentally conscious.
      </p>
      <button class="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">Read More</button>
    </div>
  </section>
</section>






<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div class="text-center">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Empowering Renters<span className="text-indigo-600">Globally</span>
        </h3>
        <p class="mt-4 text-lg leading-8 text-gray-600">
          Trendify is trusted by users worldwide to enhance their fashion choices, streamline their rental experiences, and promote sustainable style.
        </p>
      </div>
      <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col bg-gray-200/50 p-8">
          <dt class="text-sm font-semibold leading-6 text-gray-600">Active Users</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">45,678</dd>
        </div>
        <div class="flex flex-col bg-gray-200/50 p-8">
          <dt class="text-sm font-semibold leading-6 text-gray-600">Rentals Today</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">2,987</dd>
        </div>
        <div class="flex flex-col bg-gray-200/50 p-8">
          <dt class="text-sm font-semibold leading-6 text-gray-600">Total Revenue</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">$8.3M</dd>
        </div>
        <div class="flex flex-col bg-gray-200/50 p-8">
          <dt class="text-sm font-semibold leading-6 text-gray-600">Satisfied Customers</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">97%</dd>
        </div>
      </dl>
    </div>
  </div>
</div>



<div className="mt-5 text-center mb-16">
  <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
    Stay ahead in style
  </p>
  <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
    Subscribe to <span className="text-indigo-600">Trendify</span>
  </h3>
</div>
{/* Subscription Section */}
<div className="flex h-full justify-center items-center dark:bg-gray-800">
  <div className="p-6">
    <div className="flex flex-wrap items-center w-full max-w-5xl p-5 mx-auto text-left border border-gray-200 rounded lg:flex-nowrap md:p-8 dark:border-gray-700">
      <div className="flex-1 w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
        <h3 className="mb-2 text-2xl font-bold text-gray-700 dark:text-gray-200">Subscribe to Our Newsletter</h3>
        <p className="text-gray-500 dark:text-gray-400">
         Exclusive updates on new rental collections, style tips, and special promotions tailored just for you.
        </p>
      </div>
      <div className="w-full px-1 flex-0 md:w-auto lg:w-1/2">
        <form onSubmit={onSubmitHandler} noValidate>
          <input type="hidden" name="tags" value="earlyaccess" />
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="flex-1 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md sm:mr-5 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              required
              aria-label="Email Address"
            />
            <button
              type="submit"
              className={`w-full px-6 py-4 mt-5 text-white text-lg bg-gray-900 rounded-md sm:mt-0 sm:w-auto whitespace-nowrap ${isNewsletterLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isNewsletterLoading}
              aria-label="Subscribe Button"
            >
              {isNewsletterLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


<section class="bg-black overflow-visible my-0 py-24 mt-24">
  <div class="text-white items-center text-center flex flex-col">
    <h2 class="font-bold text-2xl lg:text-4xl">Embark on Your Style Adventure</h2>
    <p class="mx-auto mt-6 max-w-xl text-lg md:text-xl leading-8 text-slate-400">
      Discover the latest trends without the commitment. Rent stylish clothing and accessories that elevate your wardrobe. 
      Book your favorite items today and unlock a world of fashion possibilities.
    </p>
    <a class="mt-8 rounded-md bg-white px-5 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-200 transition focus:outline-none focus:ring focus:border-blue-300"
      href="#">Claim Your 15% Off Your First Rental! Start Now</a>
  </div>
</section>





<div className="mt-20 text-center mb-16">
    <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
        F.A.Q
    </p>
    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
        Frequently Asked <span className="text-indigo-600">Questions</span>
    </h3>
</div>
<div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
    <div className="mx-auto px-5">
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> How does the rental process work?</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Simply browse our collection, choose the items you want, select your rental period, and proceed to checkout. Your items will be delivered to your door!</p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Can I return items late?</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Late returns may incur additional fees. We recommend returning your items on or before the due date to avoid any extra charges.</p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> How do I cancel my rental?</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">You can cancel your rental by logging into your account and navigating to your order history. From there, you can select the item you wish to cancel.</p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Is there a rental minimum?</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Yes, there is a minimum rental period of three days for all items to ensure affordability and sustainability.</p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> How do I contact customer support?</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">For assistance, please reach out to our support team via the help center on our website or email support@trendify.com.</p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Do you offer discounts for new customers?</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Yes, new customers can enjoy a 15% discount on their first rental. Subscribe to our newsletter for updates on special offers.</p>
                </details>
            </div>
        </div>
    </div>
</div>

      {/* Contact Section */}
      <div className="max-w-screen-lg mx-auto p-5">
  <div className="mt-20 text-center mb-16">
    <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
      Information
    </p>
    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
      Contact <span className="text-indigo-600">Us</span>
    </h3>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-12 border">
    <div className="bg-gray-900 md:col-span-4 p-10 text-white">
      <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
      <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
        Get In <span className="text-indigo-600">Touch</span>
      </h3>
      <p className="mt-4 leading-7 text-gray-200">
      At Trendify, we provide a variety of rentals, from trendy clothing to high-end furniture, for a seamless experience.      </p>

      {/* Contact Information */}
      <div className="flex items-center mt-5">
        <Navigation className="h-6 mr-2 text-indigo-600" />
        <span className="text-sm">123 Trendy St, Style City, CA 90210</span>
      </div>
      <div className="flex items-center mt-5">
        <PhoneCall className="h-6 mr-2 text-indigo-600" />
        <span className="text-sm">+1 (800) 555-0199</span>
      </div>
      <div className="flex items-center mt-5">
        <Clock11 className="h-6 mr-2 text-indigo-600" />
        <span className="text-sm">24/7 Customer Support</span>
      </div>
    </div>

    <form className="md:col-span-8 p-10" onSubmit={handleSubmit}>
      {/* Form Fields */}
      {/* First Name */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label htmlFor="firstName" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            First Name
          </label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${errors.firstName ? 'border-red-500' : 'border-gray-200'}`}
            id="firstName"
            type="text"
            placeholder="Jane"
            aria-describedby="firstNameError"
          />
          {errors.firstName && <p id="firstNameError" className="text-red-500 text-xs italic">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div className="w-full md:w-1/2 px-3">
          <label htmlFor="lastName" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Last Name
          </label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="lastName"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Email
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
            id="email"
            type="email"
            placeholder="jane.doe@example.com"
            required
            aria-describedby="emailError"
          />
          {errors.email && <p id="emailError" className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label htmlFor="message" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="message"
            placeholder="Your message here..."
          />
        </div>
      </div>

      {/* Newsletter Checkbox */}
      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
          className="mr-2 leading-tight"
        />
        <label className="text-gray-700 text-sm">
          Subscribe to our newsletter
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isContactLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isContactLoading}
      >
        {isContactLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  </div>
</div>

    </div>
  );
};

export default ShoppingAboutUs;
