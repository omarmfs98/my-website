import { CMS_NAME } from '../lib/constants'
import HeroPost from '../components/hero-post'

const age = () => {
  return new Date().getFullYear() - 1998
}

const skills = [
  { name: "Vue.js", icon: '/assets/me/skills/vue.svg', w: 12 },
  { name: "React.js", icon: '/assets/me/skills/react.svg', w: 12 },
  { name: "Nuxt.js", icon: '/assets/me/skills/nuxt.svg', w: 12 },
  { name: "Next.js", icon: '/assets/me/skills/next.svg', w: 12 },
  { name: "Firebase", icon: '/assets/me/skills/firebase.svg', w: 16 },
  { name: "Laravel", icon: '/assets/me/skills/laravel.svg', w: 16 },
  { name: "Django", icon: '/assets/me/skills/django.svg', w: 12 },
  { name: "Amazon Web Services", icon: '/assets/me/skills/aws.svg', w: 12 },
  { name: "Strapi", icon: '/assets/me/skills/strapi.svg', w: 16 },
  { name: "Dialogflow", icon: '/assets/me/skills/dialogflow.svg', w: 16 },
];

export default function Intro({ posts }) {
  const heroPost = posts[0]
  return (
    <section className="container flex-col md:flex-row flex items-start md:justify-between p-wrapper-m lg:p-wrapper-lg xl:p-wrapper-xl">
      <div className="sticky top-s1 mb-10 lg:mb-0 text-center w-full">
        <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Omar Florez
        </h1>
        <div className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
          Frontend Developer
        </div>
        <div className="flex items-center justify-center mt-4">
          <a className="font-bold py-2 px-4 rounded inline-flex items-center mx-2" href="https://github.com/omarmfs98" target="_blank">
            <svg className="w-5 h-5 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
              <path className="fill-current" d="M13.18,11.309c-0.718,0-1.3,0.807-1.3,1.799c0,0.994,0.582,1.801,1.3,1.801s1.3-0.807,1.3-1.801
	C14.479,12.116,13.898,11.309,13.18,11.309z M17.706,6.626c0.149-0.365,0.155-2.439-0.635-4.426c0,0-1.811,0.199-4.551,2.08
	c-0.575-0.16-1.548-0.238-2.519-0.238c-0.973,0-1.945,0.078-2.52,0.238C4.74,2.399,2.929,2.2,2.929,2.2
	C2.14,4.187,2.148,6.261,2.295,6.626C1.367,7.634,0.8,8.845,0.8,10.497c0,7.186,5.963,7.301,7.467,7.301
	c0.342,0,1.018,0.002,1.734,0.002c0.715,0,1.392-0.002,1.732-0.002c1.506,0,7.467-0.115,7.467-7.301
	C19.2,8.845,18.634,7.634,17.706,6.626z M10.028,16.915H9.972c-3.771,0-6.709-0.449-6.709-4.115c0-0.879,0.31-1.693,1.047-2.369
	C5.537,9.304,7.615,9.9,9.972,9.9c0.01,0,0.02,0,0.029,0c0.01,0,0.018,0,0.027,0c2.357,0,4.436-0.596,5.664,0.531
	c0.735,0.676,1.045,1.49,1.045,2.369C16.737,16.466,13.8,16.915,10.028,16.915z M6.821,11.309c-0.718,0-1.3,0.807-1.3,1.799
	c0,0.994,0.582,1.801,1.3,1.801c0.719,0,1.301-0.807,1.301-1.801C8.122,12.116,7.54,11.309,6.821,11.309z"/>
            </svg>
          </a>
          <a className="font-bold py-2 px-4 rounded inline-flex items-center mx-2" href="https://www.linkedin.com/in/omar-florez-salgado/" target="_blank">
            <svg className="w-5 h-5 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
              <path className="fill-current" d="M1,6h4v13H1V6z M3,1C1.8,1,1,2,1,3.1C1,4.1,1.8,5,3,5c1.3,0,2-0.9,2-2C5,1.9,4.2,1,3,1z M14.6,6.2
	c-2.1,0-3.3,1.2-3.8,2h-0.1l-0.2-1.7H6.9C6.9,7.6,7,8.9,7,10.4V19h4v-7.1c0-0.4,0-0.7,0.1-1c0.3-0.7,0.8-1.6,1.9-1.6
	c1.4,0,2,1.2,2,2.8V19h4v-7.4C19,7.9,17.1,6.2,14.6,6.2z"/>
            </svg>
          </a>
          <a className="font-bold py-2 px-4 rounded inline-flex items-center mx-2" href="mailto:hello@omarflorez.me" target="_blank">
            <svg className="w-5 h-5 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
              <path className="fill-current" d="M1.574,5.286c0.488,0.262,7.248,3.894,7.5,4.029C9.326,9.45,9.652,9.514,9.98,9.514
	c0.328,0,0.654-0.064,0.906-0.199s7.012-3.767,7.5-4.029C18.875,5.023,19.337,4,18.44,4H1.521C0.624,4,1.086,5.023,1.574,5.286z
	 M18.613,7.489c-0.555,0.289-7.387,3.849-7.727,4.027s-0.578,0.199-0.906,0.199s-0.566-0.021-0.906-0.199S1.941,7.777,1.386,7.488
	C0.996,7.284,1,7.523,1,7.707S1,15,1,15c0,0.42,0.566,1,1,1h16c0.434,0,1-0.58,1-1c0,0,0-7.108,0-7.292S19.004,7.285,18.613,7.489z"/>
            </svg>
          </a>
          <a className="font-bold py-2 px-4 rounded inline-flex items-center mx-2" href="https://cv.omarflorez.me">
            <svg className="w-5 h-5 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
              <path className="fill-current" d="M14,5h-4v2h4V5z M14,8h-4v1h4V8z M9,5H6v4h3V5z M9,11h5v-1H9V11z M12,13h2v-1h-2V13z M14,14H6v1h8V14z
    M11,12H6v1h5V12z M8,10H6v1h2V10z M17,1H3C2.447,1,2,1.447,2,2v16c0,0.552,0.447,1,1,1h14c0.553,0,1-0.448,1-1V2
    C18,1.448,17.553,1,17,1z M16,17H4V3h12V17z"/>
            </svg>
          </a>
        </div>
      </div>
      <ul className="skills max-w-skill">
        <li className="sticky top-s1">
          <div className="p-sk-1">
            <div className="bg-white py-4 px-4 lg:py-16 lg:px-8 min-h-skill shadow-skill rounded-lg">
              <div className="skillHeader mb-4 lg:mb-10">
                <div className="text-4xl">👋</div>
              </div>
              <h2 className="font-bold text-2xl mb-4">Acerca de mi</h2>
              <div className="text-lg text-gray-600">
                <p>Hola, me llamo Omar, tengo {age()} años, soy Desarrollador Frontend 👨‍💻, actualmente estoy estudiando Ingeniería de Sistemas en la Universidad de Córdoba, nací en Bogotá, Colombia pero me crié en Planeta Rica, Córdoba.</p>
              </div>
            </div>
          </div>
        </li>
        <li className="sticky top-s1">
          <div className="p-sk-2">
            <div className="bg-white py-4 px-4 lg:py-16 lg:px-8 min-h-skill shadow-skill rounded-lg">
              <div className="skillHeader mb-4 lg:mb-10">
                <div className="text-4xl">🔥</div>
              </div>
              <h2 className="font-bold text-2xl mb-4">Skills</h2>
              <div className="text-lg text-gray-600">
                <p>He trabajado con diversas tecnologías para ambitos como Backend, Frontend, Cloud Computing, entre otros:</p>
                <div className="mt-6 flex flex-wrap items-center justify-around">
                  {skills.map((skill, i) =>
                    <div className={`w-${skill.w} h-8 mx-3 my-2 skill-icon bg-center bg-contain`} key={i}
                      style={{
                        backgroundImage: `url(${skill.icon})`
                      }}
                      title={skill.name}>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="sticky top-s1">
          <div className="p-sk-3">
            <div className="bg-white py-4 px-4 lg:py-16 lg:px-8 min-h-skill shadow-skill rounded-lg">
              <div className="skillHeader mb-4 lg:mb-10">
                <div className="text-4xl">✍</div>
              </div>
              <h2 className="font-bold text-2xl mb-4">Blog</h2>
              <div className="text-lg text-gray-600">
                <div className="mt-6 flex flex-wrap items-center justify-around">
                  {heroPost && (
                    <HeroPost
                      title={heroPost.title}
                      coverImage={heroPost.coverImage}
                      date={heroPost.date}
                      author={heroPost.author}
                      slug={heroPost.slug}
                      excerpt={heroPost.excerpt}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="sticky top-s1">
          <div className="p-sk-4">
            <div className="bg-white py-4 px-4 lg:py-16 lg:px-8 min-h-skill shadow-skill rounded-lg">
              <div className="skillHeader mb-4 lg:mb-10">
                <div className="text-4xl">⚡</div>
              </div>
              <h2 className="font-bold text-2xl mb-4">Contacto</h2>
              <div className="text-lg text-gray-600">
                <p className="mb-3">Si deseas contactarme, por favor llena el formulario:</p>
                <form className="w-full max-w-lg">
                  <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Nombre
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Omar" />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Correo
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" />
                      <p className="text-gray-600 text-xs italic">Respondere lo mas pronto posible ⚡</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="w-full shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Enviar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}