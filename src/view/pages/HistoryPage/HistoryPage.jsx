import React from 'react'
import { award1 } from "../../../assests/index";
import {
  museum1,
  museum6,
  museum7,
} from "../../../assests";
const HistoryPage = () => {
  return (
    <div className="all-section-width ">
      <div className="img-banner ">
        <img src={award1} alt="visitor-image" className="mb-2 all-image" />
      </div>
      <div className="mt-5 mb-4">
        <h2 className="text-uppercase fs-1  ">History of Janmabhoom</h2>
        <p className="mb-3 fs-5">Dr. Bhimrao Ambedkar</p>
        <p className=" fw-normal  mt-2 paragraph-birth ">
          <span className="fs-3">
            History of Dr. B.R. Ambedkar’s Janmabhoomi (Birthplace){" "}
          </span>{" "}
          Early Life and Education (1891-1923) Dr. Bhimrao Ramji Ambedkar was
          born on April 14, 1891, in Mhow, Madhya Pradesh, into a Dalit family
          facing social discrimination. Despite these hardships, he excelled in
          academics.
        </p>
      </div>

      <div className="border border-2 mt-5">
        <div className="mt-3 mb-4">
          <p className="m-0 fs-4 ms-4 fw-medium">
            Early Life & Education (1891-1923)
          </p>
          <p className="fs-5 ms-4 ">
            Born on April 14, 1891, in Mhow, Madhya Pradesh, Dr. Ambedkar faced caste discrimination but excelled academically. He earned degrees from Bombay University, Columbia University (USA), and the London School of Economics, specializing in law and economics.
          </p>
        </div>
        <div className="">
          <p className="fs-5 ms-4 m-0 fw-medium ">
            Fight for Social Justice (1924-1947)
          </p>

          <ul className='p-0 m-0 fs-5 ms-5 px-2'>
            <li>
              1924: Founded Bahishkrit Hitakarini Sabha for Dalit empowerment.
            </li>
            <li>1927: Led the Mahad Satyagraha for Dalit water rights.

            </li>
            <li>1932: Negotiated the Poona Pact to secure Dalit electoral rights.</li>
            <li>1942: Established the Scheduled Castes Federation.</li>
          </ul>



          <p className="fs-5 ms-4 m-0 fw-medium ">
            Architect of the Indian Constitution (1947-1950)
          </p>
          <p className="fs-5 ms-4  m-0">
            As Chairman of the Drafting Committee, he ensured equality, fundamental rights, and abolition of untouchability in the Indian Constitution. He introduced reservations in education and jobs and advocated women’s rights.
          </p>

          <p className="fs-5 ms-4 m-0 fw-medium ">
            Later Life & Buddhism (1951-1956)
          </p>
          <p className="fs-5 ms-4  m-0">
            Disillusioned by the caste system, he embraced Buddhism on October 14, 1956, influencing millions. His book "The Buddha and His Dhamma" remains a key Buddhist text.
          </p>

          <p className="fs-5 ms-4 m-0 fw-medium ">
            Legacy & Recognition
          </p>
          <p className="fs-5 ms-4  m-0">
            Dr. Ambedkar passed away on December 6, 1956. He was posthumously awarded the Bharat Ratna (1990). His ideas continue to inspire movements for equality and social justice.
          </p>


        </div>
        <div className="row mt-4 m-0 ms-4 me-4 mb-5">
          <div className="col-sm-4 p-0">
            <img src={museum1} alt="birth-image" className="w-100" />
          </div>
          <div className="col-sm-4 p-0">
            <img src={museum6} alt="birth-image" className="w-100" />
          </div>
          <div className="col-sm-4 p-0">
            <img src={museum7} alt="birth-image" className="w-100" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default HistoryPage