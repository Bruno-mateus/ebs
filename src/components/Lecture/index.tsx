import {
  Appointment,
  LectureMain,
  AboutLecture,
  DateEvent,
  Author,
} from './styles'

export function Lecture() {
  return (
    <LectureMain>
      <Appointment>
        <DateEvent></DateEvent>
        <AboutLecture>
          <Author>
            <img
              src="https://feiraebs.com.br/wp-content/uploads/2022/05/marcello-150x150.jpeg"
              alt=""
            />
            <strong>Marcello Baranowsky</strong>
            <span>CEO Grupo EBS</span>
          </Author>
          <h2>ABERTURA CONGRESSO MICE BRASIL 2022</h2>
          <p></p>
        </AboutLecture>
      </Appointment>
    </LectureMain>
  )
}
