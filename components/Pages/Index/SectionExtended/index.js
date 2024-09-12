import SocietySection from "./SocietySection";
import MovieSection from "./MovieSection";
import FilmSection from "./FilmSection";
import CartoonSection from "./CartoonSection";
import BookSection from "./BookSection";

export default function SectionExtended({ setDialogData, setIsDialogOpen }) {
  return (
    <div>
      <SocietySection />
      <MovieSection
        setDialogData={setDialogData}
        setIsDialogOpen={setIsDialogOpen}
      />
      <FilmSection
        setDialogData={setDialogData}
        setIsDialogOpen={setIsDialogOpen}
      />
      <CartoonSection
        setDialogData={setDialogData}
        setIsDialogOpen={setIsDialogOpen}
      />
      <BookSection
        setDialogData={setDialogData}
        setIsDialogOpen={setIsDialogOpen}
      />
    </div>
  );
}
