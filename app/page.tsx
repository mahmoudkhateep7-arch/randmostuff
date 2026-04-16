"use client";
import { useSelector } from 'react-redux';
import HeaderC from './header';
import { AppState } from './store';
import { YouTubeEmbed } from '@next/third-parties/google'
import './style.css'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowRightArrowLeft, faDeleteLeft, faPlus, faX } from '@fortawesome/free-solid-svg-icons';
const famousVideoIds = [
  "9bZkp7q19f0", // Gangnam Style - PSY
  "kJQP7kiw5Fk", // Despacito - Luis Fonsi
  "XqZsoesa55w", // Baby Shark Dance - Pinkfong
  "JGwWNGJdvx8", // Shape of You - Ed Sheeran
  "RgKAFK5djSk", // See You Again - Wiz Khalifa
  "OPf0YbXqDm0", // Uptown Funk - Mark Ronson ft. Bruno Mars
  "y6120QOlsfU", // Sandstorm - Darude
  "09R8_2nJtjg", // Sugar - Maroon 5
  "fWNaR-rxAic", // Roar - Katy Perry
  "ASO_zypdnsQ", // Waka Waka (This Time for Africa) - Shakira
  "ebXbLfLACGM", // Calvin Harris - Summer
  "YQHsXMglC9A", // Adele - Hello

];

const quotesList = [
  {
    id: 1,
    name: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop."
  },
  {
    id: 2,
    name: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing."
  },
  {
    id: 3,
    name: "Aristotle",
    quote: "Quality is not an act, it is a habit."
  },
  {
    id: 4,
    name: "Albert Einstein",
    quote: "Learn from yesterday, live for today, hope for tomorrow."
  },
  {
    id: 5,
    name: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken."
  },
  {
    id: 6,
    name: "Steve Jobs",
    quote: "The only way to do great work is to love what you do."
  },
  {
    id: 7,
    name: "Maya Angelou",
    quote: "If you find it in your heart to care for somebody else, you will have succeeded."
  },
  {
    id: 8,
    name: "Leonardo da Vinci",
    quote: "Simplicity is the ultimate sophistication."
  },
  {
    id: 9,
    name: "Mother Teresa",
    quote: "Peace begins with a smile."
  },
  {
    id: 10,
    name: "Helen Keller",
    quote: "Keep your face to the sunshine and you cannot see a shadow."
  }
];
const nOfHearts = 200

