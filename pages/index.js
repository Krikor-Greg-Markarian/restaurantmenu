import cn from "classnames";

export default function Home() {
  return (
    <div>
      <script src='script.js'></script>
      <section className={cn("pt-12")}>
        <div className={cn("grid grid-cols-4")}>
          <div className={cn("col-span-3")}>
            <div className={cn("border-2 border-black p-4")}>
              <div className={cn("flex")}>
                <div className={cn("flex-shrink")}>
                  <img
                    className={cn("h-40 w-60")}
                    src='https://cdn.pixabay.com/photo/2021/12/07/14/00/river-6853339__480.jpg'
                    alt=''
                  />
                </div>
                <div className={cn("flex-shrink")}>
                  <div>title:</div>
                  <div className={cn("pt-28")}>description:</div>
                </div>
                <div className={cn("flex-shrink")}>
                  <div>price:</div>
                </div>
              </div>
            </div>
          </div>
          <button className={cn("border-2 border-black")}>3D</button>
        </div>
      </section>
    </div>
  );
}
