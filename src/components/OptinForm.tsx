import NextImage from "@/components/NextImage";

interface OptinFormProps {
  formName: string
  heading: string
  description?: string 
  buttonText?: string 
  imageUrl: string
  redirectUrl?: string
  smallcaps?: string
}

export default function OptinForm({ formName, heading, description, smallcaps, buttonText, imageUrl, redirectUrl }: OptinFormProps){
  return(
    <>
      <div className="flex items-center justify-center">

      <div className="mx-auto rounded-lg shadow-xl bg-white p-12 flex items-stretch space-x-16">
        <div className="flex flex-col items-start space-y-4 w-80">
          
          {
            smallcaps ? <p className="smallcaps">{smallcaps}</p> : ''
          }

          <h2 className="mb-0">{heading}</h2>

          {
            description ? <p>{description}</p> : ''
          }

          <form 
            className="mt-12 flex flex-col items-stretch w-full space-y-4" 
            name={formName} 
            id={formName} 
            action={ redirectUrl ? redirectUrl : "/thank-you" }
            netlify
          >

            <input className="form-control border border-gray-500 p-2 px-3" type="text" name="name" id="name" placeholder="Name" required />
            <input className="form-control border border-gray-500 p-2 px-3" type="email" name="email" id="email" placeholder="Email Address" required />
            <button 
              className="px-8 py-3 text-sm font-light uppercase tracking-wide bg-gray-700 text-white border border-gray-600 rounded-none font-sans hover:bg-gray-600 active:bg-gray-500 disabled:bg-gray-500" 
              form={formName}
            >{buttonText ? buttonText : 'submit'}</button>
          </form>
        </div>

        {/* rightside */}
        <div className="overflow-hidden aspect-square	rounded block">
          <NextImage 
            src={imageUrl}
            alt=""
            width="400"
            height="400"
            className="overflow-hidden block rounded shadow aspect-square h-full w-full object-cover	"
          />
        </div>
      </div>

      </div>

    </>
  )
}