export default function HomePage() {
  const [arr, setArr] = useState([{ dur: `${Math.random() * 2}s`, lefto: `${Math.random() * 100}%` }])
  const [q, setQ] = useState(0)
  const [heart, setHeart] = useState(false);
  // const dispatch: AppDispatch = useDispatch()
  const { mode, titlebg, titleColor, sectionBg } = useSelector((state: AppState) => { return state.bgSlice })

  const [videoid, setVidoeId] = useState(0)
  const handleVidoInc = () => {
    if (videoid < famousVideoIds.length - 1) {
      setVidoeId((p) => { return p + 1 })
    } else {
      setVidoeId(0)
    }
  }
  const handleRandomQuote = () => {
    if (q < quotesList.length - 1) {
      setQ((p) => { return p + 1 })
    } else {
      setQ(0)
    }
  }
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const handleClicHearts = () => {
    const intervalFn = setInterval(() => {
      setArr((p) => { return [...p, { dur: `${Math.random() * 2 + 1}s`, lefto: `${Math.random() * 80 + 5}%` }] })
    }, 20);
    setTimeout(() => {
      clearInterval(intervalFn)
    }, 3000);

    setTimeout(() => {
      setArr([])

    }, 4400);

  }
  useEffect(() => {
    setTimeout(() => { handleClicHearts() }, 200)
  }, [])
  const FAQData = [
    {
      id: 1,
      question: "What are the primary benefits of adopting a microservices architecture?",
      answers: "Microservices offer increased scalability, as individual components can be scaled independently based on demand. They also improve fault isolation, ensuring that a failure in one service doesn't necessarily bring down the entire system, and allow teams to use different technology stacks tailored to specific needs."
    },
    {
      id: 2,
      question: "How does photosynthesis contribute to the global carbon cycle?",
      answers: "Photosynthesis acts as a primary carbon sink by capturing atmospheric carbon dioxide and converting it into organic compounds like glucose. This process stores energy in plant biomass and releases oxygen as a byproduct, effectively balancing the respiration of living organisms and the combustion of fossil fuels."
    },
    {
      id: 3,
      question: "Why is the concept of 'Zero Trust' becoming essential in modern cybersecurity?",
      answers: "Zero Trust operates on the principle of 'never trust, always verify,' moving away from traditional perimeter-based security. Since many breaches originate from within or through compromised credentials, it requires continuous authentication and strict access controls for every user and device, regardless of their location."
    }
  ];
  const [showAnser, setShowAnswer0] = useState(-1)

  const [arrayOfTime, setArrayOfTime] = useState(Date().split('GMT')[0].split(' '))
  useEffect(() => {
    setTimeout(() => {
      setArrayOfTime(Date().split('GMT')[0].split(' '))
    }, 500);
  }, [arrayOfTime])



  const thumnails = [
    'https://i.ytimg.com/vi/-ZVOwqJpuBY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBsFi-jdiPheo5ZJ2J1ElZL08fikw',
    'https://i.ytimg.com/an_webp/bniLuSI-3Gw/mqdefault_6s.webp?du=3000&sqp=CJSvg88G&rs=AOn4CLDlxOMIJGcxrEMbNN1jPxFKkFzaLg',
    'https://i.ytimg.com/an_webp/QON71m6rUBs/mqdefault_6s.webp?du=3000&sqp=CPyzg88G&rs=AOn4CLAD8XF2l6_t-9h0MOSadxfKU9IyLA',
    'https://i.ytimg.com/vi/rF0YgEMlu7k/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAGKHl9fjpulrkkedLfqbmQrd1xvQ',
    'https://i.ytimg.com/vi/PyonpkeiBQE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC4UZwX3X07X1UL8LA8isUrronWfg',
    'https://i.ytimg.com/vi/5KMY8qZXmBA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCuNHGVGEJOF_BSXaY64p9-SEo_IA'


  ]

  const [imgNumber, setImgNumber] = useState(1)




  const [dir, setDir] = useState('ltr')




  return (
    <div style={{ backgroundColor: mode }} className={` `}>
      {/* header */}
      <HeaderC></HeaderC>

      {/* who i am  */}
      <section className={`pt-4 overflow-hidden `}>
        <div className={`max-w-300 mx-auto px-4`}>
          <div style={{ backgroundColor: sectionBg }} className={`p-10 shadow-lg transition-all duration-500  `}>

            <h2 style={{ backgroundColor: titlebg, color: titleColor }} className={` text-center transition-all duration-300    text-4xl py-3 w-fit mx-auto px-20 rounded-full cursor-pointer max-[550px]:text-2xl max-[400px]:text-[16px] max-[380px]:px-10`}>Who am i?</h2>

            <div className={`flex pt-20 max-[900px]:flex-col max-[900px]:gap-10`}>

              <div style={{ color: '#444' }} className={`flex-1 px-6 `}>
                <h3 style={{ color: mode == 'white' ? 'black' : 'white' }} className={`text-3xl pb-5 font-bold  `}>My Goal</h3>
                <p style={{ color: mode == 'white' ? 'black' : 'white' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo nostrum animi inventore sequi explicabo facere qui, architecto cumque labore mollitia autem aspernatur assumenda exercitationem sint soluta placeat quod nesciunt magnam.</p>
                <div className={`pt-5 flex bg-amber-c400 gap-10 text-xl max-[500px]:flex-col max-[500px]:text-center `}>
                  <div className={`rounded-full bg-gray-800 text-white px-6 py-3 hover:bg-white hover:text-black cursor-pointer duration-200 border border-transparent hover:border-black max-[550px]:text-[16px]  `}>Learn More</div>
                  <div className={`rounded-full bg-gray-800 text-white px-6 py-3 hover:bg-white hover:text-black cursor-pointer duration-200 border border-transparent hover:border-black max-[550px]:text-[16px]  `}>Visit Website</div>
                </div>
              </div>

              <div className={`w-70   flex justify-center flex-1  max-[900px]:w-full`}>
                <Image className={`rounded-full w-75 lg:hover:rounded-none duration-300 transition-all h-75`} alt={'me image'} width={300} height={200} src={'https://i.ytimg.com/vi/chkdCIcFkO0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB8kz20az1SqMH_vpKS2nKkv1OZlA'} ></Image>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className={`py-10 overflow-hidden`}>
        <div className={`max-w-300 mx-auto px-4`}>
          <div style={{ background: sectionBg }} className={`shadow-lg  overflow-hidden transition-all duration-500   bg-white p-8`}>

            <h2 style={{ background: titlebg, color: titleColor }} className={`  flex py-4 rounded-full transition-all duration-300   flex-col gap-4 items-center text-center text-2xl max-[1100px]:text-2xl max-[900px]:text-xl`}>
              <span className={`text-5xl font-bold max-[1100px]:text-4xl max-[800px]:text-3xl`}>Courses4arab</span>
              <span>What Makes It Special</span>
            </h2>

            <div id={`ltr`} key={videoid} className={`pt-20 pb-10 relative   flex justify-center`}>
              <div className={`absolute h-8 w-8 bg-green-700 top-1/2 border-2 border-white -translate-y-1/2 flex justify-center items-center left-1 rounded-full`}>
                <span className={`bg-black w-2 h-2 rounded-full`}></span>
              </div>

              <YouTubeEmbed style={'border-radius: 20px;'} videoid={famousVideoIds[videoid]} height={400} width={720} params={'controls=1'}></YouTubeEmbed>

            </div>
            <div className={`flex justify-center max-[600px]:text-2xl text-3xl font-bold relative max-[800px]:bottom-10 max-[700px]:bottom-20 max-[650px]:bottom-30 max-[500px]:bottom-50`}>
              <h4 onClick={handleVidoInc} className={`bg-green-400 cursor-pointer px-10 py-4 rounded-full`}>Random Video</h4>
            </div>


          </div>
        </div>
      </section>

      <section className={` py-10 overflow-hidden`}>
        <div className={`max-w-300 mx-auto px-4`}>
          <div style={{ background: sectionBg }} className={`shadow-lg  overflow-hidden transition-all duration-500   bg-white p-8`}>

            {/* <h2 style={{ background: titlebg, color: titleColor }} className={`  flex py-10 rounded-full transition-all duration-300   flex-col gap-8 items-center text-center text-3xl`}>
              <span className={`text-3  xl font-bold `}>Random Motivational</span>
              <span>Quotes</span>
            </h2> */}

            <h2 style={{ background: titlebg, color: titleColor }} className={`  flex py-4 rounded-full transition-all duration-300   flex-col gap-4 items-center text-center text-2xl max-[1100px]:text-2xl max-[900px]:text-xl`}>
              <span className={`text-5xl font-bold max-[1100px]:text-4xl max-[800px]:text-3xl`}>Random Motivational</span>
              <span>Quotes</span>
            </h2>

            <div className={'h-4'}></div>
            <div id={`ltr`} key={q} className={`pt-20 bg-ambecr-200  relative   flex justify-center`}>
              <div className={`absolute h-full w-2 bg-green-700 top-0   bottom-0   flex justify-center items-center left-0 `}>

              </div>

              <div id={'rtll'} className={`flex px-4 flex-col gap-10 pb-20 justify-center items-center text-center`}>
                <h3 className={`text-2xl font-medium`}>{quotesList[q].name}</h3>
                <p className={`text-3xl font-semibold`}>"{quotesList[q].quote}"</p>
              </div>


            </div>
            <div className={'h-4'}></div>

            <div className={`flex justify-center text-3xl font-bold`}>
              <h4 onClick={handleRandomQuote} className={`bg-green-400 cursor-pointer px-10 py-4 rounded-full`}>Random Quote</h4>
            </div>


          </div>
        </div>
      </section>



      <div>
        {arr.length > 1

          &&
          <div >

            {arr.map((item, index) => {

              return (
                <div key={index}>
                  <div id={`ani`} style={{ left: mounted ? item.lefto : '', animationDuration: mounted ? item.dur : '' }} className={`fixed z-50  text-3xl `} >{index % 2 === 0 ? '❤' : '💛'}</div>

                </div>
              )
            })}
          </div>
        }
      </div>


      <section className={` py-20 px-4`}>
        <div style={{ background: sectionBg }} className={`max-w-300 mx-auto px-4`}>
          <div className={`flex flex-col gap-5 py-15 `}>
            {FAQData.map((item, index) => {

              return (
                <div key={item.id} className={`flex  flex-col gap-3  `}>
                  <div className={`flex gap-10 bg-blue-900 p-3 justify-between items-center text-2xl max-[800px]:text-xl text-white`}>
                    <h3 className={`flex-1`}>{item.question}</h3>
                    {showAnser == index &&
                      <span className={`cursor-pointer  bg-gray-200 max-[700px]:text-[14px] max-[700px]:w-10 text-black text-xl rounded-full w-10 h-10 flex justify-center items-center `} onClick={() => { setShowAnswer0(-1) }}><FontAwesomeIcon icon={faX}></FontAwesomeIcon></span>
                    }


                    {showAnser != index &&

                      <span className={`cursor-pointer text-xl bg-gray-700 rounded-full w-10 h-10 flex justify-center items-center`} onClick={() => { setShowAnswer0(index) }}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></span>

                    }
                  </div>
                  {
                    <p style={{ maxHeight: showAnser === index ? 540 : 0 }} className={`px-4 ${showAnser == index && 'py-4'} flex rounded-[0px_0px_20px_20px] border-b border-transparent hover:border-b-lime-100  items-center text-xl transition-all duration-300 text-white bg-blue-600  overflow-hidden`}>{`${index + 1}- ${item.answers}`}</p>

                  }

                </div>
              )
            })}
          </div>
        </div>
      </section>


      <section className={` px-4`}>
        <div style={{ background: sectionBg }} className={`max-w-300 py-8 mx-auto flex justify-center`}>

          <div className={`flex flex-col gap-3 bg-blue-600   p-4 rounded-xl text-white`}>
            <h4 className={`text-center text-xl flex gap-1 justify-center`}>
              {arrayOfTime.map((item, dex) => {
                if (dex > 3) { return }


                return (
                  <span key={dex}>{mounted && item}</span>
                )
              })}
            </h4>

            {mounted &&

              <h2 className={`text-center text-3xl flex items-center   w-50`}>
                <div className={`w-40 `}>
                  {arrayOfTime[4].split(':').map((item, dex) => {
                    let a = Number(item)

                    if (dex == 0) {
                      if (a > 12 && a < 13) {
                        a = 1;
                      }
                      if (a >= 13) {
                        a = a - 12
                      }
                      console.log()
                    }

                    return (
                      <span key={dex}>{a} {dex == 2 ? '' : ': '}</span>
                    )
                  })}
                </div>
                <span className={`text-xl w-10 pr-4 `}>{new Date().getHours() > 12 ? 'PM' : 'AM'}</span>

              </h2>
            }

          </div>

        </div>
      </section>



      <section className={` py-20 overflow-hidden`}>
        <div className={`max-w-300 mx-auto px-4`}>

          <div style={{ backgroundColor: sectionBg }} className={`p-10 shadow-lg transition-all duration-500  `}>

            <h2 style={{ backgroundColor: titlebg, color: titleColor }} className={` text-center transition-all duration-300    text-4xl py-3 border max-[600px]:text-xl max-[500px]:text-[14px]    mx-auto px-20 rounded-full cursor-pointer`}>Slider | SlideShow</h2>
            <div className={`h-8`}></div>
            <div id={dir} key={imgNumber} className={` w-fit mx-auto flex justify-center   relative`}>
              <div className={`absolute text-white bg-gray-700 rounded-2xl left-0 top-0 text-xl px-4 py-2 hover:opacity-0`}>#slide {imgNumber} of {thumnails.length}</div>
              <Image className={`rounded-2xl w-200 h-70`} src={thumnails[imgNumber - 1]} alt={'a'} width={380} height={180}></Image>
            </div>


            <div className={`flex bg-am ber-200 relative max-[415px]:right-7 gap-10 max-[575px]:gap-3 max-[515px]:gap-1 max-[515px]:px-0 items-center justify-between pt-10 px-10`}>

              {/* prev */}
              <div onClick={() => { if (imgNumber > 1) { setImgNumber((p) => { return p - 1 }); setDir('rtl') } }} className={`flex items-center gap-2 ${imgNumber > 1 ? 'bg-white' : 'bg-gray-500'} rounded-[20px_0px_0px_20px] max-[450px]:gap-0 p-2 text-xl max-[700px]:text-[14px] cursor-pointer`}>
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                <span>Prev</span>
              </div>

              {/* middle */}
              <div className={`flex gap-2`}>
                {thumnails.map((itme, dex) => {
                  return (
                    <span key={dex} onClick={() => { setImgNumber(dex + 1) }} className={` p-2 ${imgNumber == dex + 1 ? 'bg-black text-white' : 'bg-white text-black'} rounded-full max-[700px]:text-[14px] max-[450px]:gap-0 max-[700px]:w-6 max-[700px]:h-6 items-center w-10 h-10 flex justify-center cursor-pointer`}>{dex + 1}</span>

                  )
                })}

              </div>

              {/* next */}
              <div onClick={() => { if (imgNumber - 1 < thumnails.length - 1) { setImgNumber((p) => { return p + 1 }); setDir('ltr') } }} className={`flex items-center gap-2 ${imgNumber == thumnails.length ? 'bg-gray-500' : 'bg-white'} rounded-[0px_20px_20px_0px] p-2 max-[700px]:text-[14px] max-[450px]:gap-0 text-xl cursor-pointer`}>

                <span>Next</span>

                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>

              </div>

            </div>




          </div>

        </div>
      </section >


    </div >
  )
}