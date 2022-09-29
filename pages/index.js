import Slider from "../components/Slider";

export default function Home() {
  return (
    <section className='container'>
        <div className='screen-one'>
            <h1>
                Егор, поздравляю тебя с днем рождения!
            </h1>
            <h2>
                в этот змечательный день у меня есть пачка пожеланий
            </h2>
        </div>
      <Slider/>
    </section>
  )
}
