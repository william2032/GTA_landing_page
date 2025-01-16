import { images } from "../constants"

// TODO add Animation

const Screenshot = () => {
  return (
    <div className="container max-w-screen-xl mx-auto my-12 overflow-hidden  p-6 screenshot  "  >
      {/* slider container */}
      <div className="flex flex-row gap-4 transition-transform duration-500 ease-in-out list  ">
        {images.map((image, index) => (
          <div key={index} className="relative flex-shrink-0 mx-auto w-96 sm:w-1/4 ">
              <img src={image.img} alt={image.id} className="w-full h-auto  p-3 m object-cover items-center  " />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Screenshot