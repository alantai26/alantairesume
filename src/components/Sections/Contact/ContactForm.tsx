// src/components/Sections/Contact/ContactForm.tsx

import {FC, memo} from 'react';

const ContactForm: FC = memo(() => {
  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    // We've removed the 'onSubmit' handler and added the 'action' and 'method' attributes.
    <form
      action="https://formspree.io/f/mrbkaydp" // <-- YOUR URL IS HERE
      className="grid min-h-[320px] grid-cols-1 gap-y-4"
      method="POST">
      {/* The 'name' attribute is what Formspree uses for the field label in the email. */}
      <input className={inputClasses} name="name" placeholder="Name" required type="text" />

      <input
        autoComplete="email"
        className={inputClasses}
        name="email" // Formspree uses this as the user's reply-to address.
        placeholder="Email"
        required
        type="email"
      />

      <textarea className={inputClasses} maxLength={250} name="message" placeholder="Message" required rows={6} />

      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
