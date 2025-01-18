import { gameInfos } from '../constants'

const Info = () => {
  return (
    // video trailer container with  game information

    <div className='container max-w-screen-xl mx-auto  info text-white font-poppins' id='About'>
      <div className='max-w-screen-md min-h-screen'>
        <iframe width="768" height="500" src="https://www.youtube.com/embed/QdBZY2fkU-0"
          title="Grand Theft Auto VI Trailer 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className='flex flex-row  justify-center'>
        {gameInfos.map((gameinfo) => (
          <div key={gameinfo.title}>
            <h4 className='text-white text-lg '> {gameinfo.title} </h4>
            <ul className='justify-center space-y-3 '>
              {gameinfo.infos.map((info, index) => (
                <li key={index}>
                  {info.name && <span>{info.name} </span>}
                  {info.Date && <span id='date'>{info.Date} </span>}
                </li>
              ))}
            </ul>
            <ul id='image'>
              {gameinfo.infos.map((info, index) => (
                <li key={index}>
                  {info.img && <span><img src={info.img} alt="Age rating" className=' my-2 items-center  object-contain ' /></span>}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>


    </div>

  )
}

export default Info