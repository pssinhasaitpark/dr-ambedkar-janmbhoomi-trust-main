import React from "react";
import {
  museum,
  museum2,
  museum1,
  museum3,
  museum4,
  museum5,
  museum6,
  museum7,
} from "../../../assests";
import { Link } from "react-router-dom";
const Museum = () => {
  return (
    <div className="all-section-width">
      <div className="img-banner  ">
        <div className="row mt-5 m-0">
          <div className="col-sm-6 p-0 m-0">
            <img src={museum} alt="birth-image" className="museum-image" />
          </div>
          <div className="col-sm-6 p-0 m-0">
            <img src={museum2} alt="birth-image" className=".museum-image" />
          </div>
        </div>
      </div>
      <div className="mt-5 mb-4">
        <h2 className="text-uppercase fs-1  ">Museum & Exhibits</h2>
        <p className="mb-3 fs-5">Dr. Bhimrao Ambedkar</p>
        <p className=" fw-medium  mt-2 paragraph-birth ">
          Dr. B.R. Ambedkar's birthplace in Mhow, Madhya Pradesh, known as Bhim
          Janmabhoomi, has been transformed into a significant memorial honoring
          his legacy. The memorial, inaugurated on April 14, 2008, features
          architecture reminiscent of a Buddhist stupa. Inside, visitors can
          explore various exhibits that provide insights into Dr. Ambedkar's
          life and contributions. These include portraits depicting key moments
          from his life and statues of Dr. Ambedkar, his wife Ramabai, and
          Gautama Buddha.
        </p>
      </div>
      <div className="border border-2">
        <div className="mt-4 mb-4 ms-4">
          <p className="mb-3 fs-4 fw-medium">
            Information about any museum or exhibits at the birthplace.
          </p>
          <p className="  mt-1 fs-5 lh-base ">
            Dr. B.R. Ambedkar's birthplace in Mhow, Madhya Pradesh, known as
            Bhim Janmabhoomi, has been transformed into a significant memorial
            honoring his legacy. The memorial, inaugurated on April 14, 2008,
            features architecture reminiscent of a Buddhist stupa. Inside,
            visitors can explore various exhibits that provide insights into Dr.
            Ambedkar's life and contributions. These include portraits depicting
            key moments from his life and statues of Dr. Ambedkar, his wife
            Ramabai, and Gautama Buddha. The site has become a place of
            pilgrimage, especially during Ambedkar Jayanti celebrations on April
            14th each year.
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
      <div className="border border-2 mt-5">
        <div className="mt-4 mb-4 ms-4">
          <p className="mb-3 fs-4 fw-medium">
            Collections of artifacts, photos, books, and personal items of Dr.
            Ambedkar.
          </p>
          <ul className="m-0">
            <li className="fs-5 lh-base me-2 ">
              Personal Belongings: Items presented to Dr. Ambedkar during his
              travels, such as a pen case, conch shell, chinaware, a kettle, cup
              and saucer, lamp, Buddha statue, and ashtray. These artifacts
              reflect his global interactions and the respect he garnered
              internationally.
            </li>
            <li className="fs-5 lh-base me-2 ">
              Resting Chair: The chair in which Dr. Ambedkar sat when he handed
              over the Constitution of India to the then President, Dr. Rajendra
              Prasad. This piece holds significant historical value, symbolizing
              his pivotal role in shaping modern India.
            </li>
            <li className="fs-5 lh-base me-2 ">
              Statue and Workspace: A statue of Dr. Ambedkar alongside the chair
              and table he used while drafting the Indian Constitution, offering
              visitors a tangible connection to this monumental task.
            </li>
          </ul>
        </div>
        <div className="row mt-4 m-0 ms-4 me-4 mb-5">
          <div className="col-sm-4 p-0">
            <img src={museum3} alt="birth-image" className="w-100" />
          </div>
          <div className="col-sm-4 p-0">
            <img src={museum4} alt="birth-image" className="w-100" />
          </div>
          <div className="col-sm-4 p-0">
            <img src={museum5} alt="birth-image" className="w-100" />
          </div>
        </div>
      </div>
      <div className="border border-2 mt-5">
        <div className="mt-4 mb-4 ms-4">
          <p className="mb-3 fs-4 fw-medium">
            Dr. B.R. Ambedkar's life and work have inspired a wealth of
            educational materials and learning resources across various formats.
            Here are some notable resources:
          </p>

          <ol className="fs-5">
            <li> Graphic Novel:</li>
            <ul>
              <li className="fs-5 lh-base  ">
                Bhimayana: Incidents in the Life of Bhimrao Ramji Ambedkar: This
                graphic novel offers a visually engaging portrayal of Dr.
                Ambedkar's experiences with caste discrimination and his fight
                for social justice. It's suitable for both adults and younger
                readers seeking an accessible introduction to his life.
              </li>
              <li className="fs-5 lh-base  ">
              <Link className="text-dark">en.wikipedia.org</Link>
              </li>
            </ul>
          </ol>

          <ol className="fs-5">
            <li> Scholarly Articles and Papers:</li>
            <ul>
              <li className="fs-5 lh-base  ">
                An Overview of Dr. B.R. Ambedkar's Educational Philosophy and
                Vision": This paper delves into Dr. Ambedkar's contributions to
                education and their relevance in contemporary Indian society.
              </li>
              <li className="fs-5 lh-base  ">
              <Link className="text-dark">gapbodhitaru.org</Link>
              </li>
              <li className="fs-5 lh-base  ">
                Dr. B.R. Ambedkar's Educational Thoughts for Modern India": This
                research examines Dr. Ambedkar's educational philosophies and
                their application in modern times.
              </li>
              <li className="fs-5 lh-base  ">
              <Link className="text-dark">researchgate.net</Link>
              </li>
            </ul>
          </ol>
          <ol className="fs-5">
            <li> Open Educational Resources (OER):</li>
            <ul>
              <li className="fs-5 lh-base  ">
                Dr. B.R. Ambedkar University Delhi: The university provides a
                compilation of open educational resources, including links to
                platforms like MIT OpenCourseWare and OpenStax, which offer free
                course materials that can complement studies on social sciences
                and humanities.
              </li>
              <li className="fs-5 lh-base  ">
              <Link className="text-dark">aud.delhi.gov.in</Link>
              </li>
              <li className="fs-5 lh-base  ">
                Dr. B.R. Ambedkar Open University Online Learning Portal: This
                platform offers a range of academic resources, including course
                materials, assignments, and audio/video lessons, facilitating
                distance learning opportunities.
              </li>
              <li className="fs-5 lh-base  ">
                <Link className="text-dark">lms.braou.ac.in</Link>
              </li>
            </ul>
          </ol>
          <ol className="fs-5">
            <li> Multimedia Resources:</li>
            <ul>
              <li className="fs-5 lh-base  ">
                Dr. Babasaheb Ambedkar Coloring Page: For younger audiences,
                this resource provides an engaging way to learn about Dr.
                Ambedkar's legacy through ar
              </li>
            </ul>
          </ol>
          <ol className="fs-5">
            <li> Graphic Novel:</li>
            <ul>
              <li className="fs-5 lh-base  ">
                Bhimayana: Incidents in the Life of Bhimrao Ramji Ambedkar: This
                graphic novel offers a visually engaging portrayal of Dr.
                Ambedkar's experiences with caste discrimination and his fight
                for social justice. It's suitable for both adults and younger
                readers seeking an accessible introduction to his life.
              </li>
              <li className="fs-5 lh-base  ">
              <Link className="text-dark">en.wikipedia.org</Link>
              </li>
            </ul>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Museum;
