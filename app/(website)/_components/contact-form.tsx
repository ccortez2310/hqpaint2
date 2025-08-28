'use client'
import { RefreshCw } from 'lucide-react'
import React, { FC, useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

type ContactFormProps = {
   services: any[]
}

let contactErrors = {
   name: '',
   email: '',
   message: '',
   captcha: '',
}

const ContactForm: FC<ContactFormProps> = ({ services }) => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')
   const [selectedServices, setSelectedServices]: any[] = useState([])
   const [sending, setSending] = useState(false)
   const [result, setResult] = useState({
      type: 'success',
      open: false,
   })
   const recaptchaRef = useRef<ReCAPTCHA>(null)

   const [errors, setErrors] = useState(contactErrors)

   const resetForm = () => {
      contactErrors = {
         name: '',
         email: '',
         message: '',
         captcha: '',
      }

      setName('')
      setEmail('')
      setMessage('')
      setSelectedServices([])
      if (recaptchaRef.current) {
         recaptchaRef.current.reset()
      }
      setErrors(contactErrors)
   }

   const handleSubmit = (e: any) => {
      e.preventDefault()

      contactErrors = {
         name: '',
         email: '',
         message: '',
         captcha: '',
      }

      //validate required fields
      let isValid: boolean = true

      if (name.length == 0) {
         contactErrors.name = 'Required field'
         isValid = false
      }

      if (email.length == 0) {
         contactErrors.email = 'Required field'
         isValid = false
      }

      if (
         email.length > 0 &&
         !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{3,})$/i)
      ) {
         contactErrors.email = 'Invalid email'
         isValid = false
      }

      if (message.length == 0) {
         contactErrors.message = 'Required field'
         isValid = false
      }

      if (message.length > 0 && message.length <= 10) {
         contactErrors.message = 'Please give more details about your project.'
         isValid = false
      }

      const captchaValue = recaptchaRef.current?.getValue()
      if (!captchaValue) {
         contactErrors.captcha = 'Please verify that you are not a robot'
         isValid = false
      }

      if (!isValid) {
         setErrors(contactErrors)
         return
      }

      let data = {
         name,
         email,
         message,
         services: selectedServices,
         captchaToken: captchaValue,
      }

      setSending(true)

      fetch('/api/contact', {
         method: 'POST',
         headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      })
         .then(async (res) => {
            setSending(false)
            if (res.status === 200) {
               resetForm()
               setResult({ type: 'success', open: true })
            } else {
               const errorData = await res.json().catch(() => ({}))
               console.error('API Error:', res.status, errorData)
               setResult({ type: 'error', open: true })
            }
         })
         .catch((error) => {
            console.error('Network Error:', error)
            setSending(false)
            setResult({ type: 'error', open: true })
         })

      setTimeout(() => {
         setResult({ type: 'success', open: false })
      }, 8000)
   }

   const handleServiceCheckbox = (e: any) => {
      const { value, checked } = e.target

      let serv = selectedServices

      if (checked) {
         setSelectedServices([...serv, value])
      } else {
         setSelectedServices(serv.filter((e: any) => e !== value))
      }
   }

   return (
      <form className="mt-5" onSubmit={handleSubmit}>
         <div className="space-y-1.5">
            <label htmlFor="name" className="font-medium text-sm">
               Name <span className="text-red-600">*</span>
            </label>
            <input
               type="text"
               className="input h-12"
               id="name"
               onChange={(e) => {
                  setName(e.target.value)
               }}
               value={name}
            />
            {errors.name.length > 0 && (
               <div className="text-red-600 text-sm">{errors.name}</div>
            )}
         </div>
         <div className="space-y-1.5 mt-3">
            <label htmlFor="email" className="font-medium text-sm">
               Email <span className="text-red-600">*</span>
            </label>
            <input
               type="email"
               className="input h-12"
               id="email"
               onChange={(e) => {
                  setEmail(e.target.value)
               }}
               value={email}
            />
            {errors.email.length > 0 && (
               <div className="text-red-600 text-sm">{errors.email}</div>
            )}
         </div>
         <div className="mt-5">
            <div className="font-medium text-sm">How can we help?</div>
            <div className="mt-3 columns-2 lg:columns-3">
               {services.map((service) => (
                  <div key={service._id} className="flex items-start">
                     <div className="flex mb-2">
                        <input
                           type="checkbox"
                           className="h-5 w-5 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-blue-900 bg-background"
                           id={service.name}
                           onChange={handleServiceCheckbox}
                           value={service.name}
                           checked={selectedServices.includes(service.name)}
                        />
                        <label
                           htmlFor={service.name}
                           className="text-sm ml-2 text-foreground"
                        >
                           {service.name}
                        </label>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="space-y-1.5 mt-3">
            <label htmlFor="message" className="font-medium text-sm">
               Message <span className="text-red-600">*</span>
            </label>
            <textarea
               className="input"
               id="message"
               placeholder="Tell us more about your project."
               rows={4}
               onChange={(e) => {
                  setMessage(e.target.value)
               }}
               value={message}
            ></textarea>
            {errors.message.length > 0 && (
               <div className="text-red-600 text-sm">{errors.message}</div>
            )}
         </div>
         <div className="mt-5">
            <ReCAPTCHA
               ref={recaptchaRef}
               sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
               theme="light"
            />
            {errors.captcha.length > 0 && (
               <div className="text-red-600 text-sm mt-1">{errors.captcha}</div>
            )}
         </div>
         <div className="mt-5">
            <button
               type="submit"
               className="w-full inline-flex items-center justify-center space-x-2 md:w-auto rounded-lg text-sm font-semibold py-3 px-5 bg-primary text-white"
            >
               {sending && <RefreshCw className="h-6 w-6 animate-spin" />}
               <span>{sending ? 'Sending' : 'Submit'}</span>
            </button>
         </div>

         {result.open && result.type === 'success' && (
            <div className="mt-5 rounded-md p-5 bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100">
               Your message has been successfully sent
            </div>
         )}

         {result.open && result.type === 'error' && (
            <div className="mt-5 rounded-md p-5 bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100">
               An error occurred while trying to send the message, please try
               again later
            </div>
         )}
      </form>
   )
}

export default ContactForm
