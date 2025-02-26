import React from "react";
import {
  achievementimg,
  achievementimg1,
  achievementimg2,
} from "../../../assests";
import "./Achievment.css";
const AchievementPage = () => {
  return (
    <div className="all-section-width ">
      <div className="img-banner  ">
        <div className="row m-0">
          <div className="col-sm-4 p-0 m-0">
            <img
              src={achievementimg2}
              alt="achievement-image"
              className="museum-image"
            />
          </div>
          <div className="col-sm-4 p-0 m-0">
            <img
              src={achievementimg1}
              alt="achievement-image"
              className="museum-image"
            />
          </div>
          <div className="col-sm-4 p-0 m-0">
            <img
              src={achievementimg}
              alt="achievement-image"
              className="museum-image"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 mb-4">
        <h2 className="text-uppercase fs-1 p-0 m-0 ">Achievements</h2>
        <p className="mb-3 fs-5 ">Dr. Bhimrao Ambedkar</p>
        <p className=" fw-medium  mt-4 paragraph-birth ">
          <span className="fs-3">Achievements : </span> Dr. B.R. Ambedkar, one
          of India's most transformative leaders, made remarkable contributions
          in the fields of law, politics, and social reform. Here are some of
          his key achievements:
        </p>
      </div>

      <div className="card rounded-0 ">
        <div className="ms-3 mt-4 m-0">
          <p className="fs-5 p-0 m-0 mb-1 fw-medium">
            1. Education and Academic Excellence
          </p>
          <ol className="m-0 ">
            <ul className="card-child-lists fs-5 ms-2 p-0 m-0">
              <li>
                First Indian to earn a Doctorate in Economics from Columbia
                University (1916).
              </li>
              <li>DSc from the London School of Economics (1921).</li>
              <li>
                Ambedkar was a brilliant scholar and one of the most educated
                individuals of his time, overcoming immense obstacles due to his
                caste to attain degrees from prestigious institutions.
              </li>
            </ul>
          </ol>
        </div>

        <div className="ms-3">
          <p className="fs-5 p-0 m-0 mb-1 fw-medium">
            2. Champion of Dalit Rights
          </p>
          <ol className="m-0 ">
            <ul className="card-child-lists fs-5 ms-2 p-0 m-0">
              <li>
                Fighter Against Caste Discrimination: Throughout his life, Dr.
                Ambedkar fought against the oppressive caste system. He
                emphasized the need for social equality and advocated for the
                rights of Dalits (formerly known as untouchables).
              </li>

              <li>
                Poona Pact (1932): Dr. Ambedkar negotiated the Poona Pact with
                Mahatma Gandhi to secure separate electorates for Dalits,
                leading to significant political and social empowerment for the
                community.
              </li>
            </ul>
          </ol>
        </div>

        <div className="ms-3">
          <p className="fs-5 p-0 m-0  fw-medium">
            3. Architect of the Indian Constitution
          </p>
          <ol className="m-0">
            <ul className="card-child-lists fs-5 ms-2 p-0 m-0">
              <li>
                Chairman of the Drafting Committee (1947-1950): Dr. Ambedkar's
                most celebrated achievement was his role in drafting India's
                Constitution. As the chairman of the Drafting Committee, he
                played a crucial role in formulating a Constitution that
                guaranteed equality, fundamental rights, and the abolition of
                untouchability (Article 17).
              </li>
              <li>
                Protector of Rights: He ensured that the Constitution
                safeguarded the rights of Dalits, women, and other marginalized
                communities.
              </li>
            </ul>
          </ol>
        </div>
        <div className="ms-3">
          <p className="fs-5 p-0 m-0  fw-medium">
            4. Rounder of the Dalit Buddhist Movement
          </p>
          <ol className="m-0">
            <ul className="card-child-lists fs-5 ms-2 p-0 m-0">
              <li>
                Conversion to Buddhism (1956): Dr. Ambedkar converted to
                Buddhism with millions of followers, rejecting the caste system
                of Hinduism. His conversion was a protest against untouchability
                and was a turning point in the spiritual and social history of
                Dalits in India.
              </li>
              <li>
                Navayana Buddhism: Dr. Ambedkar developed Navayana Buddhism, a
                unique form of Buddhism that was open to people from all
                backgrounds, particularly Dalits, as a means of social and
                spiritual liberation.
              </li>
            </ul>
          </ol>
        </div>
        <div className="ms-3">
          <p className="fs-5 p-0 m-0  fw-medium">Social Reforms and Advocacy</p>
          <ol className="m-0">
            <li>
              <ul className="card-child-lists fs-5 ms-2 p-0 m-0">
                <li>
                  Hindu Code Bill (1947): As India's first Law Minister, Dr.
                  Ambedkar drafted the Hindu Code Bill, which sought to give
                  women equal rights in marriage, divorce, and inheritance.
                  Although the bill was not passed during his tenure, it laid
                  the foundation for future reforms in family law.
                </li>
                <li>
                  Advocate for Women's Rights: Ambedkar was one of the first to
                  fight for women's education and property rights. He strongly
                  advocated for equality between men and women.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="ms-3">
          <p className="fs-5 p-0 m-0  fw-medium">
            Legal and Political Leadership
          </p>
          <ol className="m-0">
            <ul className="card-child-lists fs-5 ms-2 p-0 m-0">
              <li>
                First Law Minister of Independent India: After India gained
                independence in 1947, Dr. Ambedkar became the country's first
                Law Minister and played a significant role in the
                post-independence administration.
              </li>
              <li>
                Founding the Republican Party of India (1956): Dr. Ambedkar
                founded the Republican Party of India, advocating for Dalit
                rights and social equality, influencing political discourse for
                decades.
              </li>
            </ul>
          </ol>
        </div>
        <div className="ms-3">
          <p className="fs-5 p-0 m-0  fw-medium">Economic Contributions</p>
          <ol className="m-0">
            <ul className="card-child-lists fs-5 ms-2 p-0 m-0">
              <li>
                Dr. Ambedkar advocated for the economic upliftment of Dalits and
                other backward classes, pushing for economic policies that
                supported social justice. He emphasized education and employment
                as essential tools for empowerment.
              </li>
              <li>
                Labour Rights: He was also a strong proponent of workers'
                rights, advocating for better labor laws and the establishment
                of minimum wages for the working class.
              </li>
            </ul>
          </ol>
        </div>
        <div className="ms-3">
          <p className="fs-5 p-0 m-0  fw-medium">
            Fighting for Educational Reforms
          </p>
          <ol className="m-0">
            <ul className="card-child-lists fs-5 ms-2 p-0 m-0">
              <li>
                Dr. Ambedkar believed education was the key to breaking the
                shackles of caste-based discrimination. He worked tirelessly to
                promote the right to education for marginalized communities.
              </li>
              <li>
                He established several educational institutions, including the
                Dr. Ambedkar Institute of Social and Economic Studies and the
                National Conference of Dalit and Backward Classes to promote
                education and awareness.
              </li>
            </ul>
          </ol>
        </div>
        <div className="ms-3">
          <p className="fs-5 p-0 m-0  fw-medium">
            Breaking Barriers in Public Life
          </p>
          <ol className="m-0">
            <ul className="card-child-lists fs-5 ms-2 p-0 m-0">
              <li>
                First Scheduled Caste to Graduate from Elphinstone College,
                Mumbai (1912): As a member of the oppressed community, Dr.
                Ambedkar broke barriers in the academic world and became the
                first Dalit to complete higher education at an elite
                institution.
              </li>
              <li>
                Despite being born into a lower caste, Dr. Ambedkar managed to
                navigate the deeply entrenched caste hierarchy and became a
                leading figure in Indian politics and social reform.
              </li>
            </ul>
          </ol>
        </div>
        <div className="ms-3">
          <p className="fs-5 p-0 m-0  fw-medium">Global Impact and Legacy</p>
          <ol className="m-0">
            <ul className="card-child-lists fs-5 ms-2 p-0 m-0">
              <li>
                Dr. Ambedkar's influence extended far beyond India, as his fight
                for human rights, dignity, and equality became a global symbol
                of resistance against oppression.
              </li>
              <li>
                His teachings on constitutionalism and social justice continue
                to inspire movements for equality across the world.
              </li>
            </ul>
          </ol>
        </div>
        <p className="fs-5 p-0 ms-2 m-0 mb-3 mt-2">
          Dr. Ambedkar's life was marked by struggles against social injustice
          and a relentless fight for equality and empowerment for marginalized
          communities. His intellectual, social, and political contributions
          left an indelible mark on India and the world.
        </p>
      </div>
    </div>
  );
};

export default AchievementPage;
