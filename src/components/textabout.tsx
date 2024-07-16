import { FadeText } from "../components/ui/FadeText";

export async function FadeTextDemo() {
  return (
    <div className="flex flex-col space-y-8 text-center">
      <FadeText
        className="text-wrap text-black dark:text-white"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.8 } },
        }}
        text="Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future."
      />
    </div>
  );
}