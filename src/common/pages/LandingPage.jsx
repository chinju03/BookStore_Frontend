import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HiMiniMagnifyingGlass, HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { getHomeBookAPI } from '../../services/allAPI';

function LandingPage() {
  const [homeBook, setHomeBook] = useState([])

  const getHomeBooks = async() =>{
    const result = await getHomeBookAPI()
    console.log(result);
    setHomeBook(result.data)
  }

  useEffect(()=>{
    getHomeBooks()
  },[])
  return (
    <>
      <Header />
      {/* landing */}
      <div style={{ height: "500px" }} className='flex flex-col justify-center items-center bg-[url(https://images.pexels.com/photos/7831337/pexels-photo-7831337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-no-repeat  bg-cover bg-center text-white'>
        <div className='w-full flex flex-col justify-center items-center' style={{ height: "500px", backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <h1 className='text-5xl font-bold'>Wonderful Gifts</h1>
          <p>Give your family and friends a book</p>
          <div className='mt-9 flex'>
            <input type="text" placeholder='search book' className='bg-white p-3 rounded-3xl placeholder-gray-500 w-100' />
            <HiMiniMagnifyingGlass className='text-gray-500 text-2xl mt-3' style={{ marginLeft: "-40px" }} />
          </div>
        </div>
      </div>

      {/* new arrivals */}
      <section className='md:px-40 p-5 flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>NEW ARRIVALS</h1>
        <h1>Explore our latest collection</h1>

        {homeBook.length>0 ? 
        <div className='md:grid grid-cols-4 w-full mt-5 '>
          {homeBook.map((item)=>(
            <div className='p-3'>
            <div className='shadow p-3 rounded'>
              <img height={"300px"} width={"100%"} src={item.imageUrl} alt="" />
              <div className='text-center mt-3'>
                <p className='font-bold text-l'>{item.title}</p>
                <p className='font-semibold text-md'>{item.author}</p>
                <p className='font-bold'>{item.price}</p>
              </div>
            </div>
          </div>
          ))}
        </div>
        :
        <p>loading.....</p>}
        <div className='text-center my-5'>
          <Link to={'all-books'}> <button className='px-3 py-2 bg-blue-900 text-white hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white'>Explore More</button></Link>
        </div>
      </section>
      {/* feature  */}
      <section>
        <div className='md:flex justify-center items-center bg-gray-100 m-10'>
          <div className='grid md:grid-cols-2 grid-cols-1 p-10'>
            <div className='text-justify'>
              <div className='text-center mb-3'>
                <h3 className='text-l font-bold'>Featured Authors</h3>
                <h2 className='text-xl font-bold'>Captivates with every word</h2>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quae cumque consectetur consequuntur, amet quisquam cum iusto nemo eligendi provident facere praesentium facilis esse. Nostrum ducimus debitis labore possimus. Illo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, sit aut commodi, enim corrupti at consectetur aliquam impedit laborum mollitia iste! Accusamus similique architecto culpa quibusdam est odit ipsum repudiandae.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat officia et consectetur sunt molestiae? Molestiae officia atque dolore similique itaque, distinctio dicta mollitia sint temporibus ab rerum rem doloribus magnam.amet consectetur adipisicing elit. Placeat officia et consectetur sunt molestiae? Molestiae officia atque dolore similique itaque, distinctio dicta mollitia sint temporibus ab rerum rem doloribus magnam. </p>
            </div>
            <div className='flex justify-center items-center'>
              <img src="https://us.123rf.com/450wm/rido/rido1904/rido190400035/121442290-successful-senior-man-with-folded-arms-standing-over-grey-background-handsome-mature-black.jpg?ver=6" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* testm */}
      <section className='p-5 flex flex-col justify-center items-center'>
        <div className=' bg-white m-10'>
          <div className='text-center mb-3'>
            <h2>TESTIMONALS</h2>
            <h1>See What Others Are Saying</h1>
          </div>
          <div className='md:grid grid-cols-4 w-full mt-5'>
            <div className='p-3'>
              <div className='shadow p-3 rounded'>
                <img className='mx-auto block' style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }} src="https://www.shutterstock.com/image-photo/portrait-mature-black-man-smiling-260nw-551420164.jpg" alt="" />
                <div className='text-center mt-3'>
                  <p className='font-small text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis natus delectus debitis</p>
                </div>
              </div>
            </div>
            <div className='p-3'>
              <div className='shadow p-3 rounded'>
                <img className='mx-auto block' style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }}src="https://www.shutterstock.com/image-photo/portrait-mature-black-man-smiling-260nw-551420164.jpg"  alt="" />
                <div className='text-center mt-3'>
                  <p className='font-small text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis natus delectus debitis</p>
                </div>
              </div>
            </div>
            <div className='p-3'>
              <div className='shadow p-3 rounded'>
                <img className='mx-auto block' style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }} src="https://www.shutterstock.com/image-photo/portrait-mature-black-man-smiling-260nw-551420164.jpg"  alt="" />
                <div className='text-center mt-3'>
                  <p className='font-small text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis natus delectus debitis</p>
                </div>
              </div>
            </div>
            <div className='p-3'>
              <div className='shadow p-3 rounded'>
                <img className='mx-auto block' style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }} src="https://www.shutterstock.com/image-photo/portrait-mature-black-man-smiling-260nw-551420164.jpg"  alt="" />
                <div className='text-center mt-3'>
                  <p className='font-small text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis natus delectus debitis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default LandingPage