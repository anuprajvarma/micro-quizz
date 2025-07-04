import QuizzCategory from "./component/QuizzCategory";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[70rem] flex flex-col justify-center items-center py-[4rem]">
        <div className="flex flex-col gap-[6rem]">
          <p className="text-white text-5xl font-semibold text-center">
            Quizz Catagories
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <QuizzCategory imageLink="/math.avif" category="math" />
            <QuizzCategory imageLink="/science.avif" category="science" />
            <QuizzCategory imageLink="/history.avif" category="history" />
            <QuizzCategory
              imageLink="/programming.avif"
              category="programming"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